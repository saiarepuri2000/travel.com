import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT</h2>
            <Link to='/sign-up'>How travel.com works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link>Travel.com plus</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link 
              to='/'
              target='_blank'
              aria-label='Facebook'>
             <i class='fab fa-facebook-f' /> Facebook  
            </Link>
            <Link to='/'
              target='_blank'
              aria-label='Instagram'>
              <i class='fab fa-instagram' /> Instagram 
            </Link>
            <Link to='/'
              target='_blank'
              aria-label='Youtube'><i class='fab fa-youtube' />  Youtube
            </Link>
            <Link to='/'
              target='_blank'
              aria-label='Twitter'><i class='fab fa-twitter' /> Twitter 
            </Link>
            <Link
              to='/'
              target='_blank'
              aria-label='LinkedIn'><i class='fab fa-linkedin' /> LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Travel.com
              <i className="fas fa-plane"/>
            </Link>
          </div>
          <small class='website-rights'>Travel.com © 2020</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;