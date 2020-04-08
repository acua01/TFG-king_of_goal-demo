/*
*=============================================================================
* Title: PermissionsForm.js
* Created on: 07/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the form to insert and update permissions
*==============================================================================
* Constant: PermissionsForm
*==============================================================================
*/

/*
*========== SUMMARY CONTENT ===================================================
* Functions: None
*------------------------------------------------------------------------------
* Variables: None
*------------------------------------------------------------------------------
* Props Variables:
*   -classes: Object that contains all the classes from the jsx file
*   -history: Object that contains the properties of the routes
*   -actions: Object that contains the actions of the store
*   -state: Object that contains the state of the app in the store
*------------------------------------------------------------------------------
* Props Functions: None
*------------------------------------------------------------------------------
* Hooks: None
*========== END SUMMARY =======================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import {Route} from 'react-router-dom';
  import injectSheet from 'react-jss';
  import {Header, Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'
  /* End React's packages */

  /* JSS */
  import styles from './PermissionsFormStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const PermissionsForm = props => {

  const {classes, history, actions, state} = props;

  /*========== USE EFFECT ===================================================*/

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.permissionsForm}>
      <form>
        <h1>Insertar permiso</h1>
        <div className={classes.field}>
          <label for="name"><Icon name='user' className={classes.icon} size="large"/></label>
          <input type="text" id="name" placeholder="Nombre" required/>
        </div>
        <input type="submit" value="Guardar"/>
      </form>
    </div>
  )
}

export default injectSheet(styles)(PermissionsForm);
