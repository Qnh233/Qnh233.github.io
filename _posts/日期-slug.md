{
  "id": "cacb3845-f30b-4f13-a327-47cd02586494",
  "agentId": "main",
  "name": "Blog 同步 (Feishu → GitHub)",
  "description": "每周日 12:00 从飞书 Blog wiki 同步到 qnh233.github.io",
  "enabled": true,
  "createdAtMs": 1780892425354,
  "updatedAtMs": 1780892425354,
  "schedule": {
    "kind": "cron",
    "expr": "0 12 * * 0",
    "tz": "Asia/Shanghai"
  },
  "sessionTarget": "isolated",
  "wakeMode": "now",
  "payload": {
    "kind": "agentTurn",
    "message": "=== Blog 同步任务 ===\n\n## 1. 读取配置\n用 feishu_doc.read 读取个人主页配置 (doc_token: DXMZd4CQOo5ITNx7IsKcIioOnpc)\n→ 通过 exec 管道给 python3 /data2/scripts/sync.py parse-config\n→ 生成 _config.yml 写入 /data2/qnh233.github.io/_config.yml\n\n## 2. 列出 Blog 子文档\n用 feishu_wiki.nodes (space_id: 7527936337649549315, parent_node_token: EDkowZLqbirRLLkLEKCcwYlinNg)\n获取所有 blog 子文档列表。\n\n## 3. 增量同步每篇 Blog\n对每个子文档:\n  a. 用 feishu_doc.read 读取内容\n  b. echo \"$content\" | python3 /data2/scripts/sync.py parse-blog-meta → 获取元数据(标签/日期)\n  c. 如果元数据里没有标签，AI 根据内容自动分类（可选标签: Agent, LLM, CV, 项目, 学习笔记, 复盘, 评估, 架构）\n  d. 用 python3 /data2/scripts/sync.py state blogs 检查是否已同步\n  e. 如果是新文章或已更新:\n     echo \"$content\" | python3 /data2/scripts/sync.py make-blog-post \"标题\" \"日期\" \\[\"tag1\",\"tag2\"]'",
    "timeoutSeconds": 420
  },
  "delivery": {
    "mode": "announce",
    "channel": "feishu",
    "to": "user:ou_8ab6b3ed589bf58b990f058ec3eb3ba9"
  },
  "state": {
    "nextRunAtMs": 1781409600000
  }
}
