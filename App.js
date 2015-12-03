var React = require('react');
var ajax = require('jquery').ajax;

var Reviews = require('./components/Reviews');
var Sidebar = require('./components/Sidebar');
var SortReviews = require('./components/SortReviews');
var FilterFlags = require('./components/FilterFlags');
var PageHeader = require('./components/PageHeader');
var ContentFooter = require('./components/ContentFooter');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      reviews: [],
      filter:null,
      sort:'helpful',
      ratings: [],
      userReviews:[]
    };
  },
  componentWillMount: function(){
    var client_id = "d4c304926e39e2335b51afe92f747a1936b70dac6b8640470347955ad8a228e1";
    ajax({
      url: "http://vngrs-challenge.herokuapp.com/api/reviews",
      data: { client_id: client_id },
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('X-client_id', client_id);},
      // success: this.processData.bind(this)
      success: function(result){
        this.setState({
          reviews:result.data,
        });
        this.calculateRating();
        this.calculateReviews();
      }.bind(this),
    });
  },

  calculateRating: function(){
    var result={};

    this.state.reviews.forEach(function(review){
      result[review.rating] = (result[review.rating] || 0) + 1;
    });
    this.setState({
      ratings:result,
    })
  },

  calculateReviews: function(){
    var result={};

    this.state.reviews.forEach(function(review){
      result[review.user.type] = (result[review.user.type] || 0) + 1;
    });
    this.setState({
      userReviews:result,
    })
  },


  changeFilter:function(filter){
    this.setState({
      filter:filter
    });
  },
  changeSort:function(sort){
    this.setState({
      sort:sort
    });
  },
  render: function(){

    return(
      <div>
        <header className="main-header">
          <div className="header-wrapper">
            <div className="logo" />
            <nav className="header-nav">
              <button className="header-btn basket-btn">0</button>
              <a className="nav-item" href="#">SIGN IN | REGISTER</a>
              <div className="nav-item"><select className="nav-select"><option value="subject">SUBJECT</option></select></div>
              <a className="nav-item" href="#">RECOMMENDATIONS</a>
            </nav>
            <div className="searchbox-container">
              <input className="searchbox" type="search" placeholder="Search by Title, Author, Genre, Keyword..." />
              <button className="header-btn searchbox-btn" />
            </div>
          </div>
        </header>
        <div className="page-wrapper">
          <PageHeader ratings={this.state.ratings}/>
          <div className="content">
            <FilterFlags onChangeFilter={this.changeFilter}  userReviews={this.state.userReviews} selectedFlag={this.state.filter}/>
            <div className="clear" />
            <SortReviews onChangeSort={this.changeSort}  />
            <div className="clear" />
            <Reviews reviews ={this.state.reviews} filter={this.state.filter} sort={this.state.sort}/>
            <ContentFooter />
          </div>
          <Sidebar ratingCounter={this.state.ratings} />
        </div>
      </div>

    )}
});
