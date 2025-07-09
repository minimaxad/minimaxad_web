# MiniMaxAD Next.js 本地部署指南

## 项目概述
MiniMaxAD是一个基于Next.js 14构建的现代化SEO优化和社交媒体运营公司网站。

## 系统要求
- Node.js 18.0.0 或更高版本
- npm 或 yarn 包管理器
- Windows 10/11 或 macOS 或 Linux

## 部署步骤

### 1. 环境准备
确保您的系统已安装Node.js：
```bash
node --version
npm --version
```

### 2. 安装依赖
在项目根目录执行：
```bash
npm install
```

### 3. 开发环境启动
启动开发服务器：
```bash
npm run dev
```
- 访问地址：http://localhost:3000
- 支持热重载，代码修改后自动刷新

### 4. 生产环境构建
构建生产版本：
```bash
npm run build
```

### 5. 生产环境启动
启动生产服务器：
```bash
npm start
```
- 访问地址：http://localhost:3000
- 优化后的生产版本

## 项目结构
```
minimaxad/
├── components/          # React组件
│   ├── Header.tsx      # 页面头部
│   ├── Footer.tsx      # 页面底部
│   ├── Layout.tsx      # 布局组件
│   └── sections/       # 页面区块组件
├── pages/              # Next.js页面
│   ├── _app.tsx        # 应用入口
│   ├── index.tsx       # 首页
│   ├── about.tsx       # 关于我们
│   ├── services.tsx    # 服务页面
│   ├── works.tsx       # 作品展示
│   └── contact.tsx     # 联系我们
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── public/             # 静态资源
├── package.json        # 项目配置
├── next.config.js      # Next.js配置
└── tailwind.config.js  # Tailwind CSS配置
```

## 常用命令
```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 配置说明

### Next.js配置 (next.config.js)
- 启用严格模式
- 配置图片域名
- 支持国际化（日语、英语）

### Tailwind CSS配置
- 自定义颜色主题
- 响应式设计支持
- 组件样式优化

## 故障排除

### 端口被占用
如果3000端口被占用，Next.js会自动使用下一个可用端口。

### 依赖安装失败
```bash
# 清除缓存重新安装
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 构建失败
检查TypeScript错误：
```bash
npm run lint
```

## 性能优化
- 自动代码分割
- 图片优化
- 静态生成
- 服务端渲染

## 部署到生产环境
1. 构建项目：`npm run build`
2. 启动服务：`npm start`
3. 配置反向代理（如Nginx）
4. 设置环境变量

## 联系支持
如遇到部署问题，请检查：
1. Node.js版本是否符合要求
2. 依赖是否正确安装
3. 端口是否被占用
4. 防火墙设置

---
*MiniMaxAD - 专业的SEO优化和社交媒体运营服务* 

要在你的 Next.js 项目中集成 stagewise toolbar，请按如下步骤操作：

---

### 1. **使用正确的包管理器安装依赖**

你的项目有 `package-lock.json`，说明用的是 **npm**。  
在项目根目录运行：

```bash
npm install @stagewise/toolbar-next @stagewise-plugins/react
```

---

### 2. **在根布局文件中集成 StagewiseToolbar**

编辑 `pages/_app.tsx`（或 `app/layout.tsx`，取决于你的 Next.js 版本。你当前项目结构是 pages 目录，所以用 `_app.tsx`）：

```tsx
// 在文件顶部添加
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import { ReactPlugin } from '@stagewise-plugins/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StagewiseToolbar config={{ plugins: [ReactPlugin()] }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

> 注：`@stagewise/toolbar-next` 已自动只在开发模式下渲染，无需手动判断。

---

### 3. **添加 VSCode 推荐扩展**

在项目根目录创建或编辑 `extensions.json`，内容如下：

```json
<code_block_to_apply_changes_from>
{
  "recommendations": ["stagewise.stagewise-vscode-extension"]
}
```

---

### 4. **完成！**

- 只在开发环境显示，不会影响生产构建。
- 没有 SSR 问题。
- 没有 lint 报错。

---

**用户后续操作：**  
1. 启动开发模式：`npm run dev`
2. 浏览器右下角应出现 stagewise 工具栏。

如有问题，可联系 stagewise 官方 Discord（https://discord.gg/gkdGsDYaKA）。 