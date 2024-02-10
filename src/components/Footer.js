import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare,FaInstagram,FaGithubSquare,FaLinkedinIn,FaYoutube} from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <footer className="py-4">
      <div className="container-sm">
        <div className="row">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src="images/newsletter.png" alt="newsletter" />
              <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
            </div>

          </div>
          <div className="col-7">
          <div className="input-group">
              <input
               type="text"
               className="form-control py-1" 
               placeholder="Search your product here..."
               aria-label="Search your product here..." 
               aria-describedby="basic-addon2" 
              />
              <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
              </span>
           </div>   

          </div>

        </div>

      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                Hno: 25/5 Beparipara, <br/>
                Khilkhet-1229, Dhaka
              </address>
              <a href="tel:+88 01773097310"
              className="text-white mt-3 d-block mb-2">
                +88 01773097310
              </a>
              <a href="mailto:jewelranashepon@gmail.com"
              className="text-white mt-2 d-block mb-2">
                jewelranashepon@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-15 mt-4">
                <a className="text-white" href="">
                  <FaFacebookSquare className="fs-4" />
                </a>
                <a className="text-white" href="">
                  <FaInstagram className="fs-4" />
                </a>

                <a className="text-white" href="">
                  <FaGithubSquare className="fs-4" />
                </a>
                
                <a className="text-white" href="">
                  <FaLinkedinIn className="fs-4" />
                </a>
                <a className="text-white" href="">
                  <FaYoutube className="fs-4" />
                </a>

              </div>

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-links d-flex flex-column">
              <Link to="/privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link  to="/terms-condition" className="text-white py-2 mb-1">Terms & Condition</Link>
              <Link className="text-white py-2 mb-1">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Accounts</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">About</Link>
              <Link className="text-white py-2 mb-1">Faq</Link>
              <Link className="text-white py-2 mb-1">Contact</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="footer-links d-flex flex-column">
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
              <Link className="text-white py-2 mb-1">Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              &copy; {new Date().getFullYear()} ;  powered by Jewel
            </p>
          </div>

        </div>
      </div>
    </footer>  
    </>
  )
}

export default Footer;