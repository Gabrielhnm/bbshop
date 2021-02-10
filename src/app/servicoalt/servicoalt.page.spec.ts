import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicoaltPage } from './servicoalt.page';

describe('ServicoaltPage', () => {
  let component: ServicoaltPage;
  let fixture: ComponentFixture<ServicoaltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoaltPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicoaltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
