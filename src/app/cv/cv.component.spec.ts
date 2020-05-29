import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CVComponent } from './cv.component';

describe('CVComponent', () => {
  let component: CVComponent;
  let fixture: ComponentFixture<CVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
