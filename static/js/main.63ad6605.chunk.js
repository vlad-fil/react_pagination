(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,c,a){"use strict";a.r(c);var t=a(4),n=a.n(t),i=a(3),l=a(1);a(9);function r(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var s=a(0),o=function(e){var c=e.currentPage,a=e.lastPage,t=e.onChange;return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(1===c&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){1!==c&&t(c-1)},children:"\xab"})}),r(1,a).map((function(e){return Object(s.jsx)("li",{className:"page-item ".concat(c===e&&"active"),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){c!==e&&t(e)},children:e})},e)})),Object(s.jsx)("li",{className:"page-item ".concat(c===a&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===a,onClick:function(){c!==a&&t(c+1)},children:"\xbb"})})]})},j=r(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=j.length,c=Object(l.useState)(1),a=Object(i.a)(c,2),t=a[0],n=a[1],r=Object(l.useState)("5"),d=Object(i.a)(r,2),u=d[0],b=d[1],h=Math.ceil(e/Number(u)),m=(t-1)*Number(u),p=m+Number(u)<e?m+Number(u):e;return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(t," (items ").concat(m+1," - ").concat(p," of ").concat(e,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:5,onChange:function(e){b(e.target.value),n(1)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(o,{currentPage:t,lastPage:h,onChange:function(e){n(e)}}),Object(s.jsx)("ul",{children:j.slice(m,p).map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))},9:function(e,c,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.63ad6605.chunk.js.map