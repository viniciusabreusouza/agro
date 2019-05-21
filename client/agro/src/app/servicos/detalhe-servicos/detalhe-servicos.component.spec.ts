import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheServicosComponent } from './detalhe-servicos.component';

describe('DetalheServicosComponent', () => {
  let component: DetalheServicosComponent;
  let fixture: ComponentFixture<DetalheServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
