import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { User4Page } from './user4.page';

describe('User4Page', () => {
  let component: User4Page;
  let fixture: ComponentFixture<User4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(User4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
