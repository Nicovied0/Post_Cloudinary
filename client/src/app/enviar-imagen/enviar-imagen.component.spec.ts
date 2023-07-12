import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarImagenComponent } from './enviar-imagen.component';

describe('EnviarImagenComponent', () => {
  let component: EnviarImagenComponent;
  let fixture: ComponentFixture<EnviarImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarImagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
