var React = require('react');

var Sidebar =React.createClass({
  render : function(){
    return (
      <div>
      <aside className="Sidebar">
        <div className="rating-summary">
          <div className="summary-stars">
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <div className="summary-star"><img src="./images/summary_star.png" /></div>
            <p>Avarage Rating:4 out 5 stars</p>
          </div>
          <div className="rating-bars">
            <div className="rating-bar-container">
              <span className="bar-inf">5 STAR</span><span className="rating-bar rating-bar-bg ">
                <span className="rating-bar rating-bar-fill" />
              </span><span className="bar-cntr">(10)</span>
            </div>
            <div className="rating-bar-container">
              <span className="bar-inf">4 STAR</span><span className="rating-bar rating-bar-bg">
                <span className="rating-bar rating-bar-fill" />
              </span><span className="bar-cntr">(10)</span>
            </div>
            <div className="rating-bar-container">
              <span className="bar-inf">3 STAR</span><span className="rating-bar rating-bar-bg">
                <span className="rating-bar rating-bar-fill" />
              </span><span className="bar-cntr">(10)</span>
            </div>
            <div className="rating-bar-container">
              <span className="bar-inf">2 STAR</span><span className="rating-bar rating-bar-bg">
                <span className="rating-bar rating-bar-fill" />
              </span><span className="bar-cntr">(10)</span>
            </div>
            <div className="rating-bar-container">
              <span className="bar-inf">1 STAR</span><span className="rating-bar rating-bar-bg">
                <span className="rating-bar rating-bar-fill" />
              </span><span className="bar-cntr">(10)</span>
            </div>
          </div>
          <p>View All 225 Reviews</p>
          <div className="blue-btn"><button className="add-review-icon"> ADD A REVIEW</button></div>
        </div>
        <div className="purchase">
          <span className="sign-painter"> Paperback</span>
          $2.00
          <div className="clear" />
          <button className="purchase-item std-btn yellow-btn">ADD TO CARD</button>
          <div className="purchase-item select-container"><select><option value="BUY ELSEWHERE">BUY ELSEWHERE</option></select></div>
          <div>-OR-</div>
          <button className="purchase-item std-btn orange-btn">BUY EBOOK NOW</button>
        </div>
      </aside>
      </div>
    )
  }
});

module.exports = Sidebar;
