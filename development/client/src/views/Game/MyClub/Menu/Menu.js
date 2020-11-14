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

  const {classes, history, actions} = props;

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Inicio',
          path: '/inicio'
        },
        {
          name: 'Mi club',
          path: '/inicio/mi_club'
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

    const htmlMyClubMenuItems = myClubMenuItems.map((item, index) => {
      const htmlItem = (
        <MenuItem
          key={index}
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
      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div className="menu">
        {htmlMyClubMenuItems}
      </div>

      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>
    </div>
  )
}

export default injectSheet(styles)(Menu);
