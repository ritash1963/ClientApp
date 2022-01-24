import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OrgService } from './org.service';

describe('OrgService', () => {
  let service: OrgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule]
    });
    service = TestBed.inject(OrgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
