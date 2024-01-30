import React from 'react';
import Button from '../components/Button';

const Dashboard = () => {
  const handleClick = () => {
    console.log('Button clicked!');

    const addData = {
      recurring_id: '170652994334',
      order_id: '667788',
      name: 'Hafiz',
      email: 'clickerhizers@gmail.com',
      phone: '017423212',
      hash: '9811cd47a2b23902090b0ec8bc5ccdb7837eb6105317bc0227b0057c39e4811c',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addData),
    };

    fetch(
      `https://api.sandbox.senangpay.my/recurring/payment/643170643986746`,
      options
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div>
      <h1>Dashboard Page Hiii!</h1>
      <Button onClick={handleClick}>Click me</Button>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
