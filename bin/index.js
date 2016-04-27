'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_express2.default.static(__dirname + '/../../build/'));

app.listen(PORT, function (err) {
  if (err) throw err;
  console.log('listening on port: ' + PORT);
});