import React from 'react';
import classes from './Home.module.scss';
import Button from '../UI/Button/Button';

const Home = () => {
    
  return (
    <div className={classes.Home_box}>
      <div className={classes.Home_outbox}>
        <div className={classes.Home_input}>
          <div className={classes.Home_content}>
            <ul className={classes.Home_message}>
              <li className={classes.Home_message_li}>Welcome Back</li>
            </ul>
            <div className={classes.abc}>                       
              <input 
                className={classes.Home_input_tag} 
                name="email" 
                type="text" 
                autoFocus 
                placeholder="Email Address"
                // onChange={this.handleChange}
                // value={this.state.email}
              />
              <input 
                className={classes.Home_input_tag} 
                name="password" 
                type="password" 
                placeholder="Password"
                // onChange={this.handleChange}
                // value={this.state.password}
              />
              <Button btnType = "login" btnValue = "로그인" />
            </div>            
          </div>
        </div>
        <div className={classes.Picture}>
          <img src="https://dspncdn.com/a1/media/236x/ed/d7/da/edd7dad1071f3c982dd9efab0b68af41.jpg" alt="Mistake"></img>
        </div>
      </div>
    </div>    
  )
}

export default Home;