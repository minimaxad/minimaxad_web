@echo off
chcp 65001 >nul
echo ========================================
echo Serena MCP 配置修复脚本
echo ========================================
echo.

echo 正在检查当前环境...
echo.

echo 1. 检查 uvx 是否可用...
uvx --version >nul 2>&1
if errorlevel 1 (
    echo [错误] uvx 未安装或不可用
    echo 正在安装 uvx...
    pip install uvx
    if errorlevel 1 (
        echo [错误] uvx 安装失败
        goto :manual_install
    )
) else (
    echo [正常] uvx 已安装
)

echo.
echo 2. 测试 Serena 安装...
uvx --from git+https://github.com/oraios/serena serena-mcp-server --help >nul 2>&1
if errorlevel 1 (
    echo [错误] Serena 安装失败，尝试手动安装
    goto :manual_install
) else (
    echo [正常] Serena 安装成功
)

echo.
echo 3. 创建备用配置...
call :create_backup_configs

echo.
echo ========================================
echo 修复完成！
echo ========================================
echo.
echo 请尝试以下配置方案：
echo.
echo 方案1 (当前配置):
echo {
echo   "mcpServers": {
echo     "serena": {
echo       "command": "uvx",
echo       "args": ["--from", "git+https://github.com/oraios/serena", "serena-mcp-server"]
echo     }
echo   }
echo }
echo.
echo 方案2 (本地安装):
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
echo 方案3 (直接运行):
echo {
echo   "mcpServers": {
echo     "serena": {
echo       "command": "serena-mcp-server",
echo       "cwd": "G:\\minimaxad\\serena"
echo     }
echo   }
echo }
echo.
pause
exit /b 0

:manual_install
echo.
echo 正在手动安装 Serena...
echo.

echo 克隆 Serena 仓库...
if not exist serena (
    git clone https://github.com/oraios/serena.git
) else (
    echo Serena 目录已存在，跳过克隆
)

echo.
echo 安装依赖...
cd serena
pip install -r requirements.txt
if errorlevel 1 (
    echo [错误] 依赖安装失败
    echo 尝试使用国内镜像...
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/
)

cd ..
echo.
echo 手动安装完成
goto :create_backup_configs

:create_backup_configs
echo.
echo 创建备用配置文件...

echo 方案1: 当前配置 > mcp-config-1.json
echo { >> mcp-config-1.json
echo   "mcpServers": { >> mcp-config-1.json
echo     "serena": { >> mcp-config-1.json
echo       "command": "uvx", >> mcp-config-1.json
echo       "args": ["--from", "git+https://github.com/oraios/serena", "serena-mcp-server"] >> mcp-config-1.json
echo     } >> mcp-config-1.json
echo   } >> mcp-config-1.json
echo } >> mcp-config-1.json

echo 方案2: 本地安装 > mcp-config-2.json
echo { >> mcp-config-2.json
echo   "mcpServers": { >> mcp-config-2.json
echo     "serena": { >> mcp-config-2.json
echo       "command": "python", >> mcp-config-2.json
echo       "args": ["-m", "serena.mcp.server"], >> mcp-config-2.json
echo       "cwd": "G:\\minimaxad\\serena" >> mcp-config-2.json
echo     } >> mcp-config-2.json
echo   } >> mcp-config-2.json
echo } >> mcp-config-2.json

echo 方案3: 直接运行 > mcp-config-3.json
echo { >> mcp-config-3.json
echo   "mcpServers": { >> mcp-config-3.json
echo     "serena": { >> mcp-config-3.json
echo       "command": "serena-mcp-server", >> mcp-config-3.json
echo       "cwd": "G:\\minimaxad\\serena" >> mcp-config-3.json
echo     } >> mcp-config-3.json
echo   } >> mcp-config-3.json
echo } >> mcp-config-3.json

echo 备用配置文件已创建完成
goto :eof 