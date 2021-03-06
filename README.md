# mongoose-timestamps

[![wercker status](https://app.wercker.com/status/382ece796df1c7290ca81beef15a002d/m "wercker status")](https://app.wercker.com/project/bykey/382ece796df1c7290ca81beef15a002d)

ensure mongoose models timestamps are up to date

### Changelog

`1.1.0`:

- Add `deletedAt` date field to default schema

### Installation

    $ npm install git+ssh://git@github.com:seedalpha/mongoose-timestamps.git

### Usage
    
    # index.js
    
    var timestamps = require('mongoose-timestamps');
    var mongoose   = require('mongoose');
    
    var user = new Schema({ name: String });
    
    user.plugin(timestamps);
    
    var User = mongoose.model('User', user);
    
    User.create({ name: 'John' }, function(error, result) {
      // result.createdAt
      // result.updatedAt
    });
    
### Development

    $ git clone git@github.com:seedalpha/mongoose-timestamps.git
    $ cd mongoose-timestamps
    $ npm install
    $ npm test

### Author

Vladimir Popov <vlad@seedalpha.net>

### License

©2014 Seedalpha
