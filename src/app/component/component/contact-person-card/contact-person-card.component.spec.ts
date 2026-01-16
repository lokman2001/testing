import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonCardComponent } from './contact-person-card.component';

describe('ContactPersonCardComponent', () => {
  let component: ContactPersonCardComponent;
  let fixture: ComponentFixture<ContactPersonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPersonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
