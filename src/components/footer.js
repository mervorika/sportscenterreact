import React from 'react'

const Footer = () => {
  return (
    <section className="footer" id="footer">
    <div className="footerDiv">
      <img src={logo} />
      <span className="footerDesc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam sem at urna consequat tincidunt.
      </span>
      <div className="footerLinks">
        <div className="footerLeft">
          <span className="footerTitle">
            Information
          </span>
          <a href="#navbar" className="footerButton">About Us</a>
          <a href="#classes" className="footerButton">Classes</a>
          <a href="#trainers" className="footerButton">Blog</a>
          <a href="#contact" className="footerButton">Contact</a>
        </div>
        <div className="footerRight">
          <span className="footerTitle">
            Helpful Links
          </span>
          <a href="#services" className="footerButton">Services</a>
          <a href="#supports" className="footerButton">Supports</a>
          <a href="#terms" className="footerButton">Terms &amp; Condition</a>
          <a href="#privacy" className="footerButton">Privacy Policy</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer