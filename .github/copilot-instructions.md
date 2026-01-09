# Mediapolis Website - AI Coding Guidelines

## Architecture Overview
This is a static HTML website for an Italian mediation company (Mediapolis S.r.l.). The site consists of 8 HTML pages served directly without build tools. All pages share a common header/footer structure with navigation.

**Key Components:**
- **HTML Pages**: `index.html` (home), `mediazione.html`, `formazione.html`, `download.html`, `mediatori.html`, `contatti.html`, `procedura-di-mediazione.html`, `sedi.html`
- **Assets**: `css/style.css` (shared styles), `js/menu.js` (mobile nav), `js/popup.js` (window popups), `grf/` (graphics), `img/` (images)

## Development Patterns

### HTML Structure
Always include the standard page template:
```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="utf-8">
    <title>Mediapolis: [PAGE TITLE]</title>
    <link rel="stylesheet" href="css/style.css?v=20251113">
</head>
<body class="[page-class]">
    <header class="site-header">[nav content]</header>
    <script src="js/menu.js" defer></script>
    <main>[page content]</main>
    <footer>[footer content]</footer>
</body>
</html>
```

### CSS Conventions
- Use CSS custom properties from `:root` for colors (e.g., `var(--color-primary)`)
- Responsive design with `@media (max-width: 800px)` breakpoint
- Flexbox layouts with `.container` class (max-width: 1100px)
- Maintain Italian content language - no English text in user-facing elements

### JavaScript Usage
- **Menu Toggle**: Use `menu.js` for mobile navigation (already included)
- **Popups**: Call `popup(url)` or `popup_accessori(url)` for external links/forms
- Minimal JS - prefer CSS-only solutions when possible

### File Organization
- HTML files in root directory
- Assets in `css/`, `js/`, `grf/`, `img/` subdirectories
- Update CSS version query string (`?v=20251113`) when modifying styles

### Content Guidelines
- All user-facing text must be in Italian
- Maintain professional tone for legal/mediation services
- Use semantic HTML with proper headings hierarchy
- Include accessibility attributes (aria-label, aria-expanded) as shown in existing code

### Deployment
No build process - deploy static files directly. Test responsiveness on mobile devices before committing changes.</content>
<parameter name="filePath">c:\Users\Domenico\Desktop\mediapolis\.github\copilot-instructions.md