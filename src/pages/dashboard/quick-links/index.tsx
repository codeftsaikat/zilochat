import { Link } from "react-router-dom";
import google from "../../../assets/images/google.png";
import fb from "../../../assets/images/fb.png";
import tw from "../../../assets/images/tw.png";
import insta from "../../../assets/images/insta.png";
import telegram from "../../../assets/images/telegram.png";
import tik from "../../../assets/images/tik.png";
import whats from "../../../assets/images/whats.png";
import x from "../../../assets/images/x.png";
import youtube from "../../../assets/images/youtube.png";

type Props = {};

const QuickLinks = (_props: Props) => {
  return (
    <div className="col-md-4">
      <div className="box-heading">
        <span>
          <i className="fa fa-commenting" aria-hidden="true" />
        </span>
        <h2>Quick Links</h2>
      </div>
      <div className="box">
        <div className="subbox">
          <Link to="/">
            <img src={google} alt="" />
          </Link>
          <Link to="/">
            <img src={fb} alt="" />
          </Link>
          <Link to="/">
            <img src={tw} alt="" />
          </Link>
          <Link to="/">
            <img src={insta} alt="" />
          </Link>
          <Link to="/">
            <img src={telegram} alt="" />
          </Link>
          <Link to="/">
            <img src={tik} alt="" />
          </Link>
          <Link to="/">
            <img src={whats} alt="" />
          </Link>
          <Link to="/">
            <img src={x} alt="" />
          </Link>
          <Link to="/">
            <img src={youtube} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
