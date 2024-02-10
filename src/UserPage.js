import React from 'react';
import UserCard from './components/UserCard';

const UserPage = (users) => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className='home-wrapper-2 my-3 d-flex justify-content-between'>

            <div className="filter-search d-flex justify-content-start align-items-center">
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  name="text"
                  placeholder="Search"
                  value={""}
                />
              </form>
            </div>


            <div className="sort-selection d-flex justify-content-end p-3">
              <form>
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" className="sort-selection--style">
                  <option value="lowest">Sort by Name</option>
                  <option value="height">Sort by Email</option>
                  <option value="a-z">Sort by Company name</option>
                </select>
              </form>
            </div>

        </div>
        <UserCard/>              
      </div>
    </div>
    </>
  )
}

export default UserPage