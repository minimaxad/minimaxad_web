@echo off
chcp 65001 >nul
echo ========================================
echo Serena 简单安装脚本
echo ========================================
echo.

echo 正在安装 Serena...

REM 创建 serena 目录
if not exist "serena" (
    mkdir serena
    echo 创建目录: serena
)

REM 下载 Serena 的 requirements.txt
echo 正在下载依赖文件...
powershell -Command "Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/oraios/serena/main/requirements.txt' -OutFile 'serena\requirements.txt'"

if exist "serena\requirements.txt" (
    echo 依赖文件下载成功
    echo 正在安装依赖...
    cd serena
    pip install -r requirements.txt
    if errorlevel 1 (
        echo 使用国内镜像重试...
        pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/
    )
    cd ..
) else (
    echo 依赖文件下载失败，尝试直接安装...
    pip install serena
    if errorlevel 1 (
        echo 使用国内镜像重试...
        pip install serena -i https://pypi.tuna.tsinghua.edu.cn/simple/
    )
)

echo.
echo ========================================
echo Serena 安装完成！
echo ========================================
echo.
echo 下一步操作:
echo 1. 重启 Cursor
echo 2. 检查 MCP Tools 中的 Serena 状态
echo 3. 如果显示红点，请检查 Python 环境
echo.
pause 