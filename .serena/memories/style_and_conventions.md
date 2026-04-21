# Style and conventions
- Keep the site restrained, premium, and B2B-oriented; avoid flashy gradients, emoji, and generic AI-style UI patterns.
- Use shared styling from `style.css` and preserve the existing design system tokens, typography choices, rounded surfaces, and spacing rhythm.
- JavaScript should stay ES6+ (`const`/`let`, arrow functions, template literals, `URLSearchParams`, `closest`, etc.) and remain framework-free.
- Prefer semantic HTML sections and reusable data-driven rendering in `script.js` instead of inline event handlers.
- Keep navigation simple: one-page anchors on `index.html`, real page navigation to `products.html`, and URL query params for product/category state.