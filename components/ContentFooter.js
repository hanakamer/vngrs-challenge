var React = require('react');

var ContentFooter = React.createClass({
  render: function(){
    return (
      <div>
        <footer className="content-footer">
          <button className="std-btn white-btn see-all-btn">SEE ALL 225 REVIEWS</button>
          <div className="blue-btn"><button className="add-review-icon"> ADD A REVIEW</button></div>
        </footer>
      </div>
    )
  }
});

module.exports = ContentFooter;
