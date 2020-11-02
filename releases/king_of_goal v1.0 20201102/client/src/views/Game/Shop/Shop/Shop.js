/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './ShopStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */
	import Packs from '../Packs/Packs';
	import PackOpening from '../PackOpening/PackOpening';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */
  import {StoreContext} from '../../../../context/StoreContext';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Shop = props => {

  const {classes} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();
  const [contentState, setContentState] = useState('Packs');

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    const getView = () => {
      let html = null;

      switch (contentState) {
        case 'Packs':
          html = (<Packs changeView={(view) => changeView(view)} />);
          break;
        case 'PackOpening':
          html = (<PackOpening changeView={(view) => changeView(view)}/>);
          break;
        default:
          html = null;
      }

      return html;
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change the view
    *--------------------------------------------------------------------------
    */

    const changeView = (view) => {
      setContentState(view);
    }

  /*========== END FUNCTIONS ================================================*/   

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.shop}>
      {getView()}
    </div>
  );
}

export default injectSheet(styles)(Shop);
