import React,{Component} from 'react'
import Users from '../Users'
import Header from '../Header'
import './index.css'

// let usersList = []

 
class Home extends Component{
   state = {
       userscount : 0,
       showUsersData : false,
       usersList : []
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
       const {userscount,usersList} = this.state
       let nums_list = []
       for (let j=1; j<= userscount;j++){
            nums_list.push(j)
       }
       //this.setState({usersList: [...usersList,...nums_list]})
       //console.log(nums_list)
      
       return(
           <div>
               {/* {Array.from({length:userscount},((_,i)=><Users userId={i+1} key={i+1}/>))}  */}
                {/* <Users nums_list={nums_list}/> */}
                {nums_list.map((each)=> <Users nums_list={nums_list} key={each}/>)}
           </div>
       )
   }
   
   
 
   render(){
       const {showUsersData,usersList} = this.state
       console.log(usersList)
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
