/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './MenuStyles';
  /* END JSS */

  /* Routes */
  import {adminMenuItems} from '../../../routes/admin';
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

const Menu = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Administración',
          path: '/admin'
        },
      ]);
    },[]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the menu
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
    <div className={classes.menu}>

      <button className="goBack"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name='reply'/>
      </button>
      
      <div className="menu">
        {htmlAdminMenuItems}
      </div>     

      <button className="goBack"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name='reply'/>
      </button>

    </div>
  )
}

export default injectSheet(styles)(Menu);
