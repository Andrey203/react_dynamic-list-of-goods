(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(3),c=n.n(a),u=n(1),s=n.n(u),i=n(4),l=n(5),f=n(6),d=n(9),m=n(7),h=(n(16),function(t){var e=t.goodsList;return 0===e.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Please press the load button"),r.a.createElement("i",null,"P.S. If you will click the button, but still don't see the list of products, then they are not there.")):r.a.createElement("ul",null,e.map((function(t){var e=t.id,n=t.color,o=t.name;return r.a.createElement("li",{key:e,style:{color:n}},o)})))}),p=n(8);function g(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){return g().then((function(t){return t.filter((function(t,e){return e<5}))}))},y=function(){return g().then((function(t){return Object(p.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).filter((function(t){return"red"===t.color}))}))},E=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={goodsList:[]},t.getGoods=function(){var e=Object(i.a)(s.a.mark((function e(n){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:o=e.sent,t.setState({goodsList:o});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t}return Object(f.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Dynamic list of Goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.getGoods(g)}},"Load All goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.getGoods(b)}},"Load 5 first goods"),r.a.createElement("button",{type:"button",onClick:function(){return t.getGoods(y)}},"Load red goods"),r.a.createElement(h,{goodsList:this.state.goodsList}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2eb0bf58.chunk.js.map