var React = require('react');

var FilterFlags = React.createClass({
  render: function(){
    return (
      <div>
        <div className="flags">
          <span className="flags-header">SEE REVIEWS FROM:</span>
          <hr className="flag-line" />
          <div className="flag blue-flag">EVERYONE <div className="flag-count">(225)</div></div>
          <div className="flag turquase-flag">READERS <div className="flag-count">(225)</div></div>
          <div className="flag yellow-flag">CRITICS <div className="flag-count">(225)</div></div>
          <div className="flag pink-flag">EDITORS <div className="flag-count">(225)</div></div>
          <div className="flag green-flag">LIBRARIANS <div className="flag-count">(225)</div></div>
          <div className="flag purple-flag">BLOGGERS <div className="flag-count">(225)</div></div>
        </div>
      </div>
    )
  }
});

module.exports = FilterFlags;
