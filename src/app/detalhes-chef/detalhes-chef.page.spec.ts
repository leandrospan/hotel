import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesChefPage } from './detalhes-chef.page';

describe('DetalhesChefPage', () => {
  let component: DetalhesChefPage;
  let fixture: ComponentFixture<DetalhesChefPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhesChefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
