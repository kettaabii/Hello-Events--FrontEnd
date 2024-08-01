import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCrouselComponent } from './body-crousel.component';

describe('BodyCrouselComponent', () => {
  let component: BodyCrouselComponent;
  let fixture: ComponentFixture<BodyCrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyCrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
