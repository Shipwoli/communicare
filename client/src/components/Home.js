import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import ellipseImage from './images/Ellipse 3.png';
import ellipseImg from './images/Ellipse 4.png';
import ellipse from './images/Ellipse 6.png';
import vector from './images/Form Vector.png';
import rectangle from './images/Rectangle 6.png';

const Home = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        setUser(null);
        window.location = '/log-in';
      }
    });
  }

  return (
    <div>
      <div className={styles.home}>
        <div className={styles.menu}>
          <div className={styles['menu-list']}>
            <span className={styles.text}>
              <span>Home</span>
            </span>
            <Link to="/about" className={styles.text02}>
              <span>About</span>
            </Link>
            <Link to="/donation" className={styles.text04}>
              <span>Donation</span>
            </Link>
            <Link to="/blog" className={styles.text06}>
              <span>Blog</span>
            </Link>
            <Link to="/contacts" className={styles.text08}>
              <span>Contact</span>
            </Link>
            <Link to="/map" className={styles.text222}>
              <span>Maps</span>
            </Link>
          </div>
        </div>

        <div className={styles['log-out']}>
          {user ? (
            <>
              <Link to="/logout" className={styles.text10} onClick={handleLogoutClick}>
                <span>Logout</span>
              </Link>
            </>
          ) : (
            <>
              <div className={styles['sign-in']}>
                <Link to="/login" className={styles.text10}>
                  <span>Sign in</span>
                </Link>
              </div>
              <div className={styles['sign-up']}>
                <Link to="/signup" className={styles.text12}>
                  <span>Sign up</span>
                </Link>
              </div>
            </>
          )}
        </div>

        <div className={styles['background-circles']}>
          <img src={ellipseImg} alt="Ellipse31062" className={styles.ellipse4} />
          <img src={ellipseImage} alt="Ellipse31062" className={styles.ellipse3} />
          <img src={ellipse} alt="Ellipse31062" className={styles.ellipse6} />
        </div>
        <img src={vector} alt="FormVector925" className={styles['form-vector']} />
        <span className={styles.text14}>
          <span>
            <span>Revolutionizing Public Health:</span>
            <br />
            <span></span>
            <br />
            <span className={styles.text90}>
              Leveraging Cutting-Edge Technology to Combat Communicable Diseases
            </span>
          </span>
        </span>

        <div className={styles['donation-form']}>
          <span className={styles.text23}>
            <span>Donation Amount</span>
          </span>
          <div className={styles['donation-option']}>
            <img src={rectangle} alt="Rectangle6933" className={styles['rectangle 6']} />
            <span className={styles.text25}>
              <span>One-time</span>
            </span>
            <span className={styles.text27}>
              <span>Weekly</span>
              </span>
        <span className={styles.text29}>
          <span>Monthly</span>
        </span>
      </div>
      <div className={styles['donation-input']}>
        <span className={styles.text32}>
          <span>$</span>
        </span>
        <input type="number" min="0" placeholder="Enter amount" className={styles['donation-amount']} />
        <button className={styles['donation-button']}>Donate</button>
      </div>
    </div>

    <div className={styles['latest-news']}>
      <span className={styles.text34}>
        <span>Latest News</span>
      </span>
      <div className={styles['news-card']}>
        <div className={styles['news-card-image']}>
          <img src="https://picsum.photos/200/300" alt="news-article" className={styles['news-image']} />
        </div>
        <div className={styles['news-card-details']}>
          <h2 className={styles['news-heading']}>Lorem ipsum dolor sit amet</h2>
          <p className={styles['news-description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ultricies odio, ac gravida
            justo venenatis vel. Aliquam ullamcorper odio vel mi pellentesque auctor.
          </p>
          <Link to="/blog" className={styles['news-read-more']}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export default Home;




