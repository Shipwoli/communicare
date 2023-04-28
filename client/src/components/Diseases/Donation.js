import React, { useState } from 'react';

const DonationForm = ({ area }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonationSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          area_id: area.id,
          donation_amount: donationAmount
        })
      });
      if (response.ok) {
        alert('Thank you for your donation!');
      } else {
        alert('There was an error processing your donation.');
      }
    } catch (error) {
      console.error(error);
      alert('There was an error processing your donation.');
    }
  };

  return (
    <div className="donation-form">
      <h3>Offer a Donation</h3>
      <p>Enter the amount you would like to donate to {area.name}:</p>
      <form onSubmit={handleDonationSubmit}>
        <div className="form-group">
          <label htmlFor="donationAmount">Donation Amount:</label>
          <input
            type="number"
            className="form-control"
            id="donationAmount"
            value={donationAmount}
            onChange={event => setDonationAmount(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
