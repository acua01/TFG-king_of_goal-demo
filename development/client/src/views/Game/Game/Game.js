/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useState, useEffect} from 'react';
  import {Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Icon, Menu, Segment, Sidebar} from 'semantic-ui-react'
  /* End React's packages */

  /* JSS */
  import styles from './GameStyles';
  /* END JSS */

  /* Routes */
  import {routes} from '../../../routes/game';
  import {sidebarItems} from '../../../routes/sidebar';
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {moneyFormat} from '../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const GameLayout = props => {

  const {classes, history, actions, state} = props;

  const {url, path} = useRouteMatch();

  const [coinsState, setCoinsState] = useState('');

  const [sidebarDisplayState, setSidebarDisplayState] = useState(false);

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      setCoinsState(moneyFormat(state.app.authentication.club.coins));
    },[state.app.authentication.club.coins]);


  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Logouts
    *--------------------------------------------------------------------------
    */

    const onClickLogoutHandler = event => {
      event.preventDefault();
      actions.logout(history);
    }

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
          render={() => <route.component state={state} actions={actions} history={history}/>}
        />
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the sidebar items
    *--------------------------------------------------------------------------
    */

    const htmlSidebarItems = sidebarItems.map((item, index) => {
      const htmlItem = (
        <Menu.Item as='a'
          className={classes.sidebarItem}
          onClick={() => {
            window.scrollTo(0,0);
            history.push(item.route);
            setSidebarDisplayState(false);
          }}>
          <Icon name={item.icon} />
          {item.title}
        </Menu.Item>
      );

      if(item.enable){
        if(item.admin){
          if(state.app.authentication.admin){
            return htmlItem;
          }
        }else{
          return htmlItem;
        }
      }      
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.gameLayout}>

      <Sidebar.Pushable as={Segment}>

        {/*---------- Sidebar ----------------------------------------------*/}

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
            <img src={urlServer + state.app.authentication.club.image} alt={state.app.authentication.club.name}/>
            <p>{state.app.authentication.club.name}</p>
            <p>{state.app.authentication.username}</p>
          </div>
          <Menu.Item as='a' className={classes.sidebarItem} onClick={() => {history.push('/');setSidebarDisplayState(false);}}>
            <Icon name='home' />
            Inicio
          </Menu.Item>
          {htmlSidebarItems}
          <Menu.Item as='a' className={classes.sidebarItem} onClick={onClickLogoutHandler}>
            <Icon name='log out' />
            Cerrar sesión
          </Menu.Item>
        </Sidebar>

        {/*---------- End Sidebar ------------------------------------------*/}

        {/*---------- Sidebar Content --------------------------------------*/}

        <Sidebar.Pusher dimmed={sidebarDisplayState}>

          {/*---------- Header ---------------------------------------------*/}

          <header>
            <div>
              <button onClick={() => setSidebarDisplayState(true)}>
                <Icon name="bars" size="large"/>
              </button>
              <div className={classes.userData}>
                <img src={urlServer + state.app.authentication.club.image} alt={state.app.authentication.club.name}/>
                <div className={classes.userDataNames}>
                  <p>{state.app.authentication.club.name}</p>
                  <p>{state.app.authentication.username}</p>
                </div>
                <div className={classes.userDataCoins}>
                  <img src={urlServer + '/storage/coins.png'} alt="coins"/>
                  <p>{moneyFormat(state.app.authentication.club.coins)}</p>
                </div>
              </div>
            </div>
            <div>
              <img src={urlServer + '/storage/logo/logo_light.png'} alt="logo-king-of-goal" title="King of Goal"/>
            </div>
          </header>

          {/*---------- End Header -----------------------------------------*/}

          {/*---------- BreadCrumb -----------------------------------------*/}

          <div className={classes.breadCrumb}>
            <span>Inicio</span>
            <Icon name="angle right" size="large"/>
          </div>

          {/*---------- End BreadCrumb -------------------------------------*/}

          <Switch>
            {htmlRoutes}
            <Redirect to={path}/>
          </Switch>

        </Sidebar.Pusher>

        {/*---------- End Sidebar Content ----------------------------------*/}

      </Sidebar.Pushable>
    </div>
  )
}

export default injectSheet(styles)(GameLayout);
