import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountinfosPage } from './accountinfos.page';

describe('AccountinfosPage', () => {
  let component: AccountinfosPage;
  let fixture: ComponentFixture<AccountinfosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountinfosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountinfosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
