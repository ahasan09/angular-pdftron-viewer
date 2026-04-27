# Improvement Plan: pdftron

## Overview
Angular 8 app integrating PDFTron's pdfjs-express WebViewer. Angular 8 is several major versions behind current (19+). PDFTron SDK has evolved significantly.

## Improvements

### Modernization (High Priority)
- Upgrade from Angular 8 to Angular 19+
- Update `@pdftron/pdfjs-express` (or consider upgrading to `@pdftron/webviewer` for the full-featured version)
- Replace TSLint with ESLint + `@angular-eslint`
- Adopt standalone components

### WebViewer Asset Handling
- Add a clear README step documenting the assets copy requirement (the `postinstall` script `tools/copy-webviewer-files.js` handles the copy automatically)

### Features
- Enable annotation tools: highlight, underline, sticky notes, freehand drawing
- Add document comparison mode
- Add form field filling support
- Add digital signature capability (if using the full WebViewer license)

### Testing
- Add unit tests for the document loading service
- Add Playwright e2e tests for opening a PDF and basic viewer interactions

### Code Quality
- Enable TypeScript `strict` mode
- Add proper error handling for WebViewer initialization failures
- Add a loading spinner while the WebViewer initializes

### DevOps
- Add GitHub Actions CI: lint + test + build
- Document any license key requirements for PDFTron WebViewer in the README
