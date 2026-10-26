# Flux
Static site: plain HTML/CSS/vanilla JS, ES modules, no build. 27 tools, Developer page, English + Arabic (RTL). Language strings live in `assets/js/i18n.js` (add a new tool's Arabic name/description there).
**Run:** `python3 -m http.server 8080` in this folder, open http://localhost:8080 (modules need http, not file://).
**Deploy:** upload the folder to any static host. All paths are relative, so subfolders work.
**Add a tool:** add an entry to `assets/js/registry.js` (`mod:'dev-tools'` reuses `assets/js/tools/dev-tools.js`, or create `assets/js/tools/<id>.js` with a default export `el => …`), then add `tools/<id>.html` (copy an existing tool page and change the title and `data-tool`).
**Dependency:** QR generator loads `qrcode-generator@1.4.4` from cdnjs on first use.


## License

Copyright (c) 2026 [Your Name or Company Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Copyright / Ownership

This project and all original content created for it are the property of
[Your Name/Company Name], unless otherwise stated. All rights reserved.

Any third-party code, libraries, assets, or resources included in this project
remain the property of their respective owners and are subject to their
respective licenses.


## Third-Party Assets

This project may include third-party libraries, assets, or code. These
components are used under their original licenses and remain the property of
their respective authors. Where applicable, notices and license files are
included in the relevant directories.
