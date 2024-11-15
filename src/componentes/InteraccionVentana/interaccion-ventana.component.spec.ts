import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteraccionVentanaComponent } from './interaccion-ventana.component';

describe('InteraccionVentanaComponent', () => {
  let component: InteraccionVentanaComponent;
  let fixture: ComponentFixture<InteraccionVentanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteraccionVentanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteraccionVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
