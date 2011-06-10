var common = require('../common');
var assert = common.assert;
var gotCloseEvent = false;
var PassthroughStream = require(common.dir.lib + '/passthrough_stream');

var fs = require('fs');
var sourcePath = common.dir.fixture + '/numbers.txt';
var destPath = common.dir.tmp + '/numbers.txt';

var source = fs.createReadStream(sourcePath);
var passthrough = new PassthroughStream();
var dest = fs.createWriteStream(destPath);

source.pipe(passthrough);
passthrough.pipe(dest);

dest.on('close', function() {
  gotCloseEvent = true;

  var expected = fs.readFileSync(sourcePath);
  var got = fs.readFileSync(destPath);

  assert.deepEqual(got, expected);
});

process.on('exit', function() {
  assert.ok(gotCloseEvent);
});
