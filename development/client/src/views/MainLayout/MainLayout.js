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

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useContext, useEffect} from 'react';
  import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
  import {Dimmer, Loader} from 'semantic-ui-react';
  import {ToastContainer} from 'react-toastify';
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

  /* End Custom Modules */

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */
  import {StoreContext} from '../../context/StoreContext';
  import {urlServer} from '../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MainLayout = props => {

  const {classes} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

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
    /*
    useEffect(() => {
      alert('jaja me he cambiado antes');
    },[]);
    */
    useEffect(() => {
      //alert('Comprobando auth');
      actions.checkAuth();
      //alert('auth comprobado');
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: Check if the user is auth to do the first load
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 28/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.auth){
        actions.askForFirstLoad();
      }
    },[state.app.authentication.auth]);

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
          exact={route.exact}
          render={() => <route.component state={state} actions={actions} history={history}/>}
        />
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.mainLayout}>

      {/*---------- Loader -------------------------------------------------*/}

      <Dimmer active={state.app.loader.isLoading}>
        <Loader>{state.app.loader.message}</Loader>
      </Dimmer>

      {/*---------- End Loader ---------------------------------------------*/}

      {/*---------- Snackbar -----------------------------------------------*/}

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

      {/*---------- End Snackbar -------------------------------------------*/}

      {/*---------- Main ---------------------------------------------------*/}

      <main>
        <Switch>
          {htmlRoutes}
          <Redirect to='/'/>
        </Switch>
      </main>

      {/*---------- End Main -----------------------------------------------*/}

      {/*---------- Footer -------------------------------------------------*/}

      <footer>
        <img src={urlServer + '/storage/acua.png'} alt="logo-acua" title="Acua"/>
        <p>Developed by Alejandro Acuaviva Plazuelo</p>
      </footer>

      {/*---------- End Footer ---------------------------------------------*/}

    </div>
  );
}

export default injectSheet(styles)(MainLayout);
