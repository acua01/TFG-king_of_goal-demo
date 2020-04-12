/*
*=============================================================================
* Title: Login.js
* Created on: 21/03/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the login and the link of the register
*==============================================================================
* Constant: Login
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState} from 'react';
  import {Route, Switch, Redirect} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Icon, Responsive} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './LoginStyles';
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

const Login = props => {

  const {classes, state, actions, history} = props;

  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

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

    const onSubmitLoginFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      let errors = [];

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

      if(errors.length === 0){
        actions.sendRequestToLoginUser(history, {
          email: emailState,
          password: passwordState
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

  /*========== END FUNCTIONS ================================================*/

  return(
    <div className={classes.login}>
      <Responsive minWidth={644} as={Fragment}>
        <div className={classes.leftSide}>
          <img src="/storage/logo/logo_light.png" alt="logo-king-of-goal" title="King of Goal"/>
        </div>
        <div className={classes.rightSide}>
          <form onSubmit={onSubmitLoginFormHandler}>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" name="email" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)} required/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" name="password" id="password" placeholder="Contraseña" value={passwordState} onChange={(event) => setPasswordState(event.target.value)} required/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <a onClick={() => props.history.push('/registro')}>Regístrate</a></p>
          </form>
        </div>
      </Responsive>
      <Responsive minWidth={0} maxWidth={643} as={Fragment}>
        <div className={classes.smallerScreen}>
          <form onSubmit={onSubmitLoginFormHandler}>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" name="email" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)} required/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" name="password" id="password" placeholder="Contraseña" value={passwordState} onChange={(event) => setPasswordState(event.target.value)} required/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <a onClick={() => history.push('/registro')}>Regístrate</a></p>
          </form>
        </div>
      </Responsive>
    </div>
  );
}

export default injectSheet(styles)(Login);
