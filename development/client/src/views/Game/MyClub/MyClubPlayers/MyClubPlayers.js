/*
*=============================================================================
* Title: MyClubPlayers.js
* Created on: 02/04/2020  by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render my club players
*==============================================================================
* Constant: MyClubPlayers
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useState, useEffect} from 'react';
  import injectSheet from 'react-jss';
  import {Icon, Modal, Dropdown, Pagination, Tab, Message} from 'semantic-ui-react';
  /* End React's packages */

  /* JSS */
  import styles from './MyClubPlayersStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */
  import Card from '../../../../components/Card/Card';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar, moneyFormat} from '../../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const MyClubPlayers = props => {

  const {classes, history, actions, state} = props;

  const [arrayCardsState, setArrayCardsState] = useState([]);

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(12);

  const [filterModalState, setFilterModalState] = useState(false);
  const [cardMenuModalState, setCardMenuModalState] = useState(false);
  const [cardDataModalState, setCardDataModalState] = useState(false);

  const [activeCardState, setActiveCardState] = useState({});

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
    setArrayCardsState(state.app.clubCards.all);
  },[state.app.clubCards.all]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Name: onClickConfirmFilterButtonHandler
    *--------------------------------------------------------------------------
    * Description: Filter cards
    *--------------------------------------------------------------------------
    * Created on: 03/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const onClickConfirmFilterButtonHandler = () => {
      let arrayResult = state.app.clubCards.all.filter(card => {
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
    * Name: htmlCards
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of my club cards
    *--------------------------------------------------------------------------
    * Created on: 30/04/2020 by Acua
    *--------------------------------------------------------------------------
    */

    const htmlCards = arrayCardsState.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((card, index) => {
      return (
        <Card
          click={() => {
            setActiveCardState(card);
            setCardMenuModalState(true);
          }}
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
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Name: arrTypes
    *--------------------------------------------------------------------------
    * Description: Contains the types of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 21/04/2020 by Acua
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
    * Name: arrPlayers
    *--------------------------------------------------------------------------
    * Description: Contains the players of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 21/04/2020 by Acua
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
        image: {avatar: false, src: urlServer + league.image},
        value: league.id,
      });
    });

    /*
    *--------------------------------------------------------------------------
    * Name: arrTeams
    *--------------------------------------------------------------------------
    * Description: Contains the teams of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 21/04/2020 by Acua
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
    * Name: arrCountries
    *--------------------------------------------------------------------------
    * Description: Contains the countries of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 21/04/2020 by Acua
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
    * Name: arrPositions
    *--------------------------------------------------------------------------
    * Description: Contains the positions of the dropdown
    *--------------------------------------------------------------------------
    * Created on: 21/04/2020 by Acua
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
    <div className={classes.myClubPlayers}>
      <h1>Jugadores</h1>

      <button onClick={() => setFilterModalState(true)}>
        <Icon name='filter'/>
        <span>Filtrar</span>
      </button>

      {arrayCardsState.length > 0 ?
        <Fragment>
          {/*---------- Cards ----------------------------------------------*/}

          <div className={classes.cardsContainer}>
            {htmlCards}
          </div>

          {/*---------- End Cards ------------------------------------------*/}

          {/*---------- Pagination -----------------------------------------*/}

          {Math.ceil(arrayCardsState.length / itemsPerPageState) > 1 ?
            <Pagination
              className={classes.pagination}
              defaultActivePage={activePageState}
              activePage={activePageState}
              totalPages={Math.ceil(arrayCardsState.length / itemsPerPageState)}
              onClick={() => window.scrollTo(0,0)}
              onPageChange={(event, {activePage}) => setActivePageState(activePage)}
            />
          :
            null
          }

          {/*---------- End Pagination -------------------------------------*/}

          {/*---------- Card Menu Modal ------------------------------------*/}

          <Modal
            className={classes.cardMenuModal}
            size='mini' open={cardMenuModalState}
            onClose={() => setCardMenuModalState(false)}
          >
            <Modal.Content>
              <Card
                type={activeCardState.type_image}
                textColor={activeCardState.type_text_color}
                player={activeCardState.player_image}
                rating={activeCardState.card_rating}
                position={activeCardState.position_abbreviation}
                country={activeCardState.country_image}
                team={activeCardState.team_image}
                name={activeCardState.player_name}
                pace={activeCardState.card_pace}
                shooting={activeCardState.card_shooting}
                passing={activeCardState.card_passing}
                dribbling={activeCardState.card_dribbling}
                defending={activeCardState.card_defending}
                physicality={activeCardState.card_physicality}
              />
              <div className="options">
                <div onClick={() => {setCardDataModalState(true);setCardMenuModalState(false)}}>Ver datos</div>
                <div>Vender</div>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <button onClick={() => setCardMenuModalState(false)}>Cerrar</button>
            </Modal.Actions>
          </Modal>

          {/*---------- End Card Menu Modal --------------------------------*/}

          {/*---------- Card Data Modal ------------------------------------*/}

          <Modal
            className={classes.cardDataModal}
            size='mini' open={cardDataModalState}
            onClose={() => setCardDataModalState(false)}
          >
            <Modal.Content>
              <div className="cardContainer">
                <Card
                  type={activeCardState.type_image}
                  textColor={activeCardState.type_text_color}
                  player={activeCardState.player_image}
                  rating={activeCardState.card_rating}
                  position={activeCardState.position_abbreviation}
                  country={activeCardState.country_image}
                  team={activeCardState.team_image}
                  name={activeCardState.player_name}
                  pace={activeCardState.card_pace}
                  shooting={activeCardState.card_shooting}
                  passing={activeCardState.card_passing}
                  dribbling={activeCardState.card_dribbling}
                  defending={activeCardState.card_defending}
                  physicality={activeCardState.card_physicality}
                />
              </div>
              <div className="dataContainer">
                <div>
                  <div>
                    <h2>Nombre completo</h2>
                    <p>{activeCardState.player_full_name}</p>
                  </div>
                  <div>
                    <h2>Fecha de nacimiento</h2>
                    <p>{activeCardState.player_birth}</p>
                  </div>
                  <div>
                    <h2>Valor</h2>
                    <p>
                      <span>{moneyFormat(activeCardState.card_value)}</span>
                      <img src={urlServer + '/storage/coins.png'} alt="coins"/>
                    </p>
                  </div>
                  <div>
                    <h2>Pierna buena</h2>
                    <p>{activeCardState.card_good_leg}</p>
                  </div>
                  <div>
                    <h2>Filigranas</h2>
                    <p>
                      <span>{activeCardState.card_skills}</span>
                      <img src={urlServer + '/storage/star.png'} alt="star" width="18"/>
                    </p>
                  </div>
                  <div>
                    <h2>Habilidad pierna mala</h2>
                    <p>
                      <span>{activeCardState.card_bad_leg}</span>
                      <img src={urlServer + '/storage/star.png'} alt="star" width="18"/>
                    </p>
                  </div>
                </div>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <button onClick={() => setCardDataModalState(false)}>Cerrar</button>
            </Modal.Actions>
          </Modal>

          {/*---------- End Card Data Modal --------------------------------*/}

        </Fragment>
      :
        <Message
          className={classes.message}
          icon='info'
          header='No se ha encontrado ninguna carta.'
          color='blue'
        />
      }

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

    </div>
  )
}

export default injectSheet(styles)(MyClubPlayers);
