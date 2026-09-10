---
title: FastAPI 应用与场景
date: 2026-09-10 17:15:06 +0800
categories:
  - 个人成长
  - Agent
  - 技术
tags:
  - FastAPI
description: ""
---
# 一、完整文字总结
## 1. CPU密集 vs IO密集
- **CPU密集**：大量运算，CPU全程忙碌，几乎没有等待；如大循环、加密、图像计算。 放到 async 主事件循环里会**阻塞整个事件循环**。 
- **IO密集**：CPU大部分时间在等外部资源（网络请求、数据库、文件读写、sleep等待），CPU空闲。 
- `time.sleep` 属于**等待类IO任务**，但它是**同步阻塞调用**，这是关键坑！ 
- `time.sleep()`：同步，不会主动让出控制权，卡住整个事件循环线程 
- `await asyncio.sleep()`：异步，遇到await，协程主动挂起，交还控制权给事件循环，不阻塞其他任务 > 协程：**可暂停、可恢复的函数**，`async def` 定义协程；遇到 `await` 主动交出执行权（非抢占式！代码不await，事件循环无法打断它）。 
- 事件循环：单线程调度器，配合epoll IO多路复用，在IO等待期间去处理其他协程，实现高并发。 > ✅ 异步高并发本质：**复用IO等待的空闲时间，不是多核并行计算**。 
## 2. FastAPI + Uvicorn + ASGI 链路 - **Uvicorn（ASGI服务器）**：监听端口、socket网络收发、创建并管理asyncio事件循环。 
- `async def` 接口：直接在**主事件循环**执行协程；里面一旦有同步长耗时代码 → 全局阻塞。 
- `def` 普通同步接口：uvicorn自动丢进内部线程池执行，**不会阻塞主事件循环**，但线程池有上限。
- **ASGI**：协议规范，定义服务器（uvicorn）和Web框架（FastAPI）之间如何传递请求、响应；WSGI只能同步，ASGI支持同步+异步。
- **FastAPI（Web框架）**：**不监听端口、不管理事件循环、不处理底层socket**。 
职责：接收ASGI传过来的请求scope、路由匹配、参数解析/Pydantic校验、调用业务函数、把返回值打包成HTTP响应交给uvicorn，附带文档、依赖注入。 
请求完整链路： `客户端浏览器 → TCP/HTTP socket → Uvicorn（事件循环） → ASGI协议 → FastAPI（路由、参数校验） → 你的业务代码` ## 3. Python asyncio 与 TypeScript(Node.js) 异步对比 ✅ 
**相同底层原理**：都是**单线程事件循环 + await主动让出控制权 + epoll IO多路复用**。主线程里跑长同步CPU计算，两边都会卡死事件循环。 
❗核心差异： 
1. Python存在 **GIL全局解释器锁**：同一时刻一个进程内只能有一个线程执行Python字节码；CPU密集想要多核并行必须开多进程。Node(V8)没有GIL。 
2. 生态：Node异步是原生默认；Python大量老同步库，写async接口很容易不小心引入同步调用踩坑。 
3. 兜底机制：Uvicorn会自动把普通`def`同步接口放到线程池；Node不会自动兜底，同步阻塞代码直接卡死主线程，需要手动Worker。 
4. 选型： 
- Node/TS：适合BFF、网关，前后端同栈，纯IO密集服务。 
- FastAPI(Python)：适合AI、数据处理、模型校验场景。 
- --- 
# 二、架构示意图（文本版，可直接复制到 markdown）
```plaintext
【客户端】
    ↓ HTTP/TCP请求
──────────────────────────────────────
【Uvicorn ASGI Server】
├─ 监听IP:端口，socket底层网络
├─ 创建 & 管理 asyncio 事件循环 ⭐
│  ├─ 任务调度器
│  └─ epoll IO多路复用（监听网络IO）
├─ 分发请求：
│    ├─ async def接口 → 直接交给事件循环调度协程
│    └─ def同步接口 → 丢进内部线程池（保护事件循环）
└─ 按照ASGI协议，把请求scope传给FastAPI
──────────────────────────────────────
【FastAPI ASGI App】
├─ 路由匹配（url+method）
├─ 请求参数解析 + Pydantic校验
├─ 依赖注入、异常处理
├─ 调用你的业务函数
└─ 封装HTTP响应，返回给uvicorn
──────────────────────────────────────
【你的业务代码】
├─ async def 协程函数：
│   ├─ await 异步IO(httpx异步请求 / asyncio.sleep) ✅ 协程挂起，交还控制权
│   └─ time.sleep / 大循环CPU计算 ❌ 同步阻塞，卡死整个事件循环
└─ def 普通同步函数：
│      由uvicorn线程池执行，不阻塞事件循环，但线程池有上限
```
# 三、协程调度时序简图（async 接口正常 await 场景）

```plaintext
协程A：发起 await 异步网络请求
        ↓（遇到await → 保存状态，挂起，交还控制权给事件循环）
事件循环：去执行就绪队列里的协程B、协程C...
        ↓ 网络IO还在等待，主线程空闲，epoll监听socket
网络IO完成 → 事件循环收到通知，把协程A放回就绪队列
事件循环有空时，恢复协程A，继续执行await后面代码
```

# 四、对比简表

| 项目       | Python asyncio(FastAPI+Uvicorn) | Node.js TypeScript       |
| -------- | ------------------------------- | ------------------------ |
| 事件循环模型   | 单线程，非抢占协程 Task                  | 单线程，Promise 回调 + 分阶段事件循环 |
| await 含义 | 协程主动让出控制权                       | Promise 暂停，语法糖           |
| GIL 锁    | ✅存在，多线程无法并行 CPU 计算              | ❌无 GIL                   |
| 同步接口兜底   | uvicorn 自动放入线程池                 | 无自动兜底，主线程直接卡死            |
| 生态       | 大量同步老库，容易踩坑                     | 异步原生为主                   |
| 适合场景     | AI、数据、模型校验 API                  | BFF、网关，前后端同栈             |

# 五、核心坑一句话汇总

1. `async def`接口里面，**不能写同步长耗时代码（time.sleep、同步 requests、大量循环计算）**，会阻塞整个 uvicorn 事件循环，所有请求卡住。
2. IO 密集任务适合异步协程；CPU 密集任务不要放在事件循环主线程，Python 要放到进程池。
3. sleep 这件事本身是 IO 等待，**阻塞与否看是同步 sleep 还是异步 sleep**。