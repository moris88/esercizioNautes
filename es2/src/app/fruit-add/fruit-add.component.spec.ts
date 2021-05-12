import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitAddComponent } from './fruit-add.component';

describe('FruitAddComponent', () => {
  let component: FruitAddComponent;
  let fixture: ComponentFixture<FruitAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
