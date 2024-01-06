!function(){"use strict";var e,t,r,n,a={7351:function(e,t,r){var n=r(7294),a=r(745),o=r(3379),l=(o=r.n(o),r(7795)),i=(l=r.n(l),r(569)),c=(i=r.n(i),r(3565)),s=(c=r.n(c),r(9216)),m=(s=r.n(s),r(4589)),u=(m=r.n(m),r(1424)),d={},f=(d.styleTagTransform=m(),d.setAttributes=c(),d.insert=i().bind(null,"head"),d.domAPI=l(),d.insertStyleElement=s(),o()(u.Z,d),u.Z&&u.Z.locals&&u.Z.locals,r(9617)),p=r(9164),b=r(6720);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}var h=function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){var n,a;n=e,a=r[t],(t=function(e){return e=function(e,t){if("object"!=y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return String(e);if("object"!=y(r=r.call(e,"string")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e),"symbol"==y(e)?e:String(e)}(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},"dark"===e?{grey:{100:"#e0e0e0",200:"#c2c2c2",300:"#a3a3a3",400:"#858585",500:"#666666",600:"#525252",700:"#3d3d3d",800:"#292929",900:"#141414"},primary:{100:"#d0d1d5",200:"#a1a4ab",300:"#727681",400:"#1F2A40",500:"#141b2d",600:"#101624",700:"#0c101b",800:"#080b12",900:"#040509"},greenAccent:{100:"#dbf5ee",200:"#b7ebde",300:"#94e2cd",400:"#70d8bd",500:"#4cceac",600:"#3da58a",700:"#2e7c67",800:"#1e5245",900:"#0f2922"},redAccent:{100:"#f8dcdb",200:"#f1b9b7",300:"#e99592",400:"#e2726e",500:"#db4f4a",600:"#af3f3b",700:"#832f2c",800:"#58201e",900:"#2c100f"},blueAccent:{100:"#e1e2fe",200:"#c3c6fd",300:"#a4a9fc",400:"#868dfb",500:"#6870fa",600:"#535ac8",700:"#3e4396",800:"#2a2d64",900:"#151632"}}:{grey:{100:"#141414",200:"#292929",300:"#3d3d3d",400:"#525252",500:"#666666",600:"#858585",700:"#a3a3a3",800:"#c2c2c2",900:"#e0e0e0"},primary:{100:"#040509",200:"#080b12",300:"#0c101b",400:"#f2f0f0",500:"#141b2d",600:"#1F2A40",700:"#727681",800:"#a1a4ab",900:"#d0d1d5"},greenAccent:{100:"#0f2922",200:"#1e5245",300:"#2e7c67",400:"#3da58a",500:"#4cceac",600:"#70d8bd",700:"#94e2cd",800:"#b7ebde",900:"#dbf5ee"},redAccent:{100:"#2c100f",200:"#58201e",300:"#832f2c",400:"#af3f3b",500:"#db4f4a",600:"#e2726e",700:"#e99592",800:"#f1b9b7",900:"#f8dcdb"},blueAccent:{100:"#151632",200:"#2a2d64",300:"#3e4396",400:"#535ac8",500:"#6870fa",600:"#868dfb",700:"#a4a9fc",800:"#c3c6fd",900:"#e1e2fe"}})};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?A(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)),n}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){var n,a;n=e,a=r[t],(t=function(e){return e=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return String(e);if("object"!=v(r=r.call(e,"string")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e),"symbol"==v(e)?e:String(e)}(t))in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=(0,n.createContext)({toggleColorMode:function(){}}),w=function(){var e=(r=E((0,n.useState)("dark"),2))[0],t=r[1],r=(0,n.useMemo)((function(){return{toggleColorMode:function(){return t((function(e){return"light"===e?"dark":"light"}))}}}),[]);return[(0,n.useMemo)((function(){return(0,f.Z)((r=h(t=e),{palette:S({mode:t},"dark"===t?{primary:{main:r.primary[500]},secondary:{main:r.greenAccent[500]},neutral:{dark:r.grey[700],main:r.grey[500],light:r.grey[100]},background:{default:r.primary[500]}}:{primary:{main:r.primary[100]},secondary:{main:r.greenAccent[500]},neutral:{dark:r.grey[700],main:r.grey[500],light:r.grey[100]},background:{default:"#fcfcfc"}}),typography:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:12,h1:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:40},h2:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:32},h3:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:24},h4:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:20},h5:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:16},h6:{fontFamily:["Source Sans Pro","sans-serif"].join(","),fontSize:14}}}));var t,r}),[e]),r]};function j(e){e=e.children;var t=(r=E(w(),2))[0],r=r[1];return n.createElement(C.Provider,{value:r},n.createElement(p.Z,{theme:t},n.createElement(b.ZP,null),e))}var k=r(3727),Z=r(6550),N=r(7804);function O(e){var t=e.as,r=e.href,a=e.to,o=e.children,l=e.style;e=e.className;return r?n.createElement(N.vj,{as:t,href:r,style:l,className:e},o):n.createElement(N.vj,{as:t,to:a,style:l,className:e},o)}var I=r(979),P=r(2734),D=r(2658);function M(e){var t=e.title,r=e.to,a=e.icon,o=e.selected,l=e.setSelected;e=(0,P.Z)(),e=h(e.palette.mode);return n.createElement(O,{as:k.rU,to:r,style:{textDecoration:"none"},className:"transparentBackground"},n.createElement(I.sN,{active:o===t,style:{color:e.grey[100],padding:0},onClick:function(){return l(t)},icon:a,component:n.createElement("div",null)},n.createElement(D.Z,null,t)))}var T=r(3906);function B(e){var t=e.title,r=(e=e.subtitle,(0,P.Z)());r=h(r.palette.mode);return n.createElement(T.Z,{mb:"30px"},n.createElement(D.Z,{variant:"h2",color:r.grey[100],fontWeight:"bold",sx:{mb:"5px"}},t),n.createElement(D.Z,{variant:"h5",color:r.greenAccent[400]},e))}function F(){return n.createElement("main",{className:"h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]"},n.createElement("h1",{className:"text-9xl font-extrabold text-white tracking-widest"},"404"),n.createElement("div",{className:"bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute"},"Page Not Found"),n.createElement("button",{className:"mt-5"},n.createElement("a",{className:"relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"},n.createElement("span",{className:"absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"}),n.createElement("span",{className:"relative block px-8 py-3 bg-[#1A2238] border border-current"},n.createElement(O,{as:k.rU,to:"/",visualText:"Go Home"})))))}function z(){return n.createElement(T.Z,{m:"20px"},n.createElement(T.Z,{display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(B,{title:"DASHBOARD",subtitle:"Welcome to your Dashboard"})))}var W=r(5341),G=[{id:1,name:"Jon Snow",email:"jonsnow@gmail.com",age:35,phone:"(665)121-5454",access:"admin"},{id:2,name:"Cersei Lannister",email:"cerseilannister@gmail.com",age:42,phone:"(421)314-2288",access:"manager"},{id:3,name:"Jaime Lannister",email:"jaimelannister@gmail.com",age:45,phone:"(422)982-6739",access:"user"},{id:4,name:"Anya Stark",email:"anyastark@gmail.com",age:16,phone:"(921)425-6742",access:"admin"},{id:5,name:"Daenerys Targaryen",email:"daenerystargaryen@gmail.com",age:31,phone:"(421)445-1189",access:"user"},{id:6,name:"Ever Melisandre",email:"evermelisandre@gmail.com",age:150,phone:"(232)545-6483",access:"manager"},{id:7,name:"Ferrara Clifford",email:"ferraraclifford@gmail.com",age:44,phone:"(543)124-0123",access:"user"},{id:8,name:"Rossini Frances",email:"rossinifrances@gmail.com",age:36,phone:"(222)444-5555",access:"user"},{id:9,name:"Harvey Roxie",email:"harveyroxie@gmail.com",age:65,phone:"(444)555-6239",access:"admin"}],R=[{id:1,name:"Jon Snow",email:"jonsnow@gmail.com",age:35,phone:"(665)121-5454",address:"0912 Won Street, Alabama, SY 10001",city:"New York",zipCode:"10001",registrarId:123512},{id:2,name:"Cersei Lannister",email:"cerseilannister@gmail.com",age:42,phone:"(421)314-2288",address:"1234 Main Street, New York, NY 10001",city:"New York",zipCode:"13151",registrarId:123512},{id:3,name:"Jaime Lannister",email:"jaimelannister@gmail.com",age:45,phone:"(422)982-6739",address:"3333 Want Blvd, Estanza, NAY 42125",city:"New York",zipCode:"87281",registrarId:4132513},{id:4,name:"Anya Stark",email:"anyastark@gmail.com",age:16,phone:"(921)425-6742",address:"1514 Main Street, New York, NY 22298",city:"New York",zipCode:"15551",registrarId:123512},{id:5,name:"Daenerys Targaryen",email:"daenerystargaryen@gmail.com",age:31,phone:"(421)445-1189",address:"11122 Welping Ave, Tenting, CD 21321",city:"Tenting",zipCode:"14215",registrarId:123512},{id:6,name:"Ever Melisandre",email:"evermelisandre@gmail.com",age:150,phone:"(232)545-6483",address:"1234 Canvile Street, Esvazark, NY 10001",city:"Esvazark",zipCode:"10001",registrarId:123512},{id:7,name:"Ferrara Clifford",email:"ferraraclifford@gmail.com",age:44,phone:"(543)124-0123",address:"22215 Super Street, Everting, ZO 515234",city:"Evertin",zipCode:"51523",registrarId:123512},{id:8,name:"Rossini Frances",email:"rossinifrances@gmail.com",age:36,phone:"(222)444-5555",address:"4123 Ever Blvd, Wentington, AD 142213",city:"Esteras",zipCode:"44215",registrarId:512315},{id:9,name:"Harvey Roxie",email:"harveyroxie@gmail.com",age:65,phone:"(444)555-6239",address:"51234 Avery Street, Cantory, ND 212412",city:"Colunza",zipCode:"111234",registrarId:928397},{id:10,name:"Enteri Redack",email:"enteriredack@gmail.com",age:42,phone:"(222)444-5555",address:"4123 Easer Blvd, Wentington, AD 142213",city:"Esteras",zipCode:"44215",registrarId:533215},{id:11,name:"Steve Goodman",email:"stevegoodmane@gmail.com",age:11,phone:"(444)555-6239",address:"51234 Fiveton Street, CunFory, ND 212412",city:"Colunza",zipCode:"1234",registrarId:92197}],_=[{id:1,name:"Jon Snow",email:"jonsnow@gmail.com",cost:"21.24",phone:"(665)121-5454",date:"03/12/2022"},{id:2,name:"Cersei Lannister",email:"cerseilannister@gmail.com",cost:"1.24",phone:"(421)314-2288",date:"06/15/2021"},{id:3,name:"Jaime Lannister",email:"jaimelannister@gmail.com",cost:"11.24",phone:"(422)982-6739",date:"05/02/2022"},{id:4,name:"Anya Stark",email:"anyastark@gmail.com",cost:"80.55",phone:"(921)425-6742",date:"03/21/2022"},{id:5,name:"Daenerys Targaryen",email:"daenerystargaryen@gmail.com",cost:"1.24",phone:"(421)445-1189",date:"01/12/2021"},{id:6,name:"Ever Melisandre",email:"evermelisandre@gmail.com",cost:"63.12",phone:"(232)545-6483",date:"11/02/2022"},{id:7,name:"Ferrara Clifford",email:"ferraraclifford@gmail.com",cost:"52.42",phone:"(543)124-0123",date:"02/11/2022"},{id:8,name:"Rossini Frances",email:"rossinifrances@gmail.com",cost:"21.24",phone:"(222)444-5555",date:"05/02/2021"}],L=(h("dark").greenAccent[500],h("dark").blueAccent[300],h("dark").redAccent[200],r(5434));function q(){var e=(0,P.Z)(),t=h(e.palette.mode);e=[{field:"id",headerName:"ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},{field:"phone",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email",flex:1},{field:"accessLevel",headerName:"Access Level",flex:1,cellClassName:"access-column--cell",renderCell:function(e){return e=e.row.access,n.createElement(T.Z,{width:{md:"9rem",xs:"6rem"},m:"0 auto",p:{md:"3px 2rem",xs:"3px 3px"},display:"flex",justifyContent:"flex-start",alignItems:"center",justifySelf:"flex-start",backgroundColor:"admin"===e?t.greenAccent[600]:t.greenAccent[700],borderRadius:"4px"},"admin"===e&&n.createElement(L.Tbc,{size:25}),"manager"===e&&n.createElement(L.AXp,{size:25}),"user"===e&&n.createElement(L.PG4,{size:25}),n.createElement(D.Z,{color:t.grey[100],sx:{ml:"5px"}},e))}}];return n.createElement(T.Z,{m:"20px"},n.createElement(B,{title:"TEAM",subtitle:"Managing the Team Members"}),n.createElement(T.Z,{m:"40px 0 0 0",height:"75vh",sx:{"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:t.greenAccent[300]},"& .access-column--cell":{display:"grid !important"},"& .MuiDataGrid-columnHeaders":{backgroundColor:t.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:t.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:t.blueAccent[700]},"& .MuiCheckbox-root":{color:"".concat(t.greenAccent[200]," !important")}}},n.createElement(W._$,{rows:G,columns:e})))}var Y=r(4644);function U(){var e=(0,P.Z)();e=h(e.palette.mode);return n.createElement(T.Z,{m:"20px"},n.createElement(B,{title:"CONTACTS",subtitle:"List of Contacts for Future Reference"}),n.createElement(T.Z,{m:"40px 0 0 0",height:"75vh",sx:{"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:e.greenAccent[300]},"& .access-column--cell":{display:"grid !important"},"& .MuiDataGrid-columnHeaders":{backgroundColor:e.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:e.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:e.blueAccent[700]},"& .MuiCheckbox-root":{color:"".concat(e.greenAccent[200]," !important")},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"".concat(e.grey[100]," !important")}}},n.createElement(W._$,{rows:R,columns:[{field:"id",headerName:"ID",flex:.5},{field:"registrarId",headerName:"Registrar ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"age",headerName:"Age",type:"number",headerAlign:"left",align:"left"},{field:"phone",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email",flex:1},{field:"address",headerName:"Address",flex:1},{field:"city",headerName:"City",flex:1},{field:"zipCode",headerName:"Zip Code",flex:1}],components:{Toolbar:Y.n}})))}function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t,r){return(t=function(e){return e=function(e,t){if("object"!=J(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return String(e);if("object"!=J(r=r.call(e,"string")))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}(e),"symbol"==J(e)?e:String(e)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H(){var e=(0,P.Z)(),t=h(e.palette.mode);e=[{field:"id",headerName:"ID"},{field:"name",headerName:"Name",flex:1,cellClassName:"name-column--cell"},{field:"phone",headerName:"Phone Number",flex:1},{field:"email",headerName:"Email",flex:1},{field:"cost",headerName:"Cost",flex:1,renderCell:function(e){return n.createElement(D.Z,{color:t.greenAccent[500]},"$",e.row.cost)}},{field:"date",headerName:"Date",flex:1}];return n.createElement(T.Z,{m:"20px"},n.createElement(B,{title:"INVOICES",subtitle:"List of Invoice Balances"}),n.createElement(T.Z,{m:"40px 0 0 0",height:"75vh",sx:$({"& .MuiDataGrid-root":{border:"none"},"& .MuiDataGrid-cell":{borderBottom:"none"},"& .name-column--cell":{color:t.greenAccent[300]},"& .access-column--cell":{display:"grid !important"},"& .MuiDataGrid-columnHeaders":{backgroundColor:t.blueAccent[700],borderBottom:"none"},"& .MuiDataGrid-virtualScroller":{backgroundColor:t.primary[400]},"& .MuiDataGrid-footerContainer":{borderTop:"none",backgroundColor:t.blueAccent[700]},"& .MuiCheckbox-root":{color:"".concat(t.greenAccent[200]," !important")}},"& .MuiCheckbox-root",{color:"".concat(t.greenAccent[200]," !important")})},n.createElement(W._$,{checkboxSelection:!0,rows:_,columns:e})))}var V=r(8396),K=r(5116),X=r(2574),Q=r(4649),ee=(m=r(6310),{firstName:"",lastName:"",email:"",contact:"",address1:"",address2:""}),te=m.Ry().shape({firstName:m.Z_().required("required"),lastName:m.Z_().required("required"),email:m.Z_().email("invalid email").required("required"),contact:m.Z_().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Phone number is not valid").required("required"),address1:m.Z_().required("required"),address2:m.Z_().required("required")});function re(){var e=(0,P.Z)(),t=h(e.palette.mode),r=(0,V.Z)("(min-width:600px)");return n.createElement(T.Z,{m:"20px"},n.createElement(B,{title:"CREATE USER",subtitle:"Create a new User Profile"}),n.createElement(Q.J9,{onSubmit:function(e){console.log(e)},initialValues:ee,validationSchema:te,enableReinitialize:!0},(function(e){var a=e.values,o=e.errors,l=e.touched,i=e.handleBlur,c=e.handleChange;e=e.handleSubmit;return n.createElement("form",{onSubmit:e},n.createElement(T.Z,{display:"grid",gap:"30px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",sx:{"& > div":{gridColumn:r?void 0:"span 4"},"& .MuiInputLabel-root.Mui-focused":{color:"".concat(t.grey[100]," !important")},"& .MuiInputLabel-root":{fontSize:"0.9rem !important"}}},n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"First Name",onBlur:i,onChange:c,value:a.firstName,name:"firstName",error:!!l.firstName&&!!o.firstName,helperText:l.firstName&&o.firstName,sx:{gridColumn:"span 2"}}),n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Last Name",onBlur:i,onChange:c,value:a.lastName,name:"lastName",error:!!l.lastName&&!!o.lastName,helperText:l.lastName&&o.lastName,sx:{gridColumn:"span 2"}}),n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Email",onBlur:i,onChange:c,value:a.email,name:"email",error:!!l.email&&!!o.email,helperText:l.email&&o.email,sx:{gridColumn:"span 4"}}),n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Contact Number",onBlur:i,onChange:c,value:a.contact,name:"contact",error:!!l.contact&&!!o.contact,helperText:l.contact&&o.contact,sx:{gridColumn:"span 4"}}),n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Address 1",onBlur:i,onChange:c,value:a.address1,name:"address1",error:!!l.address1&&!!o.address1,helperText:l.address1&&o.address1,sx:{gridColumn:"span 4"}}),n.createElement(K.Z,{fullWidth:!0,variant:"filled",type:"text",label:"Address 2",onBlur:i,onChange:c,value:a.address2,name:"address2",error:!!l.address2&&!!o.address2,helperText:l.address2&&o.address2,sx:{gridColumn:"span 4"}})),n.createElement(T.Z,{display:"flex",justifyContent:"end",mt:"20px"},n.createElement(X.Z,{type:"submit",color:"secondary",variant:"contained"},"Create New User")))})))}var ne=r(8636),ae=r(3907),oe=r(6993),le=r(3196),ie=r(9897),ce=r(500),se=r(2440),me=r(799),ue=r(9334);function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(){var e=(0,P.Z)(),t=h(e.palette.mode),r=(e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?de(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?de(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)([]),2),e[0]),a=e[1];return n.createElement(T.Z,null,n.createElement(B,{title:"CALENDAR",subtitle:"Full Calendar Interactive Page"}),n.createElement(T.Z,{display:"flex",justifyContent:"space-between"},n.createElement(T.Z,{id:"calendar-container-header",flex:"1 1 20%",backgroundColor:t.primary[400],p:"15px",borderRadius:"4px"},n.createElement(D.Z,{variant:"h5"},"Events"),n.createElement(se.Z,null,r.map((function(e){return n.createElement(me.ZP,{key:e.id,sx:{backgroundColor:t.greenAccent[500],margin:"10px 0",borderRadius:"2px"}},n.createElement(ue.Z,{primary:e.title,secondary:n.createElement(D.Z,null,(0,ne.p6)(e.start,{year:"numeric",month:"short",day:"numeric"}))}))})))),n.createElement(T.Z,{flex:"1 1 100%",ml:"15px",id:"calendar-container-body",sx:{"& .fc-list-day-cushion":{backgroundColor:"rgba(0, 0, 0, 1) !important"}}},n.createElement(ae.Z,{height:"75vh",plugins:[oe.Z,le.Z,ie.ZP,ce.Z],headerToolbar:{left:"prev, next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"},initialValue:"listMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,select:function(e){var t=prompt("Please enter a new title for your event"),r=e.view.calendar;r.unselect(),t&&r.addEvent({id:"".concat(e.dateStr,"-").concat(t),title:t,start:e.startStr,end:e.endStr,allDay:e.allDay})},eventClick:function(e){window.confirm("Are you sure you want to delete the event '".concat(e.event.title,"'"))&&e.event.remove()},eventsSet:function(e){return a(e)},initialEvents:[{id:"1234",title:"All-day event",date:"2022-09-15"},{id:"4321",title:"Timed event",date:"2022-09-28"}]}))))}var pe=r(6867),be=r(155),ye=r(1649),ge=r(3854),he="./dist/assets/80a9352fd35f1ed258c92e021e4fd915.png";function ve(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?Ee(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ee(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ae(){var e=(0,P.Z)(),t=(e=h(e.palette.mode),(o=ve((0,n.useState)(!1),2))[0]),r=o[1],a=(o=ve((0,n.useState)("Dashboard"),2))[0],o=o[1];return n.createElement(T.Z,{sx:{"& .ps-sidebar-root":{background:"".concat(e.primary[400]," !important"),height:"auto",minHeight:"100%",width:"19rem"},"& .ps-sidebar-container":{background:"rgba(255, 255, 255, 0) !important"},"& .ps-menu-icon":{backgroundColor:"transparent !important"},"& .ps-menu-button":{padding:"5px 35px 5px 20px !important"},"& .ps-menu-button:hover":{color:"#868dfb !important",backgroundColor:"transparent !important"},"& .ps-menu-button:active":{color:"#6870fa !important"}}},n.createElement(I.YE,{collapsed:t},n.createElement(I.v2,{iconShape:"square"},n.createElement(I.sN,{onClick:function(){return r(!t)},icon:t?n.createElement(ge.otZ,null):void 0,style:{margin:"10px 0 20px 0",color:e.grey[100],padding:0}},!t&&n.createElement(T.Z,{display:"flex",justifyContent:"space-between",alignItems:"center"},n.createElement(D.Z,{variant:"h3",color:e.grey[100]},"ADMINIS"),n.createElement(pe.Z,{onClick:function(){return r(!t)}},n.createElement(ge.otZ,null)))),!t&&n.createElement(T.Z,{mb:"25px"},n.createElement(T.Z,{display:"flex",justifyContent:"center",alignItems:"center"},n.createElement("img",{alt:"profile-user",width:"100px",height:"100px",src:he,style:{cursor:"pointer",borderRadius:"50%"}})),n.createElement(T.Z,{textAlign:"center"},n.createElement(D.Z,{variant:"h2",color:e.grey[100],fontWeight:"bold",sx:{m:"10px 0 0 0"}},"Charlie Doom"),n.createElement(D.Z,{variant:"h5",color:e.greenAccent[500]},"VP Metal Fingers"))),n.createElement(T.Z,{paddingLeft:t?void 0:"10%"},n.createElement(M,{title:"Dashboard",to:"/",icon:n.createElement(be.yl6,null),selected:a,setSelected:o}),n.createElement(D.Z,{variant:"h6",color:e.grey[300],sx:{m:"15px 0 5px 20px"}},"Data"),n.createElement(M,{title:"Manage Team",to:"/team",icon:n.createElement(be.Jwp,null),selected:a,setSelected:o}),n.createElement(M,{title:"Contacts Information",to:"/contacts",icon:n.createElement(L.RZu,null),selected:a,setSelected:o}),n.createElement(M,{title:"Invoices Balances",to:"/invoices",icon:n.createElement(be.d79,null),selected:a,setSelected:o}),n.createElement(D.Z,{variant:"h6",color:e.grey[300],sx:{m:"15px 0 5px 20px"}},"Pages"),n.createElement(M,{title:"Profile Form",to:"/form",icon:n.createElement(be.FJ3,null),selected:a,setSelected:o}),n.createElement(M,{title:"Calendar",to:"/calendar",icon:n.createElement(be.Rfe,null),selected:a,setSelected:o}),n.createElement(M,{title:"FAQ Page",to:"/faq",icon:n.createElement(ye.mFA,null),selected:a,setSelected:o}),n.createElement(D.Z,{variant:"h6",color:e.grey[300],sx:{m:"15px 0 5px 20px"}},"Charts"),n.createElement(M,{title:"Bar Chart",to:"/bar",icon:n.createElement(L.dSv,null),selected:a,setSelected:o}),n.createElement(M,{title:"Pie Chart",to:"/pie",icon:n.createElement(L.Enu,null),selected:a,setSelected:o}),n.createElement(M,{title:"Line Chart",to:"/line",icon:n.createElement(L.KK6,null),selected:a,setSelected:o}),n.createElement(M,{title:"Geography Chart",to:"/geography",icon:n.createElement(be.CDT,null),selected:a,setSelected:o})))))}var xe=r(4921);function Se(){var e=(0,P.Z)(),t=h(e.palette.mode),r=(0,n.useContext)(C);return n.createElement(T.Z,{display:"flex",justifyContent:"space-between",p:2},n.createElement(T.Z,{display:"flex",backgroundColor:t.primary[400],borderRadius:"3px"},n.createElement(xe.ZP,{sx:{ml:2,flex:1},placeholder:"Search"}),n.createElement(pe.Z,{type:"button",sx:{p:1}},n.createElement(L.Zh8,null))),n.createElement(T.Z,{display:"flex"},n.createElement(pe.Z,{onClick:r.toggleColorMode},"dark"===e.palette.mode?n.createElement(L.UFB,{size:23}):n.createElement(L.EWX,{size:23})),n.createElement(pe.Z,null,n.createElement(ye.G58,{size:23})),n.createElement(pe.Z,null,n.createElement(be.Fuo,{size:23})),n.createElement(pe.Z,null,n.createElement(be.FJ3,{size:23}))))}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function we(){var e=(t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?Ce(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Ce(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)(!0),2))[0],t=t[1];return n.createElement(k.UT,null,n.createElement("div",{className:"app"},n.createElement(Ae,{isSidebar:e}),n.createElement("main",{className:"content"},n.createElement(Se,{setIsSidebar:t}),n.createElement(Z.rs,null,n.createElement(Z.AW,{exact:!0,path:"/",component:z}),n.createElement(Z.AW,{exact:!0,path:"/team",component:q}),n.createElement(Z.AW,{exact:!0,path:"/contacts",component:U}),n.createElement(Z.AW,{exact:!0,path:"/invoices",component:H}),n.createElement(Z.AW,{exact:!0,path:"/form",component:re}),n.createElement(Z.AW,{exact:!0,path:"/calendar",component:fe}),n.createElement(Z.AW,{path:"*"},n.createElement(F,null))))))}function je(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}a.createRoot(document.getElementById("root")).render(n.createElement((function(){var e=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,l,i=[],c=!0,s=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){var r;if(e)return"string"==typeof e?je(e,t):"Map"===(r="Object"===(r=Object.prototype.toString.call(e).slice(8,-1))&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?je(e,t):void 0}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,n.useState)(!0),2);return e[0],e[1],n.createElement(j,null,n.createElement(we,null))}),null))},1424:function(e,t,r){var n=r(7537),a=(n=r.n(n),r(3645));(r=r.n(a)()(n())).push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap);"]),r.push([e.id,"html,\r\nbody,\r\n#root,\r\n.app,\r\n.content {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #e0e0e0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: #555;\r\n}\r\n\r\n.transparentBackground:hover {\r\n    background: rgba(49, 0, 0, 1) !important\r\n}","",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"AAEA;;;;;IAKI,YAAY;IACZ,WAAW;IACX,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;AACJ",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&display=swap');\r\n\r\nhtml,\r\nbody,\r\n#root,\r\n.app,\r\n.content {\r\n    height: 100%;\r\n    width: 100%;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n}\r\n\r\n.app {\r\n    display: flex;\r\n    position: relative;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #e0e0e0;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n::-webkit-scrollbar-track:hover {\r\n    background: #555;\r\n}\r\n\r\n.transparentBackground:hover {\r\n    background: rgba(49, 0, 0, 1) !important\r\n}"],sourceRoot:""}]),t.Z=r}},o={};function l(e){var t=o[e];return void 0!==t||(t=o[e]={id:e,exports:{}},a[e](t,t.exports,l)),t.exports}function i(e,t){var r,a,o,i=t[0],c=t[1],s=t[2],m=0;if(i.some((function(e){return 0!==n[e]}))){for(r in c)l.o(c,r)&&(l.m[r]=c[r]);s&&(o=s(l))}for(e&&e(t);m<i.length;m++)a=i[m],l.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return l.O(o)}l.m=a,e=[],l.O=function(t,r,n,a){if(!r){for(var o=1/0,i=0;i<e.length;i++){r=e[i][0],n=e[i][1],a=e[i][2];for(var c,s=!0,m=0;m<r.length;m++)(!1&a||a<=o)&&Object.keys(l.O).every((function(e){return l.O[e](r[m])}))?r.splice(m--,1):(s=!1,a<o&&(o=a));s&&(e.splice(i--,1),void 0!==(c=n()))&&(t=c)}return t}a=a||0;for(i=e.length;0<i&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,n,a]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},l.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var a=Object.create(null),o=(l.r(a),{});t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},l.d(a,o),a},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n={179:0},l.O.j=function(e){return 0===n[e]},(c=self.webpackChunkecommerce_shop=self.webpackChunkecommerce_shop||[]).forEach(i.bind(null,0)),c.push=i.bind(null,c.push.bind(c)),l.nc=void 0;var c=l.O(void 0,[741,216],(function(){return l(7351)}));l.O(c)}();