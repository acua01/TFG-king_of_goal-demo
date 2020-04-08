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
*   -history: Object that contains the properties of the routes
*------------------------------------------------------------------------------
* Props Functions: None
*========== END SUMMARY =======================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useEffect} from 'react';
  import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
  import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react';
  import {ToastContainer, toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './MainLayoutStyles';
  /* END JSS */

  /* Routes */
  import {mainLayoutRoutes} from '../../routes/routes';
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */
  import {StoreContext} from '../../context/StoreContext';
  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MainLayout = props => {

  const {classes, history} = props;
  const {state, actions} = useContext(StoreContext);


  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Check if the user is auth by the token
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 30/03/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.checkAuth();
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 30/03/2020 by Acua
    *--------------------------------------------------------------------------
    */
    /*
    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/');
      }else{
        history.push('/login');
      }
    },[state.app.authentication.auth]);
    */
  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlRoutes
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the routes
    *--------------------------------------------------------------------------
    * Created on: 21/03/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = mainLayoutRoutes.map((route, index) => {
      return(
        <Route
          key={index}
          path={route.path}
          render={() => <route.component state={state} actions={actions} history={history}/>}
        />
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.mainLayout}>

      <Dimmer active={state.app.loader.isLoading}>
        <Loader>{state.app.loader.message}</Loader>
      </Dimmer>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />

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

export default injectSheet(styles)(withRouter(MainLayout));
