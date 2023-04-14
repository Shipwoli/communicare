import React from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import styles from './home.module.css'
import ellipseImage from "./Ellipse 3.png"; // Import the local image
import ellipseImg from "./Ellipse 4.png"; // Import the local image
import ellipse from "./Ellipse 6.png"; // Import the local image
import vector from "./Form Vector.png"
import rectangle from "./Rectangle 6.png"

const Home = (props) => {
  return (
    <div>
      <div className={styles['home']}>
        <div className={styles['menu']}>
          <div className={styles['menu-list']}>
            <span className={styles['text']}>
              <span>Home</span>
            </span>
            <span className={styles['text02']}>
              <span>About</span>
            </span>
            <span className={styles['text04']}>
              <span>Donation</span>
            </span>
            <span className={styles['text06']}>
              <span>Blog</span>
            </span>
            <span className={styles['text08']}>
              <span>Contact</span>
            </span>
          </div>
          <img
            src="/playground_assets/rectangle1911-vhec-200h.png"
            alt="Rectangle1911"
            className={styles['rectangle1']}
          />
        </div>
        <div className={styles['sign-in']}>
        {/* Update sign-in element to use Link */}
        <Link to="/login" className={styles['text10']}>
          <span>Sign in</span>
        </Link>
      </div>
      <div className={styles['sign-up']}>
        {/* Update sign-up element to use Link */}
        <Link to="/signup" className={styles['text12']}>
          <span>Sign up</span>
        </Link>
      </div>
        <div className={styles['background-circles']}>
        <img
        src={ellipseImg} // Use the imported image as the src
        alt="Ellipse31062"
        className={styles['ellipse4']}
      />
         <img
        src={ellipseImage} // Use the imported image as the src
        alt="Ellipse31062"
        className={styles['ellipse3']}
      />
          <img
        src={ellipse} // Use the imported image as the src
        alt="Ellipse31062"
        className={styles['ellipse6']}
      />
        </div>
        <img
          src={vector}
          alt="FormVector925"
          className={styles['form-vector']}
        />
        <span className={styles['text14']}>
          <span>
            <span>Communi-care</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Preventing Communicable Diseases with Technology</span>
          </span>
        </span>
        <div className={styles['donate-now']}>
          <span className={styles['text21']}>
            <span>Donate Now</span>
          </span>
        </div>
        <div className={styles['donation-form']}>
          <span className={styles['text23']}>
            <span>Donation Amount</span>
          </span>
          <div className={styles['donation-option']}>
            <img
              src={rectangle}
              alt="Rectangle6933"
              className={styles['rectangle 6']}
            />
            <span className={styles['text25']}>
              <span>One-time</span>
            </span>
            <span className={styles['text27']}>
              <span>Weekly</span>
            </span>
          </div>
          <div className={styles['group1']}>
            <span className={styles['text29']}>
              <span>500 Ksh</span>
            </span>
          </div>
          <div className={styles['group2']}>
            <span className={styles['text31']}>
              <span>1000 Ksh</span>
            </span>
          </div>
          <div className={styles['group3']}>
            <span className={styles['text33']}>
              <span>2000 Ksh</span>
            </span>
          </div>
          <div className={styles['group4']}>
            <span className={styles['text35']}>
              <span>5000 Ksh</span>
            </span>
          </div>
          <div className={styles['group5']}>
            <span className={styles['text37']}>
              <span>10000 Ksh</span>
            </span>
          </div>
          <div className={styles['group6']}>
            <span className={styles['text39']}>
              <span>50000 Ksh</span>
            </span>
          </div>
          <div className={styles['custom-amount']}>
            <span className={styles['text41']}>
              <span>Custom Amount</span>
            </span>
          </div>
          <div className={styles['donate-now1']}>
            <span className={styles['text43']}>
              <span>DONATE NOW</span>
            </span>
          </div>
        </div>
        <img
          src="https://content.energage.com/company-images/SE45259/SE45259_logo_orig.png"
          alt="SE45259logoorigremovebgpreview24569"
          className={styles['logo']}
        />
      </div>
    </div>
  )
}

export default Home