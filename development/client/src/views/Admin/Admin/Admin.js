/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React from 'react';
  import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './AdminStyles';
  /* END JSS */

  /* Routes */
  import {routes} from '../../../routes/admin';
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */

  /* End Custom Variables */

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
    * Description: Contains the HTML of the routes of this view
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = routes.map((route, index) => {
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
