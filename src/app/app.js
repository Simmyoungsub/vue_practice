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

function initialize(){
  return app2;
}

export default initialize;
