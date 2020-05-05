const styles = {

  /*========== STYLES =======================================================*/

  'cards':{
    padding:'20px 0 60px 0',
    width:'85%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },

    /*---------- Table View -------------------------------------------------*/

    'cardsTableView':{
      backgroundColor:'white',
      width:'100%',
      margin:'20px 0',
      padding:'20px 0',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
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
      '& > div.tableContainer':{
        width:'80%',
        overflowX:'auto !important'
      },
      '& > div > table':{
        margin:'20px 0',
        width:'100%'
      },
      '& > div > table th, & > div > table td':{
        textAlign: 'center',
        padding:'10px 20px',
        fontFamily:'Anelize'
      },
      '& > div > table th':{
        backgroundColor: '#ff6600',
        color:'white',
        fontSize:'16px'
      },
      '& > div > table td':{
        backgroundColor: '#e6e6e6'
      },
      '& > button':{
        fontFamily:'Anelize',
        margin:'20px 0',
        border:'2px solid #33cc33',
        backgroundColor: '#33cc33',
        color:'white',
        padding:'8px 20px',
        cursor:'pointer',
      },
      '& > button:hover':{
        color: '#33cc33',
        backgroundColor:'white',
      }
    },

    'card':{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },

    'value':{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontFamily: 'DINPro',
      fontSize:'16px',
      '& > img':{
        margin:'0 5px'
      }
    },

    'actions':{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      '& > div':{
        padding:'3px 5px',
        cursor:'pointer'
      },
      '& > div:first-child':{
        color:'white',
        backgroundColor:'#ffa31a',
        border:'2px solid #ffa31a'
      },
      '& > div:first-child:hover':{
        backgroundColor:'white',
        color:'#ffa31a'
      },
      '& > div:last-child':{
        color:'white',
        backgroundColor:'#ff1a1a',
        border:'2px solid #ff1a1a'
      },
      '& > div:last-child:hover':{
        backgroundColor:'white',
        color:'#ff1a1a'
      }
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
      border:'0 solid white !important'
    },

    'modal':{
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

    /*---------- Table View -------------------------------------------------*/

    /*---------- Form View --------------------------------------------------*/

    'cardsFormView':{
      backgroundColor:'white',
      width:'100%',
      margin:'20px 0',
      padding:'20px 0',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
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
        backgroundColor: '#ff6600',
        color:'white',
        padding:'8px 20px',
        width:'auto',
        cursor:'pointer',
        border:'2px solid #ff6600',
        fontFamily:'Anelize',
        alignSelf:'flex-start'
      },
      '& > button:hover':{
        backgroundColor: 'white',
        color:'#ff6600',
      },
      '& form':{
        width:'90%',
        marginTop:'20px',
        //minWidth:'600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& form > div':{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
      },
      '& form button[type="submit"]':{
        fontFamily:'Anelize',
        margin:'20px 0',
        border:'2px solid #33cc33',
        backgroundColor: '#33cc33',
        color:'white',
        padding:'8px 20px',
        cursor:'pointer',
      },
      '& form button[type="submit"]:hover':{
        backgroundColor: 'white',
        color:'#33cc33',
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

    'icon':{
      color:'white',
      margin:0,
      padding:0
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

    /*---------- End Form View ----------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
