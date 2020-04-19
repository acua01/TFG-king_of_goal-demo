/*
*=============================================================================
* Title: CardsTypes.js
* Created on: 17/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the cards types control
*==============================================================================
* Constant: CardsTypes
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal, Checkbox} from 'semantic-ui-react';
  import ReactFileReader from 'react-file-reader';
  /* End React's packages */

  /* JSS */
  import styles from './CardsTypesStyles';
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

const CardsTypes = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [nameState, setNameState] = useState('');
  const [imageState, setImageState] = useState('');
  const [rareState, setRareState] = useState(false);
  const [imageMiniState, setImageMiniState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activeCardTypeState, setActiveCardTypeState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/tipos_cartas');
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
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/tipos_cartas');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);

    /*
    *--------------------------------------------------------------------------
    * Description: Load cards types when cards types state change
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.askForAllCardsTypes();
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: Set form fields states when active card type state changes
    *--------------------------------------------------------------------------
    * Parameters: activeCardTypeState
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(activeCardTypeState){
        setNameState(activeCardTypeState.name);
        setImageState(activeCardTypeState.image);
        setImageMiniState(activeCardTypeState.image_mini);
        setRareState(activeCardTypeState.rare);
      }else{
        setNameState('');
        setImageState('');
        setImageMiniState('');
        setRareState(false);
      }
    },[activeCardTypeState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickAddButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardTypeState('');
      setNameState('');
      setImageState('');
      setImageMiniState('');
      setRareState(false);
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickGoToListButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardTypeState('');
      setNameState('');
      setImageState('');
      setImageMiniState('');
      setRareState(false);
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fnValidateForm
    *--------------------------------------------------------------------------
    * Description: Validates the form and returns an array with the errors
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const fnValidateForm = () => {
      let errors = [];

      // Name validation

  		if(nameState === ''){
  			errors.push('Introduce el nombre.');
  		}

      if(nameState.length > 50){
  			errors.push('El nombre debe tener un máximo de 50 caracteres.');
  		}

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitInsertCardTypeFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertCardTypeFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertCardType({
          name:nameState,
          image:imageState,
          imageMini:imageMiniState,
          rare:rareState,
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitUpdateCardTypeFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to update
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdateCardTypeFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdateCardType({
          id:activeCardTypeState.id,
          name:nameState,
          image:imageState,
          imageMini:imageMiniState,
          rare:rareState,
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
    * Description: Shows the modal to delete the card type
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idCardType => {
      state.app.cardsTypes.all.find((cardType) => {
        if(cardType.id === idCardType){
          setActiveCardTypeState(cardType);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the card type
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idCardType => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeleteCardType({
        id:activeCardTypeState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickUpdateButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the card type
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idCardType => {
      window.scrollTo(0,0);

      state.app.cardsTypes.all.find((cardType) => {
        if(cardType.id === idCardType){
          setActiveCardTypeState(cardType);
        }
      });

      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fileHandlerImage
    *--------------------------------------------------------------------------
    * Description: Manage the files updates of image field
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const fileHandlerImage = file => {
      console.log(file);
      setImageState(file.base64);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fileHandlerImageMini
    *--------------------------------------------------------------------------
    * Description: Manage the files updates of image mini field
    *--------------------------------------------------------------------------
    * Created on: 18/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const fileHandlerImageMini = file => {
      console.log(file);
      setImageMiniState(file.base64);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: htmlCardsTypes
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the leagues
    *--------------------------------------------------------------------------
    * Created on: 17/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlCardsTypes = state.app.cardsTypes.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((cardType, index) => {
      return(
        <tr>
          <td>

          {cardType.image ?
            <img src={urlServer + cardType.image} width="60" alt={cardType.name}/>
          :
            <img src={urlServer + '/storage/card_type.png'} width="60" alt={cardType.name}/>
          }

          </td>
          <td>

          {cardType.image_mini ?
            <img src={urlServer + cardType.image_mini} width="60" alt={cardType.name}/>
          :
            <img src={urlServer + '/storage/card_type_mini.png'} width="60" alt={cardType.name}/>
          }

          </td>
          <td>{cardType.name}</td>
          <td>{cardType.rare ? 'Sí' : 'No'}</td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(cardType.id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(cardType.id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.cardsTypes}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.cardsTypesTableView}>
          <h1>Tipos de cartas</h1>

          {state.app.cardsTypes.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Imagen mini</th>
                    <th>Nombre</th>
                    <th>Único</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {htmlCardsTypes}
                </tbody>
              </table>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.cardsTypes.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.cardsTypes.all.length / itemsPerPageState)}
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
                  <p>¿Seguro que quieres eliminar este tipo de carta?</p>
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
              header='No se ha encontrado ningún tipo de carta.'
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
        <div className={classes.cardsTypesFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activeCardTypeState ? <Fragment>Modificar tipo de carta</Fragment> : <Fragment>Insertar tipo de carta</Fragment>}</h1>
          <form onSubmit={(event) => {activeCardTypeState ? onSubmitUpdateCardTypeFormHandler(event) : onSubmitInsertCardTypeFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='flag' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="50"/>
            </div>
            <div className={classes.fileField}>
              <label for="image"><Icon name='file image' className={classes.icon} size="large"/></label>
              <ReactFileReader handleFiles={fileHandlerImage} base64={true} fileTypes={[".png"]}>
                <input type="text" id="image" placeholder="Selecciona la imagen" value={imageState ? 'Imagen seleccionada' : ''}/>
              </ReactFileReader>
              <button onClick={(event) => {event.preventDefault(); setImageState('');}}><Icon name='delete'/></button>
            </div>

            {imageState && imageState.slice(0,8) === '/storage' ? <img src={urlServer + imageState} width="50" alt={imageState}/> : null}

            <div className={classes.fileField}>
              <label for="image_mini"><Icon name='file image' className={classes.icon} size="large"/></label>
              <ReactFileReader handleFiles={fileHandlerImageMini} base64={true} fileTypes={[".png"]}>
                <input type="text" id="image_mini" placeholder="Selecciona la imagen mini" value={imageMiniState ? 'Imagen seleccionada' : ''}/>
              </ReactFileReader>
              <button onClick={(event) => {event.preventDefault(); setImageMiniState('');}}><Icon name='delete'/></button>
            </div>

            {imageMiniState && imageMiniState.slice(0,8) === '/storage' ? <img src={urlServer + imageMiniState} width="50" alt={imageMiniState}/> : null}

            <div className={classes.checkboxField}>
              <Checkbox label='Único' onClick={(event, data) => setRareState(data.checked)}/>
            </div>

            <button type="submit">
              {activeCardTypeState ?
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

export default injectSheet(styles)(CardsTypes);
