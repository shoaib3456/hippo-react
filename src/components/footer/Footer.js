import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react';
import Logo from '../../assets/images/logo.png'

export const Footer = () => {
  return (
    <>
      <div class="container py-5 mt-5">
        <div class="transparent mt-5 p-5 py-4 pt-5 rounded-pill d-flex flex-column align-items-center" style={{ position: "relative" }} >
          <img src={Logo} class="footer-logo" alt="" />
          <div class="d-flex align-items-center flex-wrap justify-content-center">
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">Home</a>
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">About</a>
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">Benifits</a>
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">Roadmap</a>
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">Team</a>
            <a href="" class="m-2 mx-1 fw-700 fs-5 text-light">FAQ</a>
          </div>
          <div className="d-flex align-items-center flex-wrap justify-content-center">
             <a href="" className='footer-icons m-2 ' > <Facebook  /></a>
             <a href="" className='footer-icons m-2 ' > <Instagram  /></a>
             <a href="" className='footer-icons m-2 ' > <Twitter  /></a>
          </div>
        </div>
      </div>
    </>
  )
}

