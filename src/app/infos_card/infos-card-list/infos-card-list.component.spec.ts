import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCardListComponent } from './infos-card-list.component';

describe('InfosCardListComponent', () => {
  let component: InfosCardListComponent;
  let fixture: ComponentFixture<InfosCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
