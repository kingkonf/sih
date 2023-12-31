import React from 'react';
import { Link } from 'react-router-dom';
import "./contactus.css";
import Sidebar from '../Sidebar';
// import MainDash from '../MainDash/MainDash';
import RightSide from '../RigtSide/RightSide';

const ContactUs = () => {
  return (
    <>
      {/* <Sidebar/> */}
        {/* <MainDash/> */}
        {/* <RightSide/> */}
      <div className="contact_us_6">
        <div className="responsive-container-block container">
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="mob-text">
                <p className="text-blk contactus-head">Get in Touch</p>
                <p className="text-blk contactus-subhead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
                </p>
              </div>
              <div className="responsive-container-block" id="i2cbk">
                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                  <p className="text-blk input-title">FIRST NAME</p>
                  <input className="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
                </div>
                {/* Add similar adjustments for other input fields */}
              </div>
              <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                Submit
              </button>
            </div>
          </form>
          <div className="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
            <div className="map-part">
              <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
                Reach us at
              </p>
              <p className="text-blk map-contactus-subhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
              </p>
              <div className="social-media-links mob">
                <Link className="social-icon-link" to="#" id="ix94i-2-2">
                  <img
                    className="link-img image-block"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                    alt="Twitter"
                  />
                </Link>
                {/* Add similar adjustments for other social media links */}
              </div>
              <div className="map-box container-block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
