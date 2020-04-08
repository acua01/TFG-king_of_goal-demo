/*
*=============================================================================
* Title: Permissions.js
* Created on: 06/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the permissions control
*==============================================================================
* Constant: Permissions
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
  import styles from './PermissionsStyles';
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

const Permissions = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');
  const [nameState, setNameState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Load permissions when permissions state change
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 07/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.askForAllPermissions();
    },[]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickAddButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 07/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickGoToListButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 07/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitInsertPermissionFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server
    *--------------------------------------------------------------------------
    * Created on: 07/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertPermissionFormHandler = event => {
      event.preventDefault();
      actions.sendRequestToInsertPermission({
        name:nameState
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the permission
    *--------------------------------------------------------------------------
    * Created on: 08/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idPermission => {
      alert(idPermission);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlPermissions
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the permissions
    *--------------------------------------------------------------------------
    * Created on: 07/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlPermissions = state.app.permissions.all.map((permission, index) => {
      return(
        <tr>
          <td>{permission.name}</td>
          <td className={classes.actions}>
            <div>
              <Icon name='edit'/>
              <span>Editar</span>
            </div>
            <div onClick={() => onClickDeleteButtonHandler(permission.id)}>
              <Icon name='delete'/>
              <span>Eliminar</span>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.permissions}>
      {viewState == 'table' ?
        <div className={classes.permissionsTableView}>
          <table>
            <thead>
              <tr>
                <th>Permiso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {htmlPermissions}
            </tbody>
          </table>
          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>
        </div>
      :viewState == 'form' ?
        <div className={classes.permissionsFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <form onSubmit={onSubmitInsertPermissionFormHandler}>
            <h1>Insertar permiso</h1>
            <div className={classes.field}>
              <label for="name"><Icon name='user' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} required/>
            </div>
            <input type="submit" value="Guardar"/>
          </form>
        </div>
      :null
      }

    </div>
  )
}

export default injectSheet(styles)(Permissions);
