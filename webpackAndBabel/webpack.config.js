const path = require('path');
module.exports = {
 "mode": "none",
 "entry": ["@babel/polyfill","./src/index.js"],
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 target : ['web','es5'],
 // devtool: 'eval',
	devServer: {
	   contentBase: path.join(__dirname, 'dist')
	 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
             "@babel/preset-env",
           ],
           "plugins":["@babel/plugin-transform-runtime"]
         }
       }
	},
   ]
 }
}