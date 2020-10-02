import {goBackButtonStyles} from '../../../../shared/styles/mixins/general';

const styles = {

  /*========== STYLES =======================================================*/

  'packs':{
    margin:'40px 0 60px 0',
    width:'95%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'20px 0',
    '& > button.goBack':{
      extend: goBackButtonStyles,
    },
    '& > div':{
      margin:'40px 0 60px 0',
      width:'85%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'white',
      padding:'20px 0',
      '& > h1':{
        width:'100%',
        textAlign:'center',
        backgroundColor:'#f2f2f2',
        color:'#333333',
        margin:'20px 0',
        padding:'10px 0',
        fontFamily:'Bebas',
        letterSpacing:'2px',
        fontSize:'35px'
      },
    }
  },

  'packsList':{
    width:'95%',
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    '& > div.pack':{
      backgroundColor:'#666666',
      margin:'15px',
      padding:'10px 0',
      width:'250px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > h2':{
        color:'white',
        fontFamily:'Bebas',
        letterSpacing:'1px',
        width:'100%',
        backgroundColor:'#262626',
        textAlign:'center'
      },
      '& > p':{
        color:'white'
      },
      '& > img':{
        width:'75%',
        padding:'10px 0'
      },
      '& > div.content':{
        color:'white',
        padding:'10px 0',
        fontFamily: 'DINPro',
        fontSize:'18px'
      },
      '& > div.price':{
        width:'100%',
        color:'white',
        margin:'15px 0',
        padding:'5px 0',
        fontFamily: 'DINPro',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#54B2E5',
        '& > span':{
          fontSize:'20px'
        },
        '& > img':{
          marginLeft:'5px'
        }
      },
      '& > button':{
        backgroundColor:'#ff6600',
        color:'white',
        fontFamily:'Bebas',
        fontSize:'18px',
        letterSpacing:'1px',
        border:'none',
        width:'90%',
        padding:'10px 0',
        '&:hover':{
          color:'#ff6600',
          backgroundColor:'white',
          cursor:'pointer'
        }
      }
    }   
  },

  'buyModal':{
    '& p > span':{
      margin:'0 3px',
      '& > span':{
        fontFamily: 'DINPro',
        fontSize:'16px'
      },
      '& > img':{
        marginLeft:'3px'
      }
    },
    '& button':{
      fontFamily:'Anelize',
      color:'white',
      padding:'8px 20px',
      cursor:'pointer',
      margin:'5px'
    },
    '& button:first-child':{
      border:'2px solid #33cc33',
      backgroundColor: '#33cc33',
    },
    '& button:last-child':{
      border:'2px solid #ff1a1a',
      backgroundColor: '#ff1a1a',
    }
  },

  /*========== END STYLES ===================================================*/

}

export default styles;