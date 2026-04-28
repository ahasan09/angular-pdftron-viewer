/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebviewerComponent } from './webviewer.component';

describe('WebviewerComponent', () => {
  let component: WebviewerComponent;
  let fixture: ComponentFixture<WebviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebviewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebviewerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show loading spinner initially', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    const spinner = fixture.nativeElement.querySelector('.spinner');
    expect(spinner).toBeTruthy();
  });

  it('should accept docPath input', () => {
    spyOn(component as any, 'launchViewer');
    component.docPath = 'test/document.pdf';
    fixture.detectChanges();
    expect(component.docPath).toBe('test/document.pdf');
  });

  it('should hide loading and remove spinner after init completes', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    component.loading = false;
    fixture.detectChanges();
    expect(component.loading).toBeFalse();
    const spinner = fixture.nativeElement.querySelector('.spinner-overlay');
    expect(spinner).toBeNull();
  });

  it('should display error banner when viewer fails to initialize', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    component.error = 'Failed to initialize viewer: asset not found';
    component.loading = false;
    fixture.detectChanges();
    const errorEl: HTMLElement | null = fixture.nativeElement.querySelector('.error-banner');
    expect(errorEl).toBeTruthy();
    expect(errorEl?.textContent).toContain('Failed to initialize viewer');
  });

  it('should not show error banner when no error', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    component.loading = false;
    fixture.detectChanges();
    const errorEl = fixture.nativeElement.querySelector('.error-banner');
    expect(errorEl).toBeNull();
  });

  it('should clean up instance on destroy', () => {
    spyOn(component as any, 'launchViewer');
    fixture.detectChanges();
    (component as any).wvInstance = { some: 'instance' };
    component.ngOnDestroy();
    expect((component as any).wvInstance).toBeNull();
  });
});
