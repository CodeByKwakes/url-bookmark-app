import { async, TestBed } from '@angular/core/testing';
import { StorageModule } from './storage.module';

describe('StorageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StorageModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(StorageModule).toBeDefined();
  });
});
