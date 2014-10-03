# mongoose-timestamps

ensure mongoose models timestamps are up to date

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
