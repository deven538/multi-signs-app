import React,{Component} from 'react'
import Users from '../Users'
import Header from '../Header'
import './index.css'
 
class Home extends Component{
   state = {
       userscount : 0,
       showUsersData : false,
   }
 
   handleKeyPress = (event) => {
       if(event.key === "Enter"){
           this.setState({showUsersData : true});
       }
   }
 
   changeValue = (event) => {
       this.setState({userscount : event.target.value});
   }
 
   renderUsersData = () => {
       const {userscount} = this.state
       return(
           <div>
               {Array.from({length:userscount},((_,i)=><Users userId={i+1} key={i+1}/>))}
           </div>
       )
   }
 
   render(){
       const {showUsersData} = this.state
       return(
           <>
           <Header/>
           <div className="main-class">
               <div className="sub-class">
                        <input type="file" className="file-name-input-field"/>
                    <div className="input-container">
                        <label htmlFor="number" className="no-of-users-text">Number of users</label>
                        <input type="number" id="number" className="number-field" onKeyDown={this.handleKeyPress} onChange={this.changeValue} placeholder="Please Enter the number of users"/>
                        {showUsersData === true ? this.renderUsersData() : null }
                    </div>
               </div>
           </div>
           </>
       )
   }
}
 
export default Home
