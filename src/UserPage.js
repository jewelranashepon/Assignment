import React from 'react';
import UserCard from './components/UserCard';

const UserPage = (users) => {
  return (
    <>
    <div className="container">
      <div className="row">
        <UserCard/>              
      </div>
    </div>
    </>
  )
}

export default UserPage