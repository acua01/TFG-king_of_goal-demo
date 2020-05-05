const styles = {

  /*========== STYLES =======================================================*/

  'myClubOptions':{
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

    /*---------- Form -------------------------------------------------------*/

    '& > form':{
      width:'60%',
      minWidth:'600px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > div.team':{
        margin:'20px 0',
        '& > div:first-child':{
          cursor:'pointer',
          backgroundColor:'#cccccc',
          width:'150px',
          height:'150px',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          '& > img':{
            width:'120px'
          },
        },
        '& > div:last-child':{
          width:'100%',
          backgroundColor:'#333333',
          color:'white',
          textAlign:'center',
          padding:'4px 0'
        }
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
      }
    },
    '& > button':{
      fontFamily:'Anelize',
      margin:'20px 0',
      border:'2px solid #ff1a1a',
      backgroundColor: '#ff1a1a',
      color:'white',
      padding:'8px 40px',
      cursor:'pointer',
      '&:hover':{
        color: '#ff1a1a',
        backgroundColor:'white',
      }
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

  'icon':{
    color:'white',
    margin:0,
    padding:0
  },

  /*---------- End Form -----------------------------------------------------*/

  /*---------- Teams Modal --------------------------------------------------*/

  'teamsModal':{
    width:'75% !important',
    '& > div:first-child':{
      display:'flex !important',
      flexDirection:'column !important',
      alignItems:'center !important'
    },
    '& button':{
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

  'dropdown':{
    width:'30%',
    margin:'10px 0',
    borderRadius:'0 !important',
    '& div.default':{
      color:'rgba(0,0,0,.5) !important',
      fontFamily:'Anelize !important',
    },
    '& div.text':{
      fontFamily:'Anelize !important',
    }
  },

  'teamsContainer':{
    margin:'30px 0',
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    '& > div':{
      cursor:'pointer',
      backgroundColor:'white',
      border:'2px solid #a6a6a6',
      margin:'5px',
      width:'120px',
      height:'120px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      '&:hover':{
        backgroundColor: '#333333',
      },
      '& > img':{
        width:'100px'
      }
    }
  },

  /*---------- End Teams Modal ----------------------------------------------*/

  /*---------- Delete Club Modal --------------------------------------------*/

  'deleteClubModal':{
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

  /*---------- End Delete Club Modal ----------------------------------------*/

  /*========== END STYLES ===================================================*/
}

export default styles;
