(this.webpackJsonpmultiform=this.webpackJsonpmultiform||[]).push([[0],{29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r,c,l=t(0),a=t.n(l),i=t(19),o=t.n(i),s=(t(29),t(10)),d=t(4),u=t(2),p=t(3),b=p.a.div(r||(r=Object(u.a)(["\n\n   \n    p {\n    font-size: 13px;\n    color: #B8B8D4;\n    }\n    h1 {\n    margin:0;\n    padding: 0;\n    font-size: 26px;\n    }\n    hr {\n        height: 1px;\n        border: 0;\n        background-color: #492e4a;\n        margin: 30px 0;\n    }\n    \n\n    label {\n        font-size: 13px;\n\n        input {\n            display: block;\n            margin: 7px 0;\n            padding: 0.7em;\n            border: 2px solid #3976FF;\n            border-radius: 10px;\n            color: #FFF;\n            font-size: 15px;\n            background-color: #3D1D3D;\n        }\n       \n    }\n\n    button {\n        background-color:  #3976FF; \n        color: #FFF;\n        font-weight: bold;\n        padding: 0.5em 1em;\n        border: 0;\n        border-radius: 30px;\n        margin-top: 1em;\n    }\n"]))),j=t(24),m=t(9),h=t(1),x={currentStep:0,name:"",level:0,email:"",github:""},g=Object(l.createContext)(void 0);!function(e){e[e.setCurrentStep=0]="setCurrentStep",e[e.setName=1]="setName",e[e.setLevel=2]="setLevel",e[e.setEmail=3]="setEmail",e[e.setGithub=4]="setGithub"}(c||(c={}));var f,O,v,y,w,E,k,F,z,C,S,B,P,D,L,I,M,N,G,R,V,X,q,J,Q,T,_,H,A=function(e,n){switch(n.type){case c.setCurrentStep:return Object(m.a)(Object(m.a)({},e),{},{currentStep:n.payload});case c.setName:return Object(m.a)(Object(m.a)({},e),{},{name:n.payload});case c.setLevel:return Object(m.a)(Object(m.a)({},e),{},{level:n.payload});case c.setEmail:return Object(m.a)(Object(m.a)({},e),{},{email:n.payload});case c.setGithub:return Object(m.a)(Object(m.a)({},e),{},{github:n.payload});default:return e}},K=function(e){var n=e.children,t=Object(l.useReducer)(A,x),r=Object(j.a)(t,2),c={state:r[0],dispatch:r[1]};return Object(h.jsx)(g.Provider,{value:c,children:n})},U=function(){var e=Object(l.useContext)(g);if(void 0===e)throw new Error("useForm precisa ser usado dentro do FormProvider");return e},W=p.a.div(f||(f=Object(u.a)(["\n @media screen and (min-device-width : 1200px){\n   display: flex;\n   justify-content:center;\n    padding:2em;\n    }\n  \n    \n    font-family: 'Raleway', sans-serif;\n    font-weight: 300 ;\n    background-color: #3D1D3D;\n    color: white;\n    min-height: 100vh;\n    padding:1em;\n    \n"]))),Y=p.a.div(O||(O=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n  \n"]))),Z=p.a.div(v||(v=Object(u.a)(["\n    display: flex;\n    flex: 1;\n \n"]))),$=p.a.div(y||(y=Object(u.a)(["\n    width: 15em;\n    border-right: 1px solid #492e4a;\n    @media screen and (max-device-width : 800px){\n        width: 6em;\n   }\n"]))),ee=p.a.div(w||(w=Object(u.a)(["\n     padding: 1em;\n"]))),ne=p.a.div(E||(E=Object(u.a)(["\n    padding: 1em 0;\n    \n\n    h1 {\n        margin: 0;\n        padding: 0;\n        font-size: 28px;\n    }\n    p {\n        font-size: 14px;\n        color: #B8B8D4;\n    }\n"]))),te=function(){return Object(h.jsxs)(ne,{children:[Object(h.jsx)("h1",{children:"Cadastro de Desenvolvedora"}),Object(h.jsx)("p",{children:"Preencha seus dados para cadastro."})]})},re=p.a.div(k||(k=Object(u.a)(["\n    margin: 2em 0;\n    cursor: pointer;\n\n    a {\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n    }\n  \n"]))),ce=p.a.div(F||(F=Object(u.a)(["\n    flex: 1;\n    margin-right: 1.5em;\n"]))),le=p.a.div(z||(z=Object(u.a)(["\n    text-align: right;\n    font-weight: bold;\n    margin-bottom: 5px;\n    font-size: 15px;\n    color: white;\n    @media screen and (max-device-width : 800px){\n      display: none;\n   }\n"]))),ae=p.a.div(C||(C=Object(u.a)(["\n    text-align: right;\n    font-size: 13px;\n    color: #604861;\n    @media screen and (max-device-width : 800px){\n      display: none;\n   }\n"]))),ie=p.a.div(S||(S=Object(u.a)(["\n    width: 3em;\n    height: 3em;\n    border-radius: 50%;\n    background-color: "," ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n   \n"])),(function(e){return e.active?"#f25657":"#604861"})),oe=p.a.div(B||(B=Object(u.a)(["\n    width: 6px;\n    height: 6px;\n    border: 2px solid #f25657;\n    border-radius: 50%;\n    margin-left: 2em;\n    margin-right: -6px;\n    background-color: ","\n"])),(function(e){return e.active?"#f25657":"#3d1e3e"})),se=["title","titleId"];function de(){return de=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},de.apply(this,arguments)}function ue(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function pe(e,n){var t=e.title,r=e.titleId,c=ue(e,se);return l.createElement("svg",de({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,P||(P=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M480,309.333c0-15.125-31.168-70.912-46.72-97.813c1.451-7.68,4.053-25.237,4.053-51.52c0-45.547-60.288-160-202.667-160 C94.869,0,32,106.048,32,181.333c0,53.248,31.445,107.819,56.725,151.616c14.72,25.515,28.608,49.621,28.608,61.717 c0,27.157-44.16,80.981-61.184,99.435c-2.859,3.115-3.627,7.616-1.92,11.499c1.707,3.904,5.525,6.4,9.771,6.4h234.667 c5.888,0,10.368-3.115,10.368-9.003c3.776-7.616,41.664-28.075,76.672-33.813c26.283-4.288,62.272-10.197,62.272-42.517 c0-14.059-4.864-21.312-8.085-26.112c-2.155-3.221-2.581-4.011-3.904-5.973c5.909,0.832,11.179-3.413,11.904-9.259 c0.277-2.261-0.171-4.459-1.173-6.336l8.789-8.789c2.859-2.859,3.861-7.083,2.581-10.923l-7.125-21.376 C463.253,333.675,480,324.971,480,309.333z"})))),D||(D=l.createElement("g",null)),L||(L=l.createElement("g",null)),I||(I=l.createElement("g",null)),M||(M=l.createElement("g",null)),N||(N=l.createElement("g",null)),G||(G=l.createElement("g",null)),R||(R=l.createElement("g",null)),V||(V=l.createElement("g",null)),X||(X=l.createElement("g",null)),q||(q=l.createElement("g",null)),J||(J=l.createElement("g",null)),Q||(Q=l.createElement("g",null)),T||(T=l.createElement("g",null)),_||(_=l.createElement("g",null)),H||(H=l.createElement("g",null)))}var be,je,me,he,xe,ge,fe,Oe,ve,ye,we,Ee,ke,Fe,ze,Ce,Se=l.forwardRef(pe),Be=(t.p,["title","titleId"]);function Pe(){return Pe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Pe.apply(this,arguments)}function De(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function Le(e,n){var t=e.title,r=e.titleId,c=De(e,Be);return l.createElement("svg",Pe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 458.32 458.32",style:{enableBackground:"new 0 0 458.32 458.32"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,be||(be=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M452.611,24.82c-3.605-2.844-8.314-3.877-12.781-2.813L229.16,72.4L18.49,22.008c-4.466-1.065-9.176-0.032-12.781,2.813 C2.104,27.666,0,32.005,0,36.597v333.899c0,6.94,4.761,12.974,11.511,14.589c2.241,0.536,213.117,50.985,214.402,51.27 c1.589,0.353,3.276,0.368,3.246,0.368h0.001c1.126,0,2.555-0.188,3.489-0.411l214.161-51.227c6.75-1.615,11.51-7.648,11.51-14.589 V36.597C458.32,32.005,456.216,27.665,452.611,24.82z M212.161,318.549c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,293.533 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,302.398,214.088,310.492,212.161,318.549z M212.161,253.049c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,228.033 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,236.898,214.088,244.992,212.161,253.049z M212.161,187.549c-1.927,8.056-10.019,13.025-18.078,11.1L43.098,162.533 c-8.057-1.928-13.026-10.021-11.099-18.078s10.02-13.023,18.078-11.1l150.985,36.115 C209.119,171.398,214.088,179.492,212.161,187.549z M416.062,293.533l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.924,16.151,3.042,18.078,11.1 C429.088,283.512,424.119,291.605,416.062,293.533z M416.062,228.033l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.925,16.151,3.042,18.078,11.1 C429.088,218.012,424.119,226.105,416.062,228.033z M416.062,162.533l-150.985,36.115c-8.058,1.926-16.151-3.042-18.078-11.1 c-1.927-8.057,3.042-16.15,11.099-18.078l150.985-36.115c8.059-1.926,16.151,3.042,18.078,11.1 C429.088,152.512,424.119,160.605,416.062,162.533z"})))),je||(je=l.createElement("g",null)),me||(me=l.createElement("g",null)),he||(he=l.createElement("g",null)),xe||(xe=l.createElement("g",null)),ge||(ge=l.createElement("g",null)),fe||(fe=l.createElement("g",null)),Oe||(Oe=l.createElement("g",null)),ve||(ve=l.createElement("g",null)),ye||(ye=l.createElement("g",null)),we||(we=l.createElement("g",null)),Ee||(Ee=l.createElement("g",null)),ke||(ke=l.createElement("g",null)),Fe||(Fe=l.createElement("g",null)),ze||(ze=l.createElement("g",null)),Ce||(Ce=l.createElement("g",null)))}var Ie,Me=l.forwardRef(Le),Ne=(t.p,["title","titleId"]);function Ge(){return Ge=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ge.apply(this,arguments)}function Re(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function Ve(e,n){var t=e.title,r=e.titleId,c=Re(e,Ne);return l.createElement("svg",Ge({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",xmlnsXlink:"http://www.w3.org/1999/xlink",enableBackground:"new 0 0 512 512",ref:n,"aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,Ie||(Ie=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"m194.8,286.5l46.8,51.6c7.8,8.5 22.6,8.5 30.4,0l46.8-51.6 119.8,128.7h-363.6l119.8-128.7zm-27.5-30.3l-115,123.5v-250.4l115,126.9zm89.5,38l-178.9-197.4h357.7l-178.8,197.4zm204.3-164.9v250.4l-115-123.5 115-126.9zm19.4-73.3h-449c-11.3,0-20.5,9.1-20.5,20.4v359.2c0,11.3 9.2,20.4 20.5,20.4h448.9c11.3,0 20.5-9.1 20.5-20.4v-359.2c0.1-11.3-9.1-20.4-20.4-20.4z"})))))}var Xe,qe,Je,Qe,Te,_e,He,Ae=l.forwardRef(Ve),Ke=(t.p,function(e){var n=e.title,t=e.description,r=e.icon,c=e.path,l=e.active;return Object(h.jsx)(re,{children:Object(h.jsxs)(s.b,{to:c,children:[Object(h.jsxs)(ce,{children:[Object(h.jsx)(le,{children:n}),Object(h.jsx)(ae,{children:t})]}),Object(h.jsxs)(ie,{active:l,children:["profile"===r&&Object(h.jsx)(Se,{fill:"white",width:20}),"book"===r&&Object(h.jsx)(Me,{fill:"white",width:20}),"mail"===r&&Object(h.jsx)(Ae,{fill:"white",width:20})]}),Object(h.jsx)(oe,{active:l,children:"  "})]})})}),Ue=function(e){var n=e.children,t=U().state;return Object(h.jsx)(W,{children:Object(h.jsxs)(Y,{children:[Object(h.jsx)(te,{}),Object(h.jsxs)(Z,{children:[Object(h.jsxs)($,{children:[Object(h.jsx)(Ke,{title:"Pessoal",description:"Se identifique",icon:"profile",path:"/",active:1===t.currentStep}),Object(h.jsx)(Ke,{title:"Profissional",description:"Seu n\xedvel",icon:"book",path:"/step2",active:2===t.currentStep}),Object(h.jsx)(Ke,{title:"Contatos",description:"Como te achar",icon:"mail",path:"/step3",active:3===t.currentStep})]}),Object(h.jsx)(ee,{children:n})]})]})})},We=function(){var e=Object(d.e)(),n=U(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){r({type:c.setCurrentStep,payload:1})}),[]);return Object(h.jsx)(Ue,{children:Object(h.jsxs)(b,{children:[Object(h.jsxs)("p",{children:[" Passo - ",t.currentStep," "]}),Object(h.jsx)("h1",{children:" Vamos come\xe7ar! "}),Object(h.jsx)("p",{children:" Preencha seu nome completo. "}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{children:["Seu nome completo",Object(h.jsx)("input",{type:"text",value:t.name,onChange:function(e){r({type:c.setName,payload:e.target.value})}})]}),Object(h.jsx)("button",{onClick:function(){""!==t.name?e.push("/step2"):alert("Preencha seu nome! ")},children:"Pr\xf3ximo"})]})})},Ye=p.a.div(Xe||(Xe=Object(u.a)(["\n\n\n    @media screen and (max-device-width : 800px){\n        width: 13em;\n    }\n   \n    p {\n    font-size: 13px;\n    color: #B8B8D4;\n    }\n    h1 {\n    margin:0;\n    padding: 0;\n    font-size: 26px;\n    }\n    hr {\n        height: 1px;\n        border: 0;\n        background-color: #492e4a;\n        margin: 30px 0;\n    }\n    \n\n    label {\n        font-size: 13px;\n\n        input {\n            display: block;\n            margin: 7px 0;\n            padding: 0.7em;\n            border: 2px solid #3976FF;\n            border-radius: 10px;\n            color: #FFF;\n            font-size: 15px;\n            background-color: #604861;\n        }\n       \n    }\n\n    button {\n        background-color:  #3976FF;  \n        color: #FFF;\n        font-weight: bold;\n        padding: 10px 20px;\n        border: 0;\n        border-radius: 30px;\n        margin-top: 30px;\n    }\n\n    .backButton{\n        font-size: 16px;\n        text-decoration:none;\n        padding: 10px 20px;\n        color: #B8B8D4;\n    }\n"]))),Ze=p.a.div(qe||(qe=Object(u.a)(["\n    display: flex;\n    border: 2px solid ",";\n    border-radius: 1em;\n    padding: 1.5em;\n    margin-bottom: 1em;\n    align-items: center;\n    cursor: pointer;\n\n    &:hover {\n        border: 2px solid white; \n    }\n"])),(function(e){return e.selected?"#3876ff":"gray"})),$e=p.a.div(Je||(Je=Object(u.a)(["\n    width: 2.5em;\n    height: 60px;\n    display: flex;\n    \n    justify-content: center;\n    align-items: center;\n\n    border-radius: 50%;\n    background-color: #492e4a;\n   \n    font-size: 25px;\n"]))),en=p.a.div(Qe||(Qe=Object(u.a)(["\n    flex: 1;\n    margin-left: 1.5em;\n"]))),nn=p.a.div(Te||(Te=Object(u.a)(["\n    font-size: 17px;\n    font-weight: bold;\n    margin-bottom: 0.5em;\n"]))),tn=p.a.div(_e||(_e=Object(u.a)(["\n    font-size: 14px;\n    color: #B8B8D4;\n"]))),rn=function(e){var n=e.title,t=e.description,r=e.icon,c=e.selected,l=e.onClick;return Object(h.jsxs)(Ze,{onClick:l,selected:c,children:[Object(h.jsx)($e,{children:r}),Object(h.jsxs)(en,{children:[Object(h.jsx)(nn,{children:n}),Object(h.jsx)(tn,{children:t})]})]})},cn=function(){var e=Object(d.e)(),n=U(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){""===t.name?e.push("/"):r({type:c.setCurrentStep,payload:2})}),[]);var a=function(e){r({type:c.setLevel,payload:e})};return Object(h.jsx)(Ue,{children:Object(h.jsxs)(Ye,{children:[Object(h.jsxs)("p",{children:[" Passo - ",t.currentStep]}),Object(h.jsxs)("h1",{children:[t.name,", o que melhor te descreve?"]}),Object(h.jsx)("p",{children:"Escolha a op\xe7\xe3o para seu estado atual, profissionalmente."}),Object(h.jsx)("hr",{}),Object(h.jsx)(rn,{title:"Sou iniciante",description:"Programo h\xe1 2 anos",icon:"\ud83d\udc76",selected:0===t.level,onClick:function(){return a(0)}}),Object(h.jsx)(rn,{title:"Sou programadora",description:"Programo h\xe1 mais de 2 anos",icon:"\ud83d\ude0e",selected:1===t.level,onClick:function(){return a(1)}}),Object(h.jsx)(s.b,{to:"/",className:"backButton",children:" Voltar "}),Object(h.jsx)("button",{onClick:function(){""!==t.name?e.push("/step3"):alert("Preencha os dados.")},children:" Pr\xf3ximo "})]})})},ln=p.a.div(He||(He=Object(u.a)(["\n\n   \n    p {\n    font-size: 13px;\n    color: #B8B8D4;\n    }\n    h1 {\n    margin:0;\n    padding: 0;\n    font-size: 26px;\n    }\n    hr {\n        height: 1px;\n        border: 0;\n        background-color: #B8B8D4;\n        margin: 30px 0;\n    }\n    \n\n    label {\n        font-size: 13px;\n\n        input {\n            display: block;\n            margin: 7px 0;\n            //box-sizing: border-box;\n            //width: 100%;\n            padding: 0.7em;\n            border: 2px solid #3976FF;\n            border-radius: 10px;\n            color: #FFF;\n            //outline: 0;\n            font-size: 15px;\n            background-color: #3D1D3D;\n        }\n       \n    }\n\n    button {\n        background-color:  #3976FF;   //  #25CD89;\n        color: #FFF;\n      //  font-size: 14px;\n        font-weight: bold;\n        padding: 10px 20px;\n        border: 0;\n        border-radius: 30px;\n        cursor: pointer;\n        margin-top: 30px;\n    }\n    .backButton{\n        font-size: 16px;\n        text-decoration:none;\n        padding: 10px 20px;\n        color: #B8B8D4;\n    }\n"]))),an=function(){var e=Object(d.e)(),n=U(),t=n.state,r=n.dispatch;Object(l.useEffect)((function(){""===t.name?e.push("/"):r({type:c.setCurrentStep,payload:3})}),[]);return Object(h.jsx)(Ue,{children:Object(h.jsxs)(ln,{children:[Object(h.jsxs)("p",{children:["Passo - ",t.currentStep]}),Object(h.jsxs)("h1",{children:["Legal ",t.name,", onde te achamos?"]}),Object(h.jsx)("p",{children:"Preencha abaixo para conseguirmos entrar em contato."}),Object(h.jsx)("hr",{}),Object(h.jsxs)("label",{children:["Qual seu e-mail?",Object(h.jsx)("input",{type:"email",value:t.email,onChange:function(e){r({type:c.setEmail,payload:e.target.value})}})]}),Object(h.jsxs)("label",{children:["Qual seu GitHub?",Object(h.jsx)("input",{type:"url",value:t.github,onChange:function(e){r({type:c.setGithub,payload:e.target.value})}})]}),Object(h.jsx)(s.b,{to:"/step2",className:"backButton",children:"Voltar"}),Object(h.jsx)("button",{onClick:function(){""!==t.email&&""!==t.github?console.log("Formul\xe1rio preenchido , com os dados: ",t):alert("Preencha os dados !")},children:"Finalizar"})]})})},on=function(){return Object(h.jsxs)(s.a,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,component:We}),Object(h.jsx)(d.a,{path:"/step2",component:cn}),Object(h.jsx)(d.a,{path:"/step3",component:an})]})},sn=function(){return Object(h.jsx)(K,{children:Object(h.jsx)(on,{})})},dn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,l=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),l(e),a(e)}))};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(sn,{})}),document.getElementById("root")),dn()}},[[37,1,2]]]);
//# sourceMappingURL=main.ab854cfc.chunk.js.map