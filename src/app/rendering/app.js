"use strict"

Vue.component('')

var redering1 = new Vue({
    el : '#render-example',
    data : {
        ok : false,
        type : 'a' ,
        loginType : 'username'
    },
    methods : {
        onClick : function(){
            this.loginType = this.loginType === 'username'?'':'username';
        }
    }
})

function initialize(){
  return redering1;
}

export default initialize;
