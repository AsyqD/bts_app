import React from 'react';
import '../styles/OldOrder.css';

const Orders = () => {
  return (
    <div className="orders-container">
      {/* New Order */}
      <div className="new-order">
        <p className="order-title">Old Orders</p>
        
        
        <div className="old-order">
          <p className="old-order-des">Description:  advertise new product </p>
          <p className="old-order-des">Location: Time Square</p>
          <p className="old-order-des">Type: Billboard</p>
        </div>
        
        
      </div>
    </div>
  );
};

export default Orders;
