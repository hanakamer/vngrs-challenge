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
    return{
      data: []
    };
  },
  componentWillMount: function(){
    var data;
    var client_id = "d4c304926e39e2335b51afe92f747a1936b70dac6b8640470347955ad8a228e1";
    ajax({
      url: "http://vngrs-challenge.herokuapp.com/api/reviews",
      data: { client_id: client_id },
      type: "GET",
      beforeSend: function(xhr){xhr.setRequestHeader('X-client_id', client_id);},
      success: function(data) {
        this.setState({
          data:data.data
        })
      }.bind(this),
    })
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
          <PageHeader data={this.state.data}/>
          <div className="content">
            <FilterFlags />
            <div className="clear" />
            <SortReviews />
            <div className="clear" />
            <Reviews />
            <ContentFooter />
          </div>
          <Sidebar />
        </div>
      </div>

    )}
});
