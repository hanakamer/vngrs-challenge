var React = require('react');
var Article = require('./Article');

var parseDate = function(date){
  return date.replace('-','');

}

var Reviews = React.createClass({

  render: function(){
    var {reviews, filter, sort} = this.props;

    if (filter) {
      reviews = reviews.filter((i)=>i.user.type.indexOf(filter) !== -1);
    }

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
      </div>
    )
  }
});
module.exports = Reviews;
