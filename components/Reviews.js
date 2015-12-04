var React = require('react');
var Article = require('./Article');
var ContentFooter = require('./ContentFooter');

var parseDate = function(date){
  return date.replace('-','');

}

var Reviews = React.createClass({
  getInitialState:function(){
    return{
      seeAllReviews:false
    }
  },
  getContent: function(content){
    if(this.state.seeAllReviews) {
      return content;
    }
    var firstPart = content.slice(0,3);
    return firstPart;
  },
  seeAll: function(){
    this.setState({
      seeAllReviews:true,
    })
  },
  render: function(){
    var {reviews, filter, sort, userReviews} = this.props;
    var reviewNumber = reviews.length;
    if (filter) {
      reviews = reviews.filter((i)=>i.user.type.indexOf(filter) !== -1);
      reviews = this.getContent(reviews);
    }
    reviews = this.getContent(reviews);

    if (sort) {
      reviews.sort(function(a,b){
        if (sort === 'newest') {
          return Date.parse(b.date) - Date.parse(a.date);
        } else if (sort === 'rating') {
          return b.rating - a.rating;
        } else if (sort === 'helpful') {
          return (
            (b.helpful_count/(b.helpful_count + b.not_helpful_count)) - (a.helpful_count/(a.helpful_count + a.not_helpful_count))
          );
        }
      })
    }

    var articles = reviews.map(function(Props){
      return <Article {...Props} key={Props.id}/>
    });


    return(
      <div>
      <div className="reviews">
        {articles}
      </div>
      <ContentFooter seeAll={this.state.seeAllReviews} onChangeSeeAll={this.seeAll} allReviewNumber={reviewNumber} userReviews={userReviews} filter={this.props.filter}/>
      </div>
    )
  }
});
module.exports = Reviews;
