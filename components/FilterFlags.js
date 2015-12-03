var React = require('react');

var FilterFlags = React.createClass({
  setFlag : function(filter){
    this.props.onChangeFilter(filter);
  },
  render: function(){
    var {userReviews} = this.props;
    var everyone = 0;
    for (var key in userReviews) {
      everyone = everyone + userReviews[key];
    }
    return (
      <div>
        <div className="flags">
          <span className="flags-header">SEE REVIEWS FROM:</span>
          <hr className="flag-line" />

          {(function(){
            if (this.props.selectedFlag === null){
              return <div className="active-flag active-blue-flag" onClick={this.setFlag.bind(this, null)}>EVERYONE <div className="flag-count">({everyone})</div></div>
            };
            return <div className="flag blue-flag" onClick={this.setFlag.bind(this, null)}>EVERYONE <div className="flag-count">({everyone})</div></div>
          }.bind(this)())}

          {(function(){
            if (this.props.selectedFlag === 'reader'){
              return <div className="active-flag active-turquase-flag" onClick={this.setFlag.bind(this,'reader')}>READERS <div className="flag-count">({userReviews.reader})</div></div>
            };
            return <div className="flag turquase-flag" onClick={this.setFlag.bind(this,'reader')}>READERS <div className="flag-count">({userReviews.reader})</div></div>
          }.bind(this)())}

          {(function(){
            if (this.props.selectedFlag === 'critic'){
              return <div className="active-flag active-yellow-flag" onClick={this.setFlag.bind(this,'critic')}>CRITICS <div className="flag-count">({userReviews.critic})</div></div>
            };
            return <div className="flag yellow-flag" onClick={this.setFlag.bind(this,'critic')}>CRITICS <div className="flag-count">({userReviews.critic})</div></div>
          }.bind(this)())}

          {(function(){
            if (this.props.selectedFlag === 'editor'){
              return   <div className="active-flag active-pink-flag" onClick={this.setFlag.bind(this,'editor')}>EDITORS <div className="flag-count">({userReviews.editor})</div></div>
            };
            return   <div className="flag pink-flag" onClick={this.setFlag.bind(this,'editor')}>EDITORS <div className="flag-count">({userReviews.editor})</div></div>
          }.bind(this)())}

          {(function(){
            if (this.props.selectedFlag === 'librarian'){
              return   <div className="active-flag active-green-flag" onClick={this.setFlag.bind(this,'librarian')}>LIBRARIANS <div className="flag-count">({userReviews.librarian})</div></div>
            };
            return   <div className="flag green-flag" onClick={this.setFlag.bind(this,'librarian')}>LIBRARIANS <div className="flag-count">({userReviews.librarian})</div></div>
          }.bind(this)())}

          {(function(){
            if (this.props.selectedFlag === 'blogger'){
              return   <div className="active-flag active-purple-flag" onClick={this.setFlag.bind(this,'blogger')}>BLOGGERS <div className="flag-count">({userReviews.blogger})</div></div>
            };
            return   <div className="flag purple-flag" onClick={this.setFlag.bind(this,'blogger')}>BLOGGERS <div className="flag-count">({userReviews.blogger})</div></div>
          }.bind(this)())}






        </div>
      </div>
    )
  }
});

module.exports = FilterFlags;
