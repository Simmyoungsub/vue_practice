"use strict"

Vue.component('todo-item',{
  //사용자 정의 속성
  props : ['todo'],
  template : '<li>{{todo.text}}</li>'
})

var component1 = new Vue({
  el : "#app",
  data : {
    gl : [
      {id : 0, text : 'javascript'},
      {id : 1, text : 'java'},
      {id : 2, text : 'c++'}
    ]
  }
})

function initialize(){
  return component1;
}

export default initialize;
