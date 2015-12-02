var React = require('react');

var FilterFlags = React.createClass({
  setFlag : function(filter){
    this.props.onChangeFilter(filter);
  },
  render: function(){
    return (
      <div>
        <div className="flags">
          <span className="flags-header">SEE REVIEWS FROM:</span>
          <hr className="flag-line" />
          <div className="flag blue-flag" onClick={this.setFlag.bind(this,'')}>EVERYONE <div className="flag-count"></div></div>
          <div className="flag turquase-flag" onClick={this.setFlag.bind(this,'reader')}>READERS <div className="flag-count"></div></div>
          <div className="flag yellow-flag" onClick={this.setFlag.bind(this,'critic')}>CRITICS <div className="flag-count"></div></div>
          <div className="flag pink-flag" onClick={this.setFlag.bind(this,'editor')}>EDITORS <div className="flag-count"></div></div>
          <div className="flag green-flag" onClick={this.setFlag.bind(this,'librarian')}>LIBRARIANS <div className="flag-count"></div></div>
          <div className="flag purple-flag" onClick={this.setFlag.bind(this,'blogger')}>BLOGGERS <div className="flag-count"></div></div>
        </div>
      </div>
    )
  }
});

module.exports = FilterFlags;
