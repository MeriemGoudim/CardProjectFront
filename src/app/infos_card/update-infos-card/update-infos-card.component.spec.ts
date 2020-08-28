import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfosCardComponent } from './update-infos-card.component';

describe('UpdateInfosCardComponent', () => {
  let component: UpdateInfosCardComponent;
  let fixture: ComponentFixture<UpdateInfosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInfosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
