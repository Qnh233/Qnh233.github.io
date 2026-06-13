---
title: "Claude Blog 追踪"
permalink: /claude-blog/
layout: single
author_profile: true
toc: true
toc_sticky: true
---

Anthropic 官方博客 [claude.com/blog](https://claude.com/blog) 文章追踪。按发布日期降序排列，最新文章在最上方。

> 首次同步：2026-05-10 | 共 57 篇 | 每日自动更新

---

## 2026年6月

### 1. The evolution of agentic surfaces: building with Claude Managed Agents
- **日期**：2026-06-10
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/building-with-claude-managed-agents)

Anthropic 应用 AI 团队阐述 Claude Managed Agents 如何将「大脑」（模型推理）与「双手」（代码执行沙箱）解耦——凭证隔离在 Vaults 中、首 token 延迟中位数降低 60%、持久化会话支持断点续跑与可观测性。涵盖 Notion（12 小时工作压缩至 20 分钟）、Rakuten、Sentry、Asana、Atlassian 等生产案例，以及 Dreaming 后台记忆优化、自托管沙箱和 MCP 隧道等最新能力总结。

### 2. New in Claude Managed Agents: run agents on a schedule and store environment variables in vaults
- **日期**：2026-06-09
- **分类**：Product announcements
- **🔗**：[原文](https://claude.com/blog/whats-new-in-claude-managed-agents)

Managed Agents 现在支持定时调度（cron schedule）和环境变量加密存储（vaults）。定时部署可用于夜间数据同步、周度合规扫描或每日摘要，无需自行构建或托管调度器；vaults 扩展支持环境变量，使 CLI 和其他工具可进行认证请求。Rakuten、Actively AI、Ando 等客户已在生产中使用。目前为公开测试版。

### 3. Building intelligent apps for Apple platforms with Claude in the Foundation Models framework
- **日期**：2026-06-08
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog)

Anthropic 宣布 Claude 集成 Apple Foundation Models 框架，开发者可在 Apple 平台上使用 Claude 构建智能应用。

### 4. Observability for developers building connectors
- **日期**：2026-06-08
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/observability-for-developers-building-connectors)

Connector 开发者现可监控其连接器在 Claude 全系产品中的表现。已发布到目录的连接器获得仪表盘，可追踪活跃用户数、工具调用总量、目录排名、健康评分、错误率和延迟，支持按工具拆解错误。MCP 服务器提交到目录的操作现可直接在 Claude 应用内完成。已在公开测试版中可用。

### 5. How one Anthropic seller rebuilt his team's workflows with Claude Code
- **日期**：2026-06-05
- **分类**：Claude Code / Enterprise AI
- **🔗**：[原文](https://claude.com/blog/how-anthropic-uses-claude-gtm-engineering)

Anthropic GTM 产品经理 Jared Sires 从未写过代码的客户经理转型为用 Claude Code 构建销售工具链。核心工具 CLAFTS（Claude Drafts）约 4,300 行全由 Claude Code 生成，内嵌 Gmail 自动写客户邮件草稿，匹配个人写作风格，按关系调整语气。每天节省 10-15 小时。团队级扩展——Sales Plugin（Cowork 插件）覆盖 Salesforce、Gong、Google Calendar 等系统。上线数月后约 80% 销售团队在使用。

### 6. The Claude Cowork product guide
- **日期**：2026-06-05
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/the-claude-cowork-product-guide)

Anthropic 发布 Claude Cowork 产品指南（可下载 PDF）。Claude Cowork 定位为知识工作代理——能读写本地文件、跨 Slack 和 Google Drive 执行多步骤任务、产出实际交付物。差异化在于"你描述目标和期望产出，Claude 规划步骤并执行"。

### 7. Best practices for getting started with Claude Cowork
- **日期**：2026-06-03
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/best-practices-for-getting-started-with-claude-cowork)

Anthropic 增长营销经理撰写的 Claude Cowork 实战指南（90% 工作已在 Cowork 完成）。Chat/Cowork/Code 区分框架：Chat 适合问答头脑风暴，Cowork 适合产生可交付成果（多步骤/多文件/多应用委托性任务），Code 是开发者构建空间。Cowork 任务的五特征：多输入、有输出产物、会重复执行、知道"好"长什么样、中间步骤无聊。

### 8. Running an AI-native engineering org
- **日期**：2026-06-03
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/running-an-ai-native-engineering-org)

Claude Code 团队工程负责人撰写。核心论点：写代码/测试/重构已不再是瓶颈——验证、代码审查和安全取代它们。四个被重写的规范：JIT 规划替代六个月路线图、先问 Claude 再问人、Claude 处理风格/bug/测试代码审查、角色模糊化。三大铁律：全员吃狗粮、组织扁平、废弃无效流程。

### 9. Lessons from building Claude Code: How we use skills
- **日期**：2026-06-03
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/lessons-from-building-claude-code-how-we-use-skills)

Claude Code 团队梳理内部 Skills 体系，归纳为九大类别：库/API 参考、产品验证、数据获取与分析、业务流程与团队自动化、代码脚手架与模板、代码质量与审查、CI/CD 与部署、运维 Runbook、基础设施运维。Skill 构建三技巧：不要重复常识、Gotchas 部分信号密度最高、好 Skill 干净落入一个类别。

### 10. How Anthropic enables self-service data analytics with Claude
- **日期**：2026-06-03
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/how-anthropic-enables-self-service-data-analytics-with-claude)

Anthropic 内部 95% 商业分析查询已由 Claude 自动化。核心论点：分析准确率是上下文和验证问题，不是代码生成问题。三大失败模式：概念→实体歧义、数据陈旧、检索失败。智能数据分析栈：数据基础层（canonical 单一真相源数据集）→ 维护验证层（持续维护防腐化）→ Skills 层（确保 agent 找到正确答案）。

### 11. A harness for every task: dynamic workflows in Claude Code
- **日期**：2026-06-02
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code)

动态工作流深度实践指南。五种编排模式：(1) 分类-路由、(2) 扇出-收敛、(3) 对抗验证、(4) 生成-过滤、(5) 锦标赛。为何需要动态工作流：单个上下文窗口长期运行会出现代理惰性、自我偏好偏差、目标漂移三种失败模式。

---

## 2026年5月

### 12. Introducing dynamic workflows in Claude Code
- **日期**：2026-05-28
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)

Claude Code 推出动态工作流功能，在单个会话中调度数十到数百个并行子代理。标杆案例：Jarred Sumner 使用动态工作流在 11 天内将 Bun 从 Zig 移植到 Rust（约 75 万行代码，99.8% 测试通过）。

### 13. Using LLMs to secure source code
- **日期**：2026-05-27
- **分类**：Security
- **🔗**：[原文](https://claude.com/blog/using-llms-to-secure-source-code)

基于 Project Glasswing 开源软件安全扫描实践（已披露 1,596 个漏洞，97 个已修复），发布使用 Claude Opus 进行源码安全审计的完整指南。"发现-修复"六步循环：威胁建模→沙箱→发现→验证→分诊→修补。

### 14. How CodeRabbit used Claude to build an agent orchestration system
- **日期**：2026-05-27
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/how-coderabbit-used-claude-to-build-an-agent-orchestration-system)

CodeRabbit（每周审查 200 万 PR，15,000+ 客户）在代码生成前插入结构化规划层，协调多个 Claude 模型（Opus 编排、Sonnet 序列化规划、Haiku 上下文蒸馏）。关键洞察：代码生成越便宜，走错方向的代价越大，规划质量决定产出质量。

### 15. Zero Trust for AI agents
- **日期**：2026-05-27
- **分类**：Security
- **🔗**：[原文](https://claude.com/blog/zero-trust-for-ai-agents)

面向企业的 AI 代理零信任安全框架白皮书。前沿模型已将漏洞到利用的时间从数月压缩到数小时。框架核心：身份密码学根植、权限按任务范围限定、记忆防投毒保护、防御运营匹配自主攻击者速度。

### 16. Code w/ Claude London 2026: Rethinking how we build
- **日期**：2026-05-26
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/code-w-claude-london-2026-rethinking-how-we-build)

伦敦开发者大会。两大关键发布：自托管沙箱（公开测试版，支持 Cloudflare/Daytona/Modal/Vercel）和 MCP 隧道（研究预览，单条出站连接访问私有 MCP 服务器）。

### 17. How Anthropic's finance team uses Claude to shape the narrative behind the numbers
- **日期**：2026-05-22
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/how-anthropics-finance-team-uses-claude-to-shape-the-narrative-behind-the-numbers)

Anthropic 财务团队用 Claude 维护面向 CFO 和董事会的统一财务叙事，每周节省 10-20 小时。核心工作流：季度董事会报告（自动校验数字一致性）、月度财务回顾（按已有风格写初稿评注）、财务模型诊断（跨标签页追踪引用）。

### 18. Claude now works with more security and compliance tools
- **日期**：2026-05-21
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/compliance-api-security-partners)

与 28 家安全合规工具厂商集成，基于 Claude Compliance API。首批集成涵盖 DLP、SASE、SIEM/SOC、身份管理、电子证据发现、AI 安全态势管理等，包括 Cloudflare、CrowdStrike、Datadog、Microsoft Purview、Okta 等。

### 19. How our partners are putting Opus to work for cybersecurity
- **日期**：2026-05-21
- **分类**：Security
- **🔗**：[原文](https://claude.com/blog/how-our-partners-are-putting-opus-to-work-for-cybersecurity)

安全合作伙伴基于 Claude Opus 搭建防御方案。Wiz Red Agent 每周渗透测试超 15 万个生产资产，零误报；Palo Alto Unit 42 三周完成相当于一年的渗透测试；Accenture 覆盖率从 10% 提升至 80%+。

### 20. Using Claude Code: The unreasonable effectiveness of HTML
- **日期**：2026-05-20
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/using-claude-code-the-unreasonable-effectiveness-of-html)

阐述为何 HTML 比 Markdown 更适合与 Claude Code 协作。五大场景：Specs/计划、代码审查、设计原型、报告研究、自定义编辑界面。提倡"不要用 ASCII 画图，用 HTML 做真正的可视化"。

### 21. How an Anthropic sales leader uses Claude Cowork to run a 4,000-account book
- **日期**：2026-05-20
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/how-an-anthropic-sales-leader-uses-claude-cowork-to-run-a-4-000-account-book)

用 Claude Cowork 管理 4,000 个客户账户。三节奏：每日客户会议准备、每周预测汇总、季度账户评分（定义五维规则连夜跑完 4,000 账户）。定时任务每天省约 90 分钟，每周预测省约 3 小时。

### 22. New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels
- **日期**：2026-05-19
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-managed-agents-updates)

Managed Agents 重大更新：支持自有沙箱（工具执行迁移到用户基础设施，支持 Cloudflare/Daytona/Modal/Vercel）和 MCP 隧道（单次出站连接，无入站防火墙规则，端到端加密）。客户案例：Clay、Rogo、Amplitude。

### 23. Deploying Claude across the legal industry
- **日期**：2026-05-15
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/deploying-claude-across-the-legal-industry)

Anthropic 法律行业部署指南。87% 企业法务部门已在内部使用生成式 AI。覆盖产品矩阵、12 个预建法律业务插件、四大场景用例。

### 24. The founder's playbook: Building an AI-native startup
- **日期**：2026-05-14
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/the-founders-playbook)

面向 AI Native 创业者的实战手册。重新定义创业生命周期四阶段——Idea、MVP、Launch、Scale。含 Ambral、Anything、Carta Healthcare、HumanLayer、Vulcan Technologies 等创始人故事。

### 25. How Claude Code works in large codebases: Best practices and where to start
- **日期**：2026-05-14
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start)

大型代码库规模化部署指南。Claude Code 采用代理式搜索而非 RAG。五个扩展点构成"HARNESS"层：CLAUDE.md → Hooks → Skills → Plugins → MCP 服务器。HARNESS 比模型本身对性能影响更大。

### 26. Best practices for computer and browser use with Claude
- **日期**：2026-05-13
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/best-practices-for-computer-and-browser-use-with-claude)

Claude 4.6 和 Opus 4.7 计算机/浏览器使用最佳实践。核心建议：截图预缩放是提升点击精度最高性价比优化、正确处理坐标缩放、文字指令放在图片之前。包含详细点击问题诊断指南。

### 27. Code w/ Claude SF 2026: Building on the AI exponential
- **日期**：2026-05-12
- **分类**：Event
- **🔗**：[原文](https://claude.com/blog/code-w-claude-sf-2026-sf)

旧金山年度开发者大会回顾。宣布 Claude Code 倍率限制翻倍、Managed Agents 新增 Dreaming/Multiagent orchestration/Outcomes/Webhooks 四大能力。

### 28. Claude for the legal industry
- **日期**：2026-05-12
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-for-the-legal-industry)

为法律行业发布 20+ 新 MCP 连接器和 12 个新插件。覆盖合同生命周期、交易室、文档管理、专家网络、电子发现、法律研究等全栈。

### 29. How Anthropic's cybersecurity team built a threat detection platform with Claude Code
- **日期**：2026-05-12
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/how-anthropic-uses-claude-cybersecurity)

构建 CLUE 威胁检测平台。CLUE Triage 在人工分析前完成首轮告警分类，CLUE Investigate 用自然语言查询安全日志。上线后误报率降低 97%，告警处置时间缩短 90%。

### 30. Agent view in Claude Code
- **日期**：2026-05-11
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/agent-view-in-claude-code)

Claude Code 新增 Agent View——统一管理所有 Claude Code 会话。支持将任何会话发送到后台（/bg），实现并行多会话管理。

### 31. Introducing the Claude Platform on AWS
- **日期**：2026-05-11
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-platform-on-aws)

Claude Platform on AWS 正式 GA。AWS 客户通过 IAM 认证、CloudTrail 审计日志和单一 AWS 发票访问完整 Claude Platform 功能。

### 32. Collaborate with Claude across Excel, PowerPoint, Word and Outlook
- **日期**：2026-05-07
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/collaborate-with-claude-across-excel-powerpoint-word-and-outlook)

Claude for Excel/PowerPoint/Word 正式 GA，Outlook 公开测试版。跨应用对话上下文保持——四个应用间无缝切换，Excel 修改自动同步到 PPT 图表和 Word 文档。

### 33. New in Claude Managed Agents: dreaming, outcomes, and multiagent orchestration
- **日期**：2026-05-06
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/new-in-claude-managed-agents-dreaming-outcomes-and-multiagent-orchestration)

Managed Agents 新增 dreaming（后台预处理）、outcomes（结果导向任务执行）、multiagent orchestration（多智能体编排）三大能力。

### 34. Deploying Claude across financial services
- **日期**：2026-05-05
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/deploying-claude-across-financial-services)

面向金融服务业的 Claude 部署指南。10 个预构建金融智能体模板（pitch 构建器、市场研究、KYC 筛查等），客户案例来自 AIG、澳大利亚联邦银行、IG Group、Moody's。

### 35. How a non-technical project manager built and shipped a stress management app with Claude Code in six weeks
- **日期**：2026-05-01
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/how-a-non-technical-project-manager-built-and-shipped-a-stress-management-app-with-claude-code-in-six-weeks)

乌克兰项目经理 Kostiantyn Vlasenko 零编程经验，用 Claude Code 72 小时构建 iOS 压力管理应用 Respiro。构建了包含 15+ 专业子智能体的多智能体架构。六周内从想法到 App Store 上架。

---

## 2026年4月及更早

### 36. Building AI agents for the enterprise
- **日期**：2026-04-30
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/building-ai-agents-for-the-enterprise)

企业 AI 代理建设指南。基于 Anthropic 经济指数（美国 40% 员工工作中使用 AI），阐述企业 AI 转型三大支柱，含 L'Oreal、Lyft、Rakuten 客户案例及六个月部署框架。

### 37. Claude Security is now in public beta
- **日期**：2026-04-30
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-security-is-now-in-public-beta)

Claude Security 进入公开测试阶段，面向企业安全团队提供 AI 安全能力。

### 38. Lessons from building Claude Code: Prompt caching is everything
- **日期**：2026-04-30
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/lessons-from-building-claude-code-prompt-caching-is-everything)

Prompt caching 优化核心经验：系统提示词按静态在前动态在后最大化缓存命中、不要在会话中途切换模型、不要中途增删工具（破坏整体缓存）、Plan Mode 围绕缓存约束设计。缓存命中率过低触发 SEV 告警。

### 39. How Kepler built verifiable AI for financial services with Claude
- **日期**：2026-04-30
- **分类**：Enterprise AI
- **🔗**：[原文](https://claude.com/blog/how-kepler-built-verifiable-ai-for-financial-services-with-claude)

Kepler 利用 Claude 为金融服务业构建可验证 AI 系统。

### 40. Deploying agentic AI across the enterprise with Claude Cowork
- **日期**：2026-04-29
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/deploying-agentic-ai-across-the-enterprise-with-claude-cowork)

通过 Claude Cowork 在企业中部署智能体 AI 的指南。

### 41. Claude API skill now in CodeRabbit, JetBrains, Resolve AI, and Warp
- **日期**：2026-04-29
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/claude-api-skill-now-in-coderabbit-jetbrains-resolve-ai-and-warp)

Claude API 技能集成到 CodeRabbit、JetBrains、Resolve AI 和 Warp 等开发工具。

### 42. Product development in the agentic era
- **日期**：2026-04-29
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/product-development-in-the-agentic-era)

探讨智能体时代的产品开发方法论。

### 43. Onboarding Claude Code like a new developer: Lessons from 17 years of development
- **日期**：2026-04-28
- **分类**：Claude Code
- **🔗**：[原文](https://claude.com/blog/onboarding-claude-code-like-a-new-developer-lessons-from-17-years-of-development)

将 Claude Code 当作"新开发者"入职的经验和最佳实践。

### 44. New connectors in Claude for everyday life
- **日期**：2026-04-23
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/new-connectors-in-claude-for-everyday-life)

Claude 新增日常生活连接器，扩展与日常工具和服务的集成能力。

### 45. Built-in memory for Claude Managed Agents
- **日期**：2026-04-23
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/built-in-memory-for-claude-managed-agents)

Claude Managed Agents 新增内置记忆功能。

### 46. Building agents that reach production systems with MCP
- **日期**：2026-04-22
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/building-agents-that-reach-production-systems-with-mcp)

使用 MCP 构建能连接生产系统的 AI 智能体。

### 47. Introducing Claude Design by Anthropic Labs
- **日期**：2026-04-17
- **分类**：Product
- **🔗**：[原文](https://www.anthropic.com/news)

Anthropic Labs 推出 Claude Design，支持创建交互式设计、原型、幻灯片等视觉作品。

### 48. Redesigning Claude Code on desktop for parallel agents
- **日期**：2026-04-14
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/redesigning-claude-code-on-desktop-for-parallel-agents)

Claude Code 桌面端重新设计，支持并行智能体操作。

### 49. Preparing your security program for AI-accelerated offense
- **日期**：2026-04-10
- **分类**：Security
- **🔗**：[原文](https://claude.com/blog/preparing-your-security-program-for-ai-accelerated-offense)

如何为 AI 加速的攻击手段准备安全防护方案。

### 50. Claude Managed Agents: get to production 10x faster
- **日期**：2026-04-08
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-managed-agents-get-to-production-10x-faster)

Claude Managed Agents 帮助企业将智能体部署速度提升 10 倍。

### 51. Project Glasswing
- **日期**：2026-04-07
- **分类**：Security
- **🔗**：[原文](https://www.anthropic.com/news)

新安全倡议 Project Glasswing，联合 AWS、Apple、Broadcom、Cisco、CrowdStrike、Google、JPMorganChase 等公司，致力于保护全球最关键的软件。

### 52. Harnessing Claude's intelligence
- **日期**：2026-04-02
- **分类**：Guide
- **🔗**：[原文](https://claude.com/blog/harnessing-claudes-intelligence)

如何充分利用 Claude 的智能能力。

### 53. What 81,000 people want from AI
- **日期**：2026-03-18
- **分类**：Research
- **🔗**：[原文](https://www.anthropic.com/news)

近 81,000 名 Claude.ai 用户参与的同类最大规模定性研究，了解用户如何使用 AI 以及期望。

### 54. Claude now creates interactive charts, diagrams and visualizations
- **日期**：2026-03-12
- **分类**：Product
- **🔗**：[原文](https://claude.com/blog/claude-now-creates-interactive-charts-diagrams-and-visualizations)

Claude 新增创建交互式图表和可视化内容的能力。

### 55. Claude is a space to think
- **日期**：2026-02-04
- **分类**：Announcement
- **🔗**：[原文](https://www.anthropic.com/news)

Anthropic 明确 Claude 保持无广告模式，解释广告激励机制与有用 AI 助手不兼容。

### 56. How enterprises are building AI agents in 2026
- **日期**：2025-12-09
- **分类**：Agents
- **🔗**：[原文](https://claude.com/blog/how-enterprises-are-building-ai-agents-in-2026)

2026 年企业构建 AI 智能体的趋势和方法。

### 57. Improving frontend design through Skills
- **日期**：2025-11-12
- **分类**：Guide
- **🔗**：[原文](https://claude.com/blog/improving-frontend-design-through-skills)

通过 Skills 改进前端设计。

---

*最后更新：2026-06-13 · 共 57 篇文章*
