/*
*=============================================================================
* Title: Countries.js
* Created on: 16/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the countries control
*==============================================================================
* Constant: Countries
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
  import styles from './CountriesStyles';
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

const Countries = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [nameState, setNameState] = useState('');
  const [imageState, setImageState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activeCountryState, setActiveCountryState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/paises');
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
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/paises');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);

    /*
    *--------------------------------------------------------------------------
    * Description: Load countries when countries state change
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.askForAllCountries();
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: Set form fields states when active country state changes
    *--------------------------------------------------------------------------
    * Parameters: activeCountryState
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(activeCountryState){
        setNameState(activeCountryState.name);
        setImageState(activeCountryState.image);
      }else{
        setNameState('');
        setImageState('');
      }
    },[activeCountryState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickAddButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCountryState('');
      setNameState('');
      setImageState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickGoToListButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCountryState('');
      setNameState('');
      setImageState('');
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fnValidateForm
    *--------------------------------------------------------------------------
    * Description: Validates the form and returns an array with the errors
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
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

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitInsertCountryFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertCountryFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertCountry({
          name:nameState,
          image:imageState,
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitUpdateCountryFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to update
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdateCountryFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdateCountry({
          id:activeCountryState.id,
          name:nameState,
          image:imageState,
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
    * Description: Shows the modal to delete the country
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idCountry => {
      state.app.countries.all.find((country) => {
        if(country.id === idCountry){
          setActiveCountryState(country);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the country
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idCountry => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeleteCountry({
        id:activeCountryState.id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickUpdateButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the country
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idCountry => {
      window.scrollTo(0,0);

      state.app.countries.all.find((country) => {
        if(country.id === idCountry){
          setActiveCountryState(country);
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
    * Created on: 16/04/2020 by Acua
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
    * Name: htmlCountries
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the countries
    *--------------------------------------------------------------------------
    * Created on: 16/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlCountries = state.app.countries.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((country, index) => {
      return(
        <tr>
          <td>

          {country.image ?
            <img src={urlServer + country.image} width="60" alt={country.name}/>
          :
            <img src={urlServer + '/storage/country.png'} width="60" alt={country.name}/>
          }

          </td>
          <td>{country.name}</td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(country.id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(country.id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.countries}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.countriesTableView}>
          <h1>Países</h1>

          {state.app.countries.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {htmlCountries}
                  </tbody>
                </table>
              </div>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.countries.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.countries.all.length / itemsPerPageState)}
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
                  <p>¿Seguro que quieres eliminar este país?</p>
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
              header='No se ha encontrado ningún país.'
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
        <div className={classes.countriesFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activeCountryState ? <Fragment>Modificar país</Fragment> : <Fragment>Insertar país</Fragment>}</h1>
          <form onSubmit={(event) => {activeCountryState ? onSubmitUpdateCountryFormHandler(event) : onSubmitInsertCountryFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="30"/>
            </div>
            <div className={classes.fileField}>
              <label for="image"><Icon name='file image' className={classes.icon} size="large"/></label>
              <ReactFileReader handleFiles={fileHandler} base64={true} fileTypes={[".png"]}>
                <input type="text" id="image" placeholder="Selecciona una imagen" value={imageState ? 'Imagen seleccionada' : ''}/>
              </ReactFileReader>
              <button onClick={(event) => {event.preventDefault(); setImageState('');}}><Icon name='delete'/></button>
            </div>

            {imageState && imageState.slice(0,8) === '/storage' ? <img src={urlServer + imageState} width="50" alt={imageState}/> : null}

            <button type="submit">
              {activeCountryState ?
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

export default injectSheet(styles)(Countries);
