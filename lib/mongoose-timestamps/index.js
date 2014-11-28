/**
 * Plugin
 * @ref http://mongoosejs.com/docs/plugins.html
 *
 * @param {Object} schema, mongoose schema
 */

function timestamps(schema) {
  
  schema.add({ createdAt: Date });
  schema.add({ updatedAt: Date });
  schema.add({ deletedAt: Date });
  
  schema.pre('save', function(next) {
    var now = Date.now();
    if (!this.createdAt) {
      this.createdAt = this.updatedAt = now;
    } else {
      this.updatedAt = now;
    }
    next();
  });
}


/**
 * Expose
 */

exports = module.exports = timestamps;
