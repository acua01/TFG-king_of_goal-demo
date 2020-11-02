/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Pagination, Message, Modal, Dropdown, Tab} from 'semantic-ui-react';
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

  const [arrayCardsState, setArrayCardsState] = useState([]);

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

  const [filterModalState, setFilterModalState] = useState(false);

  const [typeFilterState, setTypeFilterState] = useState('');
  const [playerFilterState, setPlayerFilterState] = useState('');
  const [leagueFilterState, setLeagueFilterState] = useState('');
  const [teamFilterState, setTeamFilterState] = useState('');
  const [countryFilterState, setCountryFilterState] = useState('');
  const [positionFilterState, setPositionFilterState] = useState('');
  const [rareFilterState, setRareFilterState] = useState('');
  const [specialFilterState, setSpecialFilterState] = useState('');

  const [orderTypeState, setOrderTypeState] = useState('');
  const [orderByState, setOrderByState] = useState('');

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Administracion',
          path: '/admin'
        },
        {
          name: 'Cartas',
          path: '/admin/cartas'
        },
      ]);
    },[]);

    useEffect(() => {
      actions.askForAllCards();
      actions.askForAllCardsTypes();
      actions.askForAllPlayers();
      actions.askForAllTeams();
      actions.askForAllCountries();
      actions.askForAllPositions();
    },[]);

    useEffect(() => {
      setArrayCardsState(state.app.cards.all);
    },[state.app.cards.all]);

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
      arrayCardsState.find((card) => {
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

      arrayCardsState.find((card) => {
        if(card.card_id === idCard){
          setActiveCardState(card);
        }
      });

      setViewState('form');
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Filter cards
    *--------------------------------------------------------------------------
    */

    const onClickConfirmFilterButtonHandler = () => {
      let arrayResult = state.app.cards.all.filter(card => {
        return (!typeFilterState || (card.type_id === typeFilterState)) &&
          (!playerFilterState || (card.player_id === playerFilterState)) &&
          (!leagueFilterState || (card.league_id === leagueFilterState)) &&
          (!teamFilterState || (card.team_id === teamFilterState)) &&
          (!countryFilterState || (card.country_id === countryFilterState)) &&
          (!positionFilterState || (card.position_id === positionFilterState)) &&
          (rareFilterState === '' || card.type_rare === rareFilterState) &&
          (specialFilterState === '' || card.type_special === specialFilterState)
      });

      switch(orderTypeState){
        case 'name':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.player_name > b.player_name) {
                return 1;
              }
              if(a.player_name < b.player_name) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.player_name < b.player_name) {
                return 1;
              }
              if(a.player_name > b.player_name) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'rating':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_rating > b.card_rating) {
                return 1;
              }
              if(a.card_rating < b.card_rating) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_rating < b.card_rating) {
                return 1;
              }
              if(a.card_rating > b.card_rating) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'value':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_value > b.card_value) {
                return 1;
              }
              if(a.card_value < b.card_value) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_value < b.card_value) {
                return 1;
              }
              if(a.card_value > b.card_value) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'pace':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_pace > b.card_pace) {
                return 1;
              }
              if(a.card_pace < b.card_pace) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_pace < b.card_pace) {
                return 1;
              }
              if(a.card_pace > b.card_pace) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'shooting':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_shooting > b.card_shooting) {
                return 1;
              }
              if(a.card_shooting < b.card_shooting) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_shooting < b.card_shooting) {
                return 1;
              }
              if(a.card_shooting > b.card_shooting) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'passing':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_passing > b.card_passing) {
                return 1;
              }
              if(a.card_passing < b.card_passing) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_passing < b.card_passing) {
                return 1;
              }
              if(a.card_passing > b.card_passing) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'dribbling':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_dribbling > b.card_dribbling) {
                return 1;
              }
              if(a.card_dribbling < b.card_dribbling) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_dribbling < b.card_dribbling) {
                return 1;
              }
              if(a.card_dribbling > b.card_dribbling) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'defending':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_defending > b.card_defending) {
                return 1;
              }
              if(a.card_defending < b.card_defending) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_defending < b.card_defending) {
                return 1;
              }
              if(a.card_defending > b.card_defending) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'physicality':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_physicality > b.card_physicality) {
                return 1;
              }
              if(a.card_physicality < b.card_physicality) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_physicality < b.card_physicality) {
                return 1;
              }
              if(a.card_physicality > b.card_physicality) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'skills':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_skills > b.card_skills) {
                return 1;
              }
              if(a.card_skills < b.card_skills) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_skills < b.card_skills) {
                return 1;
              }
              if(a.card_skills > b.card_skills) {
                return -1;
              }
              return 0;
            });
          }
          break;
        case 'bad_leg':
          if(orderByState === 'asc'){
            arrayResult.sort((a, b) => {
              if(a.card_bad_leg > b.card_bad_leg) {
                return 1;
              }
              if(a.card_bad_leg < b.card_bad_leg) {
                return -1;
              }
              return 0;
            });
          }else if(orderByState === 'desc'){
            arrayResult.sort((a, b) => {
              if(a.card_bad_leg < b.card_bad_leg) {
                return 1;
              }
              if(a.card_bad_leg > b.card_bad_leg) {
                return -1;
              }
              return 0;
            });
          }
          break;
        default:

      }

      setArrayCardsState(arrayResult);
      setActivePageState(1);
      setFilterModalState(false);
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the cards
    *--------------------------------------------------------------------------
    */

    const htmlCards = arrayCardsState.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((card, index) => {
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

      <button className="goBack"
        onClick={() => {
          history.push('/admin');
        }}
      >
        <Icon name='reply'/>
      </button>

      {/*---------- Table View ---------------------------------------------*/}

      {viewState === 'table' ?
        <div className={classes.cardsTableView}>
          <h1>Cartas</h1>

          <button onClick={() => setFilterModalState(true)}>
            <Icon name='filter'/>
            <span>Filtrar</span>
          </button>

          <button onClick={onClickAddButtonHandler}>
            <Icon name='add'/>
            <span>Añadir</span>
          </button>

          {arrayCardsState.length > 0 ?
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

              {Math.ceil(arrayCardsState.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  totalPages={Math.ceil(arrayCardsState.length / itemsPerPageState)}
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

              {/*---------- Filter Modal -------------------------------------------*/}

                <Modal
                className={classes.filterModal}
                size='mini' open={filterModalState}
                onClose={() => setFilterModalState(false)}
              >
                <Modal.Content>
                  <Tab
                    className={classes.filter}
                    menu={{borderless:true}}
                    panes={[
                    {
                      menuItem: 'Buscar',
                      render: () =>
                        <div className="filterOptions">
                          <div className={classes.field}>
                            <label for="type"><Icon name='square' className={classes.icon} size="large"/></label>
                            <Dropdown id="type" className={classes.dropdown} placeholder='Selecciona el tipo' search selection clearable options={arrTypes} value={typeFilterState} onChange={(event, {value}) => setTypeFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="player"><Icon name='user' className={classes.icon} size="large"/></label>
                            <Dropdown id="player" className={classes.dropdown} placeholder='Selecciona el jugador' search selection clearable options={arrPlayers} value={playerFilterState} onChange={(event, {value}) => setPlayerFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="league"><Icon name='globe' className={classes.icon} size="large"/></label>
                            <Dropdown id="league" className={classes.dropdown} placeholder='Selecciona la liga' search selection clearable options={arrLeagues} value={leagueFilterState} onChange={(event, {value}) => setLeagueFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="team"><Icon name='shield' className={classes.icon} size="large"/></label>
                            <Dropdown id="team" className={classes.dropdown} placeholder='Selecciona el equipo' search selection clearable options={arrTeams} value={teamFilterState} onChange={(event, {value}) => setTeamFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="country"><Icon name='flag' className={classes.icon} size="large"/></label>
                            <Dropdown id="country" className={classes.dropdown} placeholder='Selecciona el país' search selection clearable options={arrCountries} value={countryFilterState} onChange={(event, {value}) => setCountryFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="position"><Icon name='puzzle piece' className={classes.icon} size="large"/></label>
                            <Dropdown id="position" className={classes.dropdown} placeholder='Selecciona la posición' search selection clearable options={arrPositions} value={positionFilterState} onChange={(event, {value}) => setPositionFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="rare"><Icon name='square' className={classes.icon} size="large"/></label>
                            <Dropdown
                              id="rare"
                              className={classes.dropdown}
                              placeholder='Único'
                              search
                              selection
                              clearable
                              options={[
                                {
                                  key: 1,
                                  text: 'Sí',
                                  value: 1,
                                },
                                {
                                  key: 2,
                                  text: 'No',
                                  value: 0,
                                }
                              ]}
                              value={rareFilterState}
                              onChange={(event, {value}) => setRareFilterState({value}.value)}/>
                          </div>
                          <div className={classes.field}>
                            <label for="rare"><Icon name='square' className={classes.icon} size="large"/></label>
                            <Dropdown
                              id="special"
                              className={classes.dropdown}
                              placeholder='Especial'
                              search
                              selection
                              clearable
                              options={[
                                {
                                  key: 1,
                                  text: 'Sí',
                                  value: 1,
                                },
                                {
                                  key: 2,
                                  text: 'No',
                                  value: 0,
                                }
                              ]}
                              value={specialFilterState}
                              onChange={(event, {value}) => setSpecialFilterState({value}.value)}/>
                          </div>
                        </div>
                    },
                    {
                      menuItem: 'Ordenar',
                      render: () =>
                        <Fragment>
                          <Message
                            className={classes.message}
                            icon='info'
                            header='Estadística jugador / (Estadística portero)'
                            color='blue'
                          />
                          <div className="filterOptions">
                            <div className={classes.field}>
                              <label for="name"><Icon name='sort' className={classes.icon} size="large"/></label>
                              <Dropdown
                                id="name"
                                className={classes.dropdown}
                                placeholder='Ordenar por'
                                search
                                selection
                                clearable
                                options={[
                                  {
                                    key: 1,
                                    text: 'Nombre',
                                    value: 'name',
                                  },
                                  {
                                    key: 2,
                                    text: 'Valoración',
                                    value: 'rating',
                                  },
                                  {
                                    key: 3,
                                    text: 'Valor',
                                    value: 'value',
                                  },
                                  {
                                    key: 4,
                                    text: 'Ritmo / (Estirada)',
                                    value: 'pace',
                                  },
                                  {
                                    key: 5,
                                    text: 'Tiro / (Parada)',
                                    value: 'shooting',
                                  },
                                  {
                                    key: 6,
                                    text: 'Pase / (Saque)',
                                    value: 'passing',
                                  },
                                  {
                                    key: 7,
                                    text: 'Regate / (Reflejos)',
                                    value: 'dribbling',
                                  },
                                  {
                                    key: 8,
                                    text: 'Defensa / (Velocidad)',
                                    value: 'defending',
                                  },
                                  {
                                    key: 9,
                                    text: 'Físico / (Posicionamiento)',
                                    value: 'physicality',
                                  },
                                  {
                                    key: 10,
                                    text: 'Filigranas',
                                    value: 'skills',
                                  },
                                  {
                                    key: 11,
                                    text: 'Pierna mala',
                                    value: 'bad_leg',
                                  },
                                ]}
                                value={orderTypeState}
                                onChange={(event, {value}) => setOrderTypeState({value}.value)}/>
                            </div>
                            <div className={classes.field}>
                              <label for="order"><Icon name='sort content ascending' className={classes.icon} size="large"/></label>
                              <Dropdown
                                id="order"
                                className={classes.dropdown}
                                placeholder='Orden'
                                search
                                selection
                                clearable
                                options={[
                                  {
                                    key: 1,
                                    text: 'Mayor a menor',
                                    value: 'desc',
                                  },
                                  {
                                    key: 2,
                                    text: 'Menor a mayor',
                                    value: 'asc',
                                  }
                                ]}
                                value={orderByState}
                                onChange={(event, {value}) => setOrderByState({value}.value)}/>
                            </div>
                          </div>
                        </Fragment>
                    },
                  ]}/>

                </Modal.Content>
                <Modal.Actions>
                  <button onClick={onClickConfirmFilterButtonHandler}>Confirmar</button>
                </Modal.Actions>
              </Modal>

              {/*---------- End Filter Modal ---------------------------------------*/}

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
                <input type="number" min="1" max="99" id="rating" placeholder="Valoración" value={ratingState} onChange={(event) => setRatingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="value"><Icon name='money' className={classes.icon} size="large"/></label>
                <input type="number" min="0" id="value" placeholder="Valor" value={valueState} onChange={(event) => setValueState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="pace"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="pace" placeholder="Ritmo" value={paceState} onChange={(event) => setPaceState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="shooting"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="shooting" placeholder="Tiro" value={shootingState} onChange={(event) => setShootingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="passing"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="passing" placeholder="Pase" value={passingState} onChange={(event) => setPassingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="dribbling"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="dribbling" placeholder="Regate" value={dribblingState} onChange={(event) => setDribblingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="defending"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="defending" placeholder="Defensa" value={defendingState} onChange={(event) => setDefendingState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="physicality"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="99" id="physicality" placeholder="Físico" value={physicalityState} onChange={(event) => setPhysicalityState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="goodLeg"><Icon name='address card' className={classes.icon} size="large"/></label>
                <input type="text" id="goodLeg" placeholder="Pierna buena" value={goodLegState} onChange={(event) => setGoodLegState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="skills"><Icon name='star' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="5" id="skills" placeholder="Filigranas" value={skillsState} onChange={(event) => setSkillsState(event.target.value)}/>
              </div>
              <div className={classes.field}>
                <label for="badLeg"><Icon name='star' className={classes.icon} size="large"/></label>
                <input type="number" min="1" max="5" id="badLeg" placeholder="Pierna mala" value={badLegState} onChange={(event) => setBadLegState(event.target.value)}/>
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

export default injectSheet(styles)(Cards);
