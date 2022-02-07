"use strict";(self.webpackChunktdmmo=self.webpackChunktdmmo||[]).push([[776],{776:(_,l,o)=>{o.r(l),o.d(l,{TimeSeriesModule:()=>w});var m=o(6019),u=o(7558),C=o(4986),S=o(1382),t=o(3668),c=o(3174),h=o(4817),v=o(2339),T=o(4947),x=o(5370),y=o(2706),p=o(8167),f=o(6400),O=o(6731);function M(n,s){if(1&n&&(t.TgZ(0,"mat-option",4),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e),t.xp6(1),t.hij(" ",e.name," ")}}function Z(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"mat-form-field",1),t.TgZ(1,"mat-label"),t._uU(2,"Selected Station"),t.qZA(),t.TgZ(3,"mat-select",2),t.NdJ("valueChange",function(r){return t.CHM(e),t.oxw().selectedStation=r})("selectionChange",function(){return t.CHM(e),t.oxw().onChange()}),t.YNc(4,M,2,2,"mat-option",3),t.qZA(),t.qZA()}if(2&n){const e=t.oxw();t.xp6(3),t.Q6J("value",e.selectedStation)("selectedOption",e.selectedStation),t.xp6(1),t.Q6J("ngForOf",e.stationOptions)}}let D=(()=>{class n{constructor(e,a,r){this.forecastTsService=e,this.router=a,this.route=r}ngOnInit(){this.route.queryParams.subscribe(e=>{this.selectedStation=this.stationOptions.find(a=>a.name===e.name)})}onChange(){!this.selectedStation||this.router.navigate(["/home","charts"],{queryParams:this.selectedStation})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.tO),t.Y36(c.F0),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stations-select-form"]],inputs:{stationOptions:"stationOptions"},decls:1,vars:1,consts:[["class","select-container",4,"ngIf"],[1,"select-container"],[3,"value","selectedOption","valueChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,a){1&e&&t.YNc(0,Z,5,3,"mat-form-field",0),2&e&&t.Q6J("ngIf",a.stationOptions)},directives:[m.O5,p.KE,p.hX,f.gD,m.sg,O.ey],styles:[".select-container[_ngcontent-%COMP%]{font-size:1.6rem;display:block;width:80%;margin:0 auto}"]}),n})();var F=o(6394);function P(n,s){if(1&n&&t._UZ(0,"app-linear-chart",9),2&n){const e=t.oxw(2);t.Q6J("data",e.tempData)}}function J(n,s){if(1&n&&t._UZ(0,"app-linear-chart",10),2&n){const e=t.oxw(2);t.Q6J("data",e.windData)}}function I(n,s){if(1&n&&(t.ynx(0),t.YNc(1,P,1,1,"app-linear-chart",7),t.YNc(2,J,1,1,"app-linear-chart",8),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.tempData[0].series.length),t.xp6(1),t.Q6J("ngIf",e.windData[0].series.length)}}function Q(n,s){1&n&&t._UZ(0,"app-chart-placeholder",11)}function Y(n,s){if(1&n&&t._UZ(0,"app-stations-select-form",12),2&n){const e=t.oxw();t.Q6J("stationOptions",e.stationsOptions)}}function U(n,s){if(1&n&&(t.ynx(0),t._UZ(1,"app-chart-map",13),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("stationLat",e.stationData.lat)("stationLon",e.stationData.lon)("markers",e.stationsMarker)}}let A=(()=>{class n{constructor(e,a,r,i){this.chartsService=e,this.route=a,this.forecastTsService=r,this.spinner=i,this.tempData=[{name:"Temperature",series:[]}],this.windData=[{name:"Wind Speed",series:[]}]}ngOnInit(){this.forecastTsService.getStations("station").subscribe(e=>{this.stationsOptions=e,this.spinner.hide()}),this.forecastTsService.getStations("marker").subscribe(e=>{this.stationsMarker=e}),this.route.queryParams.subscribe(e=>{this.stationsOptions&&this.spinner.hide(),"{}"!==JSON.stringify(e)?(this.stationData=e,this.chartsService.getChartTemp(this.stationData.pfx).subscribe(a=>{this.tempData=a}),this.chartsService.getChartWind(this.stationData.pfx).subscribe(a=>{this.windData=a})):this.stationData=null})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(B),t.Y36(c.gz),t.Y36(h.tO),t.Y36(v.t2))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-charts-page"]],decls:9,vars:4,consts:[[1,"charts-container"],[1,"charts"],[4,"ngIf"],["content","Select an Station to get started!",4,"ngIf"],[1,"sidebar"],[1,"sidebar__content"],[3,"stationOptions",4,"ngIf"],["yAxisLabel","Temperature (\xb0C)",3,"data",4,"ngIf"],["yAxisLabel","Wind Speed (m/s)",3,"data",4,"ngIf"],["yAxisLabel","Temperature (\xb0C)",3,"data"],["yAxisLabel","Wind Speed (m/s)",3,"data"],["content","Select an Station to get started!"],[3,"stationOptions"],[3,"stationLat","stationLon","markers"]],template:function(e,a){1&e&&(t._UZ(0,"app-navigation"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.YNc(3,I,3,2,"ng-container",2),t.YNc(4,Q,1,0,"app-chart-placeholder",3),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.YNc(7,Y,1,1,"app-stations-select-form",6),t.YNc(8,U,2,3,"ng-container",2),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",a.stationData),t.xp6(1),t.Q6J("ngIf",!a.stationData),t.xp6(3),t.Q6J("ngIf",a.stationsOptions),t.xp6(1),t.Q6J("ngIf",a.stationData&&a.stationsMarker))},directives:[T.J,m.O5,x.k,y.b,D,F.o],styles:[".sidebar[_ngcontent-%COMP%]{flex:0 0 25%;display:flex;background-color:#0aa19f;color:#fff;justify-content:center;font-size:2.5rem;text-align:center}.sidebar__content[_ngcontent-%COMP%]{margin-top:3rem;width:90%}.map[_ngcontent-%COMP%]{padding-top:2rem}.charts-container[_ngcontent-%COMP%]{display:flex;min-height:100vh}.charts[_ngcontent-%COMP%]{flex:0 0 75%;background-color:#f1f1f1;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:1.8rem}"]}),n})();var d=o(8053),g=o(5722),N=o(6606),L=o(8260),z=o(4522);o(7182);let B=(()=>{class n{constructor(e,a){this.http=e,this.notyf=a,this.rootUrl=L.N.apiUrl}getChartTemp(e){return this.http.get(`${this.rootUrl}/api/Charts/station-data`,{params:{station_data:e,parameter:"Temp"}}).pipe((0,d.U)(a=>{let r=[{name:"Temperature",series:[]}];a.Time=a.Time.map(i=>new Date(i));for(let i=0;i<a.Time.length;i++)r[0].series.push({name:a.Time[i],value:a.Temp[i]});return r}),(0,g.b)(()=>this.notyf.success(`${e} Temperature received`),()=>this.notyf.error(`${e} Temperature get failed`)))}getChartWind(e){return this.http.get(`${this.rootUrl}/api/Charts/station-data`,{params:{station_data:e,parameter:"wind"}}).pipe((0,d.U)(a=>{let r=[{name:"Wind Speed",series:[]}];a.Time=a.Time.map(i=>new Date(i));for(let i=0;i<a.Time.length;i++){const X=Math.sqrt(Math.pow(a.u10[i],2)+Math.pow(a.v10[i],2));r[0].series.push({name:a.Time[i],value:X})}return r}),(0,g.b)(()=>this.notyf.success(`${e} Wind Speed received`),()=>this.notyf.error(`${e} Wind Speed get failed`)))}random(){return Math.floor(5*Math.random())-10}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(z.eN),t.LFG(N.S))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const W=[{path:"",component:A}];let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(W)],c.Bz]}),n})();var b=o(8501),j=o(2117);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,$,u.UO,C.a4,S.m,p.lN,f.LD,b.Ps,j.X]]}),n})()}}]);