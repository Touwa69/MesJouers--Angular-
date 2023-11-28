import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJouerComponent } from './add-jouer.component';

describe('AddJouerComponent', () => {
  let component: AddJouerComponent;
  let fixture: ComponentFixture<AddJouerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJouerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJouerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
