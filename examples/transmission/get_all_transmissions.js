'use strict';

var key = 'YOURAPIKEY'
  , SDK = require('../../index')({ key: key });

var transmission = new SDK.transmission();

transmission.all(function(err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      console.log('Congrats you can use our SDK!');
    }
  });