# Project overview
- Purpose: static marketing website for industrial/trading equipment supplier TECHPRO with a one-page landing page and a separate products/catalog page.
- Tech stack: plain HTML, CSS, and ES6+ JavaScript modules, loaded directly in the browser with no build system.
- Structure: `index.html` is the main one-page landing; `products.html` is the dedicated catalog/product page; `style.css` contains the shared visual system and responsive layout; `script.js` contains shared UI logic, navigation, catalog rendering, filters, detail rendering, and form handling.
- Runtime: served as static files via any simple HTTP server on Windows.
- Notes: there is no backend or package manager in the repo; forms are front-end only and show success states locally.