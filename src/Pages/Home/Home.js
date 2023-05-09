import React, {useRef} from "react";
import classes from './home.module.css';

const Home = () =>{
    const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const isLogin = true;
    
    if (isLogin) {
        // handle login logic
        const authData = {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          };
    
          fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]", {
            method: "POST",
            body: JSON.stringify(authData),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Authentication failed!");
              }
            })
            .then((data) => {
              console.log(data);
              // set token in context or local storage
            })
            .catch((err) => {
              console.log(err);
            });
      } 
  }

   return (
    <section className={classes.auth}>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email"  required ref={emailInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          required
         ref={passwordInputRef}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" value="submit">Submit</button>
         
      
      </div>
    </form>
  </section>
   )
};

export default Home;