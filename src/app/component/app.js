"use strict"

Vue.component('todo-item',{
  //props는
  //사용자 정의 속성
  props : ['todo'],
  template : '<li>{{todo.text}}</li>'
});

var component1 = new Vue({
  el : "#app",
  data : {
    gl : [
      {id : 0, text : 'javascript'},
      {id : 1, text : 'java'},
      {id : 2, text : 'c++'}
    ]
  }
});

var component2 = new Vue({
    el : "#app2",
    data : {
        message : "안녕하세요."
    },
    //computed속성은
    //캐시가 되기 때문에 message값이 변하지 않으면
    //이전에 나온 결과를 그대로 반환한다.
    computed : {
        reversedMessage : function(){
            return this.message.split('').reverse().join('');
        }
    },
    //methods 속성은
    //캐시상관없이 항상 사용할 때마다 재 호출된다.
    methods : {
        reversedMessageMethod : function(){
            return this.message.split('').reverse().join('');
        }
    }
});

function initialize(){
  return component2;
}

export default initialize;
