import React  from 'react';

const UserItem = (props) => {
const {login,avatar_url,html_url} = props.users;
        return (
        <div className='card text-center' >

          <h2>{login}</h2> 
          <img src={avatar_url} alt='' style={{width:'60px',height:'60px'}} className='round-img'/>
          <div  >
          <a href={html_url} className='btn btn-primary btn-sm my-1'>more</a>
          </div>
        </div>
        )
    
}

export default UserItem
