/*
*=============================================================================
* Title: MainLayout.js
* Created on: 17/03/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the main view and routes; and control where the user goes
*==============================================================================
* Constant: MainLayout
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

/* React's packages */
import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
/* End React's packages */

/* JSS */
import styles from './MainLayoutStyles';
/* END JSS */

/* Routes */
 // Todo lo que contenga rutas
/* End Routes */

/* Custom Components */
  // Aquí los imports de los componentes que tú te crees
/* End Custom Components */

/* Custom Modules */
  // Aquí los imports de los componentes que tú te crees
/* End Custom Modules */

/* Custom Styles Variables */
  // Aquí van las variables de estilos alojadas en /share/styles
/* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MainLayout = (props) => {

  const {classes} = props;

  return(
    <h1>Hola mundo</h1>
  );
}

export default injectSheet(styles)(MainLayout);
