/*
*=============================================================================
* Title: Players.js
* Created on: 13/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the players control
*==============================================================================
* Constant: Players
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal} from 'semantic-ui-react';
  import ReactFileReader from 'react-file-reader';
  /* End React's packages */

  /* JSS */
  import styles from './PlayersStyles';
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
  import {urlServer} from '../../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Players = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [nameState, setNameState] = useState('');
  const [fullNameState, setFullNameState] = useState('');
  const [imageState, setImageState] = useState('');
  const [heightState, setHeightState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activePlayerState, setActivePlayerState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/jugadores');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth, state.app.authentication.admin
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/jugadores');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);

    /*
    *--------------------------------------------------------------------------
    * Description: Load permissions when permissions state change
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.askForAllPlayers();
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: Set form fields states when active player state changes
    *--------------------------------------------------------------------------
    * Parameters: activePlayerState
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(activePlayerState){
        setNameState(activePlayerState.name);
        setFullNameState(activePlayerState.full_name);
        setImageState(activePlayerState.image);
        setHeightState(activePlayerState.height);
      }else{
        setNameState('');
        setFullNameState('');
        setImageState('');
        setHeightState('');
      }
    },[activePlayerState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickAddButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePlayerState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickGoToListButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePlayerState('');
      setNameState('');
      setFullNameState('');
      setImageState('');
      setHeightState('');
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fnValidateForm
    *--------------------------------------------------------------------------
    * Description: Validates the form and returns an array with the errors
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
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

      // Full name validation

      if(fullNameState === ''){
  			errors.push('Introduce el nombre completo.');
  		}

      if(fullNameState.length > 255){
  			errors.push('El nombre completo debe tener un máximo de 255 caracteres.');
  		}

      if(!/^[a-zA-Z0-9\ ]+$/i.test(fullNameState)){
  			errors.push('El nombre completo debe tener caracteres alfanuméricos.');
  		}

      // Image

      // Height

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitInsertPlayerFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertPlayerFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertPlayer({
          name:nameState,
          full_name:fullNameState,
          image:imageState,
          height:heightState,
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitUpdatePlayerFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to update
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdatePlayerFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdatePlayer({
          id:activePlayerState.id,
          name:nameState,
          full_name:fullNameState,
          image:imageState,
          height:heightState,
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
    * Name: onClickDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Shows the modal to delete the permission
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idPlayer => {
      state.app.players.all.find((player) => {
        if(player.id === idPlayer){
          setActivePlayerState(player);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the player
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idPlayer => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeletePlayer({
        id:activePlayerState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickUpdateButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the player
    *--------------------------------------------------------------------------
    * Created on: 13/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idPlayer => {
      window.scrollTo(0,0);

      state.app.players.all.find((player) => {
        if(player.id === idPlayer){
          setActivePlayerState(player);
        }
      });

      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fileHandler
    *--------------------------------------------------------------------------
    * Description: Manage the files updates
    *--------------------------------------------------------------------------
    * Created on: 14/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const fileHandler = file => {
      console.log(file);
      setImageState(file.base64);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlPlayers
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the players
    *--------------------------------------------------------------------------
    * Created on: 14/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlPlayers = state.app.players.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((player, index) => {
      return(
        <tr>
          <td>

          {player.image ?
            <img src={urlServer + player.image} width="60" alt={player.name}/>
          :
            <img src="/storage/player.png" width="50" alt={player.name}/>
          }

          </td>
          <td>{player.name}</td>
          <td>{player.full_name}</td>
          <td>{player.height + ' m'}</td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(player.id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(player.id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.players}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.playersTableView}>
          <h1>Jugadores</h1>

          {state.app.players.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Nombre completo</th>
                    <th>Altura</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {htmlPlayers}
                </tbody>
              </table>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.players.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.players.all.length / itemsPerPageState)}
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
                  <p>¿Seguro que quieres eliminar este jugador?</p>
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
              header='No se ha encontrado ningún jugador.'
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
        <div className={classes.playersFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activePlayerState ? <Fragment>Modificar jugador</Fragment> : <Fragment>Insertar jugador</Fragment>}</h1>
          <form onSubmit={(event) => {activePlayerState ? onSubmitUpdatePlayerFormHandler(event) : onSubmitInsertPlayerFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='user' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="30"/>
            </div>
            <div className={classes.field}>
              <label for="full_name"><Icon name='user' className={classes.icon} size="large"/></label>
              <input type="text" id="full_name" placeholder="Nombre completo" value={fullNameState} onChange={(event) => setFullNameState(event.target.value)} maxLength="255"/>
            </div>
            <div className={classes.field}>
              <label for="height"><Icon name='male' className={classes.icon} size="large"/></label>
              <input type="text" id="height" placeholder="Altura" value={heightState} onChange={(event) => setHeightState(event.target.value)}/>
            </div>
            <div className={classes.field}>
              <ReactFileReader handleFiles={fileHandler} base64={true}>
                <label for="image"><Icon name='file image' className={classes.icon} size="large"/></label>
                <input type="text" id="image" placeholder="Selecciona una imagen" value={imageState ? 'Imagen seleccionada' : null}/>
              </ReactFileReader>
            </div>

            <button type="submit">
              {activePlayerState ?
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

export default injectSheet(styles)(Players);
