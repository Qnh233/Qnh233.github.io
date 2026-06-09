---
permalink: /
title: "关于我"
layout: single
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi，我是 **Keqiang Xu** 👋

> 码头搞薯条

这里是我的个人空间，记录关于 AI Agent、LLM、多智能体系统、计算机视觉等领域的学习、研究与思考。

---

### 📝 最新文章

{% for post in site.posts limit:3 %}
- **{{ post.date | date: '%m-%d' }}** [{{ post.title }}]({{ post.url }}){% if post.tags %} — `{{ post.tags | join: '` `' }}`{% endif %}
{% endfor %}

[📂 全部文章](/year-archive/) · [🏷️ 标签分类](/tags/)

### 🔬 研究兴趣

- **AI Agent** — 自主智能体架构、规划与决策
- **Multi-Agent Systems** — 多智能体协作与通信
- **LLM** — 大语言模型能力与应用
- **Computer Vision** — 计算机视觉与多模态

### 📬 联系我

- Email: haoxu1127@gmail.com
- GitHub: [qnh233](https://github.com/qnh233)
- 知乎: [xu-hao-30-77](https://www.zhihu.com/people/xu-hao-30-77)
- Bilibili: [个人空间](https://space.bilibili.com/15993951?spm_id_from=333.1007.0.0)
