import React from 'react'

import styles from './donation.module.css'
import D1 from './D1.png'
import  logo from './Dlogo.png'
import d2 from './D2.png'
import d3 from './D3.png'
import  line from './line.png'
import dr from './dr.svg'

const Donation = (props) => {
  return (
    <div>
      <div className={styles['donation']}>
        <img
          src={D1}
          alt="Rectangle31015"
          className={styles['rectangle3']}
        />
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
            src={d2}
            alt="Rectangle11016"
            className={styles['rectangle1']}
          />
        </div>
        <div className={styles['sign-in']}>
          <span className={styles['text10']}>
            <span>Sign in</span>
          </span>
        </div>
        <div className={styles['sign-up']}>
          <span className={styles['text12']}>
            <span>Sign up</span>
          </span>
        </div>
        <span className={styles['text14']}>
          <span className={styles['text15']}>
            Help us
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text16']}>save</span>
          <span> the world from communicable diseases</span>
        </span>
        <div className={styles['group2163']}>
          <img
            src={d3}
            alt="image4964029"
            className={styles['image496']}
          />
          <span className={styles['text18']}>
            <span>
              <span>
                Ensuring medicine for all the
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>affected</span>
            </span>
          </span>
          <span className={styles['text23']}>
            <span>Category 1</span>
          </span>
          <div className={styles['donate-now']}>
           
            <span className={styles['text25']}>
              <span> Donate Now</span>
            </span>
          </div>
          <img
            src={line}
            alt="Line31614"
            className={styles['line3']}
          />
          <img
            src={line}
            alt="Line41614"
            className={styles['line4']}
          />
          <span className={styles['text27']}>
            <span>50%</span>
          </span>
        </div>
        <div className={styles['seemore']}>
          <span className={styles['text29']}>
            <span>See More</span>
          </span>
          <div className={styles['group2169']}>
            <img
              src={dr}
              alt="Vector1614"
              className={styles['vector']}
            />
           
          </div>
        </div>
        <img
          src={logo}
          alt="SE45259logoorigremovebgpreview14281"
          className={styles['se45259logoorigremovebgpreview1']}
        />
      </div>
    </div>
  )
}

export default Donation
