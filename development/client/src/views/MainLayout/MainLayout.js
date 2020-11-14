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
  import {routes} from '../../routes/routes';
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

    useEffect(() => {
      actions.checkAuth();
    },[]);

    useEffect(() => {
      if(state.app.authentication.auth && state.app.authentication.club){
        actions.askForFirstLoad({
          idClub: state.app.authentication.club.id
        });
      }
    },[state.app.authentication.auth, state.app.authentication.club]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the routes
    *--------------------------------------------------------------------------
    */

    const htmlRoutes = routes.map((route, index) => {
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
        <img 
          src={urlServer + '/storage/acua.png'}
          alt="logo-acua" 
          title="Acua"
        />
        <p>Developed by Alejandro Acuaviva Plazuelo</p>
      </footer>

      {/*---------- End Footer ---------------------------------------------*/}

    </div>
  );
}

export default injectSheet(styles)(MainLayout);
