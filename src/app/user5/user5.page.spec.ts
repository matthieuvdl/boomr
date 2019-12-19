import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { User5Page } from './user5.page';

describe('User5Page', () => {
  let component: User5Page;
  let fixture: ComponentFixture<User5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(User5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
