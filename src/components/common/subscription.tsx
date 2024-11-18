import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Subscription = (_props: Props) =>{
  const [isVisible, setIsVisible] = useState(true);
  const handleVisible = () => {
    setIsVisible(false);
  };
  return (
    <div>
      {isVisible && (
        <div className="subscription-box close-box">
          <span className="close">
            <i
              onClick={handleVisible}
              className="fa fa-times"
              aria-hidden="true"
            />
          </span>
          <div className="icon">
            <span className="title timer">Free</span>
          </div>
          <h4>Subscription Plan</h4>
          <p>Your Free Subscription Plan will be expire soon please upgrade</p>
          <Link to='/subscription-plan'>Upgrade</Link>
        </div>
      )}
    </div>
  );
};

export default Subscription;
