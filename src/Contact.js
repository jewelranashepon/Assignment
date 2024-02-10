import React from 'react';
import { FaHome } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";


const Contact = () => {
  return (
    <>
     <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-lg">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7299.477916274768!2d90.42222649999997!3d23.82787990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706384101643!5m2!1sen!2sbd"
              width="600" 
              height="450" 
              className="border-0 w-100"
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>  
         </div>

         <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title">Contact</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div>
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                  <input type="tel" className="form-control" placeholder="Mobile Number" />
                </div>
                <div>
                  <textarea 
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="5"
                    placeholder="Comments">
                  </textarea>
                </div>
                <div>
                  <button className="button border-0">Button</button>
                </div>

              </form>
            </div>
            <div>
              <h3 className="contact-title">Get In Touch With Us</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaHome className="fs-5"/>
                    <address className="mb-0">
                      Beparipara , Khilkhet-1229 , Dhaka
                    </address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <FaPhoneVolume className="fs-5"/>
                    <a href="tel:+88 01773097310">+88 01773097310</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <IoMailOutline className="fs-5"/>
                    <a href="mailto:jewelranashepon@gmail.com">
                      jewelranashepon@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BsInfoCircleFill className="fs-5"/>
                    <p className="mb-0">Sunday - Thursday 10AM to 5PM</p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

         </div>


        </div>

      </div>

     </div>
      
    </>
  )
}

export default Contact;