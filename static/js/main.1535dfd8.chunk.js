(this["webpackJsonpgo-react"]=this["webpackJsonpgo-react"]||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(13),r=s.n(n),i=s(4),c=s.n(i),o=s(14),l=s(15),m=s(16),d=s(19),j=s(18),u=s(17),v=s.n(u),h=s(0);function b(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsxs)("ul",{className:"genres",children:[r.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genre",children:t},t)}))," "]}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,100),"..."]})]})]})}s(44);var g=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(c.a.mark((function t(){var s,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(" https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.Component);r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1535dfd8.chunk.js.map