import "./Footer.scss";
import {
  UilTwitter,
  UilYoutube,
  UilInstagram,
  UilFacebook,
} from "@iconscout/react-unicons";
import FooterCard from "../Card/FooterCard/FooterCard";

function Footer(props) {
  const { arrayOfFooter } = props;

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
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <FooterCard footerData={arrayOfFooter.slice(i * 1, i + 1)} />
              ))}
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
