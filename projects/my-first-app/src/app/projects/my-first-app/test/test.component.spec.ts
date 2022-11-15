import {beforeEach, bootstrap, describe, it, setupModule} from '@angular/catalyst';

import {TestComponent} from './test.component';

describe('TestComponent', () => {
  beforeEach(() => {
    setupModule({
      declarations: [TestComponent],
    });
  });

  it('should create', () => {
    const testComponent = bootstrap(TestComponent);
    expect(testComponent).toBeTruthy();
  });
});
