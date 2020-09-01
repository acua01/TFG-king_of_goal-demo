import {goBackButtonStyles} from '../../../shared/styles/mixins/general';

const styles = {

  /*========== STYLES =======================================================*/

  'menu':{
    padding:'50px 0',
    width:'85%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    '& > button.goBack':{
      extend: goBackButtonStyles,
    },
    '& > div.menu':{
      width:'100%',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-between',
    }
  },

  /*========== END STYLES ===================================================*/

}

export default styles;
