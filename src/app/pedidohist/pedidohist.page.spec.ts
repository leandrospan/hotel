import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidohistPage } from './pedidohist.page';

describe('PedidohistPage', () => {
  let component: PedidohistPage;
  let fixture: ComponentFixture<PedidohistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PedidohistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
