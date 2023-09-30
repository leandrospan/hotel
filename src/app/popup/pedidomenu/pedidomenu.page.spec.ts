import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidomenuPage } from './pedidomenu.page';

describe('PedidomenuPage', () => {
  let component: PedidomenuPage;
  let fixture: ComponentFixture<PedidomenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidomenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
