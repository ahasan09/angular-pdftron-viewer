# PDFTron

Angular 8 application integrating PDFTron's `@pdftron/pdfjs-express` WebViewer for in-browser PDF viewing and annotation, with an Express backend.

## Tech Stack
- Angular 8
- @pdftron/pdfjs-express (WebViewer)
- Express (backend)
- TypeScript

## Project Structure
```
pdftron/
├── src/
│   └── app/
├── server.js            # Express backend
├── angular.json
└── package.json
```

## Development
```bash
# Install dependencies
npm install

# Run Angular dev server
ng serve

# Run Express backend
node server.js
```

## Key Notes
- PDFTron WebViewer assets must be copied to the `assets/` folder as part of setup.
