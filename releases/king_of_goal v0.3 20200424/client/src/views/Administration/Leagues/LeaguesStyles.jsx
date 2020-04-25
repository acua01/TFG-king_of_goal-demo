const styles = {

  /*========== STYLES =======================================================*/

  'leagues':{
    padding:'20px 0 60px 0',
    width:'85%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },

    /*---------- Table View -------------------------------------------------*/

    'leaguesTableView':{
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
      '& > div':{
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

    'actions':{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
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

    'leaguesFormView':{
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
        marginTop:'20px',
        minWidth:'600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
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

    'fileField':{
      width:'100%',
      display: 'flex',
      justifyContent:'center',
      margin:'10px 0',
      '& > div':{
        width:'35%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#cccccc',
      },
      '& > div > div':{
        width:'100%',
      },
      '& > label':{
        backgroundColor: '#333333',
        color:'white',
        padding:'10px'
      },
      '& input':{
        backgroundColor:'#cccccc',
        width:'100%',
        border:'none',
        paddingLeft:'5px',
        fontFamily:'Anelize'
      },
      '& > button':{
        backgroundColor:'#cccccc',
        width:'5%',
        border:'none',
        cursor:'pointer'
      }
    },

    'icon':{
      color:'white',
      margin:0,
      padding:0
    }

    /*---------- End Form View ----------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
