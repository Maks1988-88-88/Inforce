(this["webpackJsonpgoit-react-hw-01"]=this["webpackJsonpgoit-react-hw-01"]||[]).push([[0],[,,,function(e,t,n){e.exports={button:"App_button__1O747",image__product:"App_image__product__Fja03",list:"App_list__zpvPs",product:"App_product__34J63",filter:"App_filter__1Hop2"}},,,,function(e,t,n){e.exports={modal:"Modal_modal__1sewZ",modal__Container:"Modal_modal__Container__1KdWn",modal__title:"Modal_modal__title__1rUvz"}},,,function(e,t,n){e.exports={form__Product:"AddProduct_form__Product__2MyCO"}},function(e,t,n){e.exports={btn__position:"DeleteProduct_btn__position__2cjX0"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(5),i=n.n(o),r=(n(17),n(18),n(8)),s=n(2),l=n(12),u=n(3),d=n.n(u),m=n(10),j=n.n(m),b=n(0),p=function(e){var t=e.setModalState,n=e.modalSubmit,a=Object(c.useState)(""),o=Object(s.a)(a,2),i=o[0],r=o[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],m=u[1],p=Object(c.useState)(""),h=Object(s.a)(p,2),O=h[0],_=h[1],f=Object(c.useState)(""),x=Object(s.a)(f,2),g=x[0],v=x[1],C=Object(c.useState)(""),S=Object(s.a)(C,2),w=S[0],k=S[1],y=Object(c.useState)(""),N=Object(s.a)(y,2),A=N[0],P=N[1],U=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":r(c);break;case"count":m(c);break;case"width":_(c);break;case"height":v(c);break;case"comment":k(c);break;case"image":P(c)}};return Object(b.jsxs)("form",{className:j.a.form__Product,onSubmit:function(e){e.preventDefault(),i.length<1?alert("product name field is empty "):(t(!1),n({name:i,count:d,width:O,height:g,comment:w,image:A}))},children:[Object(b.jsx)("input",{type:"text",name:"name",value:i,onChange:U,placeholder:"name product"}),Object(b.jsx)("input",{type:"text",name:"count",value:d,onChange:U,placeholder:"count product"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",name:"width",value:O,onChange:U,placeholder:"width size product"}),Object(b.jsx)("input",{type:"text",name:"height",value:g,onChange:U,placeholder:"height size product"})]}),Object(b.jsx)("input",{type:"text",name:"comment",value:w,onChange:U,placeholder:"comment"}),Object(b.jsx)("input",{type:"text",name:"image",value:A,onChange:U,placeholder:"imageUrl"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{children:"Add"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(!1)},children:"Close"})]})]})},h=n(7),O=n.n(h);var _=function(e){var t=e.title,n=e.children;return i.a.createPortal(Object(b.jsx)("div",{className:O.a.modal,children:Object(b.jsxs)("div",{className:O.a.modal__Container,children:[Object(b.jsx)("h2",{className:O.a.modal__title,children:t}),n]})}),document.getElementById("portal"))},f=n(11),x=n.n(f),g=function(e){var t=e.setModalDeleteState,n=e.deleteProduct,c=e.IdProd;return Object(b.jsxs)("div",{className:x.a.btn__position,children:[Object(b.jsx)("button",{onClick:function(){return n(c),void t(!1)},children:"Yes"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t(!1)},children:"No"})]})};var v=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],j=Object(c.useState)(""),h=Object(s.a)(j,2),O=h[0],f=h[1],x=Object(c.useState)([{id:"1",name:"Apple",count:1,imageUrl:"https://media.istockphoto.com/photos/red-apple-picture-id153010865?k=20&m=153010865&s=612x612&w=0&h=Phcp8v4vwePUzd06jA5cAxuX9FtZC8RKOqTeo1hX0gc=",size:{width:200,height:200},comments:["Comment1","Comment2"]},{id:"2",name:"Bannana",count:2,imageUrl:"https://media.istockphoto.com/photos/banana-picture-id120492078?k=20&m=120492078&s=612x612&w=0&h=x37kUXEGg7BXcURecliAfeEErNxJgrmaq2Gc2FTFNUg=",size:{width:200,height:200},comments:["Comment3","Comment3"]}]),v=Object(s.a)(x,2),C=v[0],S=v[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("products"));e&&S(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("products",JSON.stringify(C))}),[C]);var w=function(){a(!n)};return Object(b.jsxs)("div",{children:[Object(b.jsxs)("select",{className:d.a.filter,onChange:function(e){var t=e.target.value;console.log(t),function(e){"count"===e&&(S(Object(r.a)(C.sort((function(e,t){return t.count-e.count})))),console.log(C));"alphabet"===e&&(S(Object(r.a)(C.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:void 0})))),console.log(C))}(t)},children:[Object(b.jsx)("option",{value:"alphabet",children:"Alphabet"}),Object(b.jsx)("option",{value:"count",children:"Count"})]}),Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),w()},children:Object(b.jsx)("button",{className:d.a.button,children:"Add product"})}),Object(b.jsx)("ul",{className:d.a.list,children:C.map((function(e){return Object(b.jsxs)("li",{className:d.a.product,children:[Object(b.jsx)("img",{src:e.imageUrl,alt:e.name,className:d.a.image__product}),e.name,Object(b.jsx)("button",{type:"button",onClick:function(){return t=e.id,f(t),void m(!0);var t},children:"Delete"})]},e.id)}))}),n&&Object(b.jsx)(_,{title:"Add product",children:Object(b.jsx)(p,{setModalState:a,modalSubmit:function(e){if(C.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))alert("".concat(e.name," is already in product."));else if(e.name.length<1)alert("error empty text");else{var t={id:Object(l.a)(10),name:e.name,count:+e.count,imageUrl:e.image,size:{width:e.width,height:e.height},comments:[e.comment]};S([t].concat(Object(r.a)(C)))}}})}),u&&Object(b.jsx)(_,{title:"Delete product",children:Object(b.jsx)(g,{setModalDeleteState:m,deleteProduct:function(e){S(C.filter((function(t){return t.id!==e})))},IdProd:O})})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.4afcee17.chunk.js.map