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
  const [specialState, setSpecialState] = useState(false);
  const [imageMiniState, setImageMiniState] = useState('');
  const [textColorState, setTextColorState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activeCardTypeState, setActiveCardTypeState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Administracion',
          path: '/admin'
        },
        {
          name: 'Tipos de cartas',
          path: '/admin/tipos_cartas'
        },
      ]);
    },[]);

    useEffect(() => {
      actions.askForAllCardsTypes();
    },[]);

    useEffect(() => {
      if(activeCardTypeState){
        setNameState(activeCardTypeState.name);
        setImageState(activeCardTypeState.image);
        setImageMiniState(activeCardTypeState.image_mini);
        setTextColorState(activeCardTypeState.text_color);
        setRareState(activeCardTypeState.rare);
        setSpecialState(activeCardTypeState.special);
      }else{
        setNameState('');
        setImageState('');
        setImageMiniState('');
        setTextColorState('');
        setRareState(false);
        setSpecialState(false);
      }
    },[activeCardTypeState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardTypeState('');
      setNameState('');
      setImageState('');
      setImageMiniState('');
      setTextColorState('');
      setRareState(false);
      setSpecialState(false);
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardTypeState('');
      setNameState('');
      setImageState('');
      setImageMiniState('');
      setTextColorState('');
      setRareState(false);
      setSpecialState(false);
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

      if(nameState.length > 50){
  			errors.push('El nombre debe tener un máximo de 50 caracteres.');
  		}

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
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
          textColor:textColorState,
          rare:rareState,
          special:specialState,
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
          textColor:textColorState,
          rare:rareState,
          special:specialState,
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
    * Description: Shows the modal to delete the card type
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
    * Description: Delete the card type
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
    * Description: Change the view to the form to update the card type
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
    * Description: Manage the files updates of image field
    *--------------------------------------------------------------------------
    */

    const fileHandlerImage = file => {
      console.log(file);
      setImageState(file.base64);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Manage the files updates of image mini field
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
    * Description: Contains the HTML of the leagues
    *--------------------------------------------------------------------------
    */

    const htmlCardsTypes = state.app.cardsTypes.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((cardType, index) => {
      return(
        <tr>
          <td>

          {cardType.image ?
            <img src={urlServer + cardType.image} width="80" alt={cardType.name}/>
          :
            <img src={urlServer + '/storage/card_type.png'} width="80" alt={cardType.name}/>
          }

          </td>
          <td>

          {cardType.image_mini ?
            <img src={urlServer + cardType.image_mini} width="60" alt={cardType.name}/>
          :
            <img src={urlServer + '/storage/card_type_mini.png'} width="60" alt={cardType.name}/>
          }

          </td>
          <td>
            <div className={classes.textColor}>
              <div style={{'background-color':cardType.text_color}}></div>
            </div>
          </td>
          <td>{cardType.name}</td>
          <td>{cardType.rare ? 'Sí' : 'No'}</td>
          <td>{cardType.special ? 'Sí' : 'No'}</td>
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

      <button className="goBack"
        onClick={() => {
          history.push('/admin');
        }}
      >
        <Icon name='reply'/>
      </button>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.cardsTypesTableView}>
          <h1>Tipos de cartas</h1>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {state.app.cardsTypes.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Imagen mini</th>
                      <th>Color texto</th>
                      <th>Nombre</th>
                      <th>Único</th>
                      <th>Especial</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {htmlCardsTypes}
                  </tbody>
                </table>
              </div>

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
              <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
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

            <div className={classes.field}>
              <label for="textColor"><Icon name='paint brush' className={classes.icon} size="large"/></label>
              <input type="text" id="textColor" placeholder="Color texto" value={textColorState} onChange={(event) => setTextColorState(event.target.value)} maxLength="7"/>
            </div>

            <div className={classes.checkboxField}>
              <Checkbox label='Único' checked={rareState} onClick={(event, data) => setRareState(data.checked)}/>
            </div>

            <div className={classes.checkboxField}>
              <Checkbox label='Especial' checked={specialState} onClick={(event, data) => setSpecialState(data.checked)}/>
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

export default injectSheet(styles)(CardsTypes);
