(this["webpackJsonpcurrency-converter-react"]=this["webpackJsonpcurrency-converter-react"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(4),s=n.n(a),u=(n(9),n(2)),i=(n(10),n(0)),o=function(e){var t=e.title;return Object(i.jsx)("header",{className:"header",children:Object(i.jsx)("h1",{className:"header__title",children:t})})},l=(n(12),[{name:"Euro",shortcut:"EUR",rate:4.56},{name:"Frank szwajcarski",shortcut:"CHF",rate:4.19},{name:"Dolar ameryka\u0144ski",shortcut:"USD",rate:3.84},{name:"Funt brytyjski",shortcut:"GBP",rate:5.32}]),j=function(e){var t=e.calculateResult,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(l[0].shortcut),j=Object(u.a)(o,2),m=j[0],b=j[1];return Object(i.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(a,m)},children:[Object(i.jsxs)("fieldset",{className:"form__fieldset",children:[Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__labelText",children:"Kwota w PLN:"}),Object(i.jsx)("input",{className:"form__field",value:a,onChange:function(e){var t=e.target;return s(t.value)},name:"amount",type:"number",min:"0.01",max:"999999999",step:"0.01",placeholder:"Wpisz kwot\u0119",autoFocus:!0,required:!0})]})}),Object(i.jsx)("p",{children:Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{className:"form__labelText",children:"Waluta:"}),Object(i.jsxs)("select",{className:"form__field",name:"requestedCurrency",value:m,onChange:function(e){var t=e.target;return b(t.value)},required:!0,children:[l.map((function(e){return Object(i.jsx)("option",{value:e.shortcut,children:e.name},e.shortcut)})),";"]})]})})]}),Object(i.jsx)("p",{children:Object(i.jsx)("button",{className:"form__button",children:"Przelicz"})})]})},m=(n(13),function(e){var t=e.children;return Object(i.jsx)("main",{className:"container",children:t})}),b=(n(14),function(e){var t=e.result;return Object(i.jsx)("p",{className:"container__result",children:void 0!==t&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("strong",{children:[t.givenAmount.toFixed(2),"\xa0PLN\xa0=\xa0",t.finalAmount.toFixed(2),"\xa0",t.currency]})})})}),d=(n(15),function(){var e=function(e){return e.toLocaleDateString(void 0,{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"numeric",minute:"numeric",second:"numeric"})},t=Object(c.useState)(e(new Date)),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){var t=setInterval((function(){a(e(new Date))}),1e3);return function(){clearInterval(t)}}),[]),Object(i.jsxs)("p",{className:"clock",children:["Dziaj jest ",r]})});var f=function(){var e=Object(c.useState)(),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(i.jsxs)(m,{children:[Object(i.jsx)(o,{title:"Wolf Kalkulator"}),Object(i.jsx)(d,{}),Object(i.jsx)(j,{calculateResult:function(e,t){var n=l.find((function(e){return e.shortcut===t})).rate;r({givenAmount:+e,finalAmount:e/n,currency:t})}}),Object(i.jsx)(b,{result:n})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.58803c81.chunk.js.map