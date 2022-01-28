   import React,{Component} from 'react'
   //import {Link} from 'react-router-dom';
   //import Popup from '../Popup';
   //import Successful from '../Successful';
   //import Popup from 'reactjs-popup';
   //import 'reactjs-popup/dist/index.css';
   import './index.css'
  
 
   class Users extends Component {
 
    state = {
        seen:false
    };
 
        // togglePop = () => {
        // //    this.setState({
        // //     seen: !this.state.seen
        // //    });
        
        //     <Popup trigger={<button> Trigger</button>} position="right center">
        //         <div>
        //             <label>Email</label>
        //             <input type="email" placeholder="abc@xyz.com" />
        //             <label>Password</label>
        //             <input type="password" />
        //             <button>submit</button>
        //         </div>
        //     </Popup>
        // };

        
        // renderSuccessview = () => {
        //     return <Successful/>
        // }
 
 
 
   render(){
       const {nums_list} = this.props
        //console.log(nums_list)

      
       return(
           <div className="userDetails">
               <div className = "specific-user">
                   <h1 className="userName">user   </h1>
                   {/* <button className="button details-button" onClick={this.togglePop}>Details</button> */}
                   {/* <Popup trigger={<button className="button details-button"> Details</button>} position="right center">
                        <div>
                            <label className="email-label">Email</label>
                            <input type="email" placeholder="abc@xyz.com" />
                            <label className="email-label">Password</label>
                            <input type="password" />
                            <button className="submit-button">submit</button>
                        </div>
                    </Popup> */}
                   {/* {this.state.seen ? <Popup toggle={this.togglePop} /> : null} */}
                   {/* <select>
                        <option>user {userId}</option>
                   </select> */}
                   <select>
                       {nums_list.map((i)=> <option>user {i}</option>)}
                   </select>
                       <button className="button sign-button" onClick={this.togglePop}>Sign</button>
               </div>
           </div>
       )
   }
 
 
   }
 
   export default Users
