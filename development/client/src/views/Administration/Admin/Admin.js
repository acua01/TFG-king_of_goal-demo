/*
*=============================================================================
* Title: Admin.js
* Created on: 11/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the administration section
*==============================================================================
* Constant: Admin
*==============================================================================
*/

/*
*========== SUMMARY CONTENT ===================================================
* Functions: None
*------------------------------------------------------------------------------
* Variables: None
*------------------------------------------------------------------------------
* Props Variables:
*   -classes: Object that contains all the classes from the jsx file
*   -history: Object that contains the properties of the routes
*   -actions: Object that contains the actions of the store
*   -state: Object that contains the state of the app in the store
*------------------------------------------------------------------------------
* Props Functions: None
*------------------------------------------------------------------------------
* Hooks: None
*========== END SUMMARY =======================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState} from 'react';
  import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
  /* End React's packages */

  /* JSS */
  import styles from './AdminStyles';
  /* END JSS */

  /* Routes */
  import {adminRoutes} from '../../../routes/routes';
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Admin = props => {

  const {classes, history, actions, state} = props;

  const {url, path} = useRouteMatch();

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlRoutes
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the routes of this view
    *--------------------------------------------------------------------------
    * Created on: 11/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = adminRoutes.map((route, index) => {
      return(
        <Route
          key={index}
          path={url + route.path}
          exact={route.exact}
          render={() => <route.component state={state} actions={actions} history={history} url={url} path={path}/>}
        />
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.admin}>
      <Switch>
        {htmlRoutes}
        <Redirect to={path}/>
      </Switch>
    </div>
  )
}

export default injectSheet(styles)(Admin);
