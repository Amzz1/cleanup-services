import React from 'react'
import logo from '../image/logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='footer'>
      <div className='footer1'>
        <div className='footer1-left'>
          <img src={logo} alt='sd'/>
          <p>This is Neat is a bond cleaning service keeping tenants,
             real estate agents and property managers happy all across Sydney and Melbourne.</p>
          <span> <FaFacebookF/> <FaTwitter/> <FaGoogle/> <FaInstagram/></span>
        </div>
        <div className='footer1-right'>
          <div className='footer-services'>
            <h5>services</h5>
            <ul>
              <li><a href='#'>End of Lease Cleaning</a></li>
              <li><a href='#'>Vacate Cleaning</a></li>
            </ul>
          </div>
          <div className='footer-services'>
            <h5>LOCATIONS</h5>
            <ul>
              <li><a href='#'>Sydney</a></li>
              <li><a href='#'>Melbourne</a></li>
              <li><a href='#'>Inner West</a></li>
              <li><a href='#'>Eastern Suburbs</a></li>
              <li><a href='#'>Northern Beaches</a></li>
              <li><a href='#'>North Shore</a></li>
            </ul>
          </div>
          <div className='footer-services'>
            <h5>CONTACT</h5>
            <ul>
              <li><a href='#'>This is Neat Cleaning</a></li>
              <li><a href='#'>39 Douglas Street</a></li>
              <li><a href='#'>Redfern, NSW 2016</a></li>
              <li><a href='#'>0488 845 135</a></li>
              <li><a href='#'>hello@thisisneat.com.au</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='underline'></div>
      <div className='footer2'>
        <p>* Our Bond Back Guarantee:</p>
        <p>1. You are required to confirm with your real estate agent which specific cleaning services are required under your lease agreement.
           You must ensure that you tick the appropriate checkboxes on our cleaning checklist when booking a Clean.</p>
        <p>2. If, within 72 hours after your Clean, we are notified by you or your real estate agent that a part of our Services (as described in your Booking and in our cleaning checklist) has not been completed satisfactorily to allow your tenancy bond to be released back to you,
           we will come back to your Residence to re-perform those Services for no additional fee (Bond Back Guarantee).
           Any such notification should include photographs evidencing the areas that need to be addressed and we will make an assessment of whether the area is cleanable.</p>
        <p>
        3. Our Bond Back Guarantee does not cover the following:<br/>
(a) cleaning services not described in your Booking or cleaning checklist available on the Site;<br/>
(b) permanent damage at your Residence, including smoke stains, carpet stains, hard water stains, wall marks, mould, rusting, grease stains, and permanent odours; and <br/>
(c) areas which, in our professional opinion, cannot be cleaned.
        </p>
      </div>
      <div className='footer3'>
        <p>©2022 THIS IS NEAT CLEANING PTY LTD</p>
        <div className='policy'>
          <p >Request a Reclean</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p>ABN: 92 943 684 385</p>
      </div>
      
    </section>
  )
}

export default Footer