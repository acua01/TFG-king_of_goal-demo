import {goBackButtonStyles} from '../../../../shared/styles/mixins/general';
import {urlServer} from '../../../../shared/variables';

const styles = {

  /*========== ANIMATIONS ===================================================*/

  '@keyframes appears': {
    from: {opacity: '0'},
    to: {opacity: '1'}
  },

  /*========== END ANIMATIONS ===============================================*/

  /*========== STYLES =======================================================*/

  '@global':{
    'div.dimmer':{
      lineHeight:'unset !important'
    }
  },

  'squad':{
    margin:'40px 0 60px 0',
    width:'95%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& > button.goBack':{
      extend: goBackButtonStyles,
    },
  },

  'squadData':{
    width:'90%',
    backgroundColor:'white',
    margin:'20px 0',
    '& > .title':{
      width:'100%',
      backgroundColor:'#1a1a1a',
      padding:'5px 0',
      '& > h2':{
        color:'white',
        fontFamily:'Bebas',
        letterSpacing:'1px',
        textAlign:'center'
      }
    },
    '& > .data':{
      display:'flex',
      justifyContent:'space-around',
      padding:'20px 0',
      '& > div':{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '& > span:first-child':{
          display:'flex',
          alignItems:'center',
          margin:'15px 0',
          '& > img':{
            width:'30px',
            marginRight:'10px'
          },
          '& > span':{
            fontFamily:'Bebas',
            letterSpacing:'1px',
            fontSize:'25px'
          }
        },   
        '& > span:last-child':{
          fontFamily: 'DINPro',
          fontSize:'30px',
          fontWeight:'bold'
        }     
      },
      '& > .chemistry':{
        '& .chemistryBar':{
          width:'200px',
          height: '35px',
          backgroundColor: '#333333',
          position: 'relative',
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          '& > span':{
            position:'absolute',
            margin:'0',
            zIndex: '5',
            color:'white',
            textShadow: '0 0 3px #000',
            letterSpacing: '1px',
            fontFamily: 'DINPro',
            fontSize:'25px',
          },
          '& > div':{
            width:'60%',
            height: '35px',
            backgroundColor: '#33ccff',
            position:'absolute',
            left:'0',
          }
        },
      }
    },
    '& > button.finish':{
      backgroundColor:'#ff6600',
      color:'white',
      fontFamily:'Bebas',
      fontSize:'18px',
      letterSpacing:'1px',
      border:'2px solid #ff6600',
      width:'100%',
      padding:'10px 0',
      '&:hover':{
        color:'#ff6600',
        backgroundColor:'white',
        cursor:'pointer'
      }
    },
    '& > button.disabled':{
      backgroundColor:'gray',
      color:'white',
      fontFamily:'Bebas',
      fontSize:'18px',
      letterSpacing:'1px',
      border:'2px solid gray',
      width:'100%',
      padding:'10px 0',
      '&:hover':{
        color:'white !important',
        backgroundColor:'gray !important',
        cursor:'not-allowed !important'
      }
    },
  },

  'headlines':{
    width:'90%',
    height:'720px',
    backgroundImage: 'url("' + urlServer + '/storage/squad_background.png")',
    backgroundSize: '100% 100%',
    border:'3px solid #1a1a1a',
    position: 'relative',
    boxSizing: 'border-box',
    '& > canvas':{
      width:'100%',
      height:'720px',
      position: 'absolute'
    },
    '& > .position':{
      marginLeft: '-60px',
      width:'120px',
      height:'180px',
      position: 'absolute',
      '& > img':{
        width:'120px',
        cursor:'pointer',
      },
      '& > div.card':{
        borderRadius:'5px',
        cursor:'pointer',        
        '&.active':{
          backgroundColor:'rgba(255, 102, 0, .4)'
        }
      },
      '& > div.playerData':{
        backgroundColor: '#0d0d0d',
        fontFamily: 'Bebas',
        borderRadius: '3px',
        padding:'5px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        '& > div.divPosition':{
          width:'25px',
          height:'25px',
          margin:'0',
          textAlign: 'center',
          letterSpacing: '1.5px',
          padding:'5px',
          borderRadius: '50px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          '& > p':{
            color:'white',
            margin:'0',
            textAlign: 'center',
            letterSpacing: '1.5px',           
          },
        },
        '& > .chemistryBar':{
          width:'65%',
          height: '15px',
          backgroundColor: '#666666',
          position: 'relative',
          display: 'flex',
          justifyContent:'center',
          alignItems: 'center',
          margin:'5px 0',
          '& > span':{
            position:'absolute',
            margin:'0',
            zIndex: '5',
            color:'white',
            textShadow: '0 0 3px #000',
            letterSpacing: '1px',
            fontFamily: 'DINPro',
            fontSize:'15px',
          },
          '& > div':{
            width:'60%',
            height: '15px',
            backgroundColor: '#33ccff',
            position:'absolute',
            left:'0',
          }
        }
      }
    }
  },

  'bench':{
    width:'90%',
    margin:'20px 0',
    '& > div':{
      margin:'10px 0',
      '& > div:first-child':{
        width:'30%',
        backgroundColor:'#1a1a1a',
        padding:'5px 0',
        '& > h3':{
          color:'white',
          fontFamily:'DINPro',
          textAlign:'center',
          textTransform:'uppercase'
        }
      },
      '& > div:last-child':{
        width:'100%',
        backgroundColor:'white',
        display:'flex',
        padding:'20px 0',
        overflowX:'auto !important',
        '& > .position':{
          width:'120px',
          cursor:'pointer',
          //height:'180px',
          '& > img':{
            width:'120px',
            cursor:'pointer',
          },
          '& > div.card':{
            borderRadius:'5px',
            cursor:'pointer',        
            '&.active':{
              backgroundColor:'rgba(255, 102, 0, .4)'
            }
          },
        }
      }
    }
  },

  /*---------- Choose Card Modal ----------------------------------------------*/
  
  'choosePlayerModal':{
    width:'95% !important',
    //minWidth:'400px',
    lineHeight:'unset !important',
    '& > div.content':{
      lineHeight:'unset !important',
      display:'flex !important',
      flexDirection:'column !important',
      justifyContent:'center !important',
      alignItems:'center !important',
      '& > div.cardsContainer':{
        lineHeight:'unset !important',
        width:'90%',
        margin:'20px 0',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        '& > div':{
          lineHeight:'unset !important',
          cursor:'pointer',
          animationName:'$appears',
          animationDuration: '0.5s',
          animationFillMode:'backwards',
          '&:nth-child(1)':{
            animationDelay: '0.3s',
          },
          '&:nth-child(2)':{
            animationDelay: '0.6s',
          },
          '&:nth-child(3)':{
            animationDelay: '0.9s',
          },
          '&:nth-child(4)':{
            animationDelay: '1.2s',
          },
          '&:nth-child(5)':{
            animationDelay: '1.5s',
          }
        }
      }
    },
    '& button':{
      fontFamily:'Anelize',
      color:'white',
      padding:'8px 20px',
      cursor:'pointer',
      margin:'5px',
      border:'2px solid #ff1a1a',
      backgroundColor: '#ff1a1a',
      '&:hover':{
        color:'#ff1a1a',
        backgroundColor: 'white',
      }
    }
  },
  
  /*---------- End Choose Card Modal ------------------------------------------*/

  'pagination':{
    margin:'20px 0 !important',
    border:'2 solid #ff6600 !important',
    boxShadow:'none !important',
    backgroundColor:'#ff6600 !important',
    '& > a':{
      color:'white !important',
      '&:hover':{
        backgroundColor:'white !important',
        color:'#ff6600 !important'
      }
    },
    '& > a.active':{
      backgroundColor:'white !important',
      color:'#ff6600 !important'
    }
  },

  'message':{
    width:'80% !important',
    border:'0 solid white !important',
    margin:'40px 0 !important'
  },

  /*---------- Filter Modal --------------------------------------------------*/

  'filterModal':{
    width:'75% !important',
    '& > div:first-child':{
      display:'flex !important',
      flexDirection:'column !important',
      alignItems:'center !important',
    },
    '& > div:last-child button':{
      fontFamily:'Anelize',
      color:'white',
      padding:'8px 20px',
      cursor:'pointer',
      margin:'5px',
      border:'2px solid #33cc33',
      backgroundColor: '#33cc33',
      '&:hover':{
        color:'#33cc33',
        backgroundColor: 'white',
      }
    },
  },

  'field':{
    width:'33.333%',
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
      width:'70%',
      border:'none',
      paddingLeft:'5px',
      fontFamily:'Anelize'
    }
  },

  'dropdown':{
    width:'70% !important',
    display:'flex !important',
    alignItems:'center !important',
    backgroundColor:'#cccccc !important',
    border:'none !important',
    borderRadius:'0 !important',
    minWidth:'0 !important',
    '& > input':{
      width:'100% !important',
      paddingLeft:'5px !important',
      marginTop:'3px !important'
    },
    '& div.default':{
      width:'100% !important',
      color:'rgba(0,0,0,.5) !important',
      fontFamily:'Anelize !important',
      marginLeft:'-20px !important'
    },
    '& div.text':{
      width:'100% !important',
      fontFamily:'Anelize !important',
      marginLeft:'-20px !important'
    }
  },

  'icon':{
    color:'white',
    margin:0,
    padding:0
  },

  'filter':{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center !important',
    '& > div.menu':{
      width:'80% !important',
      margin:'10px 0 !important',
      display:'flex !important',
      justifyContent:'center !important',
      border:'none !important',
      boxShadow:'0 0 0 0 !important',
      '& > a':{
        fontFamily:'Bebas !important',
        textAlign:'center !important',
        display:'flex !important',
        justifyContent:'center !important',
        alignItems:'center !important',
        fontSize:'18px !important',
        letterSpacing:'1px !important',
        width:'40% !important',
        backgroundColor:'#ff6600 !important',
        border:'none !important',
        color:'white !important',
        margin:'0 1px !important',
        padding:'0 !important',
        '&:hover':{
          backgroundColor:'#737373 !important',
          color:'white !important',
        },
        '&.active':{
          backgroundColor:'#737373 !important',
          fontWeight:'normal !important',
          marginBottom:'0 !important',
          borderRadius:'0 !important',
        }
      },
    },
    '& > div.filterOptions':{
      margin:'20px',
      width:'100%',
      display:'flex',
      alignItems:'center',
      flexWrap:'wrap',
    },
  },

  // Field Responsive

  '@media screen and (max-width:920px)':{
    'field':{
      width:'50%',
      '& input':{
        width:'50%',
      }
    },

    'dropdown':{
      width:'50% !important',
    }
  },

  '@media screen and (max-width:664px)':{
    'field':{
      width:'100%',
      '& input':{
        width:'50%',
      }
    },

    'dropdown':{
      width:'50% !important',
    }
  },

  /*---------- End Filter Modal ---------------------------------------------*/

  /*---------- Card Menu Modal ----------------------------------------------*/

  'cardMenuModal':{
    width:'30% !important',
    minWidth:'400px',
    '& > div.content':{
      lineHeight:'unset !important',
      display:'flex !important',
      justifyContent:'center !important',
      alignItems:'center !important',
      '& > div':{
        margin:'10px'
      },
      '& > div.options':{
        width:'40%'
      },
      '& > div.options > div':{
        backgroundColor: '#ff6600',
        textAlign:'center',
        color:'white',
        fontFamily:'Bebas',
        fontSize:'18px !important',
        letterSpacing:'1px !important',
        margin:'5px 0',
        padding:'10px 0',
        cursor:'pointer',
        '&:hover':{
          backgroundColor:'#737373 !important',
          color:'white !important',
        }
      }
    },
    '& button':{
      fontFamily:'Anelize',
      color:'white',
      padding:'8px 20px',
      cursor:'pointer',
      margin:'5px',
      border:'2px solid #ff1a1a',
      backgroundColor: '#ff1a1a',
      '&:hover':{
        color:'#ff1a1a',
        backgroundColor: 'white',
      }
    }
  },

  /*---------- End Card Menu Modal ------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;