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
  const [birthState, setBirthState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activePlayerState, setActivePlayerState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Administración',
          path: '/admin'
        },
        {
          name: 'Jugadores',
          path: '/admin/jugadores'
        },
      ]);
    },[]);

    useEffect(() => {
      if(activePlayerState){
        setNameState(activePlayerState.name);
        setFullNameState(activePlayerState.full_name);
        setImageState(activePlayerState.image);
        setHeightState(activePlayerState.height);
        setBirthState(activePlayerState.birth);
      }else{
        setNameState('');
        setFullNameState('');
        setImageState('');
        setHeightState('');
        setBirthState('');
      }
    },[activePlayerState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePlayerState('');
      setNameState('');
      setFullNameState('');
      setImageState('');
      setHeightState('');
      setBirthState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePlayerState('');
      setNameState('');
      setFullNameState('');
      setImageState('');
      setHeightState('');
      setBirthState('');
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

      // Full name validation

      if(fullNameState === ''){
  			errors.push('Introduce el nombre completo.');
  		}

      if(fullNameState.length > 255){
  			errors.push('El nombre completo debe tener un máximo de 255 caracteres.');
  		}

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
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
          birth:birthState,
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
          birth:birthState,
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
    * Description: Shows the modal to delete the player
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
    * Description: Delete the player
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = () => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeletePlayer({
        id:activePlayerState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the player
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
    * Description: Manage the files updates
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
    * Description: Contains the HTML of the players
    *--------------------------------------------------------------------------
    */

    const htmlPlayers = state.app.players.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((player, index) => {
      return(
        <tr>
          <td>

          {player.image ?
            <img src={urlServer + player.image} width="60" alt={player.name}/>
          :
            <img src={urlServer + '/storage/player.png'} width="50" alt={player.name}/>
          }

          </td>
          <td>{player.name}</td>
          <td>{player.full_name}</td>
          <td>{player.height + ' cm'}</td>
          <td>{player.birth}</td>
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

      <button className="goBack"
        onClick={() => {
          history.push('/admin');
        }}
      >
        <Icon name='reply'/>
      </button>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.playersTableView}>
          <h1>Jugadores</h1>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {state.app.players.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}
              <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Nombre completo</th>
                      <th>Altura</th>
                      <th>Fecha nacimiento</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {htmlPlayers}
                  </tbody>
                </table>
              </div>

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

              <Modal 
                className={classes.modal} 
                size='mini' open={deleteModalState} 
                onClose={() => setDeleteModalState(false)}
              >
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
          <h1>
            {activePlayerState ? <Fragment>Modificar jugador</Fragment> : <Fragment>Insertar jugador</Fragment>}
          </h1>
          <form 
            onSubmit={(event) => {activePlayerState ? onSubmitUpdatePlayerFormHandler(event) : onSubmitInsertPlayerFormHandler(event)}}
          >
            <div className={classes.field}>
              <label for="name">
                <Icon name='header' className={classes.icon} size="large"/>
              </label>
              <input 
                type="text" 
                id="name" 
                placeholder="Nombre" 
                value={nameState} 
                onChange={(event) => setNameState(event.target.value)} 
                maxLength="30"
              />
            </div>
            <div className={classes.field}>
              <label for="full_name">
                <Icon name='header' className={classes.icon} size="large"/>
              </label>
              <input 
                type="text" 
                id="full_name" 
                placeholder="Nombre completo" 
                value={fullNameState} 
                onChange={(event) => setFullNameState(event.target.value)} 
                maxLength="255"
              />
            </div>
            <div className={classes.field}>
              <label for="height">
                <Icon name='male' className={classes.icon} size="large"/>
              </label>
              <input 
                type="text" 
                id="height" 
                placeholder="Altura" 
                value={heightState} 
                onChange={(event) => setHeightState(event.target.value)}
              />
            </div>
            <div className={classes.field}>
              <label for="birth">
                <Icon name='birthday cake' className={classes.icon} size="large"/>
              </label>
              <input 
                type="date" 
                id="birth" 
                placeholder="Fecha de nacimiento" 
                value={birthState} onChange={(event) => setBirthState(event.target.value)}
              />
            </div>
            <div className={classes.fileField}>
              <label for="image">
                <Icon name='file image' className={classes.icon} size="large"/>
              </label>
              <ReactFileReader handleFiles={fileHandler} base64={true} fileTypes={[".png"]}>
                <input 
                  type="text" 
                  id="image" 
                  placeholder="Selecciona una imagen" 
                  value={imageState ? 'Imagen seleccionada' : ''}
                />
              </ReactFileReader>
              <button 
                onClick={(event) => {event.preventDefault(); setImageState('');}}
              >
                <Icon name='delete'/>
              </button>
            </div>

            {imageState && imageState.slice(0,8) === '/storage' ? 
              <img src={urlServer + imageState} width="50" alt={imageState}/>
            : 
              null
            }

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

      <button className="goBack"
        onClick={() => {
          history.push('/admin');
        }}
      >
        <Icon name='reply'/>
      </button>

    </div>
  )
}

export default injectSheet(styles)(Players);
