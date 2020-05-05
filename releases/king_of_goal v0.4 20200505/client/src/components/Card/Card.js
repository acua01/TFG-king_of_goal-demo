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

  const {classes, click, extraClasses, type, textColor, player, rating, position, country, team, name, pace, shooting, passing, dribbling, defending, physicality} = props;

  /*========== VARIABLES ====================================================*/

  /*========== END VARIABLES ================================================*/

  return(
    <div
      className={classNames(classes.card, extraClasses)}
      onClick={click}
      style={{'background-image':'url("' + urlServer + type + '")', 'color':textColor}}
    >
      <img className="player" src={urlServer + player}/>
      <span className="rating">{rating}</span>
      <div className="position">
        <span >{position}</span>
      </div>
      <img className="country" src={urlServer + country}/>
      <img className="team" src={urlServer + team}/>
      <div className="name"><span>{name}</span></div>
      <div className="stats">
        <span className="pace">
          <span>{pace}</span>{position === 'por' ? ' est' : ' rit'}
        </span>
        <span className="dribbling">
          <span>{dribbling}</span>{position === 'por' ? ' ref' : ' reg'}
        </span>
        <span className="shooting">
          <span>{shooting}</span>{position === 'por' ? ' par' : ' tir'}
        </span>
        <span className="defending">
          <span>{defending}</span>{position === 'por' ? ' vel' : ' def'}
        </span>
        <span className="passing">
          <span>{passing}</span>{position === 'por' ? ' saq' : ' pas'}
        </span>
        <span className="physicality">
          <span>{physicality}</span>{position === 'por' ? ' pos' : ' fis'}
        </span>
      </div>
    </div>
  );
}

export default injectSheet(styles)(Card);
