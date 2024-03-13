import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneOverlayComponent } from './zone-overlay.component';

describe('ZoneOverlayComponent', () => {
  let component: ZoneOverlayComponent;
  let fixture: ComponentFixture<ZoneOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
