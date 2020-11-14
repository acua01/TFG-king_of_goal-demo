/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect} from 'react';
  import {Message, Pagination} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './PackOpeningStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */
  import Card from '../../../../components/Card/Card';
  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */
  import {StoreContext} from '../../../../context/StoreContext';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const PackOpening = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);

  const [cardsArrayState, setCardsArrayState] = useState([]);

  const [viewState, setViewState] = useState('Player');
  const [firstCardState, setFirstCardState] = useState({});

  const [activePageState, setActivePageState] = useState(1);
  const [itemsPerPageState, setItemsPerPageState] = useState(12);

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      let arrayCards = state.app.packCards.all;

      arrayCards.sort((a, b) => {
        if(a.card_rating < b.card_rating) {
          return 1;
        }
        if(a.card_rating > b.card_rating) {
          return -1;
        }
        return 0;
      });

      setCardsArrayState(arrayCards);

    },[state.app.packCards.all]);

    useEffect(() => {
      const firstCard = cardsArrayState.find((c, index) => {
        return index == 0;
      });

      if(firstCard){
        setFirstCardState(firstCard);
      }

    },[cardsArrayState]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Save cards
    *--------------------------------------------------------------------------
    */

    const saveCardsButtonHandler = () => {
      const arrayIdCards = [];

      state.app.packCards.all.map(c => {
        arrayIdCards.push(c.card_id);
      });

      actions.sendRequestToSaveCards({
        idClub: state.app.authentication.club.id,
        idCards: arrayIdCards
      });
      changeView('Packs');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Contains the HTML of the cards
    *--------------------------------------------------------------------------
    */

    const htmlCards = cardsArrayState.slice(itemsPerPageState * activePageState - itemsPerPageState, itemsPerPageState * activePageState).map((card, index) => {
      return (
        <Card
          key={index}
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

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.packOpening}>
    
      {viewState == 'Player' ?
        <div className={classes.playerView}>
          {Object.keys(firstCardState).length > 0 ?
            <Card
              size='big'
              type={firstCardState.type_image}
              textColor={firstCardState.type_text_color}
              player={firstCardState.player_image}
              rating={firstCardState.card_rating}
              position={firstCardState.position_abbreviation}
              country={firstCardState.country_image}
              team={firstCardState.team_image}
              name={firstCardState.player_name}
              pace={firstCardState.card_pace}
              shooting={firstCardState.card_shooting}
              passing={firstCardState.card_passing}
              dribbling={firstCardState.card_dribbling}
              defending={firstCardState.card_defending}
              physicality={firstCardState.card_physicality}
            />
          :
            null  
          }

          <button
            onClick={() => setViewState('PlayersList')}
          >
            Saltar
          </button>
        </div>

      :viewState == 'PlayersList' ?

        <div className={classes.playersListView}>
          <div>
          {state.app.packCards.all.length > 0 ?
            <Fragment>         

              {/*---------- Cards ----------------------------------------------*/}

              <div className="cardsList">
                {htmlCards}
              </div>

              {/*---------- End Cards ------------------------------------------*/}

              {/*---------- Pagination -----------------------------------------*/}

              {Math.ceil(cardsArrayState.length / itemsPerPageState) > 1 ?
                <Pagination
                  className={classes.pagination}
                  defaultActivePage={activePageState}
                  activePage={activePageState}
                  totalPages={Math.ceil(cardsArrayState.length / itemsPerPageState)}
                  onClick={() => window.scrollTo(0,0)}
                  onPageChange={(event, {activePage}) => setActivePageState(activePage)}
                />
              :
                null
              }

              {/*---------- End Pagination -------------------------------------*/}

              <button
                onClick={() => saveCardsButtonHandler()}
              >
                Guardar todo
              </button>

            </Fragment>            
          :
            <Message
              className={classes.message}
              icon='info'
              header='No se ha encontrado ninguna carta.'
              color='yellow'
            />
          }
            
          </div>
        </div>
      :
        null
      }
    </div>
  );
}

export default injectSheet(styles)(PackOpening);
