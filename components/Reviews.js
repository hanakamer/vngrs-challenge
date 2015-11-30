var React = require('react');
var Article = require('./Article');

var Reviews = React.createClass({
  render: function(){
    return(
      <div>
      <div className="reviews">
        <Article />
        <Article />
        <Article />
      </div>
      </div>
    )
  }
});
module.exports = Reviews;
