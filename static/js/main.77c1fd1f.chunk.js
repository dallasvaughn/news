(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{186:function(e,t,a){},337:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(47),r=a.n(n),s=a(37),i=a.n(s),l=a(105),u=a(20),o=(a(186),a(107)),j=a.n(o),h=a(8),d=function(e){return Object(h.jsxs)("form",{action:"#",className:"form",onSubmit:e.handleSubmit,children:[Object(h.jsx)("input",{type:"text",value:e.inputValue,className:"search",placeholder:"Search headlines by category...",onChange:function(t){return e.onInputValueChange(t.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"button",children:"Search"})]})},f=function(e){var t=e.author,a=e.description,c=e.title,n=e.image,r=e.source,s=e.url;return Object(h.jsxs)("div",{className:"news-card",children:[Object(h.jsx)("img",{src:n,alt:"news",className:"news-card__image"}),Object(h.jsxs)("div",{className:"text",children:[Object(h.jsx)("h2",{className:"news-card__title",children:c}),Object(h.jsxs)("p",{className:"news-card__author",children:["By ",t]}),Object(h.jsxs)("p",{className:"news-card__source",children:["Source: ",r]}),Object(h.jsx)("h4",{className:"news-card__content",children:a}),Object(h.jsx)("a",{className:"news-card__link",href:s,children:"Read original"})]})]})},b=function(e){var t=e.articles;return Object(h.jsx)("div",{className:"card-list",children:t?t.map((function(e){return Object(h.jsx)(f,{author:e.author,content:e.content,description:e.description,title:e.title,source:e.source.name,image:e.urlToImage,url:e.url},e.url)})):null})},m=a(16),p=a(345),O=a(339),x=a(343),v=a(172),g=a(24),y=a(173),w=a(87),N=a(175),_=a(170),S=function(e){var t,a=e.articles,c=[],n=[],r=Object(m.a)(a);try{for(r.s();!(t=r.n()).done;){var s=t.value;c.push(s.source.name)}}catch(o){r.e(o)}finally{r.f()}for(var i=function(){var e=u[l];n.some((function(t){return t.name===e}))?n.forEach((function(t){t.name===e&&t.articles++})):n.push({name:e,articles:1,empty:""})},l=0,u=c;l<u.length;l++)i();return n.length>0?Object(h.jsxs)("div",{className:"chart",children:[Object(h.jsx)("h2",{className:"chart__title",children:"Where is your news coming from?"}),Object(h.jsx)(p.a,{width:700,height:"80%",children:Object(h.jsxs)(O.a,{width:730,height:250,data:n,barCategoryGap:"10%",margin:{top:50,right:50},children:[Object(h.jsx)(x.a,{strokeDasharray:"3 3"}),Object(h.jsx)(v.a,{dataKey:"empty",children:Object(h.jsx)(g.a,{value:"Source Name",position:"insideBottom",style:{fill:"#fff"}})}),Object(h.jsx)(y.a,{tick:{fontSize:10},children:Object(h.jsx)(g.a,{value:"# of Articles",style:{fill:"#fff"},angle:"-90"})}),Object(h.jsx)(w.a,{cursor:!1}),Object(h.jsx)(N.a,{dataKey:"articles",fill:"#a9a9a9",children:Object(h.jsx)(_.a,{dataKey:"name",position:"top",style:{fill:"#fff"}})})]})})]}):null},k=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],f=s[1],m=Object(c.useState)([]),p=Object(u.a)(m,2),O=p[0],x=p[1];j.a.defaults.headers.common["X-API-Key"]="47eee27f9ed84612b7e07370f6ce0d0c",Object(c.useEffect)((function(){o.length>0&&function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://newsapi.org/v2/everything?q=".concat(o,"&pageSize=20"));case 2:t=e.sent,a=t.data.articles,x(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o]);var v=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{inputValue:a,onInputValueChange:function(e){n(e)},handleSubmit:v}),Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)(S,{articles:O}),Object(h.jsx)(b,{articles:O})]})]})};r.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[337,1,2]]]);
//# sourceMappingURL=main.77c1fd1f.chunk.js.map