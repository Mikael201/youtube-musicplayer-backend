(this.webpackJsonpmusicplayer=this.webpackJsonpmusicplayer||[]).push([[0],{19:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(15),i=n.n(l),r=n(3),u=n(4),o=n.n(u),d="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&",s=function(e){var t,n=[];return o.a.get(d+"q=".concat(e,"&fields=items(snippet(title))&key=API_KEY")).then((function(a){var c=a.data.items.map((function(e){return e.snippet.title})).filter((function(e){return e}));o.a.get(d+"q=".concat(e,"&fields=items(id(videoId))&key=API_KEY")).then((function(e){t=e.data.items.map((function(e){return e.id.videoId}));for(var a=0;a<c.length;a++)n[a]={videoid:t[Object.keys(t)[a]],title:c[a]}})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),n},m=function(){return o.a.get("/all")},f=function(e){return o.a.post("/song",e)},b=function(e){return o.a.delete("/song/".concat(e))},p=n(16),E=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)(""),u=Object(r.a)(i,2),o=u[0],d=u[1],E=Object(a.useState)([]),v=Object(r.a)(E,2),h=v[0],O=v[1],j=Object(a.useState)([]),y=Object(r.a)(j,2),g=y[0],S=y[1],k=Object(a.useState)(!1),I=Object(r.a)(k,2),x=I[0],C=I[1],w=Object(a.useState)(""),T=Object(r.a)(w,2),J=T[0],K=T[1],N=Object(a.useState)(""),P=Object(r.a)(N,2),Y=(P[0],P[1]),q=Object(a.useState)(!1),A=Object(r.a)(q,2),B=A[0],D=A[1];Object(a.useEffect)((function(){m().then((function(e){S(e.data.data)}))}),[]);return c.a.createElement("div",null,x?c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return l(g[0].videoid)}},"aloita"),c.a.createElement(p.a,{onPlay:function(e){b(n).then((function(){Y(g[0].title),S(g.filter((function(e){return e.videoid!==n}))),l(g[0].videoid)}))},onStateChange:function(e){m().then((function(e){S(e.data.data)})),e.target.playVideo()},videoId:n})):null,c.a.createElement("input",{type:"text",placeholder:"biisin nimi / esitt\xe4j\xe4 tmv",value:o,name:"userInput",onChange:function(e){d(e.target.value)}})," ",c.a.createElement("button",{onClick:function(){D(!1);var e=s(o);setTimeout((function(){O(e)}),4e3)}},"Etsi"),c.a.createElement("br",null),h.map((function(e){return c.a.createElement("div",{key:e.videoid,style:{borderStyle:"solid"}},c.a.createElement("h5",null,e.title),c.a.createElement("button",{disabled:B,onClick:function(){return t=e,D(!0),void f(t).then((function(e){S(g.concat(e)),d(""),O([]),m().then((function(e){S(e.data.data)}))})).catch((function(e){return console.log(e)}));var t}},"JONOON")," ",c.a.createElement("br",null))}))," ",c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("h1",null,"Biisijono:")," ",c.a.createElement("br",null),g.map((function(e){return c.a.createElement("div",{key:e.videoid,style:{borderStyle:"5px solid red"}},c.a.createElement("h5",null,e.title," ",c.a.createElement("hr",null)))}))," ",c.a.createElement("br",null)," ",c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("input",{type:"text",placeholder:"tube playerin k\xe4ytt\xf6\xf6notto",value:J,name:"adminText",onChange:function(e){K(e.target.value),"YOUSHOULDNEVERDOITLIKETHIS"===J&&C(!0)}}))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8053b126.chunk.js.map