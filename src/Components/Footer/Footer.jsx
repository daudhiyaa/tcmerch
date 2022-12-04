import "./Footer.scss";
import {
  UilTwitter,
  UilYoutube,
  UilInstagram,
  UilFacebook,
  UilMapMarker,
} from "@iconscout/react-unicons";
import FooterCard from "../Card/FooterCard/FooterCard";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider"></div>
      <div className="footer__content">
        <div className="footer__img">
          <a href="" className="logo">
            <span>M</span>
          </a>
          <h3>Find out about the sales at your local shop</h3>
          <a href="" className="button">
            <span>Find Shops</span>
          </a>
        </div>

        <div className="footer__listCard">
          <div className="listCard">
            <FooterCard />
            <FooterCard />
            <FooterCard />
            <FooterCard />
          </div>
          <hr />
          <div className="underLine">
            <h5>© 2022 TCMerch. All rights reserved.</h5>
            <div className="listSosmed">
              <a href="">
                <UilFacebook />
              </a>
              <a href="">
                <UilTwitter />
              </a>
              <a href="">
                <UilInstagram />
              </a>
              <a href="">
                <UilYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
