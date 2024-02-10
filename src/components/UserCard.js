import React from 'react';
import { useState, useEffect } from 'react';
import UserData from './UserData';

const UserCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <div className='container-xxl'>
      <div className='row'>
        <div className="grid-three-column"> 
              <UserData user={data} />
        </div>


      </div>
    </div> 
  )
}

export default UserCard;