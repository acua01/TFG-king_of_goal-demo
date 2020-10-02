/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect, useRef} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message, Modal, Pagination, Tab} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './SquadActiveStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */
  import Card from '../../../../components/Card/Card';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {showSnackbar, percentToPx} from '../../../../shared/utils';
  import {Position, ChemistryLine} from './objects';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../../shared/variables';
  import {StoreContext} from '../../../../context/StoreContext';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const SquadActive = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

  const [ratingState, setRatingState] = useState(0);
  const [chemistryState, setChemistryState] = useState(0);

  const [arrayPositionsState, setArrayPositionsState] = useState([]);
  const [arrayLinesState, setArrayLinesState] = useState([]);
  const [arrayClubCardsState, setArrayClubCardsState] = useState([]);
  const [arrayClubCardsShowState, setArrayClubCardsShowState] = useState([]);

  const [activePositionState, setActivePositionState] = useState('');
  const [interchangePositionState, setInterchangePositionState] = useState('');

  const [choosePlayerModalState, setChoosePlayerModalState] = useState(false);
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

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(10);

  const [cardMenuModalState, setCardMenuModalState] = useState(false);

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      setRatingState(state.app.squads.current.rating);
      setChemistryState(state.app.squads.current.chemistry);
    },[]);

    useEffect(() => {
      const arrayPositions = [
        Position(1, 0, 'por', 'por', '', 0, 500, 0, 0, 50, '#ff4d4d', 0),
        Position(2, 0, 'li', 'li', '', 0, 430, 0, 0, 10, '#ff4d4d', 0),
        Position(3, 0, 'dfc1', 'dfc', '', 0, 450, 0, 0, 30, '#ff4d4d', 0),
        Position(4, 0, 'dfc2', 'dfc', '', 0, 450, 0, 0, 70, '#ff4d4d', 0),
        Position(5, 0, 'ld', 'ld', '', 0, 430, 0, 0, 90, '#ff4d4d', 0),
        Position(6, 0, 'mc1', 'mc', '', 0, 260, 0, 0, 23, '#ff4d4d', 0),
        Position(7, 0, 'mco', 'mco', '', 0, 210, 0, 0, 50, '#ff4d4d', 0),
        Position(8, 0, 'mc2', 'mc', '', 0, 260, 0, 0, 77, '#ff4d4d', 0),
        Position(9, 0, 'ei', 'ei', '', 0, 70, 0, 0, 15, '#ff4d4d', 0),
        Position(10, 0, 'dc', 'dc', '', 0, 20, 0, 0, 50, '#ff4d4d', 0),
        Position(11, 0, 'ed', 'ed', '', 0, 70, 0, 0, 85, '#ff4d4d', 0),
        Position(12, 0, 'alt1', 'alt1', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(13, 0, 'alt2', 'alt2', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(14, 0, 'alt3', 'alt3', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(15, 0, 'alt4', 'alt4', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(16, 0, 'alt5', 'alt5', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(17, 0, 'alt6', 'alt6', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(18, 0, 'alt7', 'alt7', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(19, 0, 'res1', 'res1', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(20, 0, 'res2', 'res2', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(21, 0, 'res3', 'res3', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(22, 0, 'res4', 'res4', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
        Position(23, 0, 'res5', 'res5', '', 0, 0, 0, 0, 0, '#ff4d4d', 0),
      ];

      let totalRating = 0;
      let totalChemistry = 0;

      arrayPositions.map(p => {
        const card = state.app.squads.cards.find(c => {
          return p.name == c.position
        });
        
        if(card){
          p.idSquadCard = card.id;

          const clubCard = state.app.clubCards.all.find(c => {
            return card.id_club_card == c.club_card_id
          });

          if(clubCard){
            p.player = clubCard;
            if(p.name.indexOf('res') == -1){
              totalRating+=clubCard.card_rating;
            }
            
            checkPositionChemistry(p);
          }
        }       
      });

      totalRating = Math.round(totalRating/18);

      setRatingState(Math.round(totalRating));

      const heightImgCard = 115;
  
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, canvas.width, canvas.height);

      const arrayChemistryLines = [
        ChemistryLine(arrayPositions[0], arrayPositions[2], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[0], arrayPositions[3], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[1], arrayPositions[2], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[1], arrayPositions[5], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[1], arrayPositions[8], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[2], arrayPositions[3], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[2], arrayPositions[5], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[3], arrayPositions[4], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[3], arrayPositions[7], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[4], arrayPositions[7], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[4], arrayPositions[10], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[5], arrayPositions[6], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[5], arrayPositions[8], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[6], arrayPositions[7], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[6], arrayPositions[9], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[7], arrayPositions[10], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[8], arrayPositions[9], 'none', 'red', heightImgCard),
        ChemistryLine(arrayPositions[9], arrayPositions[10], 'none', 'red', heightImgCard),
      ];
      
      arrayChemistryLines.map(l => {
        checkChemistryLinesType(l);
        drawLine(context, l, heightImgCard);
      });
   
      arrayPositions.map(p => {
        checkChemistryLinesChemistry(arrayChemistryLines, p);
        totalChemistry += p.chemistry;
      });

      if(totalChemistry > 100){
        totalChemistry = 100;
      }

      setChemistryState(totalChemistry);

      setArrayPositionsState(arrayPositions);
        
      actions.updateSquadValue(totalRating, totalChemistry);

      let arrayClubCards = [];
      let arrayIdClubCards = [];
      let arrayIdSquadPlayers = [];

      arrayPositions.map(p => {
        if(p.player){
          arrayIdSquadPlayers.push(p.player.player_id);
        }       
      });

      state.app.clubCards.all.map(c => {
        if(!arrayIdClubCards.includes(c.card_id)){
          arrayIdClubCards.push(c.card_id);
          if(!arrayIdSquadPlayers.includes(c.player_id)){
            arrayClubCards.push(c);
          }        
        }
      });

      setArrayClubCardsState(arrayClubCards);
      setArrayClubCardsShowState(arrayClubCards);
    }, [state.app.squads.cards]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Filter cards
    *--------------------------------------------------------------------------
    */

    const onClickConfirmFilterButtonHandler = () => {
      let arrayResult = arrayClubCardsState.filter(card => {
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

      setArrayClubCardsShowState(arrayResult);
      setActivePageState(1);
      setFilterModalState(false);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Update squad card
    *--------------------------------------------------------------------------
    */

    const onClickClubCardHandler = card => {
      window.scrollTo(0,0);

      const playerRepeat = arrayPositionsState.find(p => {
        return card.player_id == p.player.player_id
      });

      if(!playerRepeat){
        actions.sendRequestToUpdateSquadCard({
          idSquad: state.app.squads.current.id,
          positions: [
            {
              idCard: card.club_card_id,
              idSquadCard: activePositionState.idSquadCard
            }            
          ]        
        });
      }else{
        showSnackbar('error', 'Ya hay una versión de este jugador en la plantilla');
      }    

      setChoosePlayerModalState(false);
      setCardMenuModalState(false);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Remove squad card
    *--------------------------------------------------------------------------
    */

    const onClickRemoveCardHandler = () => {
      window.scrollTo(0,0);

      actions.sendRequestToUpdateSquadCard({
        idSquad: state.app.squads.current.id,
        positions: [
          {
            idCard: null,
            idSquadCard: activePositionState.idSquadCard
          }
        ]       
      });
      setCardMenuModalState(false);
    }

    const onClickGoBackButtonHandler = () => {
      actions.sendRequestToUpdateSquad({
        id:state.app.squads.current.id,
        name:state.app.squads.current.name,
        rating:state.app.squads.current.rating,
        chemistry:state.app.squads.current.chemistry,
        idClub: state.app.authentication.club.id
      });
    }

    const onClickInterchangePositionButtonHandler = () => {
      setCardMenuModalState(false);

      const positionsHeadlines = document.querySelectorAll('#headlines .card');
      const positionsAlternates = document.querySelectorAll('#alternates .card');
      const positionsReserves = document.querySelectorAll('#reserves .card');

      for(let i = 0; i < positionsHeadlines.length; i++){
        positionsHeadlines[i].classList.remove("active");
      }

      for(let i = 0; i < positionsAlternates.length; i++){
        positionsAlternates[i].classList.remove("active");
      }

      for(let i = 0; i < positionsReserves.length; i++){
        positionsReserves[i].classList.remove("active");
      }

      document.querySelectorAll('#pos' + activePositionState.id + ' .card')[0].classList.add("active");

      setInterchangePositionState(true);
    }

    const interchangePosition = (position) => {
      const positionsHeadlines = document.querySelectorAll('#headlines .card');
      const positionsAlternates = document.querySelectorAll('#alternates .card');
      const positionsReserves = document.querySelectorAll('#reserves .card');

      for(let i = 0; i < positionsHeadlines.length; i++){
        positionsHeadlines[i].classList.remove("active");
      }

      for(let i = 0; i < positionsAlternates.length; i++){
        positionsAlternates[i].classList.remove("active");
      }

      for(let i = 0; i < positionsReserves.length; i++){
        positionsReserves[i].classList.remove("active");
      }

      let idCard;

      if(position.player){
        idCard = position.player.club_card_id;
      }else{
        idCard = null;
      }

      actions.sendRequestToUpdateSquadCard({
        idSquad: state.app.squads.current.id,  
        positions: [
          {
            idSquadCard: activePositionState.idSquadCard,
            idCard: idCard,
          },
          {
            idSquadCard: position.idSquadCard,
            idCard: activePositionState.player.club_card_id,
          },
        ],
      });

      setActivePositionState('');
      setInterchangePositionState(false);
    }

    const checkPositionChemistry = (position) => {
      if (position.position == position.player.position_abbreviation){
        position.correctPosition += 4;
        position.color = '#00cc44';
      }else{
        switch(position.position){
          case 'por':
            position.correctPosition += 1;
            break;
          case 'li':
            if (position.player.position_abbreviation == 'cai'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'dfc' || position.player.position_abbreviation == 'ld' || position.player.position_abbreviation == 'mi'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'dfc':
            if (position.player.position_abbreviation == 'li' || position.player.position_abbreviation == 'ld' || position.player.position_abbreviation == 'mcd'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'ld':
            if (position.player.position_abbreviation == 'cad'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'dfc' || position.player.position_abbreviation == 'li' || position.player.position_abbreviation == 'md'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'mc':
            if (position.player.position_abbreviation == 'mcd' || position.player.position_abbreviation == 'mco'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'mi' || position.player.position_abbreviation == 'md'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'mco':
            if (position.player.position_abbreviation == 'mc' || position.player.position_abbreviation == 'sd'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'mcd'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'ei':
            if (position.player.position_abbreviation == 'mi' || position.player.position_abbreviation == 'sdi'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'ed'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'ed':
            if (position.player.position_abbreviation == 'md' || position.player.position_abbreviation == 'sdd'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'ei'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
          case 'dc':
            if (position.player.position_abbreviation == 'sd'){
              position.correctPosition += 3;
              position.color = '#ffa31a';
            }else if(position.player.position_abbreviation == 'sdd' || position.player.position_abbreviation == 'sdi'){
              position.correctPosition += 2;
              position.color = '#ffa31a';
            }else{
              position.correctPosition += 1;
            }
            break;
        }
      }

      position.chemistry += position.correctPosition;
    }

    const checkChemistryLinesType = (line) => {
      if(line.position1.player != '' && line.position2.player != ''){
        let coincidences = 0;
        if(line.position1.player.country_id == line.position2.player.country_id){
          coincidences += 1;
        }
        if(line.position1.player.team_id == line.position2.player.team_id){
          coincidences += 2;
        }else if(line.position1.player.league_id == line.position2.player.league_id || line.position1.player.league_name == 'Iconos' || line.position2.player.league_name == 'Iconos'){
          coincidences += 1;
        }

        switch(coincidences){
          case 0:
            line.type = 'none';
            line.color = 'red';
            break;
          case 1:
            line.type = 'normal';
            line.color = 'orange';
            break;
          case 2:
            line.type = 'strong';
            line.color = '#00cc44';
            break;
          case 3:
            line.type = 'perfect';
            line.color = 'blue';
            break;
        }
      }else{
        line.type = 'none';
        line.color = 'red';
      }
    }

    const drawLine = (canvasContext, line, heightImgCard) => {
      canvasContext.beginPath();
      canvasContext.lineWidth = 3;
      canvasContext.moveTo(percentToPx(line.position1.left, canvasContext.canvas.width), line.position1.top + heightImgCard);
      canvasContext.strokeStyle = line.color;
      canvasContext.lineTo(percentToPx(line.position2.left, canvasContext.canvas.width), line.position2.top + heightImgCard);
      canvasContext.stroke();
    }
    
    const linksPlayerAround = (lines, position) => {
      var linksAround = {
        total: 0,
        none: 0,
        normal: 0,
        strong: 0,
        perfect: 0
      };
  
      for(var i = 0; i < lines.length; i ++){
        if(position.id == lines[i].position1.id || position.id == lines[i].position2.id){
          linksAround.total ++;
          switch(lines[i].type){
            case 'none':
              linksAround.none ++;
              break;
            case 'normal':
              linksAround.normal ++;
              break;
            case 'strong':
              linksAround.strong ++;
              break;
            case 'perfect':
              linksAround.perfect ++;
              break;
            default:

          }
        }
      }
      return linksAround;
    }

    const checkChemistryLinesChemistry = (lines, position) => {
      var positionLinks = linksPlayerAround(lines, position);
      var linksPower = 0;
  
      linksPower += positionLinks.normal;
      linksPower += (positionLinks.strong * 2);
      linksPower += (positionLinks.perfect * 4);
  
      if(linksPower >= positionLinks.total){
        switch(position.correctPosition){
          case 4:
            position.chemistry += 7
            break;
          case 3:
            position.chemistry += 7
            break;
          case 2:
            position.chemistry += 4
            break;
          case 1:
            position.chemistry += 2
            break;
        }
      }else if(linksPower < positionLinks.total && linksPower >= positionLinks.total/2){
        switch(position.correctPosition){
          case 4:
            position.chemistry += 3
            break;
          case 3:
            position.chemistry += 3
            break;
          case 2:
            position.chemistry += 2
            break;
          case 1:
            position.chemistry += 1
            break;
        }
      }
      if(position.chemistry > 10){
        position.chemistry = 10;
      }
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: html headlines
    *--------------------------------------------------------------------------
    */

    const htmlHeadlines = arrayPositionsState.slice(0,11).map((p, index) => {
      let htmlPlayer;

      if(Object.keys(p.player).length > 0){
        htmlPlayer = (
          <Card
            extraClasses='card'
            sizeType='mini'
            size='normal'
            type={p.player.type_image_mini}
            textColor={p.player.type_text_color}
            player={p.player.player_image}
            rating={p.player.card_rating}
            position={p.player.position_abbreviation}
            country={p.player.country_image}
            team={p.player.team_image}
            name={p.player.player_name}
            pace={p.player.card_pace}
            shooting={p.player.card_shooting}
            passing={p.player.card_passing}
            dribbling={p.player.card_dribbling}
            defending={p.player.card_defending}
            physicality={p.player.card_physicality}
            click={() => {
              if(interchangePositionState){
                interchangePosition(p);
              }else{
                setCardMenuModalState(true);
                setActivePositionState(p);
              }
            }}
          />
        );
      }else{
        htmlPlayer = (
          <img
            src={urlServer + '/storage/position_empty.png'}
            onClick={() => {
              
              if(interchangePositionState){
                interchangePosition(p);
              }else{           
                setChoosePlayerModalState(true);
                setActivePositionState(p);
              } 
            }}
          />
        );
      }

      return (
        <div
          className="position"
          id={'pos' + p.id}
          style={{
            top: p.top + 'px',
            right: p.right,
            bottom: p.bottom,
            left: p.left + '%',
          }}
        >
          {htmlPlayer}
          <div class="playerData">
            <div 
              class="divPosition"
              style={{backgroundColor:p.color}}
            >
              <p>
                {p.position}
              </p>
            </div>           
            <div class="chemistryBar">
              <span>{p.chemistry}</span>
              <div style={{width:(p.chemistry * 10) + '%'}}></div>
            </div>
          </div>
        </div>
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Description: html alternates
    *--------------------------------------------------------------------------
    */

    const htmlAlternates = arrayPositionsState.slice(11, 18).map((p, index) => {
      let htmlPlayer;

      if(Object.keys(p.player).length > 0){
        htmlPlayer = (
          <Card
            extraClasses='card'
            sizeType='mini'
            size='normal'
            type={p.player.type_image_mini}
            textColor={p.player.type_text_color}
            player={p.player.player_image}
            rating={p.player.card_rating}
            position={p.player.position_abbreviation}
            country={p.player.country_image}
            team={p.player.team_image}
            name={p.player.player_name}
            pace={p.player.card_pace}
            shooting={p.player.card_shooting}
            passing={p.player.card_passing}
            dribbling={p.player.card_dribbling}
            defending={p.player.card_defending}
            physicality={p.player.card_physicality}
            click={() => {
              if(interchangePositionState){
                interchangePosition(p);
              }else{
                setCardMenuModalState(true);
                setActivePositionState(p);
              } 
            }}
          />
        );
      }else{
        htmlPlayer = (
          <img
            src={urlServer + '/storage/position_empty.png'}
            onClick={() => {
              if(interchangePositionState){
                interchangePosition(p);
              }else{
                setChoosePlayerModalState(true);
                setActivePositionState(p);
              } 
            }}
          />
        );
      }

      return (
        <div
          className="position"
          id={'pos' + p.id}
        >
          {htmlPlayer}
        </div>
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Description: html reserves
    *--------------------------------------------------------------------------
    */

    const htmlReserves = arrayPositionsState.slice(18, 23).map((p, index) => {
      let htmlPlayer;

      if(Object.keys(p.player).length > 0){
        htmlPlayer = (
          <Card
            extraClasses='card'
            sizeType='mini'
            size='normal'
            type={p.player.type_image_mini}
            textColor={p.player.type_text_color}
            player={p.player.player_image}
            rating={p.player.card_rating}
            position={p.player.position_abbreviation}
            country={p.player.country_image}
            team={p.player.team_image}
            name={p.player.player_name}
            pace={p.player.card_pace}
            shooting={p.player.card_shooting}
            passing={p.player.card_passing}
            dribbling={p.player.card_dribbling}
            defending={p.player.card_defending}
            physicality={p.player.card_physicality}
            click={() => {
              if(interchangePositionState){
                interchangePosition(p);
              }else{
                setCardMenuModalState(true);
                setActivePositionState(p);
              } 
            }}
          />
        );
      }else{
        htmlPlayer = (
          <img
            src={urlServer + '/storage/position_empty.png'}
            onClick={() => {
              if(interchangePositionState){
                interchangePosition(p);
              }else{
                setChoosePlayerModalState(true);
                setActivePositionState(p);
              } 
            }}
          />
        );
      }

      return (
        <div
          className="position"
          id={'pos' + p.id}
        >
          {htmlPlayer}
        </div>
      )
    });

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of my club cards
    *--------------------------------------------------------------------------
    */

    const htmlClubCards = arrayClubCardsShowState.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((card, index) => {
      return (
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
          click={() => onClickClubCardHandler(card)}
        />
      )
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

    const canvasRef = useRef(null);

  /*========== END VARIABLES ================================================*/ 

  return(
    <div className={classes.squadActive}>
      <button className="goBack"
        onClick={() => {
          onClickGoBackButtonHandler();
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div className={classes.squadData}>
        <div className="title">
          <h2>{state.app.squads.current.name}</h2>
        </div>
        <div className="data">
          <div className="rating">
            <span>
              <img 
                src={urlServer + '/storage/star.png'}
                alt="Valoración"
                title="Valoración"
              />
              <span>Valoración</span>
            </span>
            <span>{ratingState}</span>
          </div>
          <div className="chemistry">
            <span>
              <img 
                src={urlServer + '/storage/chemistry.png'} 
                alt="Química"
                title="Química"
              />
              <span>Química</span>
            </span>
            <div class="chemistryBar">
              <span>{chemistryState}</span>
              <div style={{width:chemistryState + '%'}}></div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={classes.headlines}
        id="headlines"
      >
        <canvas 
          id="canvas" 
          ref={canvasRef}
          width="1000" 
          height="720"
        >
        </canvas>
        {htmlHeadlines}
      </div>

      <div className={classes.bench}>
        <div 
          className="alternates"
          id="alternates"
        >         
          <div>
            <h3>Suplentes</h3>
          </div>
          <div>
            {htmlAlternates}
          </div>
        </div>
        <div 
          className="reserves"
          id="reserves"
        >
          <div>
            <h3>Reservas</h3>
          </div>
          <div>
            {htmlReserves}
          </div>
        </div>
      </div>

      {/*---------- Choose Card Modal ------------------------------------*/}

      <Modal
        className={classes.choosePlayerModal}
        open={choosePlayerModalState}
        onClose={() => {
          setChoosePlayerModalState(false);
        }}
      >
        <Modal.Content>

        <button onClick={() => setFilterModalState(true)}>
          <Icon name='filter'/>
          <span>Filtrar</span>
        </button>

        {arrayClubCardsShowState.length > 0 ?
          <Fragment>
            {/*---------- Cards ----------------------------------------------*/}

            <div className="cardsContainer">
              {htmlClubCards}
            </div>

            {/*---------- End Cards ------------------------------------------*/}

            {/*---------- Pagination -----------------------------------------*/}

            {Math.ceil(arrayClubCardsShowState.length / itemsPerPageState) > 1 ?
              <Pagination
                className={classes.pagination}
                defaultActivePage={activePageState}
                activePage={activePageState}
                totalPages={Math.ceil(arrayClubCardsShowState.length / itemsPerPageState)}
                onClick={() => window.scrollTo(0,0)}
                onPageChange={(event, {activePage}) => setActivePageState(activePage)}
              />
            :
              null
            }

            {/*---------- End Pagination -------------------------------------*/}

          </Fragment>
        :
          <Message
            className={classes.message}
            icon='info'
            header='No se ha encontrado ninguna carta.'
            color='yellow'
          />
        }
        </Modal.Content>
        <Modal.Actions>
          <button onClick={() => setChoosePlayerModalState(false)}>Cerrar</button>
        </Modal.Actions>
      </Modal>

      {/*---------- End Choose Card Modal --------------------------------*/}

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

      {/*---------- Card Menu Modal ------------------------------------*/}

      {activePositionState ? 
        
        <Modal
          className={classes.cardMenuModal}
          size='mini' open={cardMenuModalState}
          onClose={() => setCardMenuModalState(false)}
        >
          <Modal.Content>
            <Card
              type={activePositionState.player.type_image}
              textColor={activePositionState.player.type_text_color}
              player={activePositionState.player.player_image}
              rating={activePositionState.player.card_rating}
              position={activePositionState.player.position_abbreviation}
              country={activePositionState.player.country_image}
              team={activePositionState.player.team_image}
              name={activePositionState.player.player_name}
              pace={activePositionState.player.card_pace}
              shooting={activePositionState.player.card_shooting}
              passing={activePositionState.player.card_passing}
              dribbling={activePositionState.player.card_dribbling}
              defending={activePositionState.player.card_defending}
              physicality={activePositionState.player.card_physicality}
            />
            <div className="options">
              <div onClick={() => onClickRemoveCardHandler()}>Quitar de la plantilla</div>
              <div
                onClick={() => {
                  setChoosePlayerModalState(true);
                }}
              >
                Cambiar jugador
              </div>
              <div
                onClick={() => {
                  onClickInterchangePositionButtonHandler();
                }}
              >
                Intercambiar posición
              </div>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <button onClick={() => setCardMenuModalState(false)}>Cerrar</button>
          </Modal.Actions>
        </Modal>
      :
        null
      }      

      {/*---------- End Card Menu Modal --------------------------------*/}

      <button className="goBack"
        onClick={() => {
          onClickGoBackButtonHandler();
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>
    </div>
  );
}

export default injectSheet(styles)(SquadActive);
