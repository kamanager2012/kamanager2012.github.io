# Kama Projects

[English](README.md) | **简体中文**

这是 [kamanager2012](https://github.com/kamanager2012) 维护的公开项目介绍站，
用于把源码、文档、验证入口和项目关系放在同一个可跳转的入口中。

它是静态介绍页，不是在线服务、MCP Server，也不替代各个项目仓库。

## DeepSeek Harness Community 生态

页面遵守一个产品规则：普通用户只下载
[`dsh-community`](https://github.com/kamanager2012/dsh-community/releases/latest)。

当前版本事实分开记录：代码线 `0.1.2`、Stable `v0.1.2`、`v0.1.2-preview` 为历史
Preview。`v0.1.2` 已发布 Linux AppImage、Windows NSIS 和 macOS dmg，并提供对应
SHA256 校验文件。

| 仓库 | 定位 |
|---|---|
| [`dsh-community`](https://github.com/kamanager2012/dsh-community) | Canonical Product，唯一正式产品 |
| [`deepseek-harness-suite`](https://github.com/kamanager2012/deepseek-harness-suite) | Community Labs，实验源 |
| [`deepseek-harness-handbook`](https://github.com/kamanager2012/deepseek-harness-handbook) | Knowledge / Evidence，双语工程手册 |
| [`dsh-community-plugins`](https://github.com/kamanager2012/dsh-community-plugins) | 插件兼容性注册表 |
| [`dsh-marketplace`](https://github.com/kamanager2012/dsh-marketplace) | 插件发现和安装体验 |
| [`dsh-community-edition`](https://github.com/kamanager2012/dsh-community-edition) | Merge & Archive，历史归档 |

网页入口：

- [中文项目地图](index.html)
- [中文 DSH Community 产品页](dsh-community.html)
- [English DSH Community product page](dsh-community.en.html)

## 本地预览

直接在浏览器打开 `index.html`，或使用任意静态文件服务器：

```bash
python3 -m http.server 8080
```

站点无构建依赖、无运行时后端；所有产品、文档和源码链接都应回到真实仓库。
