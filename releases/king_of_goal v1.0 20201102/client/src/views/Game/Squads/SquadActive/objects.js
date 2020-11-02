import {percentToPx} from '../../../../shared/utils';

export const Position = (id, idSquadCard, name, position, player, chemistry, top, right, bottom, left, color, correctPosition) => {
  const obj = {
    id,
    idSquadCard,
    name,
    position,
    player,
    chemistry,
    top,
    right,
    bottom,
    left,
    color,
    correctPosition
  }

  return obj;
}

export const ChemistryLine = (position1, position2, type, color, heightImgCard) => {
  const obj = {
    position1,
    position2,
    type,
    color,
  }

  return obj;
}