(this.webpackJsonpmoviesearchapp=this.webpackJsonpmoviesearchapp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(15),a(16),a(5)),s=a(6),i=a(9),m=a(8),u=a(1),p=a.n(u),v=a(7),h=a(2);function d(e){var t=e.movie;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card--image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(t.poster_path),alt:"{movie.title + 'poster'}"}),r.a.createElement("div",{className:"card--content"},r.a.createElement("h3",{className:"card--title"},t.title),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE:",t.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING:",t.vote_rating)),r.a.createElement("p",{className:"card--desc"},t.overview)))}function f(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(h.a)(l,2),s=o[0],i=o[1],m=function(){var e=Object(v.a)(p.a.mark((function e(t){var n,r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=02794d7ab6337493bce2de35cc369f07&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,i(c.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("form",{className:"form",onSubmit:m},r.a.createElement("label",{className:"label",htmlFor:"query"},"Movie Name"),r.a.createElement("input",{className:"input",type:"text",name:"query",placeholder:"Search for movie",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Search")),r.a.createElement("div",{className:"card-list"},s.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(d,{movie:e,key:e.id})}))))}var E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Movie Search"),r.a.createElement("p",{className:"p-main"},"This app uses the TMDb API but is not endorsed or certified by:",r.a.createElement("a",{href:"https://www.themoviedb.org/"},"TMDb")),r.a.createElement(f,null))}}]),a}(n.Component);var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.0d22e10e.chunk.js.map