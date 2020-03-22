/*
*=============================================================================
* Title: MainLayout.js
* Created on: 17/03/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the main view and routes; and control where the user goes
*==============================================================================
* Constant: MainLayout
*==============================================================================
*/

/*
*========== SUMMARY CONTENT ===================================================
* Functions: None
*------------------------------------------------------------------------------
* Variables:
*   -htmlRoutes: Contains the HTML of the routes
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
  /* End React's packages */

  /* JSS */
  import styles from './MainLayoutStyles';
  /* END JSS */

  /* Routes */
  import {routes} from '../../routes/routes';
  /* End Routes */

  /* Custom Components */
  // Aquí los imports de los componentes que tú te crees
  /* End Custom Components */

/*========== END IMPORTS ====================================================*/

const MainLayout = props => {

  const {classes} = props;

  /*========== VARIABLES ======================================================*/

    /*
    *-------------------------------------------------------------------------
    * Name: htmlRoutes
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the routes
    *--------------------------------------------------------------------------
    * Created on: 21/03/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = routes.map((route, index) => {
        return <Route key={index} path={route.path} component={route.component}/>
    });

  /*========== END VARIABLES ==================================================*/

  return(
    <div className={classes.mainLayout}>
      <main>
        <Switch>
          {htmlRoutes}
          <Redirect to='/login'/>
        </Switch>
      </main>
      <footer>
        <img src="/storage/acua.png" alt="logo-acua" title="Acua"/>
        <p>Developed by Alejandro Acuaviva Plazuelo</p>
      </footer>
    </div>
  );
}

export default injectSheet(styles)(MainLayout);
