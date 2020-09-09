/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React, {Fragment, useContext, useState, useEffect} from 'react';
  import {useHistory} from 'react-router-dom';
  import {Icon, Dropdown, Message, Modal} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  /* End React's packages */

  /* JSS */
  import styles from './PacksStyles';
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

const Packs = props => {

  const {classes, changeView} = props;
  const {state, actions} = useContext(StoreContext);
  const history = useHistory();

  const [buyModalState, setBuyModalState] = useState(false);

  const [activePackState, setActivePackState] = useState({});

  /*========== USE EFFECT ===================================================*/

    useEffect(() => {
      actions.setBreadcrumb([
        {
          name: 'Inicio',
          path: '/inicio'
        },
        {
          name: 'Tienda',
          path: '/inicio/tienda'
        },
      ]);
    },[]);

  /*========== END USE EFFECT ===============================================*/

  /*========== FUNCTIONS ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Buy the pack
    *--------------------------------------------------------------------------
    */

    const buyPackButtonHandler = () => {
      actions.sendRequestToOpenPack({
        idClub: state.app.authentication.club.id,
        numberPlayers: activePackState.number_players,
        packPrice: activePackState.price
      });
      setBuyModalState(false)
      changeView('PackOpening');
    }

  /*========== END FUNCTIONS ================================================*/

  /*========== VARIABLES ====================================================*/

    const htmlPacks = state.app.packs.all.map((p, index) => {
      return (
        <div
          id={index}
          key={index}
        >
          <h2>{p.name}</h2>

          {p.description ? 
            <p>{p.description}</p>
          : 
          null}

          <img 
            src={urlServer + p.image} 
            alt={p.name}
            title={p.name}
          />
          <div className="content">
            <Icon name="user" title="Jugadores"/>
            <span>{'x ' + p.number_players}</span>
          </div>
          <div className="price">
            <span>{moneyFormat(p.price)}</span>
            <img 
              src={urlServer + '/storage/coins.png'} 
              alt="Monedas"
              title="Monedas"
            />
          </div>
          <button
            onClick={() => {
              setActivePackState(p);
              setBuyModalState(true);
            }}
          >
            Abrir
          </button>
        </div>
      )
    });

  /*========== END VARIABLES ================================================*/

  return(
    <div className={classes.packs}>
      <button className="goBack"
        onClick={() => {
          history.push('/inicio');
        }}
      >
        <Icon name='reply'/>
      </button>

      <div>
        <h1>Tienda</h1>

        <div className={classes.packsList}>
          {state.app.packs.all.length > 0 ?
            <Fragment>
              {htmlPacks}
            </Fragment>            
          :
            <Message
              className={classes.message}
              icon='info'
              header='No hay ningún sobre disponible.'
              color='yellow'
            />
          }
          
        </div>
      </div>

        {/*---------- Buy Confirm Modal ------------------------------------------*/}

        <Modal className={classes.buyModal} size='mini' open={buyModalState} onClose={() => setBuyModalState(false)}>
          <Modal.Content>
            <p>
              ¿Seguro que quieres abrir este sobre por 
              <span>
                <span> {moneyFormat(activePackState.price)}</span>
                <img src={urlServer + '/storage/coins.png'} alt="coins"/>
              </span>
              ?
            </p>
          </Modal.Content>
          <Modal.Actions>
            <button onClick={() => buyPackButtonHandler()}>Sí</button>
            <button onClick={() => setBuyModalState(false)}>No</button>
          </Modal.Actions>
        </Modal>

        {/*---------- Buy Confirm End Modal --------------------------------------*/}

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

export default injectSheet(styles)(Packs);
