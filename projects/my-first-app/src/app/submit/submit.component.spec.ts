// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { SubmitComponent } from './submit.component';

// describe('SubmitComponent', () => {
//   let component: SubmitComponent;
//   let fixture: ComponentFixture<SubmitComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ SubmitComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SubmitComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



import {beforeEach, bootstrap, describe, getEl, it, setupModule} from '@angular/catalyst';
import { SubmitComponent } from './submit.component';


describe('Submit Component', () => {
  beforeEach(() => {
    setupModule({
      declarations: [SubmitComponent],
    });
  });

  it('should create the Submit', () => {
    const app = bootstrap(SubmitComponent);
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-Submit-component'`, () => {
    const app = bootstrap(SubmitComponent);
    expect(app.title).toEqual('my-Submit-component');
  });

  it('should render title', () => {
    bootstrap(SubmitComponent);
    expect(getEl('.content span')?.textContent)
        .toContain('my-Submit-component app is running!');
  });
});
