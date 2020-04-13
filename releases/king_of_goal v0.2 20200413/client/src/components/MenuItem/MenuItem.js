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

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React from 'react';
  import {useHistory} from 'react-router-dom';
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

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */

  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MenuItem = props => {

  const {classes, title, description, icon, extraClasses, route} = props;
  const history = useHistory();

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classNames(classes.menuItem, extraClasses)} onClick={() => {window.scrollTo(0,0);history.push(route)}}>
      <h2>{title}</h2>
      <div>
        <p>{description}</p>
        <Icon className={classes.menuItemIcon} name={icon} size="massive"/>
      </div>
    </div>
  );
}

export default injectSheet(styles)(MenuItem);
