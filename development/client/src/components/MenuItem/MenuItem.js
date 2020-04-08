/*
*=============================================================================
* Title: MenuItem.js
* Created on: 05/04/2020 by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render a item of menus
*==============================================================================
* Constant: MenuItem
*==============================================================================
*/

/*
*========== SUMMARY CONTENT ===================================================
* Functions: None
*------------------------------------------------------------------------------
* Variables:
*------------------------------------------------------------------------------
* Props Variables:
*   -classes: Object that contains all the classes from the jsx file
*------------------------------------------------------------------------------
* Props Functions: None
*========== END SUMMARY =======================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment} from 'react';
  import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
  import {Icon} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  import classNames from 'classnames';
  /* End React's packages */

  /* JSS */
  import styles from './MenuItemStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MenuItem = props => {

  const {history, classes, title, description, icon, extraClasses, route} = props;

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classNames(classes.menuItem, extraClasses)} onClick={() => history.push(route)}>
      <h2>{title}</h2>
      <div>
        <p>{description}</p>
        <Icon className={classes.menuItemIcon} name={icon} size="massive"/>
      </div>
    </div>
  );
}

export default injectSheet(styles)(withRouter(MenuItem));
