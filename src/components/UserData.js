import React from 'react';
import Users from './Users';

const UserData = ({user}) => {
 // const arrayData = Object.entries(users);

  // console.log(users);
  return (
    <>
    <div className='grid grid-three-column'>
        {
          user.map((curElem)=>{
              return <Users key={curElem.id} {...curElem} />;

          })
        }

    </div>
    </>
  )
}

export default UserData