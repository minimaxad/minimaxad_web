@echo off
echo ========================================
echo MiniMaxAD Next.js 本地部署启动脚本
echo ========================================
echo.

echo 检查Node.js环境...
node --version >nul 2>&1
if errorlevel 1 (
    echo 错误：未检测到Node.js，请先安装Node.js
    echo 下载地址：https://nodejs.org/
    pause
    exit /b 1
)

echo Node.js版本：
node --version
echo.

echo 检查npm环境...
npm --version >nul 2>&1
if errorlevel 1 (
    echo 错误：未检测到npm，请检查Node.js安装
    pause
    exit /b 1
)

echo npm版本：
npm --version
echo.

echo 检查项目依赖...
if not exist "node_modules" (
    echo 正在安装项目依赖...
    npm install
    if errorlevel 1 (
        echo 错误：依赖安装失败
        pause
        exit /b 1
    )
    echo 依赖安装完成！
) else (
    echo 项目依赖已存在
)

echo.
echo 启动Next.js开发服务器...
echo 访问地址：http://localhost:3000
echo 按 Ctrl+C 停止服务器
echo.

npm run dev

pause 