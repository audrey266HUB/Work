import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmploisPage } from './emplois.page';

describe('EmploisPage', () => {
  let component: EmploisPage;
  let fixture: ComponentFixture<EmploisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmploisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
