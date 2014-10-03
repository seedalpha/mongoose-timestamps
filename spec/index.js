var mongoose = require('mongoose');
var timestamps = require('../');
var should = require('chai').should();

var host = process.env.WERCKER_MONGODB_HOST || 'localhost:27017';
  
describe('mongoose timestamps (plugin)', function() {
  
  before(function() {
    this.schema = new mongoose.Schema({ name: String });
    this.schema.plugin(timestamps);
    this.Robot = mongoose.model('Robot', this.schema);
  });
  
  before(function() {
    mongoose.connect('mongodb://' + host + '/test-mongoose-timestamps');
  });
    
  it('should add timestamps on creation', function(done) {
    this.Robot.create({
      name: 'Bender'
    }, function(error, robot) {
      this.robot = robot;
      should.not.exist(error);
      robot.name.should.equal('Bender');
      this.robot.createdAt.should.deep.equal(this.robot.updatedAt);
      done();
    }.bind(this));
  });
  
  it('should update timestamps on update', function(done) {
    this.robot.name = 'R2D2';
    this.robot.save(function(error, robot) {
      should.not.exist(error);
      robot.name.should.equal('R2D2');
      this.robot.createdAt.should.deep.equal(robot.createdAt);
      robot.updatedAt.should.be.above(this.robot.createdAt);
      done();
    }.bind(this));
  });
});