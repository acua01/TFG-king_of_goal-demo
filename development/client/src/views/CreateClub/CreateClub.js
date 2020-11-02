/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Dropdown} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './CreateClubStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar} from '../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const CreateClub = props => {

  const {classes, state, actions, history} = props;

  const [nameState, setNameState] = useState('');
  const [leagueState, setLeagueState] = useState('');
  const [imageState, setImageState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.askForAllLeagues();
      actions.askForAllTeams();
    },[]);
    
    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/crear_club');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);
    
  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Validates and sends data to server
    *--------------------------------------------------------------------------
    */

    const onSubmitCreateClubFormHandler = event => {
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

      // Logo validation

      if(imageState === ''){
        errors.push('Elige un escudo.');
      }

      if(errors.length === 0){
        actions.sendRequestToCreateClub(history,{
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
    * Description: Get the team image clicked
    *--------------------------------------------------------------------------
    */

    const onClickTeamDivHandler = (event, index, team) => {
      const teams = document.querySelectorAll('#teamsContainer > div');

      for(let i = 0; i < teams.length; i++){
        teams[i].style.backgroundColor = 'white';
      }

      document.getElementById(index).style.backgroundColor = '#333333';

      setImageState(team.team_image);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the leagues of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrLeagues = [];
    state.app.leagues.all.map((league, index) => {
      arrLeagues.push({
        key: index,
        text: league.name,
        image: {avatar: false, src: urlServer + league.image},
        value: league.id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the teams to render
    *--------------------------------------------------------------------------
    */

    const arrTeams = state.app.teams.all.filter(team => team.league_id === leagueState);

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the teams
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

  return (
    <div className={classes.createClub}>
      <h1>Crear club</h1>
      <form onSubmit={onSubmitCreateClubFormHandler}>
        <div className={classes.field}>
          <label for="name"><Icon name='header' className={classes.icon} size="large"/></label>
          <input type="text" id="name" placeholder="Introduce el nombre del club" minLength="3" maxLength="30" value={nameState} onChange={(event) => setNameState(event.target.value)}/>
        </div>
        <p>Selecciona el escudo</p>
        <Dropdown id="league" className={classes.dropdown} placeholder='Selecciona una liga' search selection clearable options={arrLeagues} value={leagueState} onChange={(event, {value}) => setLeagueState({value}.value)}/>
        <div className={classes.teamsContainer} id="teamsContainer">
          {htmlTeams}
        </div>
        <input type="submit" value="Confirmar" />
      </form>
    </div>
  )

}

export default injectSheet(styles)(CreateClub);
