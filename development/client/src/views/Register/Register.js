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
  import React, {Fragment} from 'react';
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

  const {classes} = props;

  return(
    <div className={classes.register}>
      <form>
        <h1>Registro</h1>
        <div className={classes.field}>
          <label for="username"><Icon name='user' className={classes.icon} size="large"/></label>
          <input type="text" name="username" id="username" placeholder="Nick" required/>
        </div>
        <div className={classes.field}>
          <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
          <input type="text" name="email" id="email" placeholder="Email" required/>
        </div>
        <div className={classes.field}>
          <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password" name="password" id="password" placeholder="Contraseña" required/>
        </div>
        <div className={classes.field}>
          <label for="password2"><Icon name='lock' className={classes.icon} size="large"/></label>
          <input type="password2" name="password2" id="password2" placeholder="Repetir contraseña" required/>
        </div>
        <input type="submit" value="Registrar"/>
      </form>
    </div>
  );
}

export default injectSheet(styles)(Register);
