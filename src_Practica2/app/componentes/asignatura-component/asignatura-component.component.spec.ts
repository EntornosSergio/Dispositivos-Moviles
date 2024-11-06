import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaComponentComponent } from './asignatura-component.component';

describe('AsignaturaComponentComponent', () => {
  let component: AsignaturaComponentComponent;
  let fixture: ComponentFixture<AsignaturaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaturaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
