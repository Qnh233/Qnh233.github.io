#!/usr/bin/env ruby
# frozen_string_literal: true

# 让 _posts 任意子目录下的 md 文件也被 Jekyll 识别为 post。
# Jekyll 3+ 原生 PostReader 只读 _posts 顶层的 *.md，子目录被静默忽略。
# 本插件递归扫 _posts/**/*.md，补回这些文件：
#   - 无日期前缀 + frontmatter date  -> 用 frontmatter date 作发布日期
#   - 有日期前缀 + frontmatter date  -> 用文件名日期（对齐原生规则）
#   - frontmatter 无 date            -> 跳过（保护 build）
#   - slug 取文件名去扩展名，permalink 走 /posts/:title/
#   - 与原生 reader 已读入的文件去重，避免重复

module DatelessPosts
  class Generator < Jekyll::Generator
    safe true
    priority :high

    DATED_PREFIX = /\A(\d{4}-\d{2}-\d{2})-(.+)/i

    def generate(site)
      posts = site.collections["posts"]
      return unless posts

      base_dir = File.join(site.source, "_posts")
      return unless File.directory?(base_dir)

      existing = posts.docs.map(&:path)
      skip_dirs = [File.join(base_dir, "Template"), File.join(base_dir, "Templates")]

      Dir.glob(File.join(base_dir, "**", "*.md")).each do |full|
        base = File.basename(full)
        next if existing.include?(full)
        next if base.start_with?("_", ".")
        next if skip_dirs.any? { |d| full.start_with?(d + File::SEPARATOR) }
        next if full =~ %r{/\.{1,2}\.md\z}

        begin
          doc = Jekyll::Document.new(full, site: site, collection: posts)
          doc.read
          date = doc.data["date"]
          next if date.nil?

          if base =~ DATED_PREFIX
            doc.data["slug"] ||= $2
            doc.data["date"] ||= Jekyll::Utils.parse_date($1, "Invalid date in filename")
          else
            doc.data["slug"] ||= File.basename(base, ".md")
          end

          posts.docs << doc
          Jekyll.logger.info "DatelessPosts:", "added #{full.sub(site.source + '/', '')} (date=#{date})"
        rescue => e
          Jekyll.logger.warn "DatelessPosts:", "failed #{full}: #{e.message}"
        end
      end
    end
  end
end
