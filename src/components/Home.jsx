import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <br />
      <h2>Employee Details</h2>
      <ul>
        {userData.map(user => (
          <li key={user.id} className="user-item">
            <div className="user-info">
              <strong>ID:</strong> {user.id}<br />
              <strong>Name:</strong> {user.name}<br />
              <strong>Email:</strong> {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
