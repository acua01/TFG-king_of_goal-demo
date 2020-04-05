/*
*=============================================================================
* Title: MainMenu.js
* Created on: 30/03/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the main menu of the app
*==============================================================================
* Constant: MainMenu
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
  import styles from './MainMenuStyles';
  /* END JSS */

  /* Routes */
  import {mainMenuItems} from '../../routes/routes';
  /* End Routes */

  /* Custom Components */
    // Aquí los imports de los componentes que tú te crees
  /* End Custom Components */

  /* Custom Modules */
    // Aquí los imports de los componentes que tú te crees
  /* End Custom Modules */

  /* Custom Styles Variables */
    // Aquí van las variables de estilos alojadas en /share/styles
  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MainMenu = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlMainMenuItems
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the main menu items
    *--------------------------------------------------------------------------
    * Created on: 04/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlMainMenuItems = mainMenuItems.map((item, index) => {
      return(
        <div className={classes.menuItem}>
          <h2>{item.title}</h2>
          <div>
            <p>{item.description}</p>
            <Icon className={classes.menuItemIcon} name={item.icon} size="massive"/>
          </div>
        </div>
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.mainMenu}>
      {htmlMainMenuItems}
    </div>
  )
}

export default injectSheet(styles)(MainMenu);
