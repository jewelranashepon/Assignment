import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const SingleUserPage = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  const {address, company} = user;
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`);
        const jsonData = await response.json();
        setUser(jsonData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, [id]);

  return (
    <>
    <div className='container-xxl'>
      <div className='row'>
        <div>
            <figure>
            <img src={user.image} alt={user.firstName} />

            </figure>
        </div>
        <hr/>

        <div>
          <h3>First Name = {user.firstName}</h3>
          <h3>Last Name = {user.lastName}</h3>
          <h4>Email : <span className='text-primary'>{user.email}</span></h4><br/>

          {/* <h4>Address:{add.address}<br/>
          {add.city},{add.state}
          </h4> */}

          {/* <h3>Company Name: {company.name}</h3> */}



        </div>

      </div>

    </div>
    </>
  )
}

export default SingleUserPage;