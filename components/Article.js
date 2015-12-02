var React = require('react');
var ajax = require('jquery').ajax;

var Article = React.createClass({
  getContent: function(){
    var {content} = this.props;

    if (this.state.showAll){
      return content;
    }

    var firstPart = content.slice(0,500);
    return firstPart;
  },
  readMore: function(){
    this.setState({
      showAll:true
    })
  },
  getInitialState:function(){
    return{
      helpful_count:this.props.helpful_count,
      not_helpful_count:this.props.not_helpful_count,
      showAll:false
    }
  },
  handleVote:function(type, e){
    e.preventDefault();
    var client_id = "d4c304926e39e2335b51afe92f747a1936b70dac6b8640470347955ad8a228e1";
    ajax({
      type:'POST',
      url:'http://vngrs-challenge.herokuapp.com/api/reviews/'+this.props.id+'/vote',
      data:JSON.stringify({'type':type}),
      beforeSend: function(xhr){xhr.setRequestHeader('X-client_id', client_id);},
    });
    var state = this.state;
    state[type+'_count']=state[type+'_count']+1;
    this.setState(state)
  },
  render: function(){
    return(
      <div>
      <article className="review">
        <header className="review-data">
          <div className="review-flag blue-flag" />
          <span className="review-logo" />
          <div className="data-wrapper">
            <span className="review-data-item review-date">{this.props.date}</span>
            <span className="review-data-item review-author">{this.props.user.firstname+' '+this.props.user.lastname}</span>
            <span className="review-data-item review-via">{this.props.book_type} - Verified Bookish Purchase</span>
          </div>
          <div className="review-title">
            <div className="title-stars">
              <img className="title-star" src="./images/title_star.png" />
              <img className="title-star" src="./images/title_star.png" />
              <img className="title-star" src="./images/title_star.png" />
              <img className="title-star" src="./images/title_star.png" />
              <img className="title-star" src="./images/title_star.png" />
            </div>
            <span>{this.props.title}</span>
          </div>
        </header>
        <div className="review-body">

          <p>{this.getContent()}</p>
          {(function(){
            if (this.state.showAll) return null;

            return (
              <span className="more blue-txt" onClick={this.readMore}>Read more...</span>
            )
          }.bind(this))()}
          <div className="clear" />
        </div>
        <footer className="review-footer">
          <div className="review-summary"> {this.state.helpful_count} out of {this.state.helpful_count + this.state.not_helpful_count}  found this review helpful.</div>
          <div className="review-rate">
            Was this review helpful to you?
            <a className="blue-txt" href="#" onClick={this.handleVote.bind(this,'helpful')}>
              <span className="helpful-icon" />
              Helpful
            </a>
            |
            <a className="blue-txt" href="#" onClick={this.handleVote.bind(this,'not_helpful')}>
              <span className="helpful-icon not-helpful" />
              Not Helpful
            </a>
            <a className="put-flag blue-txt" href="#"><span className="put-flag-icon" />Flag this content for review</a>
          </div>
        </footer>
        <hr className="article-delimater" />
      </article>
      </div>
    )
  }
});
module.exports = Article;
