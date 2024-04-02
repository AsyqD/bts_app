import React from 'react';
import '../styles/NewOrder.css';

const Orders = () => {
  return (
    <div className="orders-container">
      {/* New Order */}
      <div className="new-order">
        <p className="order-title">New Order</p>
        
        {/* Description Section */}
        <div className="order-section">
          <div className="section-title">Description</div>
          <textarea placeholder="Enter description" rows="4"></textarea>
        </div>
        
        {/* Location Section */}
        <div className="order-section">
          <div className="section-title">Location</div>
          <input type="text" placeholder="Enter location" />
        </div>
        
        {/* Type Section */}
        <div className="order-section">
          <div className="section-title">Type</div>
          <select>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
        
        {/* Card Section */}
        <div className="order-section">
          <div className="section-title">Card</div>
          <input type="text" placeholder="Card number" />
          {}
        </div>
        
        {/* Pay Button */}
        <div className="pay-button">
          <button>Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
