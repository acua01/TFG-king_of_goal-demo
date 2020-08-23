/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal, Dropdown} from 'semantic-ui-react';
  import ReactFileReader from 'react-file-reader';
  /* End React's packages */

  /* JSS */
  import styles from './CardsStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */
  import Card from '../../../components/Card/Card';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar} from '../../../shared/utils';
  import {moneyFormat} from '../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Cards = props => {

  const {classes, history, actions, state} = props;

  const [viewState, setViewState] = useState('table');

  const [ratingState, setRatingState] = useState('');
  const [valueState, setValueState] = useState('');
  const [paceState, setPaceState] = useState('');
  const [shootingState, setShootingState] = useState('');
  const [passingState, setPassingState] = useState('');
  const [dribblingState, setDribblingState] = useState('');
  const [defendingState, setDefendingState] = useState('');
  const [physicalityState, setPhysicalityState] = useState('');
  const [goodLegState, setGoodLegState] = useState('');
  const [skillsState, setSkillsState] = useState('');
  const [badLegState, setBadLegState] = useState('');
  const [typeState, setTypeState] = useState('');
  const [playerState, setPlayerState] = useState('');
  const [teamState, setTeamState] = useState('');
  const [countryState, setCountryState] = useState('');
  const [positionState, setPositionState] = useState('');

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);
  const [deleteModalState, setDeleteModalState] = useState(false);
  const [activeCardState, setActiveCardState] = useState('');

  /*========== USE EFFECT ===================================================*/

    /*
    useEffect(() => {
      if(state.app.authentication.auth){
        history.push('/inicio/admin/cartas');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth]);
    */
    
    /*
    useEffect(() => {
      if(state.app.authentication.admin){
        history.push('/inicio/admin/cartas');
      }else{
        history.push('/');
      }
    },[state.app.authentication.auth, state.app.authentication.admin]);
    */

    useEffect(() => {
      actions.askForAllCards();
      actions.askForAllCardsTypes();
      actions.askForAllPlayers();
      actions.askForAllTeams();
      actions.askForAllCountries();
      actions.askForAllPositions();
    },[]);

    useEffect(() => {
      if(activeCardState){
        setRatingState(activeCardState.card_rating);
        setValueState(activeCardState.card_value);
        setPaceState(activeCardState.card_pace);
        setShootingState(activeCardState.card_shooting);
        setPassingState(activeCardState.card_passing);
        setDribblingState(activeCardState.card_dribbling);
        setDefendingState(activeCardState.card_defending);
        setPhysicalityState(activeCardState.card_physicality);
        setGoodLegState(activeCardState.card_good_leg);
        setSkillsState(activeCardState.card_skills);
        setBadLegState(activeCardState.card_bad_leg);
        setTypeState(activeCardState.type_id);
        setPlayerState(activeCardState.player_id);
        setTeamState(activeCardState.team_id);
        setCountryState(activeCardState.country_id);
        setPositionState(activeCardState.position_id);
      }else{
        setRatingState('');
        setValueState('');
        setPaceState('');
        setShootingState('');
        setPassingState('');
        setDribblingState('');
        setDefendingState('');
        setPhysicalityState('');
        setGoodLegState('');
        setSkillsState('');
        setBadLegState('');
        setTypeState('');
        setPlayerState('');
        setTeamState('');
        setCountryState('');
        setPositionState('');
      }
    },[activeCardState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickAddButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardState('');
      setRatingState('');
      setValueState('');
      setPaceState('');
      setShootingState('');
      setPassingState('');
      setDribblingState('');
      setDefendingState('');
      setPhysicalityState('');
      setGoodLegState('');
      setSkillsState('');
      setBadLegState('');
      setTypeState('');
      setPlayerState('');
      setTeamState('');
      setCountryState('');
      setPositionState('');
      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change to the form view
    *--------------------------------------------------------------------------
    */

    const onClickGoToListButtonHandler = () => {
      window.scrollTo(0,0);
      setActiveCardState('');
      setRatingState('');
      setValueState('');
      setPaceState('');
      setShootingState('');
      setPassingState('');
      setDribblingState('');
      setDefendingState('');
      setPhysicalityState('');
      setGoodLegState('');
      setSkillsState('');
      setBadLegState('');
      setTypeState('');
      setPlayerState('');
      setTeamState('');
      setCountryState('');
      setPositionState('');
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

      return errors;
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Validates the form and sends data to server to insert
    *--------------------------------------------------------------------------
    */

    const onSubmitInsertCardFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToInsertCard({
          rating:ratingState,
          value:valueState,
          pace:paceState,
          shooting:shootingState,
          passing:passingState,
          dribbling:dribblingState,
          defending:defendingState,
          physicality:physicalityState,
          goodLeg:goodLegState,
          skills:skillsState,
          badLeg:badLegState,
          idType:typeState,
          idPlayer:playerState,
          idTeam:teamState,
          idCountry:countryState,
          idPosition:positionState,
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

    const onSubmitUpdateCardFormHandler = event => {
      event.preventDefault();
      window.scrollTo(0,0);

      const errors = fnValidateForm();

      if(errors.length === 0){
        actions.sendRequestToUpdateCard({
          id:activeCardState.card_id,
          rating:ratingState,
          value:valueState,
          pace:paceState,
          shooting:shootingState,
          passing:passingState,
          dribbling:dribblingState,
          defending:defendingState,
          physicality:physicalityState,
          goodLeg:goodLegState,
          skills:skillsState,
          badLeg:badLegState,
          idType:typeState,
          idPlayer:playerState,
          idTeam:teamState,
          idCountry:countryState,
          idPosition:positionState,
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
    * Description: Shows the modal to delete the card
    *--------------------------------------------------------------------------
    */

    const onClickDeleteButtonHandler = idCard => {
      state.app.cards.all.find((card) => {
        if(card.card_id === idCard){
          setActiveCardState(card);
        }
      });

      setDeleteModalState(true);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Delete the card
    *--------------------------------------------------------------------------
    */

    const onClickConfirmDeleteButtonHandler = idCard => {
      window.scrollTo(0,0);
      setDeleteModalState(false);

      actions.sendRequestToDeleteCard({
        id:activeCardState.card_id
      });
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Change the view to the form to update the card
    *--------------------------------------------------------------------------
    */

    const onClickUpdateButtonHandler = idCard => {
      window.scrollTo(0,0);

      state.app.cards.all.find((card) => {
        if(card.card_id === idCard){
          setActiveCardState(card);
        }
      });

      setViewState('form');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the cards
    *--------------------------------------------------------------------------
    */

    const htmlCards = state.app.cards.all.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((card, index) => {
      return(
        <tr>
          <td className={classes.card}>
            <Card
              type={card.type_image}
              textColor={card.type_text_color}
              player={card.player_image}
              rating={card.card_rating}
              position={card.position_abbreviation}
              country={card.country_image}
              team={card.team_image}
              name={card.player_name}
              pace={card.card_pace}
              shooting={card.card_shooting}
              passing={card.card_passing}
              dribbling={card.card_dribbling}
              defending={card.card_defending}
              physicality={card.card_physicality}
            />
          </td>
          <td>
            <div className={classes.value}>
              {moneyFormat(card.card_value)}
              <img src={urlServer + '/storage/coins.png'} alt="coins"/>
            </div>
          </td>
          <td>{card.card_good_leg}</td>
          <td>{card.card_skills}</td>
          <td>{card.card_bad_leg}</td>
          <td>
            <div className={classes.actions}>
              <div title="Editar" onClick={() => onClickUpdateButtonHandler(card.card_id)}>
                <Icon name='edit'/>
              </div>
              <div title="Eliminar" onClick={() => onClickDeleteButtonHandler(card.card_id)}>
                <Icon name='delete'/>
              </div>
            </div>
          </td>

        </tr>
      );
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the types of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrTypes = [];
    state.app.cardsTypes.all.map((type, index) => {
      arrTypes.push({
        key: index,
        text: type.name,
        image: {avatar: false, src: urlServer + type.image},
        value: type.id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the players of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrPlayers = [];
    state.app.players.all.map((player, index) => {
      arrPlayers.push({
        key: index,
        text: player.name,
        image: {avatar: false, src: urlServer + player.image},
        value: player.id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the teams of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrTeams = [];
    state.app.teams.all.map((team, index) => {
      arrTeams.push({
        key: index,
        text: team.team_name,
        image: {avatar: false, src: urlServer + team.team_image},
        value: team.team_id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the countries of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrCountries = [];
    state.app.countries.all.map((country, index) => {
      arrCountries.push({
        key: index,
        text: country.name,
        image: {avatar: false, src: urlServer + country.image},
        value: country.id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the positions of the dropdown
    *--------------------------------------------------------------------------
    */

    const arrPositions = [];
    state.app.positions.all.map((position, index) => {
      arrPositions.push({
        key: index,
        text: position.abbreviation.toUpperCase() + ' ' + position.name,
        value: position.id,
      });
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.cards}>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.cardsTableView}>
          <h1>Cartas</h1>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {state.app.cards.all.length > 0 ?
            <Fragment>

              {/*---------- Table ------------------------------------------*/}

              <div className="tableContainer">
                <table>
                  <thead>
                    <tr>
                      <th>Carta</th>
                      <th>Valor</th>
                      <th>Pierna buena</th>
                      <th>Filigranas</th>
                      <th>Pierna mala</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {htmlCards}
                  </tbody>
                </table>
              </div>

              {/*---------- End Table --------------------------------------*/}

              {/*---------- Pagination -------------------------------------*/}

              {Math.ceil(state.app.cards.all.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(state.app.cards.all.length / itemsPerPageState)}
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
                  <p>¿Seguro que quieres eliminar esta carta?</p>
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
              header='No se ha encontrado ninguna carta.'
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
        <div className={classes.cardsFormView}>
          <button onClick={onClickGoToListButtonHandler}>
            <Icon name='angle left'/>
            <span>Volver a la lista</span>
          </button>
          <h1>{activeCardState ? <Fragment>Modificar carta</Fragment> : <Fragment>Insertar carta</Fragment>}</h1>
          <form onSubmit={(event) => {activeCardState ? onSubmitUpdateCardFormHandler(event) : onSubmitInsertCardFormHandler(event)}}>
            <div>
              <div className={classes.field}>
                <label for="rating"><Icon name='star' className={classes.icon} size="large"/></label>
                <input type="number" id="rating" placeholder="Valoración" value={ratingState} onChange={(event) => setRatingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="value"><Icon name='money' className={classes.icon} size="large"/></label>
                <input type="number" id="value" placeholder="Valor" value={valueState} onChange={(event) => setValueState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="pace"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="pace" placeholder="Ritmo" value={paceState} onChange={(event) => setPaceState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="shooting"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="shooting" placeholder="Tiro" value={shootingState} onChange={(event) => setShootingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="passing"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="passing" placeholder="Pase" value={passingState} onChange={(event) => setPassingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="dribbling"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="dribbling" placeholder="Regate" value={dribblingState} onChange={(event) => setDribblingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="defending"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="defending" placeholder="Defensa" value={defendingState} onChange={(event) => setDefendingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="physicality"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" id="physicality" placeholder="Físico" value={physicalityState} onChange={(event) => setPhysicalityState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="goodLeg"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="text" id="goodLeg" placeholder="Pierna buena" value={goodLegState} onChange={(event) => setGoodLegState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="skills"><Icon name='star' className={classes.icon} size="large"/></label>
                <input type="number" id="skills" placeholder="Filigranas" value={skillsState} onChange={(event) => setSkillsState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="badLeg"><Icon name='star' className={classes.icon} size="large"/></label>
                <input type="number" id="badLeg" placeholder="Pierna mala" value={badLegState} onChange={(event) => setBadLegState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="type"><Icon name='square' className={classes.icon} size="large"/></label>
                <Dropdown id="type" className={classes.dropdown} placeholder='Selecciona el tipo' search selection clearable options={arrTypes} value={typeState} onChange={(event, {value}) => setTypeState({value}.value)}/>
              </div>
              <div className={classes.field}>
                <label for="player"><Icon name='user' className={classes.icon} size="large"/></label>
                <Dropdown id="player" className={classes.dropdown} placeholder='Selecciona el jugador' search selection clearable options={arrPlayers} value={playerState} onChange={(event, {value}) => setPlayerState({value}.value)}/>
              </div>
              <div className={classes.field}>
                <label for="team"><Icon name='shield' className={classes.icon} size="large"/></label>
                <Dropdown id="team" className={classes.dropdown} placeholder='Selecciona el equipo' search selection clearable options={arrTeams} value={teamState} onChange={(event, {value}) => setTeamState({value}.value)}/>
              </div>
              <div className={classes.field}>
                <label for="country"><Icon name='flag' className={classes.icon} size="large"/></label>
                <Dropdown id="country" className={classes.dropdown} placeholder='Selecciona el país' search selection clearable options={arrCountries} value={countryState} onChange={(event, {value}) => setCountryState({value}.value)}/>
              </div>
              <div className={classes.field}>
                <label for="position"><Icon name='puzzle piece' className={classes.icon} size="large"/></label>
                <Dropdown id="position" className={classes.dropdown} placeholder='Selecciona la posición' search selection clearable options={arrPositions} value={positionState} onChange={(event, {value}) => setPositionState({value}.value)}/>
              </div>
            </div>
            <button type="submit">
              {activeCardState ?
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

        /*---------- End Form View ------------------------------------------*/

      :null
      }
    </div>
  )
}

export default injectSheet(styles)(Cards);
