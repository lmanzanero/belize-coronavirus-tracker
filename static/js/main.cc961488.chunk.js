(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/belize-flag.718e720a.png"},22:function(e,a,t){e.exports=t.p+"static/media/positive.c236a5d9.png"},23:function(e,a,t){e.exports=t.p+"static/media/recovered.5dde9d14.png"},24:function(e,a,t){e.exports=t.p+"static/media/negative.d3b06c15.png"},25:function(e,a,t){e.exports=t.p+"static/media/swab.3accb93f.png"},26:function(e,a,t){e.exports=t.p+"static/media/death.7f2974b3.png"},27:function(e,a,t){e.exports=t.p+"static/media/search.11438bda.png"},28:function(e,a,t){e.exports=t.p+"static/media/active.14662814.png"},30:function(e,a,t){e.exports=t.p+"static/media/virus.13a9fbc1.png"},31:function(e,a,t){e.exports=t(59)},36:function(e,a,t){},37:function(e,a,t){},59:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(7),s=(t(36),t(21)),c=t.n(s),l=t(22),o=t.n(l),m=t(23),d=t.n(m),u=t(24),p=t.n(u),v=t(25),g=t.n(v),b=t(26),f=t.n(b),E=t(27),h=t.n(E),y=t(28),N=t.n(y),C=(t(37),t(1)),S=t(3),x=t.n(S),B=function(){return x.a.get("https://covid19.mathdro.id/api/countries/belize/confirmed")},w=function(){return x.a.get("https://api.covid19api.com/total/dayone/country/belize/status/confirmed")},A=function(){return x.a.get("https://api.covid19api.com/country/belize/status/deaths/live")},I=function(){return x.a.get("https://api.covid19api.com/country/belize/status/recovered/live")},j=function(){return x.a.get("https://api.covid19api.com/country/belize/status/confirmed/live")},k=function(){return x.a.get("https://services6.arcgis.com/8TOGEuvqHhwQHCke/arcgis/rest/services/MOH_Infographics_CountryIndicator/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=ObjectId%2CConfirmed%2CDate&orderByFields=Date%20asc&resultOffset=0&resultRecordCount=32000&resultType=standard&cacheHint=true")},z=function(){return x.a.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/Covid_district_cases_point_view_aug06/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=district&orderByFields=value%20desc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmcases%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&resultType=standard&cacheHint=true")},O=function(){return x.a.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/country_covid19_cases/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmale%22%2C%22outStatisticFieldName%22%3A%22confirmale%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmfemale%22%2C%22outStatisticFieldName%22%3A%22confirmfemale%22%7D%5D&resultType=standard&cacheHint=true")},D=t(4),T=t.n(D),F=function(){var e=Object(C.a)("casesbydistrict",z),a=e.data,t=e.isLoading;return Object(r.useEffect)((function(){if(t);else{var e=a.data.features.map((function(e){return{name:e.attributes.district,value:e.attributes.value}})),r=e.map((function(e){return e.name})),n=e.map((function(e){return e.value})),i=document.getElementById("casesByDistrict");new T.a(i,{type:"bar",data:{labels:r,datasets:[{label:"Cases",data:n,backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderColor:["rgba(255, 99, 132, )","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,title:{display:!0,text:"Cases by District",fontSize:30}}})}}),[t]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByDistrict"})))},L=t(29),R=t(8),M=t.n(R),_=t(10),H=function(){var e=Object(C.a)("timelinecases",w),a=e.data,t=e.isLoading,i=(e.error,["January","February","March","April","May","June","July","August","September","October","November","December"]);Object(r.useEffect)((function(){var e=document.getElementById("casesByTimelineCart");new T.a(e,{type:"line",data:{labels:t?[]:i,datasets:[{label:"Cases",data:[0,0,3,18,18,24,48,1007,1825],backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 100, 64, 0.7)"],borderColor:["rgba(54, 162, 235, 0.9)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom",display:!1},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Cases by Month",fontSize:30}}})}),[t]);var s=function(){var e=Object(_.a)(M.a.mark((function e(){var r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t?[]:a.data.map((function(e){return{date:new Date(e.Date).getMonth(),cases:e.Cases}})),e.abrupt("return",r);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(){var e=Object(_.a)(M.a.mark((function e(){var a,t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(0==(a=e.sent).length){e.next=6;break}return t=i.map((function(e,t){var r=a.filter((function(e){return e.date===t}));return Object(L.a)({},e,0===r.length?0:Math.max.apply(Math,r.map((function(e){return e.cases}))))})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(e){})),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByTimelineCart",style:{margin:0,padding:0}})))},W=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute to the source code, feel free to do so ",n.a.createElement("a",{href:"https://github.com/lmanzanero/belize-coronavirus-tracker",target:"_blank",rel:"noopener noreferrer"},"here"),n.a.createElement("span",{role:"img","aria-label":"globe",alt:"globe"}," \ud83c\udf0e\ud83c\udde7\ud83c\uddff")),n.a.createElement("div",{className:"contributors"}))},G=t(11),U=t(6),J=t.n(U),Y=t(30),V=t.n(Y);function q(){return Object(r.useEffect)((function(){var e=J.a.map("mapid").setView([17.1899,-88.4976],8);J.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(e);var a=J.a.icon({iconUrl:V.a,iconSize:[20,20],iconAnchor:[20,20],popupAnchor:[-3,-76]});J.a.marker([17.1899,-88.4976],{icon:a}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup();var t=J.a.popup();e.on("click",(function(a){t.setLatLng(a.latlng).setContent("You clicked the map at "+a.latlng.toString()).openOn(e)}))}),[]),n.a.createElement("div",{id:"mapid"})}var P=function(){var e=Object(C.a)("getcasesbygender",O),a=e.data,t=e.isLoading;return Object(r.useEffect)((function(){if(a){var e=a.data.features[0].attributes,t=e.confirmale,r=e.confirmfemale,n=document.getElementById("casesByGenderChart");new T.a(n,{type:"pie",data:{labels:["Male","Female"],datasets:[{label:"# of Votes",data:[t,r],backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom"},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Cases by Gender",fontSize:30}}})}}),[t]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByGenderChart",style:{margin:0,padding:0}})))},Z=function(){var e=Object(C.a)("deathtimelinecases",k).isLoading;return n.a.createElement("div",{className:"chart ".concat(e?"loading":"")},n.a.createElement("div",{className:"chart-inner"},e?"loading...":"data"))},Q=t(9),X=t.n(Q);function K(){var e=Object(C.a)("livetimelinecases",j),a=e.data,t=e.isLoading,i=Object(C.a)("livetimelinerecoveredcases",I),s=i.data,c=i.isLoading,l=Object(C.a)("livetimelinedeathscases",A),o=l.data,m=l.isLoading;return Object(r.useEffect)((function(){var e={data:{datasets:[{label:" \ud83e\udda0 Confirmed",backgroundColor:"#f6cd61",borderColor:"#f6cd61",data:n(a),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \ud83e\udd73 Recovered",backgroundColor:"#0e9aa7",borderColor:"#0e9aa7",data:n(s),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \u2620\ufe0f Deaths",backgroundColor:"#fe8a71",borderColor:"#fe8a71",data:n(o),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4}]},options:{maintainAspectRatio:!1,responsive:!0,animation:{duration:0},title:{display:!0,text:"Belize \ud83e\udda0 Coronavirus \ud83e\udda0 Curve",fontSize:30},legend:{display:!0,position:"bottom"},scales:{xAxes:[{type:"time",distribution:"series",offset:!0,ticks:{major:{enabled:!0,fontStyle:"bold"},source:"data",autoSkip:!0,autoSkipPadding:75,maxRotation:0,sampleSize:100},afterBuildTicks:function(e,a){var t,r,n,i,s,c,l=e._majorUnit,o=a[0];for(n=X()(a[0].value),"minute"===l&&0===n.second()||"hour"===l&&0===n.minute()||"day"===l&&9===n.hour()||"month"===l&&n.date()<=3&&1===n.isoWeekday()||"year"===l&&0===n.month()?o.major=!0:o.major=!1,c=n.get(l),t=1,r=a.length;t<r;t++)i=a[t],s=(n=X()(i.value)).get(l),i.major=s!==c,c=s;return a}}],yAxes:[{gridLines:{drawBorder:!1},scaleLabel:{display:!0,labelString:"\ud83e\udda0 cases"}}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"";return t&&(t+=": "),t+=parseFloat(e.value).toFixed(2),t}}}}};if(!t||!c||!m){var r=document.getElementById("liveCasesByTimelineCart");new T.a(r,e)}function n(e){if(e)return e.data.map((function(e){return{t:new Date(e.Date).getTime(),y:"".concat(e.Cases)}}))}}),[t,c,m]),n.a.createElement("div",{className:"chart ".concat(t||c||m?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"liveCasesByTimelineCart",style:{margin:"0",padding:0}}),n.a.createElement("div",null,n.a.createElement("select",{id:"type"},n.a.createElement("option",{value:"line"},"Line"),n.a.createElement("option",{value:"bar"},"Bar")),n.a.createElement("select",{id:"unit",defaultChecked:!0},n.a.createElement("option",{value:"second"},"Second"),n.a.createElement("option",{value:"minute"},"Minute"),n.a.createElement("option",{value:"hour"},"Hour"),n.a.createElement("option",{value:"day",checked:!0},"Day"),n.a.createElement("option",{value:"month"},"Month"),n.a.createElement("option",{value:"year"},"Year")))))}var $=function(){var e=Object(C.a)("latestdata",B),a=e.data,t=e.isLoading;return G.a.initialize("UA-175547717-1"),G.a.pageview(window.location.pathname+window.location.search),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",null,n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")," Belize Coronavirus (covid-19) cases and live updates ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("h4",null,"\ud83c\udde7\ud83c\uddff Total Cases: ",t?"loading...":a.data[0].confirmed," \ud83c\udde7\ud83c\uddff ",n.a.createElement("br",null),n.a.createElement("br",null)," ",n.a.createElement("span",null,"Last Updated: ",t?"loading...":Date(Number(a.data[0].lastUpdate)))),n.a.createElement("div",{className:"screening-data"},n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Test Done"),n.a.createElement("img",{src:g.a,alt:"Belize Coronavirus updates"}),n.a.createElement("p",{className:"text"},"5,855")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Under Investigation"),n.a.createElement("img",{src:h.a,alt:"Belize Coronavirus under investigation"}),n.a.createElement("p",{className:"text"},"412")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Negative"),n.a.createElement("img",{src:p.a,alt:"Belize negative cases"}),n.a.createElement("p",{className:"text"},"5,186")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Confirmed"),n.a.createElement("img",{src:o.a,alt:"Belize Coronavirus confirmed"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":a.data[0].confirmed," ")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Deseased"),n.a.createElement("img",{src:f.a,alt:"Belize Coronavirus deseased"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":a.data[0].deaths)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Recovered"),n.a.createElement("img",{src:d.a,alt:"Belize Coronavirus recovered"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":a.data[0].recovered)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Active"),n.a.createElement("img",{src:N.a,alt:"Belize Coronavirus Active cases"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":a.data[0].active)))),n.a.createElement("div",{className:"grid-2"},n.a.createElement(F,null),n.a.createElement(P,null)),n.a.createElement("div",{className:"grid-2"},n.a.createElement(H,null),n.a.createElement(Z,null)),n.a.createElement("div",{className:"container"},n.a.createElement(K,null)),n.a.createElement("div",{className:"map-container"},n.a.createElement("div",{className:"map-container-inner"},n.a.createElement("div",null,n.a.createElement("h1",{className:"paper-title"},"View Cases on Map"),n.a.createElement("div",{className:"districts-row"},n.a.createElement("div",{className:"district"},"Corozal"),n.a.createElement("div",{className:"district"},"Belize"),n.a.createElement("div",{className:"district"},"Orange Walk"),n.a.createElement("div",{className:"district"},"Cayo"),n.a.createElement("div",{className:"district"},"Stran Creek"),n.a.createElement("div",{className:"district"},"Toledo")),n.a.createElement("div",{className:"affected-areas"},n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")))),n.a.createElement(q,null))),n.a.createElement(W,null))},ee=document.getElementById("root");ee.hasChildNodes()?Object(i.hydrate)(n.a.createElement($,null),ee):Object(i.render)(n.a.createElement($,null),ee)}},[[31,1,2]]]);
//# sourceMappingURL=main.cc961488.chunk.js.map