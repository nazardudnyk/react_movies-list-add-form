(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},20:function(e,t,i){"use strict";i.r(t);var a=i(6),n=i.n(a),c=(i(15),i(9)),s=i(2),r=i(10),l=(i(16),i(1)),o=(i(17),i(18),i(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(o.jsxs)("div",{className:"content",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},m=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=i(7),b=i.n(j);var u=function(e){var t=e.name,i=e.value,a=e.label,n=void 0===a?t:a,c=e.placeholder,r=void 0===c?"Enter ".concat(n):c,d=e.required,m=void 0!==d&&d,j=e.onChange,u=void 0===j?function(){}:j,h=Object(l.useState)((function(){return"".concat(t,"-").concat(Math.random().toFixed(16).slice(2))})),O=Object(s.a)(h,1)[0],g=Object(l.useState)(!1),p=Object(s.a)(g,2),v=p[0],f=p[1],x=v&&m&&!i;return Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:O,children:n}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{type:"text",id:O,"data-cy":"movie-".concat(t),className:b()("input",{"is-danger":x}),placeholder:r,value:i,onChange:function(e){return u(e.target.value)},onBlur:function(){return f(!0)}})}),x&&Object(o.jsx)("p",{className:"help is-danger",children:"".concat(n," is required")})]})},h=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(s.a)(i,2),n=a[0],c=a[1],r=Object(l.useState)(""),d=Object(s.a)(r,2),m=d[0],j=d[1],b=Object(l.useState)(""),h=Object(s.a)(b,2),O=h[0],g=h[1],p=Object(l.useState)(""),v=Object(s.a)(p,2),f=v[0],x=v[1],M=Object(l.useState)(""),N=Object(s.a)(M,2),w=N[0],U=N[1],y=Object(l.useState)(""),I=Object(s.a)(y,2),T=I[0],B=I[1],_=m.trim()&&f.trim()&&w.trim()&&T.trim();return Object(o.jsxs)("form",{className:"NewMovie",onSubmit:function(e){e.preventDefault(),c((function(e){return e+1})),j(""),g(""),x(""),U(""),B(""),t({title:m,description:O,imgUrl:f,imdbUrl:w,imdbId:T})},children:[Object(o.jsx)("h2",{className:"title",children:"Add a movie"}),Object(o.jsx)(u,{name:"title",label:"Title",value:m,onChange:function(e){return j(e)},required:!0}),Object(o.jsx)(u,{name:"description",label:"Description",value:O,onChange:function(e){return g(e)}}),Object(o.jsx)(u,{name:"imgUrl",label:"Image URL",value:f,onChange:function(e){return x(e)},required:!0}),Object(o.jsx)(u,{name:"imdbUrl",label:"Imdb URL",value:w,onChange:function(e){return U(e)},required:!0}),Object(o.jsx)(u,{name:"imdbId",label:"Imdb ID",value:T,onChange:function(e){return B(e)},required:!0}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:!_,children:"Add"})})})]},n)},O=i(8).map((function(e){return Object(r.a)({},e)})),g=function(){var e=Object(l.useState)(O),t=Object(s.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(m,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(h,{onAdd:function(e){a((function(t){return[].concat(Object(c.a)(t),[e])}))}})})]})};n.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.d50c38b0.chunk.js.map