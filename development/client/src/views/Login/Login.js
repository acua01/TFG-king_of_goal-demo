/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Responsive} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './LoginStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar} from '../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Login = props => {

  const {classes, state, actions, history} = props;

  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);
    */

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server
    *--------------------------------------------------------------------------
    */

    const onSubmitLoginFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      let errors = [];

      // Email validation

  		if(emailState === ''){
  			errors.push('Introduce un email.');
  		}

      // Password validation

  		if(passwordState === ''){
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
          return '';
        });
      }
    }

  /*========== END FUNCTIONS ================================================*/

  return(
    <div className={classes.login}>

      {/*---------- Bigger Screen ------------------------------------------*/}

      <Responsive minWidth={644} as={Fragment}>
        <div className={classes.leftSide}>
          <img src={urlServer + '/storage/logo/logo_light.png'} alt="logo-king-of-goal" title="King of Goal"/>
        </div>
        <div className={classes.rightSide}>
          <form onSubmit={onSubmitLoginFormHandler}>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)}/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" id="password" placeholder="Contraseña" value={passwordState} onChange={(event) => setPasswordState(event.target.value)}/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <span onClick={() => props.history.push('/registro')}>Regístrate</span></p>
          </form>
        </div>
      </Responsive>

      {/*---------- End Bigger Screen --------------------------------------*/}

      {/*---------- Smaller Screen -----------------------------------------*/}

      <Responsive minWidth={0} maxWidth={643} as={Fragment}>
        <div className={classes.smallerScreen}>
          <form onSubmit={onSubmitLoginFormHandler}>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" id="email" placeholder="Email" value={emailState} onChange={(event) => setEmailState(event.target.value)}/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" id="password" placeholder="Contraseña" value={passwordState} onChange={(event) => setPasswordState(event.target.value)}/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <span onClick={() => history.push('/registro')}>Regístrate</span></p>
          </form>
        </div>
      </Responsive>

      {/*---------- End Smaller Screen -------------------------------------*/}

    </div>
  );
}

export default injectSheet(styles)(Login);
