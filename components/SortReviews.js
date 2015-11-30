var React = require('react');

var SortReviews = React.createClass({
  render: function(){
    return (
      <div>
        <div className="sort-reviews-container">
          <span className="sign-painter">Most Helpful</span>
          <div className="clear" />
          <span className>REVIEWS</span>
          <label className="select-sort">Sort by:
            <div className="select-container"><select><option value="MOST HELPFUL">MOST HELPFUL</option></select></div>
          </label>
        </div>
      </div>
    )
  }
});

module.exports = SortReviews
