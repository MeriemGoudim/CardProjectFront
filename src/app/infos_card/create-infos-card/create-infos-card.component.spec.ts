import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfosCardComponent } from './create-infos-card.component';

describe('CreateInfosCardComponent', () => {
  let component: CreateInfosCardComponent;
  let fixture: ComponentFixture<CreateInfosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInfosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
