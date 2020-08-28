import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCardDetailsComponent } from './infos-card-details.component';

describe('InfosCardDetailsComponent', () => {
  let component: InfosCardDetailsComponent;
  let fixture: ComponentFixture<InfosCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
