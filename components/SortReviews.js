var React = require('react');

var SortReviews = React.createClass({
  setSort: function(event){
    this.props.onChangeSort( event.target.value);
  },
  render: function(){
    return (
      <div>
        <div className="sort-reviews-container">
          <span className="sign-painter">Most Helpful</span>
          <div className="clear" />
          <span className>REVIEWS</span>
          <label className="select-sort">Sort by:
            <div className="select-container">
              <select onChange={this.setSort}>
                <option value="helpful" >MOST HELPFUL</option>
                <option value="rating">HIGHEST RATING</option>
                <option value="newest">NEWEST FIRST</option>
              </select>
            </div>
          </label>
        </div>
      </div>
    )
  }
});

module.exports = SortReviews
