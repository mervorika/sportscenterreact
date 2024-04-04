import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contactDiv">
        <div className="contactTitle">CONTACT US</div>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquam sem at urna consequat tincidunt.
        </span>
        <div className="contactBottomDiv">
          <div className="contactFormDiv">
            <div className="contactFormTop">
              <div className="contactFormNumber">
                <span>Mobile Number</span>
                <span>+135 773 321 4442</span>
              </div>
              <div className="contactFormEmail">
                <span>Email Adress</span>
                <span>demo@demo.com</span>
              </div>
            </div>
            <div className="contactFormBottom">
              <span className="contactFormTitle">Make An Appointment</span>
              <input placeholder="Your Name" />
              <input placeholder="Your Email" />
              <textarea placeholder="Your Message" defaultValue={""} />
            </div>
          </div>
          <div className="contactMapDiv">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97937.32697171732!2d32.69244057680726!3d39.906897328111114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3489d8e37ef67%3A0xea73d71f35544e38!2sMACFit%20Cepa%20AVM!5e0!3m2!1str!2str!4v1707252852615!5m2!1str!2str"
              width={600}
              height={300}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
