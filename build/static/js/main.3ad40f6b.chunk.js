(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={movie:"Movie_movie__3MzJQ"}},function(e,t,n){e.exports={"movies-list":"MoviesList_movies-list__2-OBb"}},function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),i=(n(13),n(2)),s=n.n(i),o=n(5),u=n(1),m=n(6),p=n.n(m),v=function(e){return r.a.createElement("li",{className:p.a.movie},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,e.releaseDate),r.a.createElement("p",null,e.openingText))},f=n(7),E=n.n(f),b=function(e){return r.a.createElement("ul",{className:E.a["movies-list"]},e.movies.map((function(e){return r.a.createElement(v,{key:e.id,title:e.title,releaseDate:e.releaseDate,openingText:e.openingText})})))};n(15);var h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(!1),i=Object(u.a)(c,2),m=i[0],p=i[1],v=Object(a.useState)(null),f=Object(u.a)(v,2),E=f[0],h=f[1];Object(a.useEffect)((function(){d()}),[]);var d=Object(a.useCallback)(Object(o.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),h(null),e.prev=2,e.next=5,fetch("https://swapi.dev/api/films/");case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:n=e.sent,a=n.results.map((function(e){return{id:e.episode_id,title:e.title,openingText:e.opening_crawl,releaseDate:e.release_date}})),l(a),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),h(e.t0.message);case 18:p(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),[]),g=r.a.createElement("p",null,"Found no movies!");return n.length>0&&(g=r.a.createElement(b,{movies:n})),E&&(g=r.a.createElement("p",null,E)),m&&(g=r.a.createElement("p",null,"Loading...")),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",null,r.a.createElement("button",{onClick:d},"Fetch Movies")),r.a.createElement("section",null,g))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3ad40f6b.chunk.js.map