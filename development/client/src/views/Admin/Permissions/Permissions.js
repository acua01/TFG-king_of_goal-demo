/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal} from 'semantic-ui-react'
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

  /* Custom Functions */
  import {showSnackbar} from '../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */

  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Permissions = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');
  const [nameState, setNameState] = useState('');
  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activePermissionState, setActivePermissionState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/permisos');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);

    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/permisos');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);

    useEffect(() => {
      actions.askForAllPermissions();
    },[]);

    useEffect(() => {
      if(activePermissionState){
        setNameState(activePermissionState.name);
      }else{
        setNameState('');
      }
    },[activePermissionState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePermissionState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePermissionState('');
      setNameState('');
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and returns an array with the errors
    *--------------------------------------------------------------------------
    */

    const fnValidateForm = () => {
      let errors = [];

      // Name validation

  		if(nameState === ''){
  			errors.push('Introduce el nombre.');
  		}

      if(nameState.length > 30){
  			errors.push('El nombre debe tener un máximo de 30 caracteres.');
  		}

      if(!/^[a-zA-Z0-9\ ]+$/i.test(nameState)){
  			errors.push('El nombre debe tener caracteres alfanuméricos.');
  		}

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertPermissionFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertPermission({
          name:nameState
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to update
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdatePermissionFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdatePermission({
          id:activePermissionState.id,
          name:nameState
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }

      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Shows the modal to delete the permission
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idPermission => {
      state.app.permissions.all.find((permission) => {
        if(permission.id === idPermission){
          setActivePermissionState(permission);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Delete the permission
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idPermission => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeletePermission({
        id:activePermissionState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update de permission
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idPermission => {
      window.scrollTo(0,0);

      state.app.permissions.all.find((permission) => {
        if(permission.id === idPermission){
          setActivePermissionState(permission);
        }
      });

      setViewState('form');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the permissions
    *--------------------------------------------------------------------------
    */

    const htmlPermissions = state.app.permissions.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((permission, index) => {
      return(
        <tr>
          <td>{permission.name}</td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(permission.id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(permission.id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.permissions}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.permissionsTableView}>
          <h1>Permisos del super-admin</h1>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {state.app.permissions.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <div className="tableContainer">
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
              </div>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.permissions.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.permissions.all.length / itemsPerPageState)}
                  onClick={() => window.scrollTo(0,0)}
                  onPageChange={(event, {activePage}) => setActivePageState(activePage)}
                />
              :
                null
              }

              {/*---------- End Pagination ---------------------------------*/}

              {/*---------- Modal ------------------------------------------*/}

              <Modal className={classes.modal} size='mini' open={deleteModalState} onClose={() => setDeleteModalState(false)}>
                <Modal.Content>
                  <p>¿Seguro que quieres eliminar este permiso?</p>
                </Modal.Content>
                <Modal.Actions>
                  <button onClick={onClickConfirmDeleteButtonHandler}>Sí</button>
                  <button onClick={() => setDeleteModalState(false)}>No</button>
                </Modal.Actions>
              </Modal>

              {/*---------- End Modal --------------------------------------*/}

            </Fragment>
          :
            <Message
              className={classes.message}
              icon='info'
              header='No se ha encontrado ningún permiso.'
              color='blue'
            />
          }

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

        </div>

      /*---------- End Table View -----------------------------------------*/

      /*---------- Form View ----------------------------------------------*/

      :viewState === 'form' ?
        <div className={classes.permissionsFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activePermissionState ? <Fragment>Modificar permiso</Fragment> : <Fragment>Insertar permiso</Fragment>}</h1>
          <form onSubmit={(event) => {activePermissionState ? onSubmitUpdatePermissionFormHandler(event) : onSubmitInsertPermissionFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="30"/>
            </div>
            <button type="submit">
              {activePermissionState ?
                <Fragment>
                  <Icon name='save'/>
                  <span>Actualizar</span>
                </Fragment>
              :
                <Fragment>
                  <Icon name='add'/>
                  <span>Insertar</span>
                </Fragment>
              }
            </button>
          </form>
        </div>

        /*---------- End Form View ----------------------------------------*/

      :null
      }
    </div>
  )
}

export default injectSheet(styles)(Permissions);
