/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal} from 'semantic-ui-react';
  import ReactFileReader from 'react-file-reader';
  /* End React's packages */

  /* JSS */
  import styles from './PacksStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar, moneyFormat} from '../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Packs = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [nameState, setNameState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
  const [numberPlayersState, setNumberPlayersState] = useState('');
  const [priceState, setPriceState] = useState('');
  const [imageState, setImageState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activePackState, setActivePackState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Administración',
          path: '/admin'
        },
        {
          name: 'Sobres',
          path: '/admin/sobres'
        },
      ]);
    },[]);

    useEffect(() => {
      if(activePackState){
        setNameState(activePackState.name);
        setDescriptionState(activePackState.description);
        setNumberPlayersState(activePackState.number_players);
        setPriceState(activePackState.price);
        setImageState(activePackState.image);
      }else{
        setNameState('');
        setDescriptionState('');
        setNumberPlayersState('');
        setPriceState('');
        setImageState('');
      }
    },[activePackState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePackState('');
      setNameState('');
      setDescriptionState('');
      setNumberPlayersState('');
      setPriceState('');
      setImageState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActivePackState('');
      setNameState('');
      setDescriptionState('');
      setNumberPlayersState('');
      setPriceState('');
      setImageState('');
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Sends data to server to insert
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertPackFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      actions.sendRequestToInsertPack({
        name:nameState,
        description:descriptionState,
        numberPlayers:numberPlayersState,
        price:priceState,
        image:imageState,
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Sends data to server to update
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdatePackFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      actions.sendRequestToUpdatePack({
        id:activePackState.id,
        name:nameState,
        description:descriptionState,
        numberPlayers:numberPlayersState,
        price:priceState,
        image:imageState,
      });

      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Shows the modal to delete the pack
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idPack => {
      state.app.packs.all.find((pack) => {
        if(pack.id === idPack){
          setActivePackState(pack);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Delete the pack
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = () => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeletePack({
        id:activePackState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the pack
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idPack => {
      window.scrollTo(0,0);

      state.app.packs.all.find((pack) => {
        if(pack.id === idPack){
          setActivePackState(pack);
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
    * Description: Contains the HTML of the packs
    *--------------------------------------------------------------------------
    */

    const htmlPacks = state.app.packs.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((pack, index) => {
      return(
        <tr>
          <td>

          {pack.image ?
            <img src={urlServer + pack.image} width="60" alt={pack.name} title={pack.name}/>
          :
            <img src={urlServer + '/storage/pack.png'} width="60" alt={pack.name} title={pack.name}/>
          }

          </td>
          <td>{pack.name}</td>
          <td>{pack.description}</td>
          <td>{pack.number_players}</td>
            <td>
              <div className={classes.value}>
                {moneyFormat(pack.price)}
                <img src={urlServer + '/storage/coins.png'} alt="coins"/>
              </div>
            </td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(pack.id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(pack.id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.packs}>

      <button className="goBack"
        onClick={() => {
          history.push('/admin');
        }}
      >
        <Icon name='reply'/>
      </button>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.packsTableView}>
          <h1>Sobres</h1>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {state.app.packs.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Nº jugadores</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {htmlPacks}
                  </tbody>
                </table>
              </div>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.packs.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.packs.all.length / itemsPerPageState)}
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
                size='mini' 
                open={deleteModalState} 
                onClose={() => setDeleteModalState(false)}
              >
                <Modal.Content>
                  <p>¿Seguro que quieres eliminar este sobre?</p>
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
              header='No se ha encontrado ningún sobre.'
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
        <div className={classes.packsFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>
            {activePackState ? <Fragment>Modificar sobre</Fragment> : <Fragment>Insertar sobre</Fragment>}
          </h1>
          <form 
            onSubmit={(event) => {activePackState ? onSubmitUpdatePackFormHandler(event) : onSubmitInsertPackFormHandler(event)}}
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
                maxLength="50"
              />
            </div>
            <div className={classes.field}>
              <label for="description">
                <Icon name='align justify' className={classes.icon} size="large"/>
              </label>
              <input 
                type="text" 
                id="description" 
                placeholder="Descripción" 
                value={descriptionState} 
                onChange={(event) => setDescriptionState(event.target.value)}
              />
            </div>
            <div className={classes.field}>
              <label for="number_players">
                <Icon name='users' className={classes.icon} size="large"/>
              </label>
              <input 
                type="number" 
                min="1" 
                id="number_players" 
                placeholder="Nº jugadores" 
                value={numberPlayersState} 
                onChange={(event) => setNumberPlayersState(event.target.value)}
              />
            </div>
            <div className={classes.field}>
              <label for="price">
                <Icon name='money' className={classes.icon} size="large"/>
              </label>
              <input 
                type="number" 
                min="0" 
                id="price" 
                placeholder="Precio" 
                value={priceState} 
                onChange={(event) => setPriceState(event.target.value)}
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
              {activePackState ?
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

export default injectSheet(styles)(Packs);
