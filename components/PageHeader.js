var React = require('react');

var WhiteStar = require('./WhiteStar');
var BlueStar = require('./BlueStar');

var PageHeader = React.createClass({
  render: function(){
    var {ratings} = this.props;

    var weight = 0;
    var totalVotes = 0;

    for (var key in ratings) {
      weight = weight + ratings[key]*key;
      totalVotes = totalVotes + ratings[key];
    }


    var avg = weight/totalVotes;
    var rounded_avg =Math.round(avg);
    var stars = [];
    for (var i=0; i < rounded_avg; i++) {
    stars.push(<BlueStar key={i}/>);
    };
    for (var i=stars.length; i<5; i++) {
      stars.push(<WhiteStar key={i}/>);
    }
    return(
      <div>
        <div className="page-header">
          <span className="header-book">Book</span>
          <span className="header-reviews">REVIEWS</span>
          <div className="total-review-stars">
          {stars}
          </div>
          <div className="header-total-reviews">{totalVotes} Total Reviews</div>
        </div>
      </div>
    )
  }
});

module.exports = PageHeader;
