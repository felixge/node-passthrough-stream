var common = exports;

var path = require('path');
var root = path.dirname(__dirname);
common.dir = {
  lib: root + '/lib',
  fixture: root + '/test/fixture',
  tmp: root + '/test/tmp',
};

common.assert = require('assert');
