/*
*=============================================================================
* Title: AdminMenu.js
* Created on: 06/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the main menu of the administration
*==============================================================================
* Constant: AdminMenu
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
  import {Route} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
  /* End React's packages */

  /* JSS */
  import styles from './AdminMenuStyles';
  /* END JSS */

  /* Routes */
  import {adminMenuItems} from '../../../routes/routes';
  /* End Routes */

  /* Custom Components */
  import MenuItem from '../../../components/MenuItem/MenuItem';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const AdminMenu = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlAdminMenuItems
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the menu
    *--------------------------------------------------------------------------
    * Created on: 06/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlAdminMenuItems = adminMenuItems.map((item, index) => {
      return(
        <MenuItem
          title={item.title}
          description={item.description}
          icon={item.icon}
          route={item.route}
        />
      )
    });
  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.adminMenu}>
      {htmlAdminMenuItems}
    </div>
  )
}

export default injectSheet(styles)(AdminMenu);
