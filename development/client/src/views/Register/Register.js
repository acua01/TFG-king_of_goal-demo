/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './RegisterStyles';
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

  /* End Custom Variables */

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

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio');
      }else{
        history.push('/registro');
      }
    },[state.app.authentication.auth]);
    
  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server
    *--------------------------------------------------------------------------
    */

    const onSubmitRegisterFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      let errors = [];

      // Username validation

  		if(usernameState === ''){
  			errors.push('Introduce un nick.');
  		}

      if(usernameState.length < 3 || usernameState.length > 20){
  			errors.push('Introduce un nick de mínimo 3 caracteres y máximo de 20.');
  		}

      if(!/^[a-zA-Z0-9]+$/i.test(usernameState)){
  			errors.push('Introduce un nick con caracteres alfanuméricos.');
  		}

      // Email validation

  		if(emailState === ''){
  			errors.push('Introduce un email.');
  		}

      if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailState)){
  			errors.push('Introduce un email válido.');
  		}

      // Password validation

  		if(passwordState === ''){
  			errors.push('Introduce una contraseña.');
  		}

      if(passwordState.length < 5 || passwordState.length > 20){
  			errors.push('Introduce un contraseña de mínimo 3 caracteres y máximo de 20.');
  		}

  		if(passwordState !== password2State){
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
