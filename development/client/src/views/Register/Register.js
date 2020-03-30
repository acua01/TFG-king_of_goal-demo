/*
*=============================================================================
* Title: Register.js
* Created on: 22/03/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the register form
*==============================================================================
* Constant: Register
*==============================================================================
*/

/*
*========== SUMMARY CONTENT ===================================================
* Functions: None
*------------------------------------------------------------------------------
* Variables:
*
*------------------------------------------------------------------------------
* Props Variables:
*   -classes: Object that contains all the classes from the jsx file
*------------------------------------------------------------------------------
* Props Functions: None
*------------------------------------------------------------------------------
* Hooks: None
*========== END SUMMARY =======================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState} from 'react';
  import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Icon} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './RegisterStyles';
  /* END JSS */

  /* Routes */
  import {routes} from '../../routes/routes';
  /* End Routes */

  /* Custom Components */
  // Aquí los imports de los componentes que tú te crees
  /* End Custom Components */

/*========== END IMPORTS ====================================================*/

const Register = props => {

  const {classes, state, actions, history} = props;

  const [usernameState, setUsernameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [password2State, setPassword2State] = useState('');

  const onSubmitRegisterFormHandler = event => {
    event.preventDefault();
    actions.showSnackbar();
    /*
    // Validar nombre

		if(usernameState == '' || !/^[a-zA-Z0-9]+$/i.test(usernameState)){
			errors.push('Introduce un nombre de usuario válido');
		}

    // Validar email

		if(emailState == '' || !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailState)){
			errors.push('Introduce un email válido');
		}

    // Validar la contraseña
		if(passwordState == ''){
			errors.push('Introduce una contraseña');
		}

		if(passwordState != password2State){
			errors.push('Las contraseñas no coinciden');
		}
    if(errors.length == 0){

    }
    */

    actions.sendRequestToRegisterUser(history,{
      username: usernameState,
      email: emailState,
      password: passwordState,
      password2: password2State
    });
  }
  /*
  let errors = [];

  const htmlErrors = errors.map((error, index) => {
    return <p>{error}</p>
  });
  */
  return(
    <div className={classes.register}>
      <form onSubmit={onSubmitRegisterFormHandler}>
        <h1>Registro</h1>
        <div className={classes.field}>
          <label for="username"><Icon name='user' className={classes.icon} size="large"/></label>
          <input type="text" id="username" placeholder="Nick" value={usernameState} onChange={(event) => setUsernameState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
          <input type="text" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password" id="password" placeholder="Contraseña" value={passwordState} onChange={(event) => setPasswordState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="password2"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password" id="password2" placeholder="Repetir contraseña" value={password2State} onChange={(event) => setPassword2State(event.target.value)} required/>
        </div>
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default injectSheet(styles)(Register);
