declare module '@pdftron/pdfjs-express' {
  interface AnnotationManager {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addEventListener(event: string, handler: (...args: any[]) => void): void;
  }

  interface DocumentViewer {
    addEventListener(event: 'documentLoaded', handler: () => void): void;
    addEventListener(event: 'pageNumberUpdated', handler: (page: number) => void): void;
  }

  interface Core {
    documentViewer: DocumentViewer;
    annotationManager: AnnotationManager;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type UI = any;

  interface WebViewerInstance {
    Core: Core;
    UI: UI;
  }

  interface WebViewerOptions {
    path: string;
    initialDoc?: string;
    enableAnnotations?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  declare function WebViewer(options: WebViewerOptions, element: HTMLElement): Promise<WebViewerInstance>;
  export default WebViewer;
}
