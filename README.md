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

The current release facts are kept separate: code line `0.1.2`, Stable
`v0.1.2`, and `v0.1.2-preview` as an older Preview record. The `v0.1.2`
GitHub Release publishes Linux AppImage, Windows NSIS, and macOS dmg assets,
each with a matching SHA256 file.

The dedicated product pages are [`dsh-community.html`](dsh-community.html) and
[`dsh-community.en.html`](dsh-community.en.html).

## Local preview

Open `index.html` in a browser, or serve this directory with any static file
server:

```bash
python3 -m http.server 8080
```

The site intentionally has no build dependency or runtime backend.
