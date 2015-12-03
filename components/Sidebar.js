var React = require('react');

var Sidebar =React.createClass({
  render : function(){
    var barContainer = [];
    var totalVoters = 0;

    for (var key in this.props.ratingCounter) {
      totalVoters = totalVoters + this.props.ratingCounter[key]
    };

    for (var key in this.props.ratingCounter) {
      var divStyle = {
        width: (this.props.ratingCounter[key]/totalVoters)*100 +'%'
      };
      barContainer.push(
        <div className="rating-bar-container" key={key}>
          <span className="bar-inf">{key} STAR</span><span className="rating-bar rating-bar-bg ">
            <span className="rating-bar rating-bar-fill" style={divStyle}/>
          </span><span className="bar-cntr">({this.props.ratingCounter[key]})</span>
        </div>
      );
    };

    console.log(barContainer);

    return (
      <div>
      <aside className="Sidebar">
        <div className="rating-summary">
          <div className="summary-stars">
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <p>Avarage Rating:4 out 5 stars</p>
          </div>
          <div className="rating-bars">
            {barContainer}
          </div>
          <p>View All 225 Reviews</p>
          <div className="blue-btn"><button className="add-review-icon"> ADD A REVIEW</button></div>
        </div>
        <div className="purchase">
          <span className="sign-painter"> Paperback</span>
          $2.00
          <div className="clear" />
          <button className="purchase-item std-btn yellow-btn">ADD TO CARD</button>
          <div className="purchase-item select-container"><select><option value="BUY ELSEWHERE">BUY ELSEWHERE</option></select></div>
          <div>-OR-</div>
          <button className="purchase-item std-btn orange-btn">BUY EBOOK NOW</button>
        </div>
      </aside>
      </div>
    )
  }
});

module.exports = Sidebar;
