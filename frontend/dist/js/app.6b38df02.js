(function(t){function e(e){for(var s,r,i=e[0],c=e[1],u=e[2],d=0,p=[];d<i.length;d++)r=i[d],a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},o=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("64a9"),a=n.n(s);a.a},1:function(t,e){},5016:function(t,e,n){"use strict";var s=n("b088"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var s=n("2b0e"),a=n("8c4f"),o=n("bc3a"),r=n.n(o),i=n("8a03"),c=n.n(i),u=(n("5abe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{isLogin:t.logged,msg:"Welcome to Your Vue.js App"},on:{signOut:t.signOutAction,login:t.loginAction}}),n("router-view")],1)}),l=[],d=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("img",{attrs:{src:"/favicon.png",type:"image/png"}}),n("h1",{staticStyle:{color:"rgb(101,59,203)"}},[t._v(" Speed Alternance")])]),t._m(0)],1),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("\n        Accueil\n      ")]),n("router-link",{staticClass:"navbar-item",attrs:{to:"/annonces"}},[t._v("\n        Annonces\n      ")])],1),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[t.isLogin?t._e():n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button is-primary",attrs:{to:"/signup"}},[n("strong",[t._v("Inscription")])]),n("button",{staticClass:"button is-light",on:{click:t.loginModal}},[t._v("\n            Connexion\n          ")])],1),t.isLogin?n("div",{staticClass:"buttons"},[n("button",{staticClass:"button is-danger",on:{click:t.signout}},[n("strong",[t._v("Deconnexion")])]),n("a",{staticClass:"button is-light"},[t._v("\n            Profile\n          ")])]):t._e()])])])])}),p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}}),n("span",{attrs:{"aria-hidden":"true"}})])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submitLogin(e)}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t._m(0),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:t.login.email,callback:function(e){t.$set(t.login,"email",e)},expression:"login.email"}})],1),n("b-field",{attrs:{label:"Password"}},[n("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})],1),n("b-checkbox",[t._v("Remember me")])],1),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Close")]),n("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Login")])])])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Login")])])}],h={name:"LoginModal",data:function(){return{login:{email:"",password:""}}},methods:{submitLogin:function(){this.$emit("login",this.login),this.$parent.close()}}},b=h,g=n("2877"),v=Object(g["a"])(b,m,f,!1,null,"f55aa0d2",null),C=v.exports,_={name:"Header",component:{LoginModal:C},props:{isLogin:Boolean},methods:{signout:function(){this.$emit("signOut")},loginModal:function(){var t=this;this.$modal.open({parent:this,component:C,hasModalCard:!0,events:{login:function(e){t.$emit("login",e)}}})}}},y=_,w=(n("5d94"),Object(g["a"])(y,d,p,!1,null,"71ad840e",null)),S=w.exports,k=n("d225"),$=n("b0b4");r.a.defaults.baseURL="https://speed-alternance.herokuapp.com/api",r.a.defaults.headers.common["Authorization"]=localStorage.access_token?localStorage.access_token:null,r.a.defaults.headers.post["Content-Type"]="application/json";var O=function(){function t(){Object(k["a"])(this,t)}return Object($["a"])(t,null,[{key:"signUp",value:function(t){return r.a.post("/user/signup",t).then(function(t){localStorage.setItem("access_token",t.data.token),localStorage.setItem("user",JSON.stringify(t.data.user))})}},{key:"login",value:function(t){return r.a.post("/user/login",t).then(function(t){localStorage.setItem("access_token",t.data.token),localStorage.setItem("user",JSON.stringify(t.data.user))})}},{key:"getUser",value:function(){return r.a.get("/user/")}}]),t}(),x=O,j=new s["default"],U={name:"app",components:{Header:S},data:function(){return{userConnected:JSON.parse(localStorage.getItem("user")),spawnSignup:!1,spawnLogin:!1,logged:!!localStorage.access_token}},mounted:function(){j.$on("signup",this.signUpAction)},methods:{signUpAction:function(t){var e=this;x.signUp(t).then(function(){e.$snackbar.open({message:"Content de vous acceuillir parmis nous!",type:"is-success",position:"is-top-right",actionText:"ok",indefinite:!0}),e.spawnSignup=!1,e.logged=!0,e.userConnected=JSON.parse(localStorage.getItem("user")),e.$nextTick(function(){e.userConnected=JSON.parse(localStorage.getItem("user"))}),e.$router.push("/")}).catch(function(t){e.err=t,e.$toast.open({duration:5e3,message:t,type:"is-danger"})})},signOutAction:function(){var t=this;localStorage.removeItem("access_token"),localStorage.removeItem("user"),this.userConnected={},this.$nextTick(function(){t.userConnected={}}),this.logged=!1,this.$toast.open({duration:5e3,message:"A bientot !",type:"is-danger"})},loginAction:function(t){var e=this;x.login(t).then(function(){var t=JSON.parse(localStorage.user);e.$toast.open({duration:5e3,message:"Content de vous revoir parmis nous ".concat(t.firstname," ").concat(t.name),type:"is-success"}),e.userConnected=JSON.parse(localStorage.getItem("user")),e.$nextTick(function(){e.userConnected=JSON.parse(localStorage.getItem("user"))}),e.spawnLogin=!1,e.logged=!0}).catch(function(t){e.err=t,e.$toast.open({duration:5e3,message:t,type:"is-danger"})})}}},E=U,A=(n("034f"),Object(g["a"])(E,u,l,!1,null,null,null)),L=A.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submitSignUp(e)}}},[n("h2",{staticClass:"title"},[t._v("Formulaire Inscription")]),n("div",{staticClass:"columns"},[n("b-field",{staticClass:"column",attrs:{label:"Prenom"}},[n("b-input",{model:{value:t.user.firstname,callback:function(e){t.$set(t.user,"firstname",e)},expression:"user.firstname"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Nom"}},[n("b-input",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:t.autoEmail,maxlength:"30"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Quel est votre profil ?"}},[n("b-select",{attrs:{placeholder:"Etudiant"},model:{value:t.isStudientString,callback:function(e){t.isStudientString=e},expression:"isStudientString"}},[n("option",{attrs:{value:"true"}},[t._v("Etudiant")]),n("option",{attrs:{value:"false"}},[t._v("Professionel")])])],1)],1),n("div",{staticClass:"columns"},[n("b-field",{staticClass:"column",attrs:{label:"Password"}},[n("b-input",{attrs:{type:"password",maxlength:"30"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),n("b-field",{staticClass:"column",attrs:{label:"Password Confirmation"}},[n("b-input",{attrs:{type:"password",maxlength:"30"},model:{value:t.passwordConfirmation,callback:function(e){t.passwordConfirmation=e},expression:"passwordConfirmation"}})],1)],1),n("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t._v("S'inscrire")])])])},R=[],I={name:"SignUp",props:{msg:String,login:Boolean,isStudent:Boolean},data:function(){return{user:{name:"",firstname:"",password:"",email:"",isStudent:!1},err:"",passwordConfirmation:"",isStudientString:!1}},methods:{submitSignUp:function(){if(this.passwordConfirmation!==this.user.password)return this.$toast.open({duration:5e3,message:"Veuillez renseigner le meme mot de passe dans les deux champs",type:"is-danger"}),!1;"true"===this.isStudientString?this.user.isStudent=!0:this.user.isStudent=!1,j.$emit("signup",this.user)}},computed:{autoEmail:function(){return this.user.firstname.toLowerCase()+"."+this.user.name.toLowerCase()+"@ynov.com"}}},J=I,N=(n("da89"),Object(g["a"])(J,P,R,!1,null,"4270282e",null)),M=N.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("img",{attrs:{id:"logo",src:"/favicon.png",type:"image/png"}}),n("h1",{staticClass:"title",staticStyle:{color:"rgb(101,59,203)"}},[t._v("\n            Speed Alternance\n        ")]),n("h2",{staticClass:"subtitle",staticStyle:{color:"rgb(56,174,111)"}},[t._v("\n            Plateforme de rencontre et d'échange entre étudiants et professionnels souhaitant se lancer dans l'alternance.\n        ")]),n("img",{attrs:{id:"logo",src:"/givemefive.png",type:"image/png"}})])}],B={name:"Homepage"},D=B,q=(n("e8e4"),Object(g["a"])(D,T,z,!1,null,"3fd41a7d",null)),F=q.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-table",{attrs:{data:t.chats},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{label:"messages"}},[t._v(t._s(e.row.content))]),n("b-table-column",{attrs:{label:"name"}},[t._v(t._s(e.row.emit_by))])]}}])}),n("form",{staticClass:"chatForm",on:{submit:t.sendMessage}},[n("b-field",{attrs:{grouped:""}},[n("b-input",{attrs:{placeholder:"",expanded:""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),n("p",{staticClass:"control"},[n("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t._v("SEND")])])],1)],1)],1)},V=[];r.a.defaults.baseURL="https://speed-alternance.herokuapp.com/api";var Y=function(){function t(){Object(k["a"])(this,t)}return Object($["a"])(t,null,[{key:"getAllChat",value:function(){return r.a.get("/chatRoom/")}},{key:"createChat",value:function(t){return r.a.post("/chatRoom/",t)}},{key:"getCurrentChat",value:function(t){return r.a.get("/chatRoom/".concat(t))}},{key:"updateChat",value:function(t,e){return r.a.put("/chatRoom/".concat(t),e)}}]),t}(),Q=Y,W=n("8055"),G={name:"ChatRoom",data:function(){return{chats:[],error:"",content:"",socket:W(window.location.hostname),isUserConnected:JSON.parse(localStorage.getItem("user"))}},created:function(){var t=this;Q.getCurrentChat(this.$route.params.id).then(function(e){t.chats=e.data.messages}).catch(function(e){t.error=e.message}),this.socket.on("new-message",function(e){t.chats.push(e)})},methods:{sendMessage:function(t){var e=this;t.preventDefault();var n={receiver:this.$route.params.receiver_id,sender:this.isUserConnected._id,emitBy:this.isUserConnected.firstname,content:this.content};Q.updateChat(this.$route.params.id,n).then(function(t){e.socket.emit("new-message",n)}).catch(function(t){e.error=t.message})}}},K=G,X=(n("6028"),Object(g["a"])(K,H,V,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-table",{attrs:{data:t.connectedUser,columns:t.columns},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{label:"First name"}},[t._v(t._s(e.row.firstname))]),n("b-table-column",{attrs:{label:"Name"}},[t._v(t._s(e.row.name))]),n("b-table-column",{attrs:{label:"Email"}},[t._v(t._s(e.row.email))]),n("b-table-column",{attrs:{label:"isConnected"}},[t._v(t._s(e.row.isConnected))]),n("b-button",{attrs:{type:"is-success"},on:{click:function(n){return t.openChatRoom(e.row._id)}}},[t._v("Join")])]}}])})],1)},et=[],nt=(n("96cf"),n("3b8d")),st={name:"ChatList",data:function(){return{isUserConnected:{},connectedUser:[],disconnectedUser:[],user:[],socket:W(window.location.hostname),err:"",columns:[{field:"firstname",label:"First Name"},{field:"name",label:"Last Name"},{field:"email",label:"Email"},{field:"isConnected",label:"Connected"}]}},created:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.isUserConnected=JSON.parse(localStorage.getItem("user")),x.getUser().then(function(t){e.user=t.data,e.disconnectedUser=e.user.filter(function(t){return!t.isConnected}),e.connectedUser=e.user.filter(function(t){return t.isConnected})}).catch(function(t){e.err=t.message});case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{openChatRoom:function(t){var e=this,n={receiver:t,sender:this.isUserConnected._id,emitBy:this.isUserConnected.firstname,content:"".concat(this.isUserConnected.firstname," est en train d'ecrire ... ")};Q.createChat(n).then(function(n){e.$router.push({name:"ChatRoom",params:{id:n.data.chat._id,receiver_id:t}})}).catch(function(t){e.err=t.message})}}},at=st,ot=Object(g["a"])(at,tt,et,!1,null,null,null),rt=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h2",{staticClass:"title"},[t._v("Listes des dernieres annonces")]),n("b-button",{attrs:{type:"is-success"},on:{click:t.newPostModal}},[t._v("Ajouter une annonce")]),n("div",t._l(t.posts,function(e){return n("div",{key:e.id,staticClass:"post columns",attrs:{post:e}},[e.isJobOffer?n("div",{staticClass:"column isJobOffer"},[t._m(0,!0)]):t._e(),e.isJobOffer?t._e():n("div",{staticClass:"column studentSearch"},[t._m(1,!0)]),n("div",{staticClass:"column is-four-fifths"},[n("p",{staticClass:"title is-6"},[t._v(t._s(e.title))]),n("p",{staticClass:"subtitle is-6"},[t._v(t._s(e.content))])]),n("div",{staticClass:"column is-vcentered emailIcon"},[n("b-button",{staticClass:"customButton",attrs:{size:"is-large"},on:{click:function(n){return t.sendMessage(e.publisherId)}}},[n("b-icon",{staticClass:"is-vcentered",attrs:{icon:"email",size:"is-large",type:"is-success"}})],1)],1)])}),0)],1)},ct=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-5"},[n("br"),t._v("Pro\n        ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"title is-5"},[n("br"),t._v("Etu\n        ")])}];n("6762"),n("2fdb");r.a.defaults.baseURL="https://speed-alternance.herokuapp.com/api",r.a.defaults.headers.common["Authorization"]=localStorage.access_token?localStorage.access_token:null;var ut=function(){function t(){Object(k["a"])(this,t)}return Object($["a"])(t,null,[{key:"getAll",value:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",r.a.get("/post"));case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},{key:"publish",value:function(t){return r.a.post("/post",t)}}]),t}(),lt=ut,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submitPost(e)}}},[n("div",{staticClass:"modal-card",staticStyle:{width:"50em"}},[t._m(0),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Titre"}},[n("b-input",{attrs:{placeholder:"Titre de votre annonce",required:""},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}})],1),n("b-field",{attrs:{label:"Contenue de l'annonce"}},[n("b-input",{attrs:{type:"textarea",placeholder:"Ecrivez ici votre annonce, les personnes interréssé vous ecrirons ensuite ",required:""},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)],1),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$parent.close()}}},[t._v("Annuler")]),n("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("Publier mon annonce")])])])])},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Nouvelle Annonce")])])}],mt={name:"NewPost",data:function(){return{socket:W(window.location.hostname),post:{title:"",content:"",publisherId:"",isJobOffer:!1}}},methods:{submitPost:function(){var t=this,e=JSON.parse(localStorage.user);this.post.publisherId=e._id,this.post.isJobOffer=!e.isStudent,lt.publish(this.post).then(function(e){201==e.status&&(t.$parent.close(),t.socket.emit("new-post",e.data.post),t.$toast.open({duration:5e3,message:"Annonces ajouté !",type:"is-success"}))}).catch(function(e){t.$toast.open({duration:5e3,message:e,type:"is-danger"})})}}},ft=mt,ht=Object(g["a"])(ft,dt,pt,!1,null,"b8fbebbe",null),bt=ht.exports,gt={name:"Post",data:function(){return{isUserConnected:{},posts:[],socket:W(window.location.hostname)}},methods:{newPostModal:function(){if(!localStorage.access_token)return this.$toast.open({duration:5e3,message:"Vous devez etre connecté pour poster une annonce",type:"is-danger"}),!1;this.$modal.open({parent:this,component:bt,hasModalCard:!0})},sendMessage:function(){var t=Object(nt["a"])(regeneratorRuntime.mark(function t(e){var n,s,a,o,r=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(localStorage.access_token){t.next=3;break}return this.$toast.open({duration:5e3,message:"Vous devez etre connecté pour répondre à une annonce",type:"is-danger"}),t.abrupt("return",!1);case 3:return t.next=5,Q.getAllChat();case 5:n=t.sent,s=n.data.some(function(t){return t.users_id.includes(r.isUserConnected._id)&&t.users_id.includes(e)}),a={users_id:[e,this.isUserConnected._id],messages:[]},s?(o=n.data.filter(function(t){return t.users_id.includes(r.isUserConnected._id)&&t.users_id.includes(e)}),Q.getCurrentChat(o[0]._id).then(function(t){r.$router.push({name:"ChatRoom",params:{id:o[0]._id}})}).catch(function(t){r.err=t.message})):Q.createChat(a).then(function(t){r.$router.push({name:"ChatRoom",params:{id:t.data.chat._id}})}).catch(function(t){r.err=t.message});case 9:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),reloadPost:function(){var t=this;lt.getAll().then(function(e){return t.posts=e.data.posts}).catch(function(e){return t.$toast.open({duration:5e3,message:"une erreur est survenue : ".concat(e),type:"is-danger"})})}},created:function(){var t=this;this.isUserConnected=JSON.parse(localStorage.getItem("user")),this.socket.on("new-post",function(e){t.posts.unshift(e)}),lt.getAll().then(function(e){return t.posts=e.data.posts}).catch(function(e){return t.$toast.open({duration:5e3,message:"une erreur est survenue : ".concat(e),type:"is-danger"})})}},vt=gt,Ct=(n("5016"),Object(g["a"])(vt,it,ct,!1,null,"7823066c",null)),_t=Ct.exports;s["default"].config.productionTip=!1,s["default"].config.$http=r.a,s["default"].use(c.a),s["default"].use(a["a"]);var yt=new a["a"]({mode:"history",routes:[{path:"/ChatRoom/:id",name:"ChatRoom",component:Z},{path:"/signup",component:M,name:"signup"},{path:"/ChatList",component:rt,meta:{requiresAuth:!0}},{path:"/",component:F,name:"root"},{path:"/annonces",component:_t,name:"post"}]});yt.beforeEach(function(t,e,n){"/ChatList"===t.path?localStorage.getItem("access_token")?(!0,n()):n({path:"/"}):n()}),new s["default"]({router:yt,render:function(t){return t(L)}}).$mount("#app")},"5d94":function(t,e,n){"use strict";var s=n("eb2f"),a=n.n(s);a.a},"5f35":function(t,e,n){},6028:function(t,e,n){"use strict";var s=n("8ce2"),a=n.n(s);a.a},"64a9":function(t,e,n){},"8ce2":function(t,e,n){},b088:function(t,e,n){},cec8:function(t,e,n){},da89:function(t,e,n){"use strict";var s=n("cec8"),a=n.n(s);a.a},e8e4:function(t,e,n){"use strict";var s=n("5f35"),a=n.n(s);a.a},eb2f:function(t,e,n){}});
//# sourceMappingURL=app.6b38df02.js.map