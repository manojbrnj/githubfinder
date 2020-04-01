import React from 'react';
import UsersItem from './UserItem.js';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner.js';
 const  Users = ({users,loading}) =>
{    
if (loading) {

  return<Spinner/>
}
else
{

}

  return (   
 <div className='Users' style={userStyle} >
{
users.map(user=> <UsersItem key={user.id} users = {user} />)}              
 </div>   
  );  
}

const userStyle = {
  display:'grid',
  gridTemplateColumns :'repeat(4,1fr)',
  gridGap:'1rem'
  }

  Users.prototype = 
  {
    users: PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
  };
export default Users
