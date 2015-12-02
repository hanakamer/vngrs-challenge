var React = require('react');

var WhiteStar = require('./WhiteStar');
var BlueStar = require('./BlueStar');

var PageHeader = React.createClass({
  render: function(){
    // var total = 0;
    // var five_star = 0;
    // var four_star = 0;
    // var three_star = 0;
    // var two_star = 0;
    // var one_star = 0;
    // var data = this.props.data
    // if (data.length>0){
    //   for (var item in data){
    //     if(data[item].rating===1){
    //       one_star++;
    //     }else if(data[item].rating===2){
    //       two_star++;
    //     }else if(data[item].rating===3){
    //       three_star++;
    //     }else if(data[item].rating===4){
    //       four_star++;
    //     }else if(data[item].rating===5){
    //       five_star++;
    //     };
    //   };
    //   var avg = ( one_star*1 + two_star*2 + three_star*3 + four_star*4 + five_star*5)/(data.length);
    //   var rounded_avg =Math.round(avg);
    // };
    // var stars = [];
    // for (var i=0; i < rounded_avg; i++) {
    // stars.push(<BlueStar />);
    // };
    // for (var i=stars.length; i<5; i++) {
    //   stars.push(<WhiteStar />);
    // }
    return(
      <div>
        <div className="page-header">
          <span className="header-book">Book</span>
          <span className="header-reviews">REVIEWS</span>
          <div className="total-review-stars">
          </div>
          <div className="header-total-reviews">Total Reviews</div>
        </div>
      </div>
    )
  }
});

module.exports = PageHeader;
