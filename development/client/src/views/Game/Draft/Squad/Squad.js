/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect, useRef} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message, Modal, Pagination, Tab} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './SquadStyles';
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

const Squad = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

  const [ratingState, setRatingState] = useState(0);
  const [chemistryState, setChemistryState] = useState(0);

  const [arrayPositionsState, setArrayPositionsState] = useState([]);
  const [arraySelectionCardsState, setArraySelectionCardsState] = useState([]);

  const [activePositionState, setActivePositionState] = useState('');
  const [interchangePositionState, setInterchangePositionState] = useState(false);

  const [choosePlayerModalState, setChoosePlayerModalState] = useState(false);  

  const [cardMenuModalState, setCardMenuModalState] = useState(false);

  const [draftFinishedState, setDraftFinishedState] = useState(false);

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Inicio',
          path: '/inicio'
        },
        {
          name: 'Draft',
          path: '/inicio/draft'
        },
      ]);
      
      actions.startDraft();
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

      setArrayPositionsState(arrayPositions);

      let totalRating = 0;
      let totalChemistry = 0;

      arrayPositions.map(p => {
        const cardPosition = state.app.draft.cards.find(c => {
          return p.name == c.position
        });
        
        if(cardPosition){
          p.idSquadCard = cardPosition.id;

          const card = state.app.cards.all.find(c => {
            return cardPosition.id_card == c.card_id
          });

          if(card){
            p.player = card;
            if(p.name.indexOf('res') == -1){
              totalRating+=card.card_rating;
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
        
      actions.updateDraftRating(totalRating);
      actions.updateDraftChemistry(totalChemistry);

      let draftFinishedFlag = true;

      arrayPositions.map(p => {
        if(!p.player){
          draftFinishedFlag = false;
        }
      });

      if(draftFinishedFlag){
        const button = document.getElementById('finishButton');
        button.classList.remove("disabled");

        setDraftFinishedState(true);
      }

    }, [state.app.draft.cards]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Update squad card
    *--------------------------------------------------------------------------
    */

    const getRandomCards = (position) => {
      let arraySelection = []; 
      let arrayIdCards = [];    
      let arrayIdSquadPlayers = [];

      arrayPositionsState.map(p => {
        if(p.player){
          arrayIdSquadPlayers.push(p.player.player_id);
        }
      });

      const arrayCards = state.app.cards.all.filter(c => {
        if(position.position == 'por'){
          return c.position_abbreviation == 'por';
        }else if(position.position == 'li'){
          return c.position_abbreviation == 'li' || c.position_abbreviation == 'cai';
        }else if(position.position == 'dfc'){
          return c.position_abbreviation == 'dfc'
        }else if(position.position == 'ld'){
          return c.position_abbreviation == 'ld' || c.position_abbreviation == 'cad';
        }else if(position.position == 'mc'){
          return c.position_abbreviation == 'mc' || c.position_abbreviation == 'mco' || c.position_abbreviation == 'mcd';
        }else if(position.position == 'mco'){
          return c.position_abbreviation == 'mco' || c.position_abbreviation == 'mc' || c.position_abbreviation == 'sd';
        }else if(position.position == 'ei'){
          return c.position_abbreviation == 'ei' || c.position_abbreviation == 'mi' || c.position_abbreviation == 'sdi';
        }else if(position.position == 'dc'){
          return c.position_abbreviation == 'dc' || c.position_abbreviation == 'sd';
        }else if(position.position == 'ed'){
          return c.position_abbreviation == 'ed' || c.position_abbreviation == 'md' || c.position_abbreviation == 'sdd';
        }else if(position.position == 'alt1'){
          return c.position_abbreviation == 'por';
        }else if(position.position == 'alt2' || position.position == 'alt3'){
          return c.position_abbreviation == 'dfc' || c.position_abbreviation == 'li' || c.position_abbreviation == 'cai' || c.position_abbreviation == 'ld' || c.position_abbreviation == 'cad';
        }else if(position.position == 'alt4' || position.position == 'alt5'){
          return c.position_abbreviation == 'mcd' || c.position_abbreviation == 'mc' || c.position_abbreviation == 'mco' || c.position_abbreviation == 'mi' || c.position_abbreviation == 'md';
        }else if(position.position == 'alt6' || position.position == 'alt7'){
          return c.position_abbreviation == 'ei' || c.position_abbreviation == 'sdi' || c.position_abbreviation == 'dc' || c.position_abbreviation == 'sd' || c.position_abbreviation == 'ed' || c.position_abbreviation == 'sdd';
        }else if(position.position.indexOf('res') != -1){
          return true;
        }
      });
      
      for(let i = 0; i < 5; i++){
        const nRandom = Math.floor(Math.random() * arrayCards.length);

        const cardRandom = arrayCards[nRandom];

        if(!arrayIdCards.includes(cardRandom.card_id)){
          arrayIdCards.push(cardRandom.card_id);
          if(!arrayIdSquadPlayers.includes(cardRandom.player_id)){
            arraySelection.push(cardRandom);
          }else{
            i--;
          }
        }else{
          i--;
        }
      }
      
      setArraySelectionCardsState(arraySelection);
    }

    /*
    *--------------------------------------------------------------------------
    * Description: Update squad card
    *--------------------------------------------------------------------------
    */
    
    const onClickSelectionCardHandler = card => {
      const playerRepeat = arrayPositionsState.find(p => {
        return card.player_id == p.player.player_id
      });

      if(!playerRepeat){        
        const arrayPositions = [...arrayPositionsState];
        const arrayPositionsReducer = [];

        arrayPositions.map(p => {
          if(p.id == activePositionState.id){
            p.player = card;
          }

          arrayPositionsReducer.push({
            id: p.id,
            position: p.name,
            id_card: p.player.card_id ? p.player.card_id : null
          });
        });

        actions.setDraftCards(arrayPositionsReducer);
        setArrayPositionsState(arrayPositions);
      }else{
        showSnackbar('error', 'Ya hay una versión de este jugador en la plantilla');
      }    
      setChoosePlayerModalState(false);
    }

    const onClickGoBackButtonHandler = () => {
 
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

      const aux = {...activePositionState};

      const card1 = aux.player;

      let card2;

      if(position.player){
        card2 = position.player;
      }else{
        card2 = null;
      }

      if(card2){
        const arrayPositions = [];
        const arrayPositionsReducer = [];

        arrayPositionsState.map(p => {
          let object = {...p};

          if(p.id == aux.id){
            object.player = card2;
          }

          if(p.id == position.id){
            object.player = card1;
          }

          arrayPositionsReducer.push({
            id: object.id,
            position: object.name,
            id_card: object.player.card_id ? object.player.card_id : null
          });

          arrayPositions.push(object);
        });

        setArrayPositionsState(arrayPositions);

        actions.setDraftCards(arrayPositionsReducer);
        
      }
            
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
                getRandomCards(p);
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
                getRandomCards(p);
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
                getRandomCards(p);
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
    * Description: Contains the HTML of the player selection
    *--------------------------------------------------------------------------
    */

    const htmlSelectionCards = arraySelectionCardsState.map((card, index) => {
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
          click={() => onClickSelectionCardHandler(card)}
        />
      )
    });

    const canvasRef = useRef(null);

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.squad}>
      <button className="goBack"
        onClick={() => {
          //onClickGoBackButtonHandler();
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div className={classes.squadData}>
        <div className="title">
          <h2>Draft</h2>
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
        <button className="finish disabled"
          id="finishButton"
          onClick={() => {
            if(draftFinishedState){
              changeView('Result');
            }           
          }}
        >
          Finalizar
        </button>
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
      >
        <Modal.Content>
          <div className="cardsContainer">
            {htmlSelectionCards}
          </div>
        </Modal.Content>
      </Modal>

      {/*---------- End Choose Card Modal --------------------------------*/}

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
          //onClickGoBackButtonHandler();
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>
    </div>
  );
}

export default injectSheet(styles)(Squad);
