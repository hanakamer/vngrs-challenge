var React = require('react');

var Sidebar =React.createClass({
  render : function(){
    var {ratings} = this.props;

    var barContainer = [];
    var totalVoters = 0;
    for (var key in ratings) {
      totalVoters = totalVoters + ratings[key]
    };
    for (var key in ratings) {
      var divStyle = {
        width: (ratings[key]/totalVoters)*100 +'%'
      };
      barContainer.push(
        <div className="rating-bar-container" key={key}>
          <span className="bar-inf">{key} STAR</span><span className="rating-bar rating-bar-bg ">
            <span className="rating-bar rating-bar-fill" style={divStyle}/>
          </span><span className="bar-cntr">({ratings[key]})</span>
        </div>
      );
    };



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
    stars.push(<div className="summary-star" key={i} ><img src="./images/summary_star.png"  /></div>);
    };
    for (var i=stars.length; i<5; i++) {
      stars.push(<div className="summary-star"  key={i} ><img src="./images/rating_gray_star.png" /></div>);
    }
    return (
      <div>
      <aside className="Sidebar">
        <div className="rating-summary">
          <div className="summary-stars">
            {stars}
            <p>Avarage Rating:4 out 5 stars</p>
          </div>
          <div className="rating-bars">
            {barContainer}
          </div>
          <p>View All {this.props.reviewNumber} Reviews</p>
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
