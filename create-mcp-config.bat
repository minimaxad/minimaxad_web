@echo off
chcp 65001 >nul
echo ========================================
echo 创建 Serena MCP 配置文件
echo ========================================
echo.

echo 正在创建 MCP 配置文件...

REM 创建 .cursor 目录
if not exist "%USERPROFILE%\.cursor" (
    mkdir "%USERPROFILE%\.cursor"
    echo 创建目录: %USERPROFILE%\.cursor
)

REM 创建备份
if exist "%USERPROFILE%\.cursor\mcp.json" (
    copy "%USERPROFILE%\.cursor\mcp.json" "%USERPROFILE%\.cursor\mcp.json.backup"
    echo 已创建备份: %USERPROFILE%\.cursor\mcp.json.backup
)

REM 创建新的配置文件
echo { > "%USERPROFILE%\.cursor\mcp.json"
echo     "mcpServers": { >> "%USERPROFILE%\.cursor\mcp.json"
echo         "serena": { >> "%USERPROFILE%\.cursor\mcp.json"
echo             "command": "python", >> "%USERPROFILE%\.cursor\mcp.json"
echo             "args": ["-m", "serena.mcp.server"], >> "%USERPROFILE%\.cursor\mcp.json"
echo             "cwd": "G:\\minimaxad\\serena" >> "%USERPROFILE%\.cursor\mcp.json"
echo         } >> "%USERPROFILE%\.cursor\mcp.json"
echo     } >> "%USERPROFILE%\.cursor\mcp.json"
echo } >> "%USERPROFILE%\.cursor\mcp.json"

echo.
echo ========================================
echo 配置文件创建完成！
echo ========================================
echo.
echo 配置文件位置: %USERPROFILE%\.cursor\mcp.json
echo.
echo 配置内容:
type "%USERPROFILE%\.cursor\mcp.json"
echo.
echo 下一步操作:
echo 1. 安装 Serena（如果尚未安装）
echo 2. 重启 Cursor
echo 3. 检查 MCP Tools 中的 Serena 状态
echo.
pause 