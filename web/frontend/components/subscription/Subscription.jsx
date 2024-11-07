
import React, { useState } from "react";
import SubscriptionCard from "../SubscriptionCard/SubscriptionCard";

 const subscriptionPlans = [
    {
      id: 1,
      name: "Basic",
      features: ["Basic customer interactions"],
      price: "$9.99/month",
    },
    {
      id: 2,
      name: "Standard",
      features: ["Basic customer interactions", "Advanced analytics and reporting"],
      price: "$19.99/month",
    },
    {
      id: 3,
      name: "Premium",
      features: ["Advanced analytics", "Customized responses based on user behavior"],
      price: "$29.99/month",
    },
    {
      id: 4,
      name: "Enterprise",
      features: [
        "Advanced analytics",
        "Customized responses",
        "Integration with other Shopify apps or services",
      ],
      price: "$49.99/month",
    },
  ];

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");



  return (
    <div className="subscription-page">
      <h1>Choose Your Subscription Plan</h1>
      <div className="subscription-cards">
        {subscriptionPlans.map((plan) => (
          <SubscriptionCard key={plan.id} plan={plan}  />
        ))}
      </div>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default Subscription;
