import {urlServer} from '../../../../shared/variables';

const styles = {

  /*========== STYLES =======================================================*/

  '@global':{
    'div.dimmer':{
      lineHeight:'unset !important'
    }
  },

  'myClubPlayers':{
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
      border:'2px solid #3385ff',
      backgroundColor: '#3385ff',
      color:'white',
      padding:'8px 20px',
      cursor:'pointer',
    },
    '& > button:hover':{
      color: '#3385ff',
      backgroundColor:'white',
    }
  },

  'cardsContainer':{
    width:'90%',
    margin:'20px 0',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
  },

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

  /*---------- Card Data Modal ----------------------------------------------*/

  'cardDataModal':{
    width:'90% !important',
    '& > div.content':{
      width:'100% !important',
      padding:'0 !important',
      lineHeight:'unset !important',
      display:'flex !important',
      flexDirection:'column !important',
      justifyContent:'center !important',
      alignItems:'center !important',
      '& > div.cardContainer':{
        width:'100%',
        padding:'40px 0',
        backgroundImage: 'url("' + urlServer + '/storage/background.png") !important',
        display:'flex',
        justifyContent:'center'
      },
      '& > div.dataContainer':{
        width:'100%',
        backgroundColor:'#4d4d4d',
        padding:'40px 0',
        display:'flex',
        justifyContent:'center',
        '& > div':{
          width:'95%',
          display:'flex',
          justifyContent:'center',
          flexWrap:'wrap',
          '& > div':{
            margin:'15px',
            borderRadius:'2px',
            width:'30%',
            padding:'20px 0',
            backgroundColor:'#ff6600',
            color:'white',
            '& > h2':{
              fontFamily:'Bebas',
              fontSize:'18px !important',
              letterSpacing:'1px !important',
              width:'100%',
              backgroundColor:'white',
              color:'#ff6600',
              textAlign:'center'
            },
            '& > p':{
              textAlign:'center',
              fontFamily: 'DINPro',
              fontSize:'17px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              '& > img':{
                marginLeft:'7px'
              }
            }
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

  // Responsive Card Data Modal

  '@media screen and (max-width:1056px)':{
    'cardDataModal':{
      '& > div.content':{
        '& > div.dataContainer':{
          '& > div':{
            '& > div':{
              width:'45% !important',
            }
          }
        }
      },
    },
  },

  '@media screen and (max-width:743px)':{
    'cardDataModal':{
      '& > div.content':{
        '& > div.dataContainer':{
          '& > div':{
            '& > div':{
              width:'90% !important',
            }
          }
        }
      },
    },
  }

  /*---------- End Card Data Modal ------------------------------------------*/

  /*========== END STYLES ===================================================*/
}

export default styles;
