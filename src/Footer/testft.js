function Footer() {
  return (
    <footer className="test-footer">
      <div className="container test-footer-wrapper">
        <div className="content-main">
          <div className="content-left">
            <h1>DIVE DEEP INTO RPANEPAL</h1>
            <ul className="menu">
              <li className="menu-item">About RPALABS</li>
              <li className="menu-item">Product</li>
              <li className="menu-item">Blogs</li>
              <li className="menu-item">Lorem</li>
            </ul>
          </div>
          <div className="content-center">
            <h1>GET IN TOUCH</h1>
            <ul className="contact-details">
              <li className="menu-item">email</li>
              <li className="menu-item">pgone</li>
              <li className="menu-item">dfghjk</li>
            </ul>
            <ul className="social-media">
              <a href="#">
                <li className="menu-item">
                  <i className="fa-brands fa-facebook"></i> @facebook
                </li>
              </a>
              <a href="#">
                <li className="menu-item">
                  <i className="fa-brands fa-twitter"></i> @twitter
                </li>
              </a>
              <a href="#">
                <li className="menu-item">
                  <i className="fa-brands fa-linkedin"></i> @linkedIn
                </li>
              </a>
            </ul>
          </div>
          <div className="content-right">
            <h1>SIGNUP FOR NEWSLETTERS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
              nulla ullamcorper.
            </p>
            <form className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="content-bottom">
        <div className="content">
          <img src="assets/images/brand-logo.png" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet semper
            non eleifend non iaculis. Purus, potenti placerat et tincidunt hac
            commodo.
          </p>
          <span>Copyright 2021 @RPANEPAL</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
