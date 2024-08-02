import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponentComponent } from './ticket-component.component';

describe('TicketComponentComponent', () => {
  let component: TicketComponentComponent;
  let fixture: ComponentFixture<TicketComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
