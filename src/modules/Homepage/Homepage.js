import FacebookIcon from "resource/facebook-f.svg";
import TwitterIcon from "resource/twitter.svg";
import InstagramIcon from "resource/instagram.svg";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Homepage">
      <section className="mainBg">
        <div>
          <h4>
            FIT<span>4</span>HAPPINESS
          </h4>
          <button>SIGN UP NOW</button>
        </div>
      </section>

      <section className="learnMore">
        <img />
        <h2>VISIBLE PATHWAY TO OBTAIN YOUR DREAM FITNESS BODY</h2>
        <h4>
          FIT<span>4</span>HAPPINESS
        </h4>
        <button>LEARN MORE</button>
      </section>

      <section className="amenities">
        <h2>OUR AMENITIES</h2>
        <div>
          <div>
            <img />
            <p>FITNESS DATA</p>
            <p>Track your weights, reps & sets</p>
            <button>LOG YOUR DATA</button>
          </div>
          <div>
            <img />
            <p>QUICK START</p>
            <p>Default starting workout schedule</p>
            <button>GET STARTED</button>
          </div>
          <div>
            <img />
            <p>WORKOUT RESULTS</p>
            <p>Workout performance analyze</p>
            <button>GET STARTED</button>
          </div>
          <div>
            <img />
            <p>IMPROVEMENT</p>
            <p>Suggest supplemental lifts</p>
            <button>GET STARTED</button>
          </div>
        </div>
      </section>

      <section className="motivation">
        <h2>MOTIVATION ZONE</h2>
        <p>
          Motivation image from celebs and template for users to write their
          workout reflections
        </p>
      </section>

      <section className="successStories">
        <h2>OUR USER REVIEWS</h2>
      </section>

      <section className="contact">
        <div>
          <div>
            <h4>
              FIT<span>4</span>HAPPINESS
            </h4>
          </div>
          <div>
            <h4>123 Nguyen Van Linh St.</h4>
            <h4>D7, Hochiminh city</h4>
            <br />
            <h4>(123) 456-7890</h4>
            <h4>hello@fit4happiness.com</h4>
            <h4>@fit4happiness</h4>
          </div>
          <div>
            <h3>STAY CONNECTED</h3>
            <div>
              <img src={FacebookIcon} alt="facebookIcon" />
              <img src={TwitterIcon} alt="twitterIcon" />
              <img src={InstagramIcon} alt="instagramIcon" />
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </div>
  );
}

export default Homepage;
