(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),a=r(4),c=r.n(a),s=(r(10),r(3)),u=(r(11),r(1)),o=function(e){var t=e.previousData,r=e.currentData,i=e.inProcess,a=Object(n.useState)(""),c=Object(s.a)(a,2),o=c[0],l=c[1],d=Object(n.useState)(""),p=Object(s.a)(d,2),y=p[0],v=p[1],m=g(r),b=i?g(t.slice(0,t.length-1))+t[t.length-1]:g(t);function g(e){return e.length>15?parseFloat(e).toPrecision(5).replace(/\.?0+$/,""):e}return Object(n.useEffect)((function(){var e="currData",t=m.length;t>7&&t<=10&&(e+=" medium"),t>10&&(e+=" small"),l(e)}),[m]),Object(n.useEffect)((function(){var e="prevData";b.length>10&&(e+=" small"),v(e)}),[b]),Object(u.jsxs)("div",{className:"display",children:[Object(u.jsx)("p",{className:y,children:b}),Object(u.jsx)("p",{className:o,children:m})]})},l=[{id:"1",display:"AC",type:"clear",value:"clear"},{id:"2",display:"+/-",type:"registr",value:"-"},{id:"3",display:"%",type:"percent",value:"%"},{id:"4",display:"\xf7",type:"action",value:"/"},{id:"5",display:"mc",type:"memory",value:"memClear"},{id:"6",display:"mr",type:"memory",value:"memReturn"},{id:"7",display:"m-",type:"memory",value:"memMinus"},{id:"8",display:"m+",type:"memory",value:"memPlus"},{id:"9",display:"7",type:"digit",value:"7"},{id:"10",display:"8",type:"digit",value:"8"},{id:"11",display:"9",type:"digit",value:"9"},{id:"12",display:"\xd7",type:"action",value:"*"},{id:"13",display:"4",type:"digit",value:"4"},{id:"14",display:"5",type:"digit",value:"5"},{id:"15",display:"6",type:"digit",value:"6"},{id:"16",display:"\u2212",type:"action",value:"-"},{id:"17",display:"1",type:"digit",value:"1"},{id:"18",display:"2",type:"digit",value:"2"},{id:"19",display:"3",type:"digit",value:"3"},{id:"20",display:"+",type:"action",value:"+"},{id:"21",display:"0",type:"digit",value:"0"},{id:"22",display:"\u0317",type:"comma",value:"."},{id:"23",display:"=",type:"action",value:"="}],d=(r(13),function(e){var t=e.onClick;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){var r,n;if("click"===e.type&&(r=e.currentTarget.dataset.type,n=e.currentTarget.dataset.value,e.currentTarget.classList.add("active"),t(r,n)),"keydown"===e.type){var i;switch(e.key){case"Enter":i="=";break;case",":i=".";break;case"Escape":i="clear";break;default:i=e.key}var a=l.find((function(e){return e.value===i}));if(a)r="-"===(n=a.value)?"action":a.type,document.querySelector('[data-type="'.concat(r,'"][data-value="').concat(n,'"]')).classList.add("active"),t(r,n)}},i=function(e){e.currentTarget.classList.remove("active")};return Object(u.jsx)("ul",{className:"buttonsList",children:l.map((function(e){return Object(u.jsx)("li",{className:"button-item",onClick:r,onTransitionEnd:i,"data-type":e.type,"data-value":e.value,children:Object(u.jsx)("span",{children:e.display})},e.id)}))})}),p=r(2),y={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},v=function(e,t){return"comma"===t?e.includes(".")&&e.slice(e.indexOf(".")+1).length>9:e.length>14},m=function(e,t){var r=t.current,n=t.setCurrent,i=t.previous,a=t.setPrevious,c=t.inProcess;r.includes("%")||(i&&!c||"error"===r?(n(e),a("")):v(r,"total")?p.b.warning("only 15 digits can be entered here",y):v(r,"comma")?p.b.warning("only 10 digits after point '.' can be entered here",y):n((function(t){return"0"===t?e:t+e})))},b=function(e,t){var r=t.current,n=t.setCurrent,i=t.previous,a=t.setPrevious,c=t.inProcess;r.length<14&&!r.includes(e)&&!r.includes("%")&&("error"===r||!c&&i?(n("0".concat(e)),a("")):n((function(t){return t+e})))},g=function(e,t){var r=t.current,n=t.setCurrent;r.length<14&&"0"!==r&&"error"!==r&&n((function(t){return t.includes(e)?t.slice(1):e+t}))},f=function(e){return"."===e[e.length-1]?e.slice(0,e.length-1):e},j=function(e,t){var r=t.current,n=t.setCurrent;r.length<14&&"error"!==r&&!r.includes(e)&&n((function(t){return f(t)+e}))},h={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},O=function(e,t,r){switch(t){case"+":return e+r;case"-":return e-r;case"*":return e*r;case"/":return 0!==r?e/r:"error";default:return"error"}},k=function(e){return e.includes("%")?(Number(e.slice(0,e.length-1))/100).toString():"."===e[e.length-1]?e.slice(0,e.length-1):e},S=function(e,t){var r=t.current,n=t.setCurrent,i=t.previous,a=t.setPrevious,c=t.inProcess,s=t.setInProcess;if("error"!==r&&(c||"="===e||(a(k(r)+e),n("0"),s(!0)),""!==i&&c)){var u=i.slice(0,i.length-1),o=i.slice(i.length-1),l=O(parseFloat(u),o,parseFloat(k(r)));"error"===l?(p.b.error("Division by zero",h),n(l),a(""),s(!1)):"="===e?(n(l.toString()),a(l.toString()),s(!1)):(a(l.toString()+e),n("0"))}},w={position:"bottom-center",style:{width:"200px",margin:"0 auto"}},x=function(e){return e.includes("%")?(Number(e.slice(0,e.length-1))/100).toString():e},P=function(e,t){var r=t.current,n=t.setCurrent,i=t.storage,a=t.setStorage;"memClear"===e&&a(""),"memMinus"===e&&"error"!==r&&(a((function(e){return(Number(e)-Number(x(r))).toString()})),p.b.success("Saved",w)),"memPlus"===e&&"error"!==r&&(a((function(e){return(Number(e)+Number(x(r))).toString()})),p.b.success("Saved",w)),"memReturn"===e&&(""===i?p.b.info("Storage empty",w):n(i))},C=(r(14),r(15),function(){var e=Object(n.useState)("0"),t=Object(s.a)(e,2),r=t[0],i=t[1],a=Object(n.useState)(""),c=Object(s.a)(a,2),l=c[0],y=c[1],v=Object(n.useState)(!1),f=Object(s.a)(v,2),h=f[0],O=f[1],k=Object(n.useState)(""),w=Object(s.a)(k,2),x=w[0],C=w[1];return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(p.a,{autoClose:3e3}),Object(u.jsxs)("div",{className:"calculator",children:[Object(u.jsx)(o,{previousData:l,currentData:r,inProcess:h}),Object(u.jsx)(d,{onClick:function(e,t){var n={current:r,setCurrent:i,previous:l,setPrevious:y,inProcess:h,setInProcess:O,storage:x,setStorage:C};switch(e){case"digit":m(t,n);break;case"comma":b(t,n);break;case"registr":g(t,n);break;case"percent":j(t,n);break;case"action":S(t,n);break;case"memory":P(t,n);break;default:i("0"),y(""),O(!1)}}})]})]})});c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b9d9fa65.chunk.js.map