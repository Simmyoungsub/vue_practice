var path = require('path')

module.exports = {
  entry:'./src/app/index.js',
  output:{
    filename : 'bundle.js',
    path : path.resolve(__dirname,'dist')
  },
  //add the JSHint loader
  module:{
    rules : [
      {
        test : /\.js$/, //Run the loader on all .js files
        exclude : /node_modules/, //ignocre all file in the node_modules folder
        use : 'jshint-loader'
      }
    ]
  }
};
