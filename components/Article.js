var React = require('react');

var Article = React.createClass({
  render: function(){
    return(
      <div>
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
    )
  }
});
module.exports = Article;
