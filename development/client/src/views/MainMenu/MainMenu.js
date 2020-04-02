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

  const [sidebarDisplayState, setSidebarDisplayState] = useState(false);

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickShowSidebarHandler
    *--------------------------------------------------------------------------
    * Description: Shows the sidebar
    *--------------------------------------------------------------------------
    * Created on: 01/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickShowSidebarHandler = () => {
      setSidebarDisplayState(true);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  const onClickLogoutHandler = event => {
    event.preventDefault();
    actions.logout(history);
  }

  return(
    <div className={classes.mainMenu}>

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          onHide={() => setSidebarDisplayState(false)}
          vertical
          visible={sidebarDisplayState}
          width='thin'
        >
          <img className={classes.sidebarLogo} src="./storage/icon/icon_new_light.png"/>
          <Menu.Item as='a'>
            <Icon name='home' />
            Inicio
          </Menu.Item>
          <Menu.Item as='a' onClick={onClickLogoutHandler}>
            <Icon name='log out' />
            Cerrar sesión
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarDisplayState}>
          <header>
            <div>
              <button onClick={onClickShowSidebarHandler}>
                <Icon name="bars" size="large"/>
              </button>
              <div className={classes.userData}>
                <img src="/storage/cadiz.png"/>
                <div className={classes.userDataNames}>
                  <p>Cádiz C.F.</p>
                  <p>acua01</p>
                </div>
                <div className={classes.userDataCoins}>
                  <img src="/storage/coins.png"/>
                  <p>500</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/storage/logo/logo_light.png" alt="logo-king-of-goal" title="King of Goal"/>
            </div>          
          </header>
          <div className={classes.breadCrumb}>
            <span>Inicio</span>
          </div>
          <div className={classes.menuItem}>
            <h2>Ver jugadores</h2>
            <div>
              <p>Aquí podrás ver la información de todos los jugadores.</p>
              <Icon className={classes.menuItemIcon} name="users" size="massive"/>
            </div>
          </div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default injectSheet(styles)(MainMenu);
