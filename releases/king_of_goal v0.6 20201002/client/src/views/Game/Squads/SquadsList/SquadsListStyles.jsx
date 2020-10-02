import {goBackButtonStyles} from '../../../../shared/styles/mixins/general';

const styles = {

  /*========== STYLES =======================================================*/

  'squadsListView':{
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
      '& > button':{
        fontFamily:'Anelize',
        margin:'20px 0',
        border:'2px solid #33cc33',
        backgroundColor: '#33cc33',
        color:'white',
        padding:'8px 20px',
        cursor:'pointer',
        '&:hover':{
          color: '#33cc33',
          backgroundColor:'white',
        }
      },     
    }
  },

  'squadsList':{
    width:'95%',
    display:'flex',
    justifyContent:'center',
    flexWrap:'wrap',
    '& > div.squad':{
      backgroundColor:'#666666',
      margin:'15px',
      padding:'10px 0',
      width:'90%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      '& > div.up':{
        padding:'5px 0',
        margin:'10px 0',
        width:'100%',
        backgroundColor:'#262626',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        '& > div.scores':{
          display:'flex',
          flexDirection:'row',
          '& > span':{
            marginRight:'10px',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            '& > img':{
              width:'25px',
              marginRight:'5px'
            },
            '& > span':{
              color:'white',
              fontFamily: 'DINPro',
              fontSize:'20px'
            },
          }         
        },
        '& > div.name':{
          marginLeft:'10px',
          '& > h2':{
            color:'white'
          }
        },        
      },      
      '& > div.down':{
        width:'95%',
        padding:'5px 0',
        margin:'10px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexWrap:'wrap',
        '& > button':{
          backgroundColor:'#ff6600',
          color:'white',
          fontFamily:'Bebas',
          fontSize:'18px',
          letterSpacing:'1px',
          border:'none',
          padding:'5px 20px',
          margin:'0 5px',
          '&:hover':{
            color:'#ff6600',
            backgroundColor:'white',
            cursor:'pointer'
          }
        }
      },     
    }   
  },

  'message':{
    width:'80% !important',
    border:'0 solid white !important',
    margin:'40px 0 !important'
  },

  'deleteModal':{
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

  'createModal':{
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
    '& form':{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > button':{
        border:'2px solid #33cc33 !important',
        backgroundColor: '#33cc33 !important',
      },
    },    
    '& button:last-child':{
      border:'2px solid #ff1a1a',
      backgroundColor: '#ff1a1a',
    }
  },

  'field':{
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    margin:'10px 0',
    '& div':{
      width:'100%',
      display: 'flex',
      justifyContent:'center',
    },
    '& label':{
      backgroundColor: '#333333',
      color:'white',
      padding:'10px'
    },
    '& input':{
      backgroundColor:'#cccccc',
      width:'40%',
      border:'none',
      paddingLeft:'5px',
      fontFamily:'Anelize'
    }
  },

  /*========== END STYLES ===================================================*/

}

export default styles;