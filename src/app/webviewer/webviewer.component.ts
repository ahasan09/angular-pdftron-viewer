import { Component, ElementRef, Input, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/pdfjs-express';

@Component({
  selector: 'app-webviewer',
  standalone: true,
  imports: [],
  templateUrl: './webviewer.component.html',
  styleUrl: './webviewer.component.css',
})
export class WebviewerComponent implements AfterViewInit, OnDestroy {
  @Input() docPath = '';
  @ViewChild('viewer', { static: true }) viewerRef!: ElementRef<HTMLDivElement>;

  loading = true;
  error: string | null = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private wvInstance: any = null;

  ngAfterViewInit(): void {
    this.launchViewer(this.viewerRef.nativeElement);
  }

  protected launchViewer(element: HTMLElement): void {
    WebViewer({ path: 'lib', initialDoc: this.docPath }, element)
      .then(instance => {
        this.wvInstance = instance;
        this.loading = false;

        const { documentViewer, annotationManager } = instance.Core;

        documentViewer.addEventListener('documentLoaded', () => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          annotationManager.addEventListener('annotationChanged', (annotations: any[], action: string) => {
            console.log(`Annotations ${action}:`, annotations.length);
          });
        });

        documentViewer.addEventListener('pageNumberUpdated', (pageNumber: number) => {
          console.log(`Current page: ${pageNumber}`);
        });
      })
      .catch((err: Error) => {
        this.error = `Failed to initialize viewer: ${err.message}`;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {
    this.wvInstance = null;
  }
}
