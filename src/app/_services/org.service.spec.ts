import { TestBed} from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
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

  it("should check post request getOrgData1", () => {
    const intText = "Organization1";
    service.getOrgData1(intText);
    expect(service.getOrgData1.length).toBeGreaterThanOrEqual(1);
  });


  it("should check post request getOrgData2", () => {
    const intText = "Organization2";
    service.getOrgData2(intText);
    expect(service.getOrgData2.length).toBeGreaterThanOrEqual(1);
  });

  it("should check post request getOrgData3", () => {
    const intText = "Organization3";
    service.getOrgData3(intText);
    expect(service.getOrgData3.length).toBeGreaterThanOrEqual(1);
  });

});
