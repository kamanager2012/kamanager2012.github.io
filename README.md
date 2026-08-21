# Kama Projects

[简体中文](README.zh-CN.md) | **English**

Static introduction site for the public projects maintained by
[kamanager2012](https://github.com/kamanager2012).

This site is an introduction and project map. It is not an online service,
MCP server, or replacement for the individual repositories.

The DeepSeek Harness section follows one product rule: `dsh-community` is the
canonical user-facing product. `deepseek-harness-suite` is Community Labs;
the handbook, plugin registry, marketplace client, and edition archive are
supporting repositories rather than competing downloads.

GitHub Latest is `v0.1.1-rc.1`, 1:1 with official kernel
`@deepseek-ai/dsh@0.1.1-rc.1`. The Release publishes Linux AppImage, Windows Setup,
and macOS dmg assets, each with a matching SHA256 file. Historical independent
numbers `v0.1.2`–`v0.1.6` are not the current download.

The five Community endpoints are WSL/Linux Terminal, Windows Desktop, macOS Desktop,
Linux AppImage, and Android. Official Web is the kernel's own UI, not a Community
endpoint. Android stays in Labs and is not on the Latest download page. Exact-artifact
smoke for `v0.1.1-rc.1` passed Windows, macOS, and Linux first-launch / missing-key
checks; the full user loop remains unverified.

The dedicated product pages are [`dsh-community.html`](dsh-community.html) and
[`dsh-community.en.html`](dsh-community.en.html).

## Local preview

Open `index.html` in a browser, or serve this directory with any static file
server:

```bash
python3 -m http.server 8080
```

The site intentionally has no build dependency or runtime backend.
