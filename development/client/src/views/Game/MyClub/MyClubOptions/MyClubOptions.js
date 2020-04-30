/*
*=============================================================================
* Title: MyClubOptions.js
* Created on: 29/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render my club options
*==============================================================================
* Constant: MyClubOptions
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Modal, Dropdown} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './MyClubOptionsStyles';
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
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MyClubOptions = props => {

  const {classes, history, actions, state} = props;

  const [nameState, setNameState] = useState('');
  const [imageState, setImageState] = useState('');

  const [leagueState, setLeagueState] = useState('');
  const [teamState, setTeamState] = useState('');

  const [teamsModalState, setTeamsModalState] = useState(false);
  const [deleteClubModalState, setDeleteClubModalState] = useState(false);

  /*========== USE EFFECT ===================================================*/

  useEffect(() => {
    setNameState(state.app.authentication.club.name);
  },[state.app.authentication.club.name]);

  useEffect(() => {
    setImageState(state.app.authentication.club.image);
  },[state.app.authentication.club.image]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickTeamDivHandler
    *--------------------------------------------------------------------------
    * Description: Get the team image clicked
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickTeamDivHandler = (event, index, team) => {
      const teams = document.querySelectorAll('#teamsContainer > div');

      for(let i = 0; i < teams.length; i++){
        teams[i].style.backgroundColor = 'white';
      }

      document.getElementById(index).style.backgroundColor = '#333333';

      setTeamState(team.team_image);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmTeamButtonHandler
    *--------------------------------------------------------------------------
    * Description: Set the team chose to the imageState
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmTeamButtonHandler = () => {
      setImageState(teamState);
      setTeamsModalState(false);
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onSubmitUpdateClubFormHandler
    *--------------------------------------------------------------------------
    * Description: Validates and sends data to server
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onSubmitUpdateClubFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      let errors = [];

      // Name validation

      if(nameState === ''){
        errors.push('Introduce el nombre del club.');
      }

      if(nameState.length < 3 || nameState.length > 30){
        errors.push('Introduce un nombre de mínimo 3 caracteres y máximo de 30.');
      }

      if(errors.length === 0){
        actions.sendRequestToUpdateClub({
          name: nameState,
          image: imageState,
          username: state.app.authentication.username
        });
      }else{
        errors.map(error => {
          showSnackbar('error', error);
        });
      }
    }

    /*
    *--------------------------------------------------------------------------
    * Name: onClickDeleteClubButtonHandler
    *--------------------------------------------------------------------------
    * Description: Delete the club
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickDeleteClubButtonHandler = () => {
      actions.sendRequestToDeleteClub(history, {
        id: state.app.authentication.club.id
      });
      setDeleteClubModalState(false);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: arrLeagues
    *--------------------------------------------------------------------------
    * Description: Contains the leagues of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
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

    /*
    *--------------------------------------------------------------------------
    * Name: arrTeams
    *--------------------------------------------------------------------------
    * Description: Contains the teams to render
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const arrTeams = state.app.teams.all.filter(team => team.league_id === leagueState);

    /*
    *--------------------------------------------------------------------------
    * Name: htmlTeams
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the teams
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlTeams = arrTeams.map((team, index) => {
      return (
        <div
          id={index}
          onClick={(event) => onClickTeamDivHandler(event, index, team)}
        >
          {team.team_image ?
            <img src={urlServer + team.team_image} alt={team.team_name}/>
          :
            <img src={urlServer + '/storage/team.png'} alt={team.team_name}/>
          }
        </div>
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.myClubOptions}>
      <h1>Opciones</h1>
      <form onSubmit={onSubmitUpdateClubFormHandler}>
        <div className="team">
          <div onClick={() => setTeamsModalState(true)}>
            {state.app.authentication.club.image ?
              <img src={urlServer + imageState} alt={state.app.authentication.club.name + ' logo'}/>
            :
              <img src={urlServer + '/storage/team.png'} alt={state.app.authentication.club.name + ' logo'}/>
            }
          </div>
          <div><Icon name='edit'/></div>
        </div>
        <div className={classes.field}>
          <label for="name"><Icon name='edit' className={classes.icon} size="large"/></label>
          <input type="text" id="name" placeholder="Nombre" value={nameState} onChange={(event) => setNameState(event.target.value)} maxLength="50"/>
        </div>
        <button type="submit">
          <Icon name='save'/>
          <span>Actualizar</span>
        </button>
      </form>

      {/*---------- Teams Modal --------------------------------------------*/}

      <Modal className={classes.teamsModal} size='mini' open={teamsModalState} onClose={() => setTeamsModalState(false)}>
        <Modal.Content>
          <Dropdown id="league" className={classes.dropdown} placeholder='Selecciona una liga' search selection clearable options={arrLeagues} value={leagueState} onChange={(event, {value}) => setLeagueState({value}.value)}/>
          <div className={classes.teamsContainer} id="teamsContainer">
            {htmlTeams}
          </div>
        </Modal.Content>
        <Modal.Actions>
          <button onClick={onClickConfirmTeamButtonHandler}>Confirmar</button>
        </Modal.Actions>
      </Modal>

      {/*---------- End Teams Modal ----------------------------------------*/}

      {/*---------- Delete Club Modal --------------------------------------*/}

      <Modal className={classes.deleteClubModal} size='mini' open={deleteClubModalState} onClose={() => setDeleteClubModalState(false)}>
        <Modal.Content>
          <p>¿Seguro que quieres eliminar el club? No podrás recuperarlo una vez borrado.</p>
        </Modal.Content>
        <Modal.Actions>
          <button onClick={onClickDeleteClubButtonHandler}>Sí</button>
          <button onClick={() => setDeleteClubModalState(false)}>No</button>
        </Modal.Actions>
      </Modal>

      {/*---------- End Delete Club Modal ----------------------------------*/}

      <button onClick={() => setDeleteClubModalState(true)}>
        <Icon name='delete'/>
        <span>Borrar club</span>
      </button>
    </div>
  )
}

export default injectSheet(styles)(MyClubOptions);
