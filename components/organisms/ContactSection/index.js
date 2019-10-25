export default ({ google_map_iframe_url, address, phone_number, email_address }) =>
  <section id="contact" className="contact-section section shadow">
    <div className="container">

      <div className="section-header">
        <h3>Contact Us</h3>
      </div>

      <div className="row wow fadeInUp">

        <div className="col-lg-6">
          <div className="map mb-4 mb-lg-0">
            <iframe
              src={google_map_iframe_url}
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '312px' }}
              allowFullScreen></iframe>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="row">
            {
              address &&
              <div className="col-md-4 info">
                <i className="fa fa-map-marker"></i>
                <p>{address}</p>
              </div>
            }
            {
              email_address &&
              <div className="col-md-4 info">
                <i className="fa fa-envelope"></i>
                <p>{email_address}</p>
              </div>
            }
            {
              phone_number &&
              <div className="col-md-4 info">
                <i className="fa fa-phone"></i>
                <p>{phone_number}</p>
              </div>
            }
          </div>

          <div className="form">
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <form action="" method="post" role="form" className="contactForm">
              <div className="form-row">
                <div className="form-group col-lg-6">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validation"></div>
                </div>
                <div className="form-group col-lg-6">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validation"></div>
              </div>
              <div className="form-group">
                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div className="validation"></div>
              </div>
              <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
