import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profileusers } from './profileusers';

describe('Profileusers', () => {
  let component: Profileusers;
  let fixture: ComponentFixture<Profileusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profileusers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profileusers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
