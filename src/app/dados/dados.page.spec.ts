import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosPage } from './dados.page';

describe('DadosPage', () => {
  let component: DadosPage;
  let fixture: ComponentFixture<DadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
