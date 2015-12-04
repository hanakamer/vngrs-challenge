var React = require('react');

var ContentFooter = React.createClass({
  setSeeAll: function(){
    this.props.onChangeSeeAll();
  },
  render: function(){

    return (
      <div>
        <footer className="content-footer">
          {(function(){
              if(this.props.seeAll) return null;
              return (
                <button className="std-btn white-btn see-all-btn" onClick={this.setSeeAll}>SEE ALL
                {(function(){
                  if (this.props.userReviews[this.props.filter]) {
                    return ' ' + this.props.userReviews[this.props.filter] ;
                  }
                  return ' ' + this.props.allReviewNumber ;
                }.bind(this))()} REVIEWS</button>
              )
            }.bind(this))()}
          <div className="blue-btn"><button className="add-review-icon"> ADD A REVIEW</button></div>
        </footer>
      </div>
    )
  }
});

module.exports = ContentFooter;
