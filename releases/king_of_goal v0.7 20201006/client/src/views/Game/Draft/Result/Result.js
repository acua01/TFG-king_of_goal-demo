/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message, Modal} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './ResultStyles';
  /* END JSS */

  /* Routes */
  
  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */
  import {moneyFormat} from '../../../../shared/utils';
  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../../../shared/variables';
  import {StoreContext} from '../../../../context/StoreContext';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Result = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

  const [coinsRewardState, setCoinsRewardState] = useState(0);

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

    const totalPoints = state.app.draft.rating + state.app.draft.chemistry;

    let coins = 0;

    if(totalPoints < 186){
      coins = 1000;
    }else if(totalPoints == 186){
      coins = 2000;
    }else if(totalPoints == 187){
      coins = 3000;
    }else if(totalPoints == 188){
      coins = 4000;
    }else if(totalPoints == 189){
      coins = 5000;
    }else if(totalPoints == 190){
      coins = 6000;
    }else if(totalPoints == 191){
      coins = 7000;
    }else if(totalPoints == 192){
      coins = 8000;
    }else if(totalPoints == 193){
      coins = 9000;
    }else if(totalPoints == 194){
      coins = 10000;
    }else if(totalPoints == 195){
      coins = 11000;
    }else if(totalPoints == 196){
      coins = 12000;
    }else if(totalPoints == 197){
      coins = 13000;
    }else if(totalPoints == 198){
      coins = 14000;
    }else if(totalPoints == 199){
      coins = 15000;
    }

    setCoinsRewardState(coins);
  },[]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Reward
    *--------------------------------------------------------------------------
    */

    const onClickRewardButtonHandler = () => {
      window.scrollTo(0,0);

      actions.sendRequestToUpdateCoins({
        idClub: state.app.authentication.club.id,
        coins: coinsRewardState
      });

      history.push('/inicio');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.result}>
      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div>
        <h1>Resultado</h1>

        <div className="resultData">
          <div className="rating">
            <div>
              <img 
                src={urlServer + '/storage/star.png'}
                alt="Valoración"
                title="Valoración"
              />
            </div>
            <div>
              <span>{state.app.draft.rating}</span>
            </div>                       
          </div>

          <hr/>

          <div className="chemistry">
            <div>
              <img 
                src={urlServer + '/storage/chemistry.png'} 
                alt="Química"
                title="Química"
              />
            </div>
            <div>
              <span>{state.app.draft.chemistry}</span>
            </div>            
          </div>

          <hr/>

          <div className="total">
            <div>
              <span>Total</span>
            </div>
            <div>
              <span>{state.app.draft.rating + state.app.draft.chemistry}</span>
            </div>          
          </div>

          <hr/>

          <div className="coins">
            <div>
              <img 
                src={urlServer + '/storage/coins.png'} 
                alt="Monedas"
                title="Monedas"
              />
            </div>
            <div>
              <span>{moneyFormat(coinsRewardState)}</span>
            </div>           
          </div>
        </div>
        
        <button className="reward"
          onClick={() => {
            onClickRewardButtonHandler();
          }}
        >
          Recoger recompensa
        </button>
      </div>

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

export default injectSheet(styles)(Result);
