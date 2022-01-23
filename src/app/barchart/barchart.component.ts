import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { OrgDataVM } from '../_models/orgDataVM';
import { OrgService } from '../_services/org.service';


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  org1: OrgDataVM[];
  org2: OrgDataVM[];
  org3: OrgDataVM[];
  org1num: number[];
  org2num: number[];
  org3num: number[];
   public barChartOptions: ChartOptions = {
    responsive: true,
    };
   
   // public barChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
   public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   public barChartType: ChartType = 'line';
   public barChartLegend = true;
   public barChartPlugins = [];
   public barChartData: ChartDataset[] = [
    { data: [], label: 'Organization 1' },
    { data: [], label: 'Organization 2' },
    { data: [], label: 'Organization 3' }
  ];
 
   /*
   public barChartData: ChartDataset[] = [
    { data: [100, 120, 115, 140,  98, 110, 180, 200, 150, 145, 130, 115], label: 'Organization 1' },
    { data: [150, 110, 180, 145, 100, 118,  90, 135, 160, 105, 180, 120], label: 'Organization 2' },
    { data: [170, 150, 100, 165, 181, 119, 145, 210, 191, 185, 140, 121], label: 'Organization 3' }
  ];
   */
    
  constructor(private orgService: OrgService) { }

  ngOnInit(): void {
    this.getOrgData();  
  }

  getOrgData() {
    this.orgService.getOrgData1('Organization1').subscribe(result => {
       this.org1 = result;
       this.org1num = this.org1.map(a => a.empQut);
       this.barChartData[0].data = this.org1num;
       },error => {
       console.log(error);
       });
     
      this.orgService.getOrgData2('Organization2').subscribe(result => {
       this.org2 = result;
       this.org2num = this.org2.map(a => a.empQut);
       this.barChartData[1].data = this.org2num; 
      },error => {
       console.log(error);
       });

      this.orgService.getOrgData3('Organization3').subscribe(result => {
       this.org3 = result;
       this.org3num = this.org3.map(a => a.empQut);
       this.barChartData[2].data = this.org3num;
      },error => {
       console.log(error);
       });
    
      }

}
