/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useEffect} from 'react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './MainMenuStyles';
  /* END JSS */

  /* Routes */
  import {mainMenuItems} from '../../../routes/mainMenu';
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

const MainMenu = props => {

  const {classes, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Inicio',
          path: '/inicio'
        }
      ]);
    },[]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the main menu items
    *--------------------------------------------------------------------------
    */

    const htmlMainMenuItems = mainMenuItems.map((item, index) => {
      const htmlItem = (
        <MenuItem
          key={index}
          title={item.title}
          description={item.description}
          icon={item.icon}
          route={item.route}
        />
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
    <div className={classes.mainMenu}>
      {htmlMainMenuItems}
    </div>
  )
}

export default injectSheet(styles)(MainMenu);
