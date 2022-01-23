import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { OrgDataVM } from '../_models/orgDataVM';


@Injectable({
  providedIn: 'root'
})
export class OrgService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // https://localhost:5001/api/org
   getOrgData1(sOrg1: string) {

    const content_ = JSON.stringify(sOrg1); 
    // console.log(content_);
    const httpOptions_ = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<OrgDataVM[]>(this.baseUrl + 'org', content_, httpOptions_);
   } 
 
   // https://localhost:5001/api/org
   getOrgData2(sOrg2: string) {
    const content_ = JSON.stringify(sOrg2); 
    // console.log(content_);
    const httpOptions_ = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<OrgDataVM[]>(this.baseUrl + 'org', content_, httpOptions_);
   } 

   // https://localhost:5001/api/org
   getOrgData3(sOrg3: string) {
    const content_ = JSON.stringify(sOrg3); 
    // console.log(content_);
    const httpOptions_ = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<OrgDataVM[]>(this.baseUrl + 'org', content_, httpOptions_); 
   } 
}
