var React = require('react');

module.exports = React.createClass({
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
          <div className="page-header">
            <span className="header-book">Book</span>
            <span className="header-reviews">REVIEWS</span>
            <div className="total-review-stars">
              <div className="star"><img src="./images/white_star.png" /></div>
              <div className="star"><img src="./images/white_star.png" /></div>
              <div className="star"><img src="./images/white_star.png" /></div>
              <div className="star"><img src="./images/white_star.png" /></div>
              <div className="star"><img src="./images/white_star.png" /></div>
            </div>
            <div className="header-total-reviews">225 Total Reviews</div>
          </div>
          <div className="content">
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
            <div className="clear" />
            <div className="sort-reviews-container">
              <span className="sign-painter">Most Helpful</span>
              <div className="clear" />
              <span className>REVIEWS</span>
              <label className="select-sort">Sort by:
                <div className="select-container"><select><option value="MOST HELPFUL">MOST HELPFUL</option></select></div>
              </label>
            </div>
            <div className="clear" />
            <div className="reviews">
              <article className="review">
                <header className="review-data">
                  <div className="review-flag blue-flag" />
                  <span className="review-logo" />
                  <div className="data-wrapper">
                    <span className="review-data-item review-date">September 23, 2012</span>
                    <span className="review-data-item review-author">JIM PANCAKE</span>
                    <span className="review-data-item review-via">Hardback - Verified Bookish Purchase</span>
                  </div>
                  <div className="review-title">
                    <div className="title-stars">
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                    </div>
                    <span>THIS BOOK IS THE BEES KNEES</span>
                  </div>
                </header>
                <div className="review-body">
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                  <span className="more blue-txt">Read more...</span>
                  <div className="clear" />
                </div>
                <footer className="review-footer">
                  <div className="review-summary"> 8 out of 8 found this review helpful.</div>
                  <div className="review-rate">
                    Was this review helpful to you?
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon" />
                      Helpful
                    </a>
                    |
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon not-helpful" />
                      Not Helpful
                    </a>
                    <a className="put-flag blue-txt" href="#"><span className="put-flag-icon" />Flag this content for review</a>
                  </div>
                </footer>
                <hr className="article-delimater" />
              </article>
              <article className="review">
                <header className="review-data">
                  <div className="review-flag blue-flag" />
                  <span className="review-logo" />
                  <div className="data-wrapper">
                    <span className="review-data-item review-date">September 23, 2012</span>
                    <span className="review-data-item review-author">JIM PANCAKE</span>
                    <span className="review-data-item review-via">Hardback - Verified Bookish Purchase</span>
                  </div>
                  <div className="review-title">
                    <div className="title-stars">
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                    </div>
                    <span>THIS BOOK IS THE BEES KNEES</span>
                  </div>
                </header>
                <div className="review-body">
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                </div>
                <footer className="review-footer">
                  <div className="review-summary"> 8 out of 8 found this review helpful.</div>
                  <div className="review-rate">
                    Was this review helpful to you?
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon" />
                      Helpful
                    </a>
                    |
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon not-helpful" />
                      Not Helpful
                    </a>
                    <a className="put-flag blue-txt" href="#"><span className="put-flag-icon" />Flag this content for review</a>
                  </div>
                </footer>
                <hr className="article-delimater" />
              </article>
              <article className="review">
                <header className="review-data">
                  <div className="review-flag blue-flag" />
                  <span className="review-logo" />
                  <div className="data-wrapper">
                    <span className="review-data-item review-date">September 23, 2012</span>
                    <span className="review-data-item review-author">JIM PANCAKE</span>
                    <span className="review-data-item review-via">Hardback - Verified Bookish Purchase</span>
                  </div>
                  <div className="review-title">
                    <div className="title-stars">
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                      <img className="title-star" src="./images/title_star.png" />
                    </div>
                    <span>THIS BOOK IS THE BEES KNEES</span>
                  </div>
                </header>
                <div className="review-body">
                  <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                  <span className="more blue-txt">Read more...</span>
                  <div className="clear" />
                </div>
                <footer className="review-footer">
                  <div className="review-summary"> 8 out of 8 found this review helpful.</div>
                  <div className="review-rate">
                    Was this review helpful to you?
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon" />
                      Helpful
                    </a>
                    |
                    <a className="blue-txt" href="#">
                      <span className="helpful-icon not-helpful" />
                      Not Helpful
                    </a>
                    <a className="put-flag blue-txt" href="#"><span className="put-flag-icon" />Flag this content for review</a>
                  </div>
                </footer>
                <hr className="article-delimater" />
              </article>
            </div>
            <footer className="content-footer">
              <button className="std-btn white-btn see-all-btn">SEE ALL 225 REVIEWS</button>
              <div className="blue-btn"><button className="add-review-icon"> ADD A REVIEW</button></div>
            </footer>
          </div>
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
      </div>

    )}
});
