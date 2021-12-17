import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAuthUserComponent } from './create-auth-user.component';

describe('CreateAuthUserComponent', () => {
  let component: CreateAuthUserComponent;
  let fixture: ComponentFixture<CreateAuthUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAuthUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAuthUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
