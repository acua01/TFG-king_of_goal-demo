/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useEffect} from 'react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './MenuStyles';
  /* END JSS */

  /* Routes */
  import {myClubMenuItems} from '../../../../routes/myClub';
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

const Menu = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

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
    * Description: Contains the HTML of the menu
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
    <div className={classes.Menu}>
      {htmlMyClubMenuItems}
    </div>
  )
}

export default injectSheet(styles)(Menu);
