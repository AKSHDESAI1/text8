(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(8),l=a.n(o),n=(a(13),a(3)),i=a(0);function r(e){return e.alert&&Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})})}function d(){var e=Object(c.useState)("Enable Dark Mode"),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)({color:"black",backgroundColor:"white",border:"2px solid white"}),l=Object(n.a)(o,2),r=l[0],d=l[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:r,children:[Object(i.jsx)("h1",{className:"my-2",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:r,children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:r,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:r,children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:r,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:r,children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:r,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]})]}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("button",{className:"btn btn-outline-primary my-2",onClick:function(){"black"===r.color?(d({color:"white",backgroundColor:"black",border:"2px solid blue"}),s("Enable Light Mode")):(d({color:"black",backgroundColor:"white",border:"2px solid white"}),s("Enable Dark Mode"))},children:a})})]})}var h=a(5);function b(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(h.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(h.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"".concat("light"===e.mode?"Enable dark Mode":"Enable light Mode")})]})]})]})})}function j(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container pb-2",children:[Object(i.jsx)("h1",{style:{color:"light"===e.mode?"black":"white"},className:"my-2",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"},children:Object(i.jsx)("textarea",{spellCheck:"true",className:"form-control",value:s,id:"myBox",rows:"8",onChange:function(e){console.log(e.target.value),o(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"grey",color:"light"===e.mode?"black":"white"}})}),Object(i.jsx)("button",{className:"btn btn-primary mx-1 my-1",disabled:0===s.length,onClick:function(){console.log("Uppercase was clicked");var t=s.toUpperCase();o(t),e.showAlert1("success","converted to Uppercase. ")},children:"Convert to UpperCase"}),Object(i.jsx)("button",{className:"btn btn-success mx-1 my-1",disabled:0===s.length,onClick:function(){console.log("LowerCase was clicked");var t=s.toLowerCase();o(t),e.showAlert1("success","converted to LowerCase. ")},children:"Convert to LowerCase"}),Object(i.jsx)("button",{className:"btn btn-warning mx-1 ",disabled:0===s.length,onClick:function(){console.log("Uppercase was clicked");o(""),e.showAlert1("danger","Text cleared Successfully. ")},children:"Clear Text"}),Object(i.jsx)("button",{className:"btn btn-info mx-1",disabled:0===s.length,onClick:function(){document.getElementById("myBox").select(),navigator.clipboard.writeText(s),e.showAlert1("success","Text Copied Successfully. ")},children:"Copy Text"})]}),Object(i.jsxs)("div",{className:"container my-2 ",style:{color:"light"===e.mode?"black":"white"},children:[Object(i.jsx)("h2",{children:"Your text Summary"}),Object(i.jsxs)("p",{children:[s.split(" ").length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," minutes read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter something in the textbox above to preview it here"})]})]})}b.defaultProps={title:"aksh",aboutText:"AboutUs"};var u=a(2);var m=function(){var e=Object(c.useState)(null),t=Object(n.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("light"),l=Object(n.a)(o,2),m=l[0],g=l[1],x=function(e,t){s({type:e,msg:t}),setTimeout((function(){s(null)}),3e3)};return Object(i.jsx)(h.a,{children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(b,{title:"TextUtils",mode:m,toggleMode:function(){"light"===m?(g("dark"),document.body.style.backgroundColor="#100946",x("success","Dark Mode has been Enabled"),document.title="TextUtils - Dark Mode",setInterval((function(){document.title="TextUtils - is Amazing Mode"}),2e3),setInterval((function(){document.title="Install TextUtils Now"}),1500)):(g("light"),document.body.style.backgroundColor="white",x("primary","Light Mode has been Enabled"),document.title="TextUtils - Light Mode")}}),Object(i.jsx)(r,{alert:a}),Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/about",element:Object(i.jsx)(d,{})}),Object(i.jsx)(u.a,{path:"/",element:Object(i.jsx)(j,{heading:"Enter the text to analyze Below",mode:m,showAlert1:x})})]})})]})})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),o(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.36d478c0.chunk.js.map