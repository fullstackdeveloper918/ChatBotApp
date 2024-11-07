import React from "react";
import "./SubscriptionCard.css";
import {checkMark} from '../../assets'

const SubscriptionCard = ({ plan, onSubscribe }) => {
  return (
    <>
      <div class="card">
        <div class="header">
          <span class="license">hobby</span>
          <h2>$29</h2>
          <span class="duration">/month</span>
          <a href="#" class="btn">
            Get started
          </a>
        </div>
        <ul class="features">
          <li>
            <img src={checkMark} />
            <a href="#">250 Subscriber</a>
          </li>
          <li>
            <img src={checkMark} />
            <a href="#">5 Team Members</a>
          </li>
          <li>
            <img src={checkMark} />
            <a href="#">5 Metrics</a>
          </li>
          <li>
            <img src={checkMark} />
            <a href="#">Email Notifications</a>
          </li>
          <li>
            <img src={checkMark} />
            <a href="#">Basic Customization</a>
          </li>
          <li>
            <img src={checkMark} />
            <a href="#">Status & Authenticated API</a>
          </li>
        </ul>
      </div>
    </>
  );
};

// <div className="subscription-card">
//   <h2>{plan.name}</h2>
//   <p>Price: {plan.price}</p>
//   <ul>
//     {plan.features.map((feature, index) => (
//       <li key={index}>{feature}</li>
//     ))}
//   </ul>
//   <button onClick={() => onSubscribe(plan)}>Subscribe</button>
// </div>

export default SubscriptionCard;
