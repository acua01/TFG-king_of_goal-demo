/*
*=============================================================================
* Title: Teams.js
* Created on: 20/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render the view of the teams control
*==============================================================================
* Constant: Teams
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal, Dropdown} from 'semantic-ui-react';
  import ReactFileReader from 'react-file-reader';
  /* End React's packages */

  /* JSS */
  import styles from './TeamsStyles';
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

const Teams = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [nameState, setNameState] = useState('');
  const [leagueState, setLeagueState] = useState('');
  const [imageState, setImageState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activeTeamState, setActiveTeamState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: If the user isn't auth, redirect to login view
    *--------------------------------------------------------------------------
    * Parameters: state.app.authentication.auth
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/equipos');
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
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/equipos');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);

    /*
    *--------------------------------------------------------------------------
    * Description: Load teams when teams state change, and load leagues
    *--------------------------------------------------------------------------
    * Parameters: None
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      actions.askForAllTeams();
      actions.askForAllLeagues();
    },[]);

    /*
    *--------------------------------------------------------------------------
    * Description: Set form fields states when active team state changes
    *--------------------------------------------------------------------------
    * Parameters: activeTeamState
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    useEffect(() => {
      if(activeTeamState){
        setNameState(activeTeamState.team_name);
        setImageState(activeTeamState.team_image);
        setLeagueState(activeTeamState.league_id);
      }else{
        setNameState('');
        setImageState('');
        setLeagueState('');
      }
    },[activeTeamState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickAddButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveTeamState('');
      setNameState('');
      setImageState('');
      setLeagueState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickGoToListButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveTeamState('');
      setNameState('');
      setImageState('');
      setLeagueState('');
      setViewState('table');
    }

    /*
    *--------------------------------------------------------------------------
    * Name: fnValidateForm
    *--------------------------------------------------------------------------
    * Description: Validates the form and returns an array with the errors
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
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
    * Name: onSubmitInsertTeamFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertTeamFormHandler = event => {
      event.preventDefault();

      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertTeam({
          name:nameState,
          image:imageState,
          idLeague:leagueState,
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitUpdateTeamFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to update
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdateTeamFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdateTeam({
          id:activeTeamState.team_id,
          name:nameState,
          image:imageState,
          idLeague:leagueState,
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
    * Description: Shows the modal to delete the team
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idTeam => {
      state.app.teams.all.find((team) => {
        if(team.team_id === idTeam){
          setActiveTeamState(team);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmDeleteButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the team
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idTeam => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeleteTeam({
        id:activeTeamState.team_id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickUpdateButtonHandler
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the team
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idTeam => {
      window.scrollTo(0,0);

      state.app.teams.all.find((team) => {
        if(team.team_id === idTeam){
          setActiveTeamState(team);
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
    * Created on: 20/04/2020 by Acua
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
    * Name: htmlTeams
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the teams
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlTeams = state.app.teams.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((team, index) => {
      return(
        <tr>
          <td>

          {team.team_image ?
            <img src={urlServer + team.team_image} width="60" alt={team.team_name}/>
          :
            <img src={urlServer + '/storage/team.png'} width="60" alt={team.team_name}/>
          }

          </td>
          <td>{team.team_name}</td>
          <td>
            <div className={classes.league}>
              {team.league_image ?
                <img src={urlServer + team.league_image} width="60" alt={team.league_name} title={team.league_name}/>
              :
                <img src={urlServer + '/storage/league.png'} width="60" alt={team.league_name} title={team.league_name}/>
              }
            </div>
          </td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(team.team_id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(team.team_id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>
        </tr>
      );
    });

    /*
    *--------------------------------------------------------------------------
    * Name: arrLeagues
    *--------------------------------------------------------------------------
    * Description: Contains the leagues of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 20/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const arrLeagues = [];
    state.app.leagues.all.map((league, index) => {
      arrLeagues.push({
        key: index,
        text: league.name,
        image: {avatar: true, src: urlServer + league.image},
        value: league.id,
      });
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.teams}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.teamsTableView}>
          <h1>Equipos</h1>

          {state.app.teams.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <table>
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>League</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {htmlTeams}
                </tbody>
              </table>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.teams.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.teams.all.length / itemsPerPageState)}
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
                  <p>¿Seguro que quieres eliminar este equipo?</p>
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
              header='No se ha encontrado ningún equipo.'
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
        <div className={classes.teamsFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activeTeamState ? <Fragment>Modificar equipo</Fragment> : <Fragment>Insertar equipo</Fragment>}</h1>
          <form onSubmit={(event) => {activeTeamState ? onSubmitUpdateTeamFormHandler(event) : onSubmitInsertTeamFormHandler(event)}}>
            <div className={classes.field}>
              <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
              <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="50"/>
            </div>
            <div className={classes.field}>
              <label for="league"><Icon name='globe' className={classes.icon} size="large"/></label>
              <Dropdown id="league" className={classes.dropdown} placeholder='Selecciona la liga' search selection clearable options={arrLeagues} value={leagueState} onChange={(event, {value}) => setLeagueState({value}.value)}/>
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
              {activeTeamState ?
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

export default injectSheet(styles)(Teams);
