@echo off
echo ========================================
echo MiniMaxAD Next.js 生产环境部署脚本
echo ========================================
echo.

echo 检查Node.js环境...
node --version >nul 2>&1
if errorlevel 1 (
    echo 错误：未检测到Node.js，请先安装Node.js
    pause
    exit /b 1
)

echo 检查项目依赖...
if not exist "node_modules" (
    echo 正在安装项目依赖...
    npm install
    if errorlevel 1 (
        echo 错误：依赖安装失败
        pause
        exit /b 1
    )
)

echo.
echo 开始构建生产版本...
echo 这可能需要几分钟时间，请耐心等待...
echo.

npm run build

if errorlevel 1 (
    echo 错误：构建失败，请检查错误信息
    pause
    exit /b 1
)

echo.
echo 构建成功！
echo 正在启动生产服务器...
echo 访问地址：http://localhost:3000
echo 按 Ctrl+C 停止服务器
echo.

npm start

pause 