# Serena MCP 配置修复脚本（无需 Git）
# 此脚本将自动修复 Cursor 的 MCP 配置

$mcpConfigPath = "$env:USERPROFILE\.cursor\mcp.json"
$backupPath = "$env:USERPROFILE\.cursor\mcp.json.backup"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Serena MCP 配置修复脚本（无需 Git）" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查 MCP 配置文件是否存在
if (Test-Path $mcpConfigPath) {
    Write-Host "找到 MCP 配置文件: $mcpConfigPath" -ForegroundColor Green
    
    # 创建备份
    Copy-Item $mcpConfigPath $backupPath
    Write-Host "已创建备份: $backupPath" -ForegroundColor Yellow
} else {
    Write-Host "MCP 配置文件不存在，将创建新文件" -ForegroundColor Yellow
}

# 检查 Serena 是否已安装
$serenaPath = "G:\minimaxad\serena"
if (-not (Test-Path $serenaPath)) {
    Write-Host "Serena 未安装，正在下载..." -ForegroundColor Yellow
    
    # 创建 serena 目录
    New-Item -ItemType Directory -Path $serenaPath -Force | Out-Null
    
    # 下载 Serena 发布版本
    $zipUrl = "https://github.com/oraios/serena/archive/refs/heads/main.zip"
    $zipPath = "G:\minimaxad\serena.zip"
    
    Write-Host "正在下载 Serena..." -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $zipUrl -OutFile $zipPath
        Write-Host "下载完成" -ForegroundColor Green
        
        # 解压文件
        Write-Host "正在解压..." -ForegroundColor Yellow
        Expand-Archive -Path $zipPath -DestinationPath "G:\minimaxad" -Force
        
        # 移动文件到正确位置
        if (Test-Path "G:\minimaxad\serena-main") {
            Move-Item "G:\minimaxad\serena-main\*" $serenaPath -Force
            Remove-Item "G:\minimaxad\serena-main" -Recurse -Force
        }
        
        # 删除下载的 zip 文件
        Remove-Item $zipPath -Force
        
        Write-Host "Serena 安装完成" -ForegroundColor Green
    } catch {
        Write-Host "下载失败，尝试使用 pip 安装..." -ForegroundColor Yellow
        
        # 使用 pip 直接安装
        pip install serena
        if ($LASTEXITCODE -ne 0) {
            Write-Host "pip 安装失败，尝试使用国内镜像..." -ForegroundColor Yellow
            pip install serena -i https://pypi.tuna.tsinghua.edu.cn/simple/
        }
    }
} else {
    Write-Host "Serena 已安装: $serenaPath" -ForegroundColor Green
}

# 检查是否需要安装依赖
if (Test-Path "$serenaPath\requirements.txt") {
    Write-Host "正在安装依赖..." -ForegroundColor Yellow
    Set-Location $serenaPath
    pip install -r requirements.txt
    if ($LASTEXITCODE -ne 0) {
        Write-Host "尝试使用国内镜像..." -ForegroundColor Yellow
        pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple/
    }
    Set-Location "G:\minimaxad"
}

# 创建新的 MCP 配置
$newConfig = @{
    mcpServers = @{
        serena = @{
            command = "python"
            args = @("-m", "serena.mcp.server")
            cwd = $serenaPath
        }
    }
}

# 转换为 JSON 并保存
$newConfigJson = $newConfig | ConvertTo-Json -Depth 3

# 确保 .cursor 目录存在
$cursorDir = Split-Path $mcpConfigPath -Parent
if (-not (Test-Path $cursorDir)) {
    New-Item -ItemType Directory -Path $cursorDir -Force | Out-Null
}

# 保存新配置
$newConfigJson | Out-File -FilePath $mcpConfigPath -Encoding UTF8

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "配置修复完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "新配置已保存到: $mcpConfigPath" -ForegroundColor White
Write-Host ""
Write-Host "配置内容:" -ForegroundColor Yellow
Write-Host $newConfigJson -ForegroundColor White
Write-Host ""
Write-Host "下一步操作:" -ForegroundColor Yellow
Write-Host "1. 重启 Cursor" -ForegroundColor White
Write-Host "2. 检查 MCP Tools 中的 Serena 状态" -ForegroundColor White
Write-Host "3. 如果仍有问题，请查看备份文件: $backupPath" -ForegroundColor White
Write-Host ""

Read-Host "按回车键继续" 