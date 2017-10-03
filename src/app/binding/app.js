"use strict"

Vue.component('my-component',{
    template:'<p class="foo bar">Hi</p>'
});

var binding1 = new Vue({
    el : '.static',
    data : {
        isActive : true,
        hasError : false,
        // classObject : {
        //     activation : true,
        //     'text-danger' : false
        // }

        //객체로 변환하여 사용
        styleObject : {
            color:'red',
            fontSize : '15pt'
        },
        baseStyleObject : {
            color : 'blue',
            fontSize : '13pt'
        },
        overrideStyleObject : {
            color : 'green',
            fontSize : '15pt'
        }
    },
    computed : {
        classObject : function(){
            return {
                active : true,
                'text-danger' : false
            };
        }
    }
});

function initialize(){
  return binding1;
}

export default initialize;
