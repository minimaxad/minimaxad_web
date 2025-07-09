@echo off
chcp 65001 >nul
echo ========================================
echo Serena 快速安装脚本
echo ========================================
echo.

echo 正在安装 Serena...

REM 检查是否已存在 serena 目录
if exist serena (
    echo Serena 目录已存在，正在更新...
    cd serena
    git pull
) else (
    echo 正在克隆 Serena 仓库...
    git clone https://github.com/oraios/serena.git
    cd serena
)

echo.
echo 正在安装依赖...
pip install -r requirements.txt
if errorlevel 1 (
    echo 使用国内镜像重试...
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/
)

cd ..

echo.
echo ========================================
echo Serena 安装完成！
echo ========================================
echo.
echo 请将以下配置复制到 Cursor 的 mcp.json 文件中：
echo.
echo {
echo   "mcpServers": {
echo     "serena": {
echo       "command": "python",
echo       "args": ["-m", "serena.mcp.server"],
echo       "cwd": "G:\\minimaxad\\serena"
echo     }
echo   }
echo }
echo.
echo 配置文件位置: C:\Users\Admin\.cursor\mcp.json
echo.
pause 