
import {beforeEach, bootstrap, describe, it, setupModule} from '@angular/catalyst';

import {MyLibComponent} from './my-lib.component';

describe('MyLibComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [MyLibComponent],
    });
  });

  it('should create MyLibComponent', () => {
    const app = bootstrap(MyLibComponent);
    expect(app).toBeTruthy();
  });
});
