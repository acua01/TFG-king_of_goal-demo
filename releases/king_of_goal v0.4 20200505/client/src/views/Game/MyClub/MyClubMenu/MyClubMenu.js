/*
*=============================================================================
* Title: MyClubMenu.js
* Created on: 29/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the menu of my club section
*==============================================================================
* Constant: MyClubMenu
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useEffect} from 'react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './MyClubMenuStyles';
  /* END JSS */

  /* Routes */
  import {myClubMenuItems} from '../../../../routes/routes';
  /* End Routes */

  /* Custom Components */
  import MenuItem from '../../../../components/MenuItem/MenuItem';
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

const MyClubMenu = props => {

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

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlMyClubMenuItems
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the menu
    *--------------------------------------------------------------------------
    * Created on: 29/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlMyClubMenuItems = myClubMenuItems.map((item, index) => {
      const htmlItem = (
        <MenuItem
          title={item.title}
          description={item.description}
          icon={item.icon}
          route={item.route}
        />
      );

      return htmlItem;
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.myClubMenu}>
      {htmlMyClubMenuItems}
    </div>
  )
}

export default injectSheet(styles)(MyClubMenu);
