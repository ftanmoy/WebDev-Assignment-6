(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var s=n(2),r=n.n(s),c=n(13),a=n.n(c),i=(n(24),n(4)),o=n.n(i),h=n(14),d=n(15),l=n(16),j=n(19),b=n(18),p=n(17),u=n.n(p),x=(n(44),n(0)),O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState({pokemon:e.target.value})},s.handleSearchClick=Object(h.a)(o.a.mark((function e(){var t,n,r,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.state.apiData=[],""!==s.state.error&&(t=document.getElementById("P"),document.getElementById("results").removeChild(t),s.state.error=""),n=s.state.pokemon.toLowerCase(),r="https://pokeapi.co/api/v2/pokemon/"+n,e.prev=4,e.next=7,u.a.get(r);case 7:c=e.sent,console.log(c.data),s.setState({apiData:c.data,found:!0}),e.next=23;break;case 12:if(e.prev=12,e.t0=e.catch(4),!e.t0.response){e.next=23;break}return console.log(e.t0.response.data),console.log(e.t0.response.status),s.setState({found:!1}),s.setState({error:e.t0.response.data}),(a=document.createElement("P")).id="P",a.innerHTML='Ooooppps ... character "'+s.state.pokemon+'" does not exist yet. Try sending it as a recommendation to the pokemon creators!',e.abrupt("return",document.getElementById("results").appendChild(a));case 23:case"end":return e.stop()}}),e,null,[[4,12]])}))),s.generateData=function(){var e=s.state.apiData,t=s.state.found,n=[e.types];console.log(n);var r=[];if(t){var c=e.name,a=e.height,i=e.weight,o=e.base_experience,h=e.species.name,d=e.sprites.other.dream_world.front_default;console.log(d);var l=[],j=[];if(e.types.length>1)for(var b=0;b<e.types.length;b++){var p=e.types[b].type.name;j.push(p),j.push(" ")}else{var u=e.types[0].type.name;j.push(u)}if(e.abilities.length>1)for(var O=0;O<e.abilities.length;O++){var m=e.abilities[O].ability.name;l.push(m),l.push(" ")}else{var g=e.abilities[0].ability.name;l.push(g)}return r.push(Object(x.jsxs)("tr",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsxs)("div",{id:"tableHeader",children:[" Information about ",c,": "]}),Object(x.jsx)("br",{})]}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Name: "}),Object(x.jsx)("th",{children:Object(x.jsx)("strong",{children:c})})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Height: "}),Object(x.jsx)("th",{children:a})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Weight: "}),Object(x.jsx)("th",{children:i})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Experience: "}),Object(x.jsx)("th",{children:o})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Type: "}),Object(x.jsx)("th",{children:j})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Species: "}),Object(x.jsx)("th",{children:h})]})}),Object(x.jsx)("tr",{children:Object(x.jsxs)("td",{children:[Object(x.jsx)("th",{children:"Abilities: "}),Object(x.jsx)("th",{children:l})]})})]},e.id)),r}},s.state={apiData:[],pokemon:"",found:!1,error:""},s}return Object(l.a)(n,[{key:"render",value:function(){var e="";try{void 0!==this.state.apiData.sprites.other.dream_world.front_default&&(e=this.state.apiData.sprites.other.dream_world.front_default)}catch(t){e=""}return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"search",children:[Object(x.jsx)("div",{id:"pic",children:Object(x.jsx)("img",{src:e,width:"350",height:"400"})}),Object(x.jsx)("h3",{children:"Pokemon Search"}),Object(x.jsx)("input",{type:"text",value:this.state.pokemon,onChange:this.handleChange,placeholder:"Enter Pokemon Name!"}),Object(x.jsx)("button",{className:"search-button",onClick:this.handleSearchClick,children:Object(x.jsx)("span",{children:" I Choose You! "})})]}),Object(x.jsx)("h4",{children:this.state.pokemon.name}),Object(x.jsx)("table",{id:"results",children:Object(x.jsx)("tbody",{children:this.generateData()})})]})}}]),n}(s.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),m()}},[[46,1,2]]]);
//# sourceMappingURL=main.7da03be0.chunk.js.map