/*
*=============================================================================
* Title: Card.js
* Created on: 23/04/2020 by Acua
* Copyright: Acua. All Rights Reserved.
*==============================================================================
* Description: Render a card
*==============================================================================
* Constant: Card
*==============================================================================
*/

/*========== IMPORTS ========================================================*/

  /* React's packages */
  import React from 'react';
  import {Icon} from 'semantic-ui-react';
  import injectSheet from 'react-jss';
  import classNames from 'classnames';
  /* End React's packages */

  /* JSS */
  import styles from './CardStyles';
  /* END JSS */

  /* Routes */

  /* End Routes */

  /* Custom Components */

  /* End Custom Components */

  /* Custom Modules */

  /* End Custom Modules */

  /* Custom Functions */

  /* End Custom Functions */

  /* Custom Variables */
  import {urlServer} from '../../shared/variables';
  /* End Custom Variables */

  /* Custom Styles Variables */

  /* End Custom Styles Variables */

/*========== END IMPORTS ====================================================*/

const Card = props => {

  const {classes, click, size, extraClasses, type, textColor, player, rating, position, country, team, name, pace, shooting, passing, dribbling, defending, physicality} = props;

  /*========== VARIABLES ====================================================*/

    /*
    *--------------------------------------------------------------------------
    * Description: Card styles
    *--------------------------------------------------------------------------
    */

    let cardStyles = {};

    if(size == 'normal'){
      cardStyles = {
        card: {
          backgroundImage:'url("' + urlServer + type + '")', 
          color:textColor,
          width:'165px',
          height:'231px',
          backgroundSize:'100%',
        },
        player:{
          width:'83px',     
          top:'37px',
          left:'59px',
        },
        rating:{
          top:'36px',
          left:'36px',
          fontSize:'28px'
        },
        position:{
          width:'28px',
          top:'56px',
          left:'33px',
        },
        country:{
          width:'20px',      
          top:'76px',
          left:'37px',
        },
        team:{
          height:'25px',     
          top:'91px',
          left:'35px',
        },
        name:{
          top:'122px',
          fontSize:'16px', 
        },
        stats:{
          top:'142px',
          fontSize:'15px',
        },
        pace:{
          top:0,
          left:'38px'
        },
        dribbling:{
          top:0,
          left:'95px'
        },
        shooting:{
          top:'15px',
          left:'38px'
        },
        defending:{
          top:'15px',
          left:'95px'
        },
        passing:{
          top:'30px',
          left:'38px'
        },
        physicality:{
          top:'30px',
          left:'95px'
        }
      }
    }else if(size == 'big'){
      cardStyles = {
        card: {
          backgroundImage:'url("' + urlServer + type + '")', 
          color:textColor,
          width:'265px',
          height:'371px',
          backgroundSize:'100%',
        },
        player:{
          width:'133px',     
          top:'59px',
          left:'95px',
        },
        rating:{
          top:'63px',
          left:'61px',
          fontSize:'45px'
        },
        position:{
          width:'45px',
          top:'96px',
          left:'55px',
          fontSize:'22px'
        },
        country:{
          width:'32px',      
          top:'121px',
          left:'61px',
        },
        team:{
          height:'40px',     
          top:'150px',
          left:'58px',
        },
        name:{
          top:'200px',
          fontSize:'26px', 
        },
        stats:{
          top:'232px',
          fontSize:'24px',
        },
        pace:{
          top:0,
          left:'61px'
        },
        dribbling:{
          top:0,
          left:'152px'
        },
        shooting:{
          top:'24px',
          left:'61px'
        },
        defending:{
          top:'24px',
          left:'152px'
        },
        passing:{
          top:'48px',
          left:'61px'
        },
        physicality:{
          top:'48px',
          left:'152px'
        }
      }
    }

  /*========== END VARIABLES ================================================*/

  return(
    <div
      className={classNames(classes.card, extraClasses)}
      onClick={click}
      style={cardStyles.card}
    >
      <img 
        className="player" 
        src={urlServer + player}
        style={cardStyles.player}
      />
      <span 
        className="rating"
        style={cardStyles.rating}
      >
        {rating}
      </span>
      <div 
        className="position"
        style={cardStyles.position}
      >
        <span>{position}</span>
      </div>
      <img 
        className="country" 
        src={urlServer + country}
        style={cardStyles.country}
      />
      <img 
        className="team" 
        src={urlServer + team}
        style={cardStyles.team}
      />
      <div 
        className="name"
        style={cardStyles.name}
      >
        <span>{name}</span>
      </div>
      <div 
        className="stats"
        style={cardStyles.stats}
      >
        <span 
          className="pace"
          style={cardStyles.pace}
        >
          <span>{pace}</span>{position === 'por' ? ' est' : ' rit'}
        </span>
        <span 
          className="dribbling"
          style={cardStyles.dribbling}
        >
          <span>{dribbling}</span>{position === 'por' ? ' ref' : ' reg'}
        </span>
        <span 
          className="shooting"
          style={cardStyles.shooting}
        >
          <span>{shooting}</span>{position === 'por' ? ' par' : ' tir'}
        </span>
        <span 
          className="defending"
          style={cardStyles.defending}
        >
          <span>{defending}</span>{position === 'por' ? ' vel' : ' def'}
        </span>
        <span 
          className="passing"
          style={cardStyles.passing}
        >
          <span>{passing}</span>{position === 'por' ? ' saq' : ' pas'}
        </span>
        <span 
          className="physicality"
          style={cardStyles.physicality}
        >
          <span>{physicality}</span>{position === 'por' ? ' pos' : ' fis'}
        </span>
      </div>
    </div>
  );
}

Card.defaultProps = {
  size: 'normal'
};

export default injectSheet(styles)(Card);
