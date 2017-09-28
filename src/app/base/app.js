"use strict"

var main = new Vue({
  el : '#main',
  data : {
    message : 'Good'
  }
});

var app2 = new Vue({
  el : '#app-2',
  data : {
    message : new Date()
  }
})

var app3 = new Vue({
  el : '#app-3',
  data : {
    message : 'hello good',
    seen : false,
    todos : [
      { text : "javascript"},
      { text : "java"},
      { text : "c++"}
    ]
  },
  methods : {
    toggle : function(){
      this.seen = this.seen === true?false : true;
      //공백으로 자르고 나서 뒤집고 다시 사이에 공백을 추가
      this.message = this.message.split(' ').reverse().join(' ');
    }
  }
})

function initialize(){
  return app3;
}

export default initialize;
