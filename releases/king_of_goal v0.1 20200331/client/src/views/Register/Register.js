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

  /* End Custom Components */

  /* Custom Modules */
  import {showSnackbar} from '../../shared/utils';
  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Register = props => {

  const {classes, state, actions, history} = props;

  const [usernameState, setUsernameState] = useState('');
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');
  const [password2State, setPassword2State] = useState('');

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitRegisterFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server
    *--------------------------------------------------------------------------
    * Created on: 27/03/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitRegisterFormHandler = event => {
      event.preventDefault();

      let errors = [];

      // Username validation

  		if(usernameState == ''){
  			errors.push('Introduce un nick.');
  		}

      if(usernameState.length < 3 || usernameState.length > 20){
  			errors.push('Introduce un nick de mínimo 3 caracteres y máximo de 20.');
  		}

      if(!/^[a-zA-Z0-9]+$/i.test(usernameState)){
  			errors.push('Introduce un nick con caracteres alfanuméricos.');
  		}

      // Email validation

  		if(emailState == ''){
  			errors.push('Introduce un email.');
  		}

      if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailState)){
  			errors.push('Introduce un email válido.');
  		}

      // Password validation

  		if(passwordState == ''){
  			errors.push('Introduce una contraseña.');
  		}

      if(passwordState.length < 5 || passwordState.length > 20){
  			errors.push('Introduce un contraseña de mínimo 3 caracteres y máximo de 20.');
  		}

  		if(passwordState != password2State){
  			errors.push('Las contraseñas no coinciden.');
  		}

      if(errors.length === 0){
        actions.sendRequestToRegisterUser(history,{
          username: usernameState,
          email: emailState,
          password: passwordState,
          password2: password2State
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.register}>
      <form onSubmit={onSubmitRegisterFormHandler}>
        <h1>Registro</h1>
        <div className={classes.field}>
          <label for="username"><Icon name='user' className={classes.icon} size="large"/></label>
          <input type="text" id="username" placeholder="Nick (3-20 caracteres alfanuméricos)" minLength="3" maxLength="20" value={usernameState} onChange={(event) => setUsernameState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
          <input type="text" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password" id="password" placeholder="Contraseña (5-20 caracteres)" minLength="5" maxLength="20" value={passwordState} onChange={(event) => setPasswordState(event.target.value)} required/>
        </div>
        <div className={classes.field}>
          <label for="password2"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password" id="password2" placeholder="Repetir contraseña" minLength="5" maxLength="20" value={password2State} onChange={(event) => setPassword2State(event.target.value)} required/>
        </div>
        <input type="submit" value="Registrar" />
      </form>
    </div>
  );
}

export default injectSheet(styles)(Register);
