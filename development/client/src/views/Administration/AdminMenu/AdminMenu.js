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

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useEffect} from 'react';
  import injectSheet from 'react-jss';
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

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */

  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const AdminMenu = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 12/04/2020 by Acua
    *--------------------------------------------------------------------------
    */
    /*
    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);
    */
    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth, state.app.authentication.admin
    *--------------------------------------------------------------------------
    * Created on: 12/04/2020 by Acua
    *--------------------------------------------------------------------------
    */
    /*
    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);
    */

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
      const htmlItem = (
        <MenuItem
          title={item.title}
          description={item.description}
          icon={item.icon}
          route={item.route}
        />
      );

      if(item.admin){
        if(state.app.authentication.admin){
          return htmlItem;
        }
      }else{
        return htmlItem;
      }
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.adminMenu}>
      {htmlAdminMenuItems}
    </div>
  )
}

export default injectSheet(styles)(AdminMenu);
