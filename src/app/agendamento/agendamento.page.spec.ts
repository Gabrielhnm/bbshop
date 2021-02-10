import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendamentoPage } from './agendamento.page';

describe('AgendamentoPage', () => {
  let component: AgendamentoPage;
  let fixture: ComponentFixture<AgendamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
