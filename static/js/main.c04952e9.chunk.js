(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,n){t.exports=n(32)},23:function(t,e,n){},25:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(11),r=n.n(c),i=(n(23),n(1)),l=n(2),s=n(5),u=n(3),d=n(6),m=(n(25),n(4)),p=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).onChangeHandler=function(t){n.setState({text:t.target.value})},n.onSubmit=function(){"todo"===n.state.choice?n.props.addTodos(n.state.text):n.props.addNotes(n.state.text),n.setState({text:""})},n.onClickChoice=function(t){n.setState({choice:t})},n.state={text:"",choice:"todo"},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e="",n="";return"todo"===this.state.choice?e="btn-success":n="btn-success",a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn m-2 ".concat(e),onClick:function(){return t.onClickChoice("todo")}},"Switch to Add Todo"),a.a.createElement("button",{className:"btn ".concat(n),onClick:function(){return t.onClickChoice("notes")}},"Switch to Add Notes"),a.a.createElement("p",null,"Add ",this.state.choice),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{value:this.state.text,onChange:this.onChangeHandler,type:"text",className:"form-control",placeholder:"Type todo here"})),a.a.createElement("button",{onClick:this.onSubmit,className:"btn btn-primary"},"Add"))}}]),e}(o.Component),b=Object(m.b)(null,function(t){return{addTodos:function(e){return t(function(t){return{type:"ADD_TODO",payload:t}}(e))},addNotes:function(e){return t(function(t){return{type:"ADD_NOTE",payload:t}}(e))}}})(p),h=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).editButtonHandler=function(){n.setState({viewMode:"edit"})},n.saveButtonHandler=function(){n.props.editTodo(n.props.index,n.state.text),n.setState({viewMode:"show"})},n.cancelButtonHandler=function(){n.setState({viewMode:"show"})},n.onChangeHandler=function(t){n.setState({text:t.target.value})},n.deleteButtonHandler=function(){n.props.deleteTodo(n.props.index)},n.state={viewMode:"show",text:t.todo},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=a.a.createElement("p",null,this.props.todo),e=a.a.createElement("button",{className:"btn btn-primary",onClick:this.editButtonHandler},"Edit");return"edit"===this.state.viewMode&&(t=a.a.createElement("input",{className:"form-control",type:"text",value:this.state.text,onChange:this.onChangeHandler}),e=a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"btn btn-success",onClick:this.saveButtonHandler},"Save"),a.a.createElement("button",{className:"btn btn-warning",onClick:this.cancelButtonHandler},"Cancel"))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-8"},t),a.a.createElement("div",null,e,a.a.createElement("button",{className:"btn btn-danger",onClick:this.deleteButtonHandler},"Delete")))}}]),e}(o.Component),O=Object(m.b)(null,function(t){return{editTodo:function(e,n){return t({type:"EDIT_TODO",payload:{index:e,todo:n}})},deleteTodo:function(e){return t(function(t){return{type:"DELETE_TODO",payload:t}}(e))}}})(h),f=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return console.log(this.props),a.a.createElement("ul",{className:"list-group"},this.props.todos.map(function(t,e){return a.a.createElement("li",{key:e,className:"list-group-item container"},a.a.createElement(O,{todo:t,index:e}))}))}}]),e}(o.Component),E=Object(m.b)(function(t){return{todos:t.todoReducer.todos}},null)(f),v=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",null,"Notes"),a.a.createElement("ul",{className:"list-group"},this.props.notes.map(function(t,e){return a.a.createElement("li",{key:e,className:"list-group-item container"},t)})))}}]),e}(o.Component),j=Object(m.b)(function(t){return{notes:t.noteReducer.notes}},null)(v),y=n(12),w=n(10),g=n(9),N={todos:[]},C={notes:[]},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return Object(w.a)({},t,{todos:[].concat(Object(y.a)(t.todos),[e.payload])});case"DELETE_TODO":var n=t.todos.filter(function(t,n){return n!==e.payload});return Object(w.a)({},t,{todos:n});case"EDIT_TODO":var o=Object(y.a)(t.todos),a=e.payload.index,c=e.payload.todo;return o[a]=c,Object(w.a)({},t,{todos:o});default:return t}},D=Object(g.b)({todoReducer:T,noteReducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_NOTE":return Object(w.a)({},t,{notes:[].concat(Object(y.a)(t.notes),[e.payload])});default:return t}}});console.log(T);var k=Object(g.c)(D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),_=function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement(m.a,{store:k},a.a.createElement("div",{className:"App container"},a.a.createElement(b,null),a.a.createElement(E,null),a.a.createElement(j,null)))}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.c04952e9.chunk.js.map