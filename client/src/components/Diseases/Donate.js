import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Donate = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios.get('/donations')
      .then(response => setDonations(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="mt-3 mb-3">Donations Made</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Amount Donated</th>
            <th>Area Donated To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(donation => (
            <tr key={donation.id}>
              <td>{donation.amount}</td>
              <td>{donation.area.name}</td>
              <td>{donation.user.email}</td>
              <td>{donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donate;
