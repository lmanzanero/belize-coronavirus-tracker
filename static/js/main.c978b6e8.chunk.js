(this.webpackJsonpreactcharts=this.webpackJsonpreactcharts||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/belize-flag.718e720a.png"},25:function(e,a,t){e.exports=t.p+"static/media/positive.c236a5d9.png"},26:function(e,a,t){e.exports=t.p+"static/media/recovered.5dde9d14.png"},27:function(e,a,t){e.exports=t.p+"static/media/negative.d3b06c15.png"},28:function(e,a,t){e.exports=t.p+"static/media/swab.3accb93f.png"},29:function(e,a,t){e.exports=t.p+"static/media/death.7f2974b3.png"},30:function(e,a,t){e.exports=t.p+"static/media/search.11438bda.png"},31:function(e,a,t){e.exports=t.p+"static/media/active.14662814.png"},32:function(e,a,t){e.exports=t.p+"static/media/virus.13a9fbc1.png"},33:function(e,a,t){e.exports=t(60)},38:function(e,a,t){},39:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(7),l=(t(38),t(12)),s=t(24),o=t.n(s),c=t(25),d=t.n(c),m=t(26),u=t.n(m),p=t(27),v=t.n(p),b=t(28),g=t.n(b),f=t(29),E=t.n(f),h=t(30),y=t.n(h),C=t(31),N=t.n(C),k=(t(39),t(1)),S=t(3),w=t.n(S),O=function(){return w.a.get("https://covid19.mathdro.id/api/countries/belize/confirmed")},z=function(){return w.a.get("https://api.covid19api.com/total/country/belize")},T=function(){return w.a.get("https://api.covid19api.com/total/dayone/country/belize/status/confirmed")},A=function(){return w.a.get("https://api.covid19api.com/country/belize/status/deaths/live")},B=function(){return w.a.get("https://api.covid19api.com/country/belize/status/recovered/live")},j=function(){return w.a.get("https://api.covid19api.com/country/belize/status/confirmed/live")},x=function(){return w.a.get("https://services6.arcgis.com/8TOGEuvqHhwQHCke/arcgis/rest/services/DistrictIndicators/FeatureServer/0/query?f=json&where=(Last_Update%20%3D%20%27Yes%27)%20AND%20(Last_Update%3D%27Yes%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=Area&orderByFields=value%20desc&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Cases%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&outSR=102100&resultType=standard&cacheHint=true")},D=function(){return w.a.get("https://services6.arcgis.com/fbMLjLVHNRUxmuIA/arcgis/rest/services/country_covid19_cases/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmale%22%2C%22outStatisticFieldName%22%3A%22confirmale%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22confirmfemale%22%2C%22outStatisticFieldName%22%3A%22confirmfemale%22%7D%5D&resultType=standard&cacheHint=true")},I=function(){return w.a.get("https://api.github.com/repos/lmanzanero/belize-coronavirus-tracker/contributors")},F=function(){return w.a.get("https://services6.arcgis.com/8TOGEuvqHhwQHCke/arcgis/rest/services/CommunityCases/FeatureServer/0/query?f=json&where=((LastUpdate%20%3D%20%27Yes%27)%20AND%20(DailyCases%20IS%20NOT%20NULL))%20AND%20(LastUpdate%3D%27Yes%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=DISTRICT%20asc%2CSETTNAME%20asc&outSR=102100&resultOffset=0&resultRecordCount=100&resultType=standard&cacheHint=true")},L=t(5),R=t.n(L);var W=function(){var e=Object(k.a)("casesbydistrict",x,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading;return Object(r.useEffect)((function(){if(a){var e=null===a||void 0===a?void 0:a.data.features.map((function(e){return{name:e.attributes.Area,value:e.attributes.value}})),r=e.map((function(e){return a=e.name,t=10,a&&a.length>t?a.slice(0,t).split(" ").slice(0,-1).join(" ")+"...":a;var a,t})),n=e.map((function(e){return e.value})),i=document.getElementById("casesByDistrict");new R.a(i,{type:"bar",data:{labels:t?[]:r,datasets:[{label:"Cases",data:n,backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.1)"],borderColor:["rgba(255, 99, 132, )","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},maintainAspectRatio:!1,responsive:!0,title:{display:!0,text:"Cases by District",fontSize:30}}})}}),[t,a]),n.a.createElement("div",{className:"chart ".concat(t&&!a?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByDistrict"})))},M=t(13),_=t(11),P=function(){var e=Object(k.a)("timelinecases",T,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading,i=(e.error,["Jan..","Feb..","Mar..","Apr..","May..","Jun..","Jul..","Aug..","Sep..","Oct...","Nov...","Dec..."]),l=n.a.useCallback((function(){return t?[]:null===a||void 0===a?void 0:a.data.map((function(e){return{date:new Date(e.Date).getMonth(),cases:e.Cases}}))}),[a,t]),s=n.a.useCallback((function(){var e=[],a=l();if(0!==a.length)return i.map((function(e,t){var r=a.filter((function(e){return e.date===t}));return Object(_.a)({},e,0===r.length?0:Math.max.apply(Math,r.map((function(e){return e.cases}))))})).map((function(a){var t=Object.values(a);e.push.apply(e,Object(M.a)(t))})),e}),[l,i]);return Object(r.useEffect)((function(){var e=document.getElementById("casesByTimelineCart");new R.a(e,{type:"line",data:{labels:t?[]:i,datasets:[{label:"Cases",data:t?[0,0,3,18,18,24,48,1007,1825,2243]:s(),backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 100, 64, 0.7)","rgba(255, 99, 132, 0.3)"],borderColor:["rgba(54, 162, 235, 0.9)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom",display:!1},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Total Cases by Month",fontSize:30}}})}),[s,t,i]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByTimelineCart",style:{margin:0,padding:0}})))},U=function(){var e=Object(k.a)("getgithubcontributors",I,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading;return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"This site is to show the latest on coronavirus cases based on official reports made from Belize. If you would like to contribute to the source code, feel free to do so"," ",n.a.createElement("a",{href:"https://github.com/lmanzanero/belize-coronavirus-tracker",target:"_blank",rel:"noopener noreferrer"},"here"),n.a.createElement("span",{role:"img","aria-label":"globe"}," ","\ud83c\udf0e\ud83c\udde7\ud83c\uddff")),n.a.createElement("div",{className:"contributors"},n.a.createElement("p",null,n.a.createElement("i",null,"All Contributors")," ",n.a.createElement("span",null,"(",t?"loading...":null===a||void 0===a?void 0:a.data.length,")")),t&&a?"loading...":null===a||void 0===a?void 0:a.data.map((function(e){return n.a.createElement("a",{href:e.html_url,key:e.id,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.avatar_url,alt:"users"}))}))))},J=t(14),Y=t(4),G=t.n(Y),H=t(32),q=t.n(H);function V(){var e=Object(k.a)("communitycases",F,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading,i=(e.error,Object(r.useState)([])),s=Object(l.a)(i,2);s[0],s[1];return Object(r.useEffect)((function(){var e=G.a.map("mapid").setView([17.1899,-88.4976],8);t&&a&&function(e,a){var t={};console.log(e);for(var r=0;r<e.length;r++){var n=e[r];-1===Object.keys(t).indexOf(n[a])&&(t[n[a]]=[]),t[n[a]].push(n)}return t}(null===a||void 0===a?void 0:a.data.features.map((function(e){return{name:null===e||void 0===e?void 0:e.attributes.DISTRICT,x:null===e||void 0===e?void 0:e.attributes.x,y:null===e||void 0===e?void 0:e.attributes.y,village:null===e||void 0===e?void 0:e.attributes.SETTNAME}})),"name").Belize.forEach((function(a){console.log(a),G.a.marker([a.x,a.y],{icon:r}).addTo(e).bindPopup("<b>".concat(a.village,": cases \ud83e\udda0</b>")).openPopup()}));G.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1}).addTo(e);var r=G.a.icon({iconUrl:q.a,iconSize:[20,20],iconAnchor:[20,20],popupAnchor:[-3,-76]});G.a.marker([18.391669187688766,-88.39324951171875],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),G.a.marker([17.25066245705116,-88.77090454101562],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),G.a.marker([17.499354014646553,-88.19686889648438],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),G.a.marker([16.96486000097799,-88.22296142578125],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),G.a.marker([16.097278567218588,-88.81622314453125],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup(),G.a.marker([18.081895438726583,-88.56353759765625],{icon:r}).addTo(e).bindPopup("<b>Coronavirus Case: \ud83e\udda0</b>").openPopup();var n=G.a.popup();e.on("click",(function(a){n.setLatLng(a.latlng).setContent("You clicked the map at "+a.latlng.toString()).openOn(e)}))}),[]),n.a.createElement("div",null,n.a.createElement("div",{id:"mapid"}),";")}var Q=function(){var e=Object(k.a)("getcasesbygender",D,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading;return Object(r.useEffect)((function(){if(a){var e=a.data.features[0].attributes,t=e.confirmale,r=e.confirmfemale,n=document.getElementById("casesByGenderChart");new R.a(n,{type:"pie",data:{labels:["Male","Female"],datasets:[{label:"# of Votes",data:[t,r],backgroundColor:["rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom"},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Cases by Gender",fontSize:30}}})}}),[a,t]),n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"casesByGenderChart",style:{margin:0,padding:0}})))},Z=function(){var e=Object(k.a)("deathtimelinecases",A,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading,i=["Jan..","Feb..","Mar..","Apr..","May..","Jun..","Jul..","Aug..","Sep..","Oct...","Nov...","Dec..."];Object(r.useEffect)((function(){var e=document.getElementById("deathCasesByTimelineCart");new R.a(e,{type:"bar",data:{labels:t&&a?[]:i,datasets:[{label:"Cases",data:l(),backgroundColor:["rgba(54, 162, 235, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)","rgba(255, 206, 86, 0.7)","rgba(75, 192, 192, 0.7)","rgba(153, 102, 255, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 159, 64, 0.7)","rgba(255, 100, 64, 0.7)","rgba(255, 99, 132, 0.5)","rgba(255, 99, 132, 0.7)","rgba(54, 162, 235, 0.7)"],borderColor:["rgba(54, 162, 235, 0.9)","rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{maintainAspectRatio:!1,legend:{position:"bottom",display:!1},layout:{padding:{bottom:0,left:10,right:10,top:0}},title:{display:!0,text:"Total Deaths by Month",fontSize:30}}})}),[t,i]);var l=function(){var e=[],r=t?[]:null===a||void 0===a?void 0:a.data.map((function(e){return{date:new Date(e.Date).getMonth(),cases:e.Cases}}));if(0!=r.length)return i.map((function(e,a){var t=r.filter((function(e){return e.date===a}));return Object(_.a)({},e,0===t.length?0:Math.max.apply(Math,t.map((function(e){return e.cases}))))})).map((function(a){var t=Object.values(a);e.push.apply(e,Object(M.a)(t))})),e};return n.a.createElement("div",{className:"chart ".concat(t?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"deathCasesByTimelineCart",style:{margin:0,padding:0}})))},X=t(10),K=t.n(X);function $(){var e=Object(k.a)("livetimelinecases",j),a=e.data,t=e.isLoading,i=Object(k.a)("livetimelinerecoveredcases",B),l=i.data,s=i.isLoading,o=Object(k.a)("livetimelinedeathscases",A,{refetchOnWindowFocus:!1}),c=o.data,d=o.isLoading,m=Object(k.a)("activecases",z,{refetchOnWindowFocus:!1}),u=m.data,p=m.isLoading;return Object(r.useEffect)((function(){var e={data:{datasets:[{label:" \u2705 Confirmed",backgroundColor:"#81B622",borderColor:"#81B622",data:n(a),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \ud83e\udda0 Active",backgroundColor:"#f6cd61",borderColor:"#f6cd61",data:function(e){if(u){return u.data.map((function(e){return{t:new Date(e.Date).getTime(),y:"".concat(e.Active)}}))}}(),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \ud83e\udd73 Recovered",backgroundColor:"#0e9aa7",borderColor:"#0e9aa7",data:n(l),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4},{label:" \u2620\ufe0f Deaths",backgroundColor:"#fe8a71",borderColor:"#fe8a71",data:n(c),type:"line",pointRadius:0,fill:!1,lineTension:0,borderWidth:4}]},options:{maintainAspectRatio:!1,responsive:!0,animation:{duration:0},title:{display:!0,text:"Belize \ud83e\udda0 Coronavirus \ud83e\udda0 Curve",fontSize:30},legend:{display:!0,position:"bottom"},scales:{xAxes:[{type:"time",distribution:"series",offset:!0,ticks:{major:{enabled:!0,fontStyle:"bold"},source:"data",autoSkip:!0,autoSkipPadding:75,maxRotation:0,sampleSize:100},afterBuildTicks:function(e,a){var t,r,n,i,l,s,o=e._majorUnit,c=a[0];for(n=K()(a[0].value),"minute"===o&&0===n.second()||"hour"===o&&0===n.minute()||"day"===o&&9===n.hour()||"month"===o&&n.date()<=3&&1===n.isoWeekday()||"year"===o&&0===n.month()?c.major=!0:c.major=!1,s=n.get(o),t=1,r=a.length;t<r;t++)i=a[t],l=(n=K()(i.value)).get(o),i.major=l!==s,s=l;return a}}],yAxes:[{gridLines:{drawBorder:!1},scaleLabel:{display:!0,labelString:"\ud83e\udda0 cases"}}]},tooltips:{intersect:!1,mode:"index",callbacks:{label:function(e,a){var t=a.datasets[e.datasetIndex].label||"";return t&&(t+=": "),t+=parseFloat(e.value).toFixed(0),t}}}}};if(!t&&!s&&!d&&!p){var r=document.getElementById("liveCasesByTimelineCart");new R.a(r,e)}function n(e){if(e)return e.data.map((function(e){return{t:new Date(e.Date).getTime(),y:"".concat(e.Cases)}}))}}),[t,s,d,p,a,l,c,u]),n.a.createElement("div",{className:"chart ".concat(t||s||d?"loading":"")},n.a.createElement("div",{className:"chart-inner"},n.a.createElement("canvas",{id:"liveCasesByTimelineCart",style:{margin:"0",padding:0}})))}var ee=[{name:"corozal",formatted_name:"Corozal",data:[{0:"corozal village 1",1:"corozal village 2",2:"corozal village 3"}]},{name:"orangewalk",formatted_name:"Orange Walk",data:[{0:"orange walk village 1",1:"orange walk village 2",2:"orange walk village 3"}]},{name:"belize",formatted_name:"Belize",data:[{0:"belize village 1",1:"belize village 2",2:"belize village 3"}]},{name:"cayo",formatted_name:"Cayo",data:[{0:"cayo village 1",1:"cayo village 2",2:"cayo village 3"}]},{name:"stanncreek",formatted_name:"Stann Creek",data:[{0:"stann creek village 1",1:"stann creek village 2",2:"stann creek village 3"}]},{name:"toledo",formatted_name:"Toledo",data:[{0:"toledo village 1",1:"toledo village 2",2:"toledo village 3"}]}],ae=function(){var e=Object(k.a)("latestdata",O,{refetchOnWindowFocus:!1}),a=e.data,t=e.isLoading,i=Object(r.useState)(""),s=Object(l.a)(i,2),c=s[0],m=s[1];Object(r.useEffect)((function(){if(J.a.initialize("UA-175547717-1"),J.a.pageview(window.location.pathname+window.location.search),a){var e=Number(a.data[0].lastUpdate),t=new Date(e);m(t.toDateString())}}),[a,t]);var p=function(e){ee.filter((function(a){return a.name===e.target.getAttribute("data-value")}))};return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},n.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),n.a.createElement("h1",null,n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")," ","Belize Coronavirus (covid-19) cases and live updates"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("h4",null,"\ud83c\udde7\ud83c\uddff Total Cases: ",t?"loading...":null===a||void 0===a?void 0:a.data[0].confirmed," \ud83c\udde7\ud83c\uddff ",n.a.createElement("br",null),n.a.createElement("br",null)," ",n.a.createElement("span",null,"Last Updated: ",t?"loading...":c)),n.a.createElement("div",{className:"date-picker"},n.a.createElement("label",null,"Covid on this day: "),n.a.createElement("input",{type:"date",id:"search",name:"search"})),n.a.createElement("div",{className:"screening-data"},n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Test Done"),n.a.createElement("img",{src:g.a,alt:"Belize Coronavirus updates"}),n.a.createElement("p",{className:"text"},"unavailable")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Under Investigation"),n.a.createElement("img",{src:y.a,alt:"Belize Coronavirus under investigation"}),n.a.createElement("p",{className:"text"},"unavailable")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Negative"),n.a.createElement("img",{src:v.a,alt:"Belize negative cases"}),n.a.createElement("p",{className:"text"},"unavailable")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Confirmed"),n.a.createElement("img",{src:d.a,alt:"Belize Coronavirus confirmed"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].confirmed," ")),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Deseased"),n.a.createElement("img",{src:E.a,alt:"Belize Coronavirus deseased"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].deaths)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Recovered"),n.a.createElement("img",{src:u.a,alt:"Belize Coronavirus recovered"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].recovered)),n.a.createElement("div",{className:"btn"},n.a.createElement("p",{className:"title"},"Active"),n.a.createElement("img",{src:N.a,alt:"Belize Coronavirus Active cases"}),n.a.createElement("p",{className:"text"}," ",t?"loading...":null===a||void 0===a?void 0:a.data[0].active)))),n.a.createElement("div",{className:"grid-2"},n.a.createElement(W,null),n.a.createElement(Q,null)),n.a.createElement("div",{className:"grid-2"},n.a.createElement(P,null),n.a.createElement(Z,null)),n.a.createElement("div",{className:"container"},n.a.createElement($,null)),n.a.createElement("div",{className:"map-container"},n.a.createElement("div",{className:"map-container-inner"},n.a.createElement("div",{className:"map-data-col"},n.a.createElement("h1",{className:"paper-title"},"View Cases on Map"),n.a.createElement("div",{className:"districts-row"},n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"corozal"},"Corozal"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"belize"},"Belize"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"orangewalk"},"Orange Walk"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"cayo"},"Cayo"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"stanncreek"},"Stann Creek"),n.a.createElement("div",{className:"district",onClick:function(e){return p(e)},"data-value":"toledo"},"Toledo")),n.a.createElement("div",{className:"affected-areas"},n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")),n.a.createElement("div",{className:"district-area"},"San Ignacio"," ",n.a.createElement("span",{className:"virus",role:"img","aria-label":"virus"},"\ud83e\udda0")))),n.a.createElement(V,null))),n.a.createElement(U,null))},te=document.getElementById("root");(null===te||void 0===te?void 0:te.hasChildNodes())?Object(i.hydrate)(n.a.createElement(ae,null),te):Object(i.render)(n.a.createElement(ae,null),te)}},[[33,1,2]]]);
//# sourceMappingURL=main.c978b6e8.chunk.js.map