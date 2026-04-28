import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

@Component({ selector: 'app-webviewer', standalone: true, template: '' })
class WebviewerStub {
  @Input() docPath = '';
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    })
      .overrideComponent(AppComponent, {
        set: { imports: [WebviewerStub] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have the correct default docPath', () => {
    expect(app.docPath).toBe('files/ziadost_default.pdf');
  });

  it('should render the page header', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.header')?.textContent?.trim()).toBe('Angular PDFTron Viewer');
  });

  it('should include the webviewer component', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('app-webviewer')).toBeTruthy();
  });
});
