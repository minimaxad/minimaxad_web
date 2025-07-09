@echo off
chcp 65001 >nul
echo ========================================
echo MiniMaxAD 网站服务器启动
echo ========================================
echo.

echo 正在启动静态文件服务器...
echo 服务器根目录: %CD%
echo 端口: 8000
echo.

REM 停止可能存在的服务器
taskkill /F /IM node.exe >nul 2>&1

REM 启动服务器
start "Static Server" cmd /k "http-server . -p 8000"

echo 等待服务器启动...
timeout /t 3 /nobreak >nul

echo.
echo ========================================
echo 服务器已启动！
echo ========================================
echo.
echo 请访问以下地址：
echo.
echo 📱 静态HTML文件：
echo    http://localhost:8000/index.html
echo    http://localhost:8000/about.html
echo    http://localhost:8000/services.html
echo    http://localhost:8000/works.html
echo    http://localhost:8000/contact.html
echo    http://localhost:8000/pricing.html
echo    http://localhost:8000/quote.html
echo.
echo 🚀 Next.js应用（如果已启动）：
echo    http://localhost:3000
echo.
echo 按任意键打开浏览器...
pause >nul

REM 自动打开浏览器
start http://localhost:8000/index.html

echo.
echo 浏览器已打开！
echo 如果页面无法访问，请检查：
echo 1. 防火墙设置
echo 2. 端口是否被占用
echo 3. 服务器是否正常启动
echo.
pause 