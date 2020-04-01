import React, { Component } from 'react';
import PropTypes from 'prop-types';

class  Search extends Component {
state =
{
text:'',
alert:{msg:'',type:''}
};
static propTypes = 
{
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
setAlert:PropTypes.func.isRequired
};


onSubmit = (e) => 
{
e.preventDefault();
if(this.state.text === '')
{
this.props.setAlert('please Enter value','light');

}
else
{

    this.props.searchUsers(this.state.text);
this.setState({text: ''});
}


};
setValueSearch = (e) =>
{
this.setState({text: e.target.value});
};

    render(){
    return (
        <div>
            <form className="form" onSubmit={this.onSubmit}>
            <input type="text" name="search" id="" placeholder="Search Users..."
            value={this.state.text}
            onChange={this.setValueSearch}
            
            />

            {this.state.text.length > 0 ? <input type="submit" className="btn btn-dark btn-block" value="search" 
        
            />   : <input type="submit" className="btn btn-dark btn-block" value="search"  
        
            /> }
         
            </form>
    {this.props.showClear && <button value='clear' className='btn btn-light btn-block' onClick={this.props.clearUsers}>Clear</button> }
    <h1>{this.state.alert.msg}</h1>
        </div>
    )
}
}

export default Search
