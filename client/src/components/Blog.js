import React from 'react'

import styles from './blog.module.css'
// import Business from './Business Development Plan 1.png'
import rectangle3 from './Rectangle 3.png'
import rectangle20 from './Rectangle 20.png'
const Blog = (props) => {
  return (
    <div>
      <div className={styles['blog']}>
        <img
          src={rectangle3}
          alt="Rectangle31615"
          className={styles['rectangle3']}
        />
           <img
          src="https://content.energage.com/company-images/SE45259/SE45259_logo_orig.png"
          alt="SE45259logoorigremovebgpreview24569"
          className={styles['logo']}
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
            src="/playground_assets/rectangle11615-l4jn-200h.png"
            alt="Rectangle11615"
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
            Stay Up To
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>Date</span>
        </span>
        <div className={styles['blog1']}>
          <img
            src={rectangle20}
            alt="Rectangle201615"
            className={styles['rectangle20']}
          />
        <img
        src='https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt="Ellipse31062"
        className={styles['image']}
      />
          <span className={styles['text17']}>
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
              <span>affected.</span>
            </span>
          </span>
          <span className={styles['text22']}>
            <span>CATEGORY</span>
          </span>
          <span className={styles['text24']}>
            <span>
              Donating can be a powerful tool in the prevention and management
              of non-communicable diseases. Whether it&apos;s supporting
              research, education and awareness, access to healthcare, or
              lifestyle interventions, donations can make a tangible impact on
              global health outcomes. By contributing to organizations and
              initiatives dedicated to preventing and managing NCDs, individuals
              can help create a healthier future for themselves and their
              communities. Remember, every donation counts, and together we can
              make a difference in the fight against non-communicable diseases.
            </span>
          </span>
          <div className={styles['readmore']}>
            <span className={styles['text26']}>
              <span>Read More</span>
            </span>
          </div>
        </div>
        <div className={styles['blog2']}>
          <span className={styles['text28']}>
            <span>
              Non-communicable diseases (NCDs), also known as chronic diseases,
              are medical conditions that are not contagious and cannot be
              transmitted from person to person. 
            </span>
          </span>
          <img
            src="https://store.thtcentre.com/images/communicable-diseases.png"
            alt="image4974051"
            className={styles['image497']}
          />
          <span className={styles['text30']}>
            <span>
              <span>Non-communicable Diseases</span>
              <br></br>
              <span></span>
            </span>
          </span>
        </div>
        <div className={styles['blog21']}>
          <span className={styles['text35']}>
            <span>Affected areas</span>
          </span>
          <span className={styles['text37']}>
            <span>
              Global impact: NCDs are a leading cause of death and disability
              worldwide. According to the World Health Organization (WHO), NCDs
              are responsible for approximately 71% of all global deaths, 
            </span>
          </span>
          <img
            src="https://assets.weforum.org/editor/AbLC3IQxbU_l8ImxS3UoRieNQTCI7Dt_7QLRHa-avX8.JPG"
            alt="image4994061"
            className={styles['image499']}
          />
        </div>
        <div className={styles['blog22']}>
          <span className={styles['text39']}>
            <span>Preventions</span>
          </span>
          <span className={styles['text41']}>
            <span>
              Prevention and management: Many NCDs can be prevented or
              effectively managed through early detection, lifestyle
              modifications,
            </span>
          </span>
          <img
            src="https://images.unsplash.com/photo-1586739051907-cadac873075a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldmVudGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="image5004061"
            className={styles['image500']}
          />
        </div>
        <div className={styles['seemore']}>
          <span className={styles['text43']}>
            <span>See More</span>
          </span>
          <div className={styles['group2169']}>
          
          </div>
        </div>
        <button className={styles['rectangle21']}>Learn More</button>

        <button className={styles['rectangle24']}>Learn More</button>

        <button className={styles['rectangle23']}>Learn More</button>

      </div>
    </div>
  )
}

export default Blog