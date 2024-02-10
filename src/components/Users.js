import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const Users = (curElem) => {
   // const {users} = curElem;
   //console.log(curElem.users);
   const { id, firstName, lastName, image, email, address,company } = curElem;
  


  return (
    <>
    <Wrapper>
    <NavLink to={`/user/${id}`}>
        <div className="card home-wrapper-2 my-3">
            <figure>
                <img src={image} alt={firstName} />
                {/* <figcaption className="caption">{firstName}</figcaption> */}
            </figure>

            <div className="card-data text-dark">
                <div className="flex flex-column">
                    <h6>First Name: {firstName}</h6>
                    <h6>Last Name: {lastName}</h6>
                    <p>Email: <span className='text-primary'>{email}</span></p>
                    <div className="d-flex flex-column">
                        <h6>Address: {address.address},<br/>
                                     {address.city},{address.state}
                        </h6>
                    </div>

                    <div>
                        Company Name: {company.name}
                    </div>

                </div>
        </div>
      </div>
    </NavLink>
    </Wrapper>
    
    </>
  )
}


const Wrapper = styled.section`
.card-data-price {
  display: left;
}
.del-price{
  font-size: 15px;
  color: red;
}
.card-data--price {
  font-size: 20px;
  color: green;
}

/* Style for the button */
.custom-button {
  background-color: #4CAF50;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Hover effect */
.custom-button:hover {
  background-color: #45a049;
}

  
`;



export default Users;