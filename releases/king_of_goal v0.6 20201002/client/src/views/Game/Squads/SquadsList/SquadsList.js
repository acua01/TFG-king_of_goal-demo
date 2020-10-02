/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message, Modal} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './SquadsListStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar} from '../../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../../shared/variables';
  import {StoreContext} from '../../../../context/StoreContext';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const SquadsList = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

  const [deleteModalState, setDeleteModalState] = useState(false);
  const [createModalState, setCreateModalState] = useState(false);

  const [activeSquadState, setActiveSquadState] = useState('');

  const [nameState, setNameState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Inicio',
          path: '/inicio'
        },
        {
          name: 'Plantillas',
          path: '/inicio/plantillas'
        },
      ]);
    },[]);

    useEffect(() => {
      if(activeSquadState){
        setNameState(activeSquadState.name);
      }else{
        setNameState('');
      }
    },[activeSquadState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: see squad
    *--------------------------------------------------------------------------
    */

    const onClickSeeButtonHandler = idSquad => {
      window.scrollTo(0,0);

      actions.askForAllSquadCards({
        idSquad
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: insert squad
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertSquadFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);
      setCreateModalState(false);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertSquad({
          name: nameState,
          idClub: state.app.authentication.club.id
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Description: update squad
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdateSquadFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);
      setCreateModalState(false);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdateSquad({
          id:activeSquadState.id,
          name:nameState,
          rating:activeSquadState.rating,
          chemistry:activeSquadState.chemistry,
          idClub: state.app.authentication.club.id
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
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
    * Description: Shows the modal to update the squad
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idSquad => {
      state.app.squads.all.find((s) => {
        if(s.id === idSquad){
          setActiveSquadState(s);
        }
      });

      setCreateModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Shows the modal to delete the squad
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idSquad => {
      state.app.squads.all.find((s) => {
        if(s.id === idSquad){
          setActiveSquadState(s);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Delete the squad
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = () => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeleteSquad({
        id:activeSquadState.id,
        idClub: state.app.authentication.club.id
      });

      setActiveSquadState('');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: html squads
    *--------------------------------------------------------------------------
    */

    const htmlSquads = state.app.squads.all.map((s, index) => {
      return (
        <div
          className="squad"
          id={index}
          key={index}
        >
          <div className="up">
            <div className="scores">
              <span>
                <img 
                  src={urlServer + '/storage/star.png'} 
                  alt="Valoración"
                  title="Valoración"
                />
                <span>{s.rating}</span>
              </span>
              <span>
                <img 
                  src={urlServer + '/storage/chemistry.png'} 
                  alt="Química"
                  title="Química"
                />
                <span>{s.chemistry}</span>
              </span>
            </div>
            <div className="name">
              <h2>{s.name}</h2>
            </div>

          </div>
          <div className="down">
            <button
              onClick={() => {
                onClickSeeButtonHandler(s.id);
                actions.setCurrent('squads', s);
                changeView('SquadActive');
              }}
            >
              Ver
            </button>
            <button
              onClick={() => {
                setCreateModalState(true);
                onClickUpdateButtonHandler(s.id);
              }}
            >
              Renombrar
            </button>
            <button 
              onClick={() => {
                setDeleteModalState(true);
                onClickDeleteButtonHandler(s.id);
              }}
            >
              Borrar
            </button>
          </div>       
        </div>
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.squadsListView}>
      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div>
        <h1>Plantillas</h1>

        <button
          onClick={() => {
            setCreateModalState(true);
          }}
        >
          <Icon name='add'/>
          <span>Crear plantilla</span>
        </button>

        <div className={classes.squadsList}>
          {state.app.squads.all.length > 0 ?
            <Fragment>
              {htmlSquads}
            </Fragment>            
          :
            <Message
              className={classes.message}
              icon='info'
              header='No se ha encontrado ninguna plantilla.'
              color='yellow'
            />
          }
          
        </div>

        <button
          onClick={() => {
            setCreateModalState(true);
          }}
        >
          <Icon name='add'/>
          <span>Crear plantilla</span>
        </button>

      </div>

      {/*---------- Create Squad Modal ------------------------------------------*/}

      <Modal 
        className={classes.createModal}
        open={createModalState} 
        onClose={() => setCreateModalState(false)}
      >
        <Modal.Content>
          <form onSubmit={(event) => {activeSquadState ? onSubmitUpdateSquadFormHandler(event) : onSubmitInsertSquadFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="50"/>
            </div>

            <button 
              type="submit"
            >
              {activeSquadState ?
                <Fragment>
                  <Icon name='save'/>
                  <span>Actualizar</span>
                </Fragment>
              :
                <Fragment>
                  <span>Crear plantilla</span>
                </Fragment>
              }
            </button>
          </form>
        </Modal.Content>
        <Modal.Actions>
          <button 
            onClick={() => setCreateModalState(false)}
          >
            Cerrar
          </button>
        </Modal.Actions>
      </Modal>

      {/*---------- End Create Squad Modal --------------------------------------*/}

      {/*---------- Delete Modal ------------------------------------------*/}

      <Modal 
        className={classes.deleteModal}
        size='mini' 
        open={deleteModalState} 
        onClose={() => setDeleteModalState(false)}
      >
        <Modal.Content>
          <p>
            ¿Seguro que quieres eliminar esta plantilla?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <button
            onClick={() => onClickConfirmDeleteButtonHandler()}
          >
            Sí
          </button>
          <button 
            onClick={() => setDeleteModalState(false)}
          >
            No
          </button>
        </Modal.Actions>
      </Modal>

      {/*---------- End Delete Modal --------------------------------------*/}

      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>
    </div>
  );
}

export default injectSheet(styles)(SquadsList);
