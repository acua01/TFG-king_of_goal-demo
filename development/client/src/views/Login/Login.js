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
import React, {Fragment} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
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
  // Aquí los imports de los componentes que tú te crees
/* End Custom Components */

/*========== END IMPORTS ====================================================*/

const Login = props => {

  const {classes} = props;

  return(
    <div className={classes.login}>
      <Responsive minWidth={644} as={Fragment}>
        <div className={classes.leftSide}>
          <img src="/storage/logo/logo_light.png" alt="logo-king-of-goal" title="King of Goal"/>
        </div>
        <div className={classes.rightSide}>
          <form>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" name="password" id="password" placeholder="Contraseña" required/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <a onClick={() => props.history.push('/registro')}>Regístrate</a></p>
          </form>
        </div>
      </Responsive>
      <Responsive minWidth={0} maxWidth={643} as={Fragment}>
        <div className={classes.smallerScreen}>
          <form>
            <h1>Iniciar sesión</h1>
            <div className={classes.field}>
              <label for="email"><Icon name='at' className={classes.icon} size="large"/></label>
              <input type="text" name="email" id="email" placeholder="Email" required/>
            </div>
            <div className={classes.field}>
              <label for="password"><Icon name='lock' className={classes.icon} size="large"/></label>
              <input type="password" name="password" id="password" placeholder="Contraseña" required/>
            </div>
            <input type="submit" value="Entrar"/>
            <p>¿No tienes cuenta aún? <a onClick={() => props.history.push('/registro')}>Regístrate</a></p>
          </form>
        </div>
      </Responsive>
    </div>
  );
}

export default injectSheet(styles)(withRouter(Login));
