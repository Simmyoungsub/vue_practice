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
        message : "안녕하세요.",
        firstName : 'Foo',
        lastName : 'Bar',
        fullName : 'Foo Bar'
    },
    //computed속성은
    //캐시가 되기 때문에 message값이 변하지 않으면
    //이전에 나온 결과를 그대로 반환한다.
    computed : {
        reversedMessage : function(){
            return this.message.split('').reverse().join('');
        },
        fullName : function(){
            return this.firstName + ' ' + this.lastName;
        }
    },
    //methods 속성은
    //캐시상관없이 항상 사용할 때마다 재 호출된다.
    methods : {
        reversedMessageMethod : function(){
            return this.message.split('').reverse().join('');
        },
        firstName : function(val){
            this.fullName = val + ' ' + this.lastName;
        },
        lastName : function(val){
            this.fullName = this.firstName + ' ' + val;
        }
    }
});

var component3 = new Vue({
    el : "#watch-example",
    data : {
        question : '',
        answer : '질문 전까지는 답을 드릴수 없습니다.'
    },
    watch : {
        question : function(){
            this.answer = '입력을 기다리는 중';
            this.getAnswer();
        }
    },
    methods : {
        //debounce를 사용하여 이벤트 호출이 끝난뒤 지정된 시간이 지나서 콜백이 실행
        //무한하게 이벤트 콜백이 호출되는것을 방지
        getAnswer : _.debounce(
            function(){
                this.answer = '생각 중 ......';
                var vm = this;
                vm.answer = "답이다.";
            },500
        )
    }
})

function initialize(){
  return component3;
}

export default initialize;
