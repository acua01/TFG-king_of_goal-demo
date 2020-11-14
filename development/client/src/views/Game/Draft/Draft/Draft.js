/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useState} from 'react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './DraftStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */
	import Squad from '../Squad/Squad';
	import Result from '../Result/Result';
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

const Draft = props => {

  const {classes} = props;
  const [contentState, setContentState] = useState('Squad');

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    const getView = () => {
      let html = null;

      switch (contentState) {
        case 'Squad':
          html = (<Squad changeView={(view) => changeView(view)} />);
          break;
        case 'Result':
          html = (<Result changeView={(view) => changeView(view)} />);
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
    <div className={classes.draft}>
      {getView()}
    </div>
  );
}

export default injectSheet(styles)(Draft);
