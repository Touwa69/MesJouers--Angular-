import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JouersComponent } from './jouers.component';

describe('JouersComponent', () => {
  let component: JouersComponent;
  let fixture: ComponentFixture<JouersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JouersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JouersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
