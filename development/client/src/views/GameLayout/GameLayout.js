/*
*=============================================================================
* Title: GameLayout.js
* Created on: 03/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the layout of the game
*==============================================================================
* Constant: GameLayout
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
  import {Route, Switch, Redirect} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
  /* End React's packages */

  /* JSS */
  import styles from './GameLayoutStyles';
  /* END JSS */

  /* Routes */
  import {gameLayoutRoutes, sidebarItems} from '../../routes/routes';
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const GameLayout = props => {

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

    /*
    *--------------------------------------------------------------------------
    * Name: htmlRoutes
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the routes of this view
    *--------------------------------------------------------------------------
    * Created on: 04/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = gameLayoutRoutes.map((route, index) => {
      return(
        <Route
          key={index}
          path={route.path}
          render={() => <route.component state={state} actions={actions} history={history}/>}
        />
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Name: htmlSidebarItems
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the sidebar items
    *--------------------------------------------------------------------------
    * Created on: 04/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlSidebarItems = sidebarItems.map((item, index) => {
      return(
        <Menu.Item as='a' className={classes.sidebarItem} onClick={() => history.push(item.route)}>
          <Icon name={item.icon} />
          {item.title}
        </Menu.Item>
      )
    });

  /*========== END VARIABLES ================================================*/

  const onClickLogoutHandler = event => {
    event.preventDefault();
    actions.logout(history);
  }

  return(
    <div className={classes.gameLayout}>

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
          <div className={classes.sidebarUserData}>
            <img src="/storage/cadiz.png"/>
            <p>Cádiz C.F.</p>
            <p>acua01</p>
          </div>
          <Menu.Item as='a' className={classes.sidebarItem} onClick={() => history.push('/')}>
            <Icon name='home' />
            Inicio
          </Menu.Item>
          {htmlSidebarItems}
          <Menu.Item as='a' className={classes.sidebarItem} onClick={onClickLogoutHandler}>
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
                  <p>1.000.000</p>
                </div>
              </div>
            </div>
            <div>
              <img src="/storage/logo/logo_light.png" alt="logo-king-of-goal" title="King of Goal"/>
            </div>
          </header>

          <div className={classes.breadCrumb}>
            <span>Inicio</span>
            <Icon name="angle right" size="large"/>
          </div>

          <Switch>
            {htmlRoutes}
            <Redirect to='inicio'/>
          </Switch>

        </Sidebar.Pusher>

      </Sidebar.Pushable>
    </div>
  )
}

export default injectSheet(styles)(GameLayout);
