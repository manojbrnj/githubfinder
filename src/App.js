import React ,{Component} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Layout/Navbar.js';
import Users from './Components/Users/Users.js';
import Search from './Components/Users/Search';
import Alert from './Components/Layout/Alert';

class App extends Component
{
state =
{
      users : [],
  loading:false ,
  alert:null 
};




     async componentDidMount()
    {
      console.log(process.env.REACT_APP_GITHUB_CLIENTSECRATE_ID);
        this.setState({loading:true});
   const res =  await axios.get(`https://api.github.com/users?results=5&$clientid=${process.env.REACT_APP_GITHUB_CLIENT_ID }&$clientSecrateid=${process.env.REACT_APP_GITHUB_CLIENTSECRATE_ID}`);  
    this.setState({users: res.data,loading:false});
     }
searchUser = async text =>
{
    this.setState({loading:true}); 
    
    const res =  await axios.get(`https://api.github.com/search/users?q=${text}&results=5 &clientid=${process.env.REACT_APP_GITHUB_CLIENT_ID }&clientSecrateid=${process.env.REACT_APP_GITHUB_CLIENTSECRATE_ID}`);  
      this.setState({users: res.data.items,loading:false});


};

clearUsers = ( ) => { this.setState({users:[]})};
setAlert = (msg,type)=>
{
this.setState({alert:{msg:msg,type:type}})

setTimeout(() => {
this.setState({alert:null})
}, 2000);


}
render()
{
return (
<div className="App">
<Navbar />
<div className="container">
    
<Search searchUsers={this.searchUser} clearUsers ={this.clearUsers} showClear={this.state.users.length > 0 ? true:false} 
setAlert = {this.setAlert} alert= {this.setAlert}


/>
<Alert  alert = {this.state.alert}/>
<Users users= {this.state.users} loading={this.state.loading} />
</div>
</div>
);
}
}
export default App;
