(this["webpackJsonpweather-page"]=this["webpackJsonpweather-page"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(3),i=c.n(n),r=(c(17),c(5)),l=(c(18),c(19),c(6)),j=c(7),o=c(10),d=c(9),h=c(8),p=c(0),b=function(e){var t=e.text;return Object(p.jsx)("div",{children:t})},m=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(p.jsx)(h.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:Object(p.jsx)(b,{lat:this.props.lat,lng:this.props.long,text:this.props.temp})})})}}]),c}(s.Component);m.defaultProps={center:{lat:36.8414,lng:-2.4629},zoom:11};var x=m,O=function(e){var t=e.text;return Object(p.jsx)("div",{children:t})},u=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(p.jsxs)(h.a,{defaultCenter:this.props.center,defaultZoom:this.props.zoom,children:[Object(p.jsx)(O,{lat:this.props.cityInfo.almLat,lng:this.props.cityInfo.almLon,text:"Temp: ".concat((this.props.cityInfo.almTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.cadLat,lng:this.props.cityInfo.cadLon,text:"Temp: ".concat((this.props.cityInfo.cadTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.corLat,lng:this.props.cityInfo.corLon,text:"Temp: ".concat((this.props.cityInfo.corTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.graLat,lng:this.props.cityInfo.graLon,text:"Temp: ".concat((this.props.cityInfo.graTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.hueLat,lng:this.props.cityInfo.hueLon,text:"Temp: ".concat((this.props.cityInfo.hueTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.jaeLat,lng:this.props.cityInfo.jaeLon,text:"Temp: ".concat((this.props.cityInfo.jaeTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.malLat,lng:this.props.cityInfo.malLon,text:"Temp: ".concat((this.props.cityInfo.malTemp-273.15).toFixed(1),"\xbaC")}),Object(p.jsx)(O,{lat:this.props.cityInfo.sevLat,lng:this.props.cityInfo.sevLon,text:"Temp: ".concat((this.props.cityInfo.sevTemp-273.15).toFixed(1),"\xbaC")})]})})}}]),c}(s.Component);u.defaultProps={center:{lat:37.8833,lng:-4.4629},zoom:7};var f=u;var v=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(r.a)(n,2),l=i[0],j=i[1],o=Object(s.useState)([]),d=Object(r.a)(o,2),h=d[0],b=d[1],m=Object(s.useState)("almeria"),O=Object(r.a)(m,2),u=O[0],v=O[1],N=Object(s.useState)(0),_=Object(r.a)(N,2),g=_[0],y=_[1],w=Object(s.useState)([]),I=Object(r.a)(w,2),C=I[0],F=I[1];Object(s.useEffect)((function(){fetch("https://weather-page-server.herokuapp.com/weather/".concat(u)).then((function(e){return e.json()})).then((function(e){a(e.data.list),j(e.data.cod),b(e.data.message)})),fetch("https://weather-page-server.herokuapp.com/weather/average").then((function(e){return e.json()})).then((function(e){y(e.average),F(e.cityInfo)}))}),[u]);var L=c.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{className:"card__top",children:[Object(p.jsxs)("div",{className:"card__intro",children:[Object(p.jsx)("h1",{className:"card__title",children:e.name}),Object(p.jsx)("div",{className:"card__meta",children:Object(p.jsx)("p",{children:e.sys.country})})]}),Object(p.jsx)("div",{className:"card__options",children:Object(p.jsx)("div",{className:"card__options-cell",children:Object(p.jsx)("h3",{children:"Weather"})})})]}),Object(p.jsx)("div",{className:"card__bottom",children:Object(p.jsxs)("div",{className:"panel weather-panel",children:[Object(p.jsxs)("div",{className:"weather-panel__cell weather-panel__cell--main",children:[Object(p.jsx)("div",{className:"temp_date",children:Object(p.jsxs)("h2",{children:[(e.main.temp-273.15).toFixed(1),Object(p.jsx)("span",{children:"\xb0"})]})}),e.weather.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"icon_details",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("div",{className:"weather-icon",children:Object(p.jsx)("img",{src:"https://openweathermap.org/img/w/".concat(e.icon,".png")})})}),Object(p.jsx)("h3",{children:e.main}),Object(p.jsx)("p",{children:e.description})]})})}))]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Average ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"thermostat"})]}),Object(p.jsxs)("p",{children:[g," \xb0"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Wind speed ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"air"})]}),Object(p.jsxs)("p",{children:[e.wind.speed," km/h"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Wind deg ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"explore"})]}),Object(p.jsxs)("p",{children:[e.wind.deg," \xb0"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Pressure ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"expand"})]}),Object(p.jsxs)("p",{children:[(e.main.pressure/1e3).toFixed(2)," bar"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Humidity  ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"invert_colors"})]}),Object(p.jsxs)("p",{children:[e.main.humidity," %"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Min \xbaC  ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"ac_unit"})]}),Object(p.jsxs)("p",{children:[(e.main.temp_min-273.15).toFixed(1)," \xb0"]})]}),Object(p.jsxs)("div",{className:"weather-panel__cell",children:[Object(p.jsxs)("p",{className:"round",children:["Max \xbaC ",Object(p.jsx)("span",{className:"weather-icon material-icons",children:"local_fire_department"})]}),Object(p.jsxs)("p",{children:[(e.main.temp_max-273.15).toFixed(1)," \xb0"]})]})]})}),Object(p.jsx)("div",{className:"card__options",children:Object(p.jsx)("div",{className:"card__options-cell",children:Object(p.jsx)("h3",{children:"UBICATION"})})}),Object(p.jsx)("div",{className:"card__bottom",children:Object(p.jsx)(x,{lat:e.coord.lat,long:e.coord.lon,temp:(e.main.temp-273.15).toFixed(1)})}),Object(p.jsx)("div",{className:"card__options",children:Object(p.jsx)("div",{className:"card__options-cell",children:Object(p.jsx)("h3",{children:"ALL CITIES"})})}),Object(p.jsx)("div",{className:"card__bottom",children:Object(p.jsx)(f,{cityInfo:C})})]})})}));return"200"===l?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("section",{className:"header-section",children:[Object(p.jsx)("input",{className:"menu-header-btn",type:"checkbox",id:"menu-header-btn"}),Object(p.jsx)("label",{className:"menu-header-icon",htmlFor:"menu-header-btn",children:Object(p.jsx)("span",{className:"navicon"})}),Object(p.jsxs)("ul",{className:"menu-header",children:[Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("almeria")},className:"header-camisetas",to:"/camisetas",children:Object(p.jsx)("a",{children:"Almeria"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("cadiz")},className:"header-comics",to:"/comics",children:Object(p.jsx)("a",{children:"Cadiz"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("cordoba")},className:"header-libros",to:"/libros",children:Object(p.jsx)("a",{children:"Cordoba"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("granada")},className:"header-peliculas",to:"/peliculas",children:Object(p.jsx)("a",{children:"Granada"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("huelva")},className:"header-zapatillas",to:"/zapatillas",children:Object(p.jsx)("a",{children:"Huelva"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("jaen")},className:"header-zapatillas",to:"/zapatillas",children:Object(p.jsx)("a",{children:"Jaen"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("malaga")},className:"header-zapatillas",to:"/zapatillas",children:Object(p.jsx)("a",{children:"Malaga"})})}),Object(p.jsx)("li",{children:Object(p.jsx)("div",{onClick:function(){v("sevilla")},className:"header-zapatillas",to:"/zapatillas",children:Object(p.jsx)("a",{children:"Sevilla"})})})]})]}),L]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:h}),Object(p.jsxs)("p",{children:["Error: ",l]})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.e3533036.chunk.js.map