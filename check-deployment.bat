@echo off
echo ========================================
echo MiniMaxAD Next.js 部署状态检查
echo ========================================
echo.

echo 检查Node.js环境...
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误：未检测到Node.js
    echo 请先安装Node.js：https://nodejs.org/
    pause
    exit /b 1
)
echo ✅ Node.js已安装：%node_version%

echo.
echo 检查项目依赖...
if not exist "node_modules" (
    echo ❌ 错误：项目依赖未安装
    echo 请运行：npm install
    pause
    exit /b 1
)
echo ✅ 项目依赖已安装

echo.
echo 检查Next.js配置文件...
if not exist "next.config.js" (
    echo ❌ 错误：next.config.js文件不存在
    pause
    exit /b 1
)
echo ✅ Next.js配置文件存在

echo.
echo 检查端口3000状态...
netstat -ano | findstr :3000 >nul 2>&1
if errorlevel 1 (
    echo ⚠️  端口3000未被占用
    echo 提示：Next.js开发服务器可能未启动
    echo 启动命令：npm run dev
) else (
    echo ✅ 端口3000正在使用中
    echo Next.js开发服务器可能正在运行
)

echo.
echo 检查端口8000状态（静态文件服务器）...
netstat -ano | findstr :8000 >nul 2>&1
if errorlevel 1 (
    echo ⚠️  端口8000未被占用
    echo 提示：静态文件服务器可能未启动
) else (
    echo ✅ 端口8000正在使用中
    echo 静态文件服务器正在运行
)

echo.
echo ========================================
echo 部署状态总结
echo ========================================
echo.
echo 📋 检查项目：
echo   - Node.js环境：✅ 正常
echo   - 项目依赖：✅ 已安装
echo   - Next.js配置：✅ 正常
echo.
echo 🌐 服务状态：
echo   - Next.js (端口3000)：%next_status%
echo   - 静态文件 (端口8000)：%static_status%
echo.
echo 📝 访问地址：
echo   - Next.js应用：http://localhost:3000
echo   - 静态HTML：http://localhost:8000
echo.
echo 💡 启动命令：
echo   - Next.js开发：npm run dev
echo   - Next.js生产：npm run build && npm start
echo   - 静态文件：npx http-server -p 8000
echo.
echo ========================================
pause 