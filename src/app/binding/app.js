"use strict"

var binding1 = new Vue({
    el : '.static',
    data : {
        isActive : true,
        hasError : false,
        // classObject : {
        //     activation : true,
        //     'text-danger' : false
        // }
    },
    computed : {
        classObject : function(){
            return {
                activation : true,
                'text-danger' : false
            };
        }
    }
});

function initialize(){
  return binding1;
}

export default initialize;
