(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/left.3a59d4ad.svg"},21:function(e,t,a){e.exports=a.p+"static/media/right.53140cf9.svg"},22:function(e,t,a){e.exports=a.p+"static/media/delete.8f325929.svg"},23:function(e,t,a){e.exports=a.p+"static/media/edit.fa8bef4b.svg"},24:function(e,t,a){e.exports=a.p+"static/media/home.4ae41237.svg"},25:function(e,t,a){e.exports=a.p+"static/media/analytics.040a3c41.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),i=a.n(r),c=(a(32),a(2)),s=a(3),d=a(7),l=a(4),u=a(6),m=(a(33),a(5)),p=["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];var f=function(e,t){var a=e.replace(/ /g,""),n=a.length,o=a.slice(-2).toLowerCase(),r=parseInt(a.slice(n-4,n-2));return t+3600*function(e,t,a){var n=0;6===t?n=parseInt(e.slice(0,1)):7===t&&(n=parseInt(e.slice(0,2)));"pm"===a&&(n+=12);return n}(a,n,o)+60*r};var y=a(20),h=a.n(y),b=a(21),v=a.n(b),g=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.unixDate,a=e.incrementDate,n=e.decrementDate,r=function(e){var t=new Date(1e3*e),a=new Date(1e3*(e-86400)),n=new Date(1e3*(e+86400)),o=t.getDate();return{prevDate:{date:a.getDate(),day:p[a.getDay()]},currDate:{date:o,day:p[t.getDay()]},nextDate:{date:n.getDate(),day:p[n.getDay()]}}}(this.props.unixDate);return o.a.createElement("div",null,o.a.createElement("section",{id:"calendar-container"},o.a.createElement("img",{src:h.a,className:"calendar-button",alt:"decrement date",onClick:function(){return n(t)}}),o.a.createElement("div",{className:"calendar-dates-container"},o.a.createElement("div",{className:"date-container",onClick:function(){return n(t)}},o.a.createElement("h2",null,r.prevDate.date),o.a.createElement("h4",null,r.prevDate.day)),o.a.createElement("div",{className:"date-container",id:"selected-date-container"},o.a.createElement("h2",null,r.currDate.date),o.a.createElement("h4",null,r.currDate.day)),o.a.createElement("div",{className:"date-container",onClick:function(){return a(t)}},o.a.createElement("h2",null,r.nextDate.date),o.a.createElement("h4",null,r.nextDate.day))),o.a.createElement("img",{src:v.a,className:"calendar-button",alt:"increment date",onClick:function(){return a(t)}})))}}]),t}(n.Component),E=Object(m.b)(function(e){return{unixDate:e.calendar.unixDate}},{changeDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return function(t){t({type:"CHANGE_DATE",payload:{unixDate:e.setHours(0,0,0,0)/1e3}})}},incrementDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return function(t){t({type:"INCREMENT_DATE",payload:{unixDate:e+86400}})}},decrementDate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return function(t){t({type:"DECREMENT_DATE",payload:{unixDate:e-86400}})}}})(g),D=a(1),O=a(8),j=function(e){var t="https://trigger-backend.herokuapp.com/api/v1/".concat(e.type,"s");return fetch(t,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(t){return e.typeId=t.id,e})},N=function(e){var t,a="https://trigger-backend.herokuapp.com/api/v1/".concat(e.type,"_entries");return fetch(a,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify((t={},Object(O.a)(t,"".concat(e.type,"_id"),e.typeId),Object(O.a)(t,"time",e.time),t))}).then(function(e){return e.json()}).then(function(t){return e.status=t.status,e})},C=function(e){var t,a="https://trigger-backend.herokuapp.com/api/v1/".concat(e.type,"_entries/").concat(e.id);return fetch(a,{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify((t={},Object(O.a)(t,"".concat(e.type,"_id"),e.typeId),Object(O.a)(t,"time",e.time),t))}).then(function(e){return e.json()}).then(function(t){return e.status=t.status,e})},F=function(e){return{id:e.typeId,type:"day_summary",status:e.status,attributes:{time:e.time,type:e.type,name:e.name}}},k=a(22),S=a.n(k),x=a(23),T=a.n(x),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).displayDialog=function(e,t){var a=e.target.parentNode.parentNode,n=a.querySelector(".".concat(t,"-dialog-container")),o=a.querySelector(".edit-card"),r=a.querySelector(".delete-card");n.style.display="flex",o.style.visibility="hidden",r.style.visibility="hidden"},a.updateDialog=function(e){var t=e.target.parentNode.parentNode,n=t.querySelector(".card-name"),o=t.querySelector(".card-time");a.displayDialog(e,"update"),n.contentEditable=!0,n.className="card-name editable",o.contentEditable=!0,o.className="card-time editable"},a.deleteDialog=function(e){a.displayDialog(e,"delete")},a.cancelDialog=function(e){var t=e.target.parentNode.parentNode.parentNode.parentNode,a=t.querySelector(".card-name"),n=t.querySelector(".card-time"),o=t.querySelector(".update-dialog-container"),r=t.querySelector(".delete-dialog-container"),i=t.querySelector(".edit-card"),c=t.querySelector(".delete-card");o.style.display="none",r.style.display="none",i.style.visibility="visible",c.style.visibility="visible",a.contentEditable=!1,a.className="card-name",n.contentEditable=!1,n.className="card-time"},a.confirmUpdate=function(e){var t=e.target.parentNode.parentNode.parentNode.parentNode,n=t.querySelector(".card-time").innerText,o={id:t.id.split("-")[2],type:t.id.split("-")[0],name:t.querySelector(".card-name").innerText,time:f(n,a.props.unixDate)};a.props.updateFoodEntry(o),a.cancelDialog(e),a.foodsContainer.current.scrollTop=0,a.statusMessage.current.style.display="block"},a.confirmDelete=function(e){var t=e.target.parentNode.parentNode.parentNode.parentNode,n=t.id.split("-")[0],o={id:t.id.split("-")[2],type:n,name:t.querySelector(".card-name").innerText};a.props.destroyFood(o),a.foodsContainer.current.scrollTop=0,a.statusMessage.current.style.display="block"},a.displayDialog=a.displayDialog.bind(Object(D.a)(Object(D.a)(a))),a.updateDialog=a.updateDialog.bind(Object(D.a)(Object(D.a)(a))),a.deleteDialog=a.deleteDialog.bind(Object(D.a)(Object(D.a)(a))),a.cancelDialog=a.cancelDialog.bind(Object(D.a)(Object(D.a)(a))),a.confirmDelete=a.confirmDelete.bind(Object(D.a)(Object(D.a)(a))),a.foodsContainer=o.a.createRef(),a.statusMessage=o.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchFoods(this.props.unixDate)}},{key:"componentWillReceiveProps",value:function(e){e.newFood.attributes?this.props.foods.push(e.newFood):this.props.unixDate!==e.unixDate&&this.props.fetchFoods(e.unixDate)}},{key:"render",value:function(){var e=this,t=this.props.foods.map(function(t){return o.a.createElement("div",{key:[t.id,t.attributes.type],id:t.attributes.type+"-card-"+t.id,className:"card-container "+t.attributes.type},o.a.createElement("div",{className:"card-container-visible"},o.a.createElement("div",{className:"name-time-container"},o.a.createElement("h5",{className:"card-name"}," ",t.attributes.name," "),o.a.createElement("h5",{className:"card-time"}," ",function(e){var t=new Date(1e3*e);return function(e,t){return e>12?e-12+":"+t+" PM":e+":"+t+" AM"}(t.getHours(),("0"+t.getMinutes()).substr(-2))}(t.attributes.time))),o.a.createElement("img",{src:T.a,className:"edit-card",alt:"edit food or reaction button",onClick:function(t){return e.updateDialog(t)}}),o.a.createElement("img",{src:S.a,className:"delete-card",alt:"delete food or reaction button",onClick:function(t){return e.deleteDialog(t)}})),o.a.createElement("div",{className:"card-container-hidden"},o.a.createElement("div",{className:"delete-dialog-container"},o.a.createElement("div",{className:"dialog-prompt"},o.a.createElement("h5",null,"Are you sure you want to delete ",t.attributes.name,"?")),o.a.createElement("div",{className:"dialog-buttons"},o.a.createElement("button",{className:"dialog-button",onClick:function(t){return e.cancelDialog(t)}},"Cancel"),o.a.createElement("button",{className:"dialog-button",onClick:function(t){return e.confirmDelete(t)}},"Delete"))),o.a.createElement("div",{className:"update-dialog-container"},o.a.createElement("div",{className:"dialog-prompt"},o.a.createElement("h5",null,"Edit name and date fields above.")),o.a.createElement("div",{className:"dialog-buttons"},o.a.createElement("button",{className:"dialog-button",onClick:function(t){return e.cancelDialog(t)}},"Cancel"),o.a.createElement("button",{className:"dialog-button",onClick:function(t){return e.confirmUpdate(t)}},"Save")))))});return o.a.createElement("div",{id:"day-summary-container",ref:this.foodsContainer},o.a.createElement("div",{className:"card-container status",ref:this.statusMessage},o.a.createElement("h5",{id:"foods-status"},this.props.status)),t)}}]),t}(n.Component),A=Object(m.b)(function(e){return{foods:e.foods.items,newFood:e.foods.item,status:e.foods.changedItem.status,unixDate:e.calendar.unixDate}},{fetchFoods:function(e){return function(t){fetch("https://trigger-backend.herokuapp.com/api/v1/day_summary?date=".concat(e)).then(function(e){return e.json()}).then(function(e){return t({type:"FETCH_FOODS",payload:e.data})})}},destroyFood:function(e){return function(t){var a="https://trigger-backend.herokuapp.com/api/v1/".concat(e.type,"_entries/").concat(e.id);fetch(a,{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(a){return t({type:"DESTROY_FOOD",payload:{id:e.id,status:"Successfully deleted ".concat(e.name," ").concat(e.type," entry .")}})})}},updateFoodEntry:function(e){return function(t){j(e).then(function(a){C(e).then(function(e){return t({type:"UPDATE_FOOD",payload:F(e)})})})}}})(_),R=function(){return{type:"DISPLAY_ADD_FORM"}},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).state={type:"food",name:"",time:"",status:""},a.onChange=a.onChange.bind(Object(D.a)(Object(D.a)(a))),a.onSubmit=a.onSubmit.bind(Object(D.a)(Object(D.a)(a))),a.addFood=a.addFood.bind(Object(D.a)(Object(D.a)(a))),a.addReaction=a.addReaction.bind(Object(D.a)(Object(D.a)(a))),a.renderResponse=a.renderResponse.bind(Object(D.a)(Object(D.a)(a))),a.clearResponse=a.clearResponse.bind(Object(D.a)(Object(D.a)(a))),a.formContainer=o.a.createRef(),a.fieldsContainer=o.a.createRef(),a.responseContainer=o.a.createRef(),a.foodName=o.a.createRef(),a.foodTime=o.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){this.toggleDisplay()}},{key:"resetState",value:function(){this.setState({name:"",time:""})}},{key:"toggleDisplay",value:function(){var e=this;this.props.displayAddForm?this.formContainer.current.style.bottom="60px":(this.formContainer.current.style.bottom="-280px",setTimeout(function(){e.fieldsContainer.current.style.visibility="visible",e.responseContainer.current.style.visibility="hidden"},500))}},{key:"addFood",value:function(){this.setState({type:"food"})}},{key:"addReaction",value:function(){this.setState({type:"reaction"})}},{key:"onChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={type:this.state.type,name:this.state.name,time:f(this.state.time,this.props.unixDate)};this.props.createFood(t),this.renderResponse(this.props.foodResponse)}},{key:"renderResponse",value:function(e){var t=this;setTimeout(function(){t.responseContainer.current.style.visibility="visible",t.fieldsContainer.current.style.visibility="hidden",t.resetState()},200)}},{key:"clearResponse",value:function(){this.resetState(),this.responseContainer.current.style.visibility="hidden",this.fieldsContainer.current.style.visibility="visible"}},{key:"render",value:function(){var e=this,t=function(t){return t===e.state.type?"selected-tab":""};return o.a.createElement("div",{id:"food-form-container",ref:this.formContainer},o.a.createElement("div",{className:"food-form-tabs-container"},o.a.createElement("div",{className:"food-form-tab add-food-tab "+t("food"),onClick:this.addFood},o.a.createElement("h4",null,"Add Food")),o.a.createElement("div",{className:"food-form-tab add-reaction-tab "+t("reaction"),onClick:this.addReaction},o.a.createElement("h4",null,"Add Reaction"))),o.a.createElement("div",{id:"food-form-fields-container",ref:this.fieldsContainer},o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"name",value:this.state.name,ref:this.foodName,placeholder:function(){var t=e.state.type,a=t.charAt(0).toUpperCase()+t.slice(1);return"Enter Name of ".concat(a)}(),onChange:this.onChange})),o.a.createElement("div",null,o.a.createElement("input",{type:"text",name:"time",value:this.state.time,ref:this.foodTime,placeholder:"Enter Time",onChange:this.onChange}),o.a.createElement("button",{type:"submit"}," Submit ")))),o.a.createElement("div",{id:"food-form-response-container",ref:this.responseContainer},o.a.createElement("h2",{id:"food-form-response"},this.props.foodResponse),o.a.createElement("div",{id:"response-buttons-container"},o.a.createElement("h3",{className:"close-form",onClick:this.props.toggleDisplayAddForm},"Close"),o.a.createElement("h3",{className:"close-form",onClick:this.clearResponse},"Clear"))))}}]),t}(n.Component),I=Object(m.b)(function(e){return{displayAddForm:e.foodForm.display,foodResponse:e.foods.item.status,unixDate:e.calendar.unixDate}},{createFood:function(e){return function(t){j(e).then(function(a){N(e).then(function(e){return t({type:"NEW_FOOD",payload:F(e)})})})}},toggleDisplayAddForm:R})(w),M=a(24),q=a.n(M),P=a(25),H=a.n(P),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(l.a)(t).call(this,e))).displayAddForm=function(){a.addFormBackground(),a.props.toggleDisplayAddForm()},a.addFormBackground=function(){var e=a.addForm.current;a.props.displayAddForm?e.style="background-color: #B37C57":e.style="background-color: red"},a.state={addFormDisplayed:!1},a.displayAddForm=a.displayAddForm.bind(Object(D.a)(Object(D.a)(a))),a.addForm=o.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.displayAddForm!==this.props.displayAddForm&&this.addFormBackground()}},{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("img",{className:"home-button",src:q.a,alt:"home button"}),o.a.createElement("button",{className:"add-button",ref:this.addForm,onClick:this.displayAddForm},this.props.displayAddForm?"x":"+"),o.a.createElement("img",{className:"analytics-button",src:H.a,alt:"analytics button"}))}}]),t}(n.Component),W=Object(m.b)(function(e){return{displayAddForm:e.foodForm.display}},{toggleDisplayAddForm:R})(U),B=a(10),L=a(26),J=a(9),X={items:[],item:{},changedItem:{}},Y={display:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=e;switch((arguments.length>1?arguments[1]:void 0).type){case"DISPLAY_ADD_FORM":return{display:!t.display};default:return e}},V={unixDate:(new Date).setHours(0,0,0,0)/1e3},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_DATE":case"INCREMENT_DATE":case"DECREMENT_DATE":return Object(J.a)({},e,{unixDate:t.payload.unixDate});default:return e}},z=Object(B.c)({foods:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=e;switch(t.type){case"FETCH_FOODS":return Object(J.a)({},e,{items:t.payload});case"NEW_FOOD":return Object(J.a)({},e,{item:t.payload});case"DESTROY_FOOD":return a.items=e.items.filter(function(e){return e.id!==t.payload.id}),Object(J.a)({},a,{changedItem:t.payload});case"UPDATE_FOOD":return a.items=e.items.map(function(e){return e.id===t.payload.id?t.payload:e}).sort(function(e,t){return e.time-t.time}),Object(J.a)({},a,{changedItem:t.payload});default:return e}},foodForm:G,calendar:$}),K=[L.a],Q=Object(B.e)(z,{},Object(B.d)(B.a.apply(void 0,K),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),Z=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{store:Q},o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Trigger")),o.a.createElement(E,null),o.a.createElement(A,null),o.a.createElement(I,null),o.a.createElement(W,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.70cd26d5.chunk.js.map