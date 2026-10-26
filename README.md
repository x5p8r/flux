# Flux
Static site: plain HTML/CSS/vanilla JS, ES modules, no build. 27 tools, Developer page, English + Arabic (RTL). Language strings live in `assets/js/i18n.js` (add a new tool's Arabic name/description there).
**Run:** `python3 -m http.server 8080` in this folder, open http://localhost:8080 (modules need http, not file://).
**Deploy:** upload the folder to any static host. All paths are relative, so subfolders work.
**Add a tool:** add an entry to `assets/js/registry.js` (`mod:'dev-tools'` reuses `assets/js/tools/dev-tools.js`, or create `assets/js/tools/<id>.js` with a default export `el => …`), then add `tools/<id>.html` (copy an existing tool page and change the title and `data-tool`).
**Dependency:** QR generator loads `qrcode-generator@1.4.4` from cdnjs on first use.
