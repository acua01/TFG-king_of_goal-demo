const styles = {

  /*========== STYLES =======================================================*/

  'permissions':{
    padding:'20px 0',
    width:'85%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  },

    /*---------- Table View -------------------------------------------------*/

    'permissionsTableView':{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& table':{
        margin:'20px 0'
      },
      '& table th, & table td':{
        textAlign: 'center',
        padding:'10px 20px',
        fontFamily:'Anelize'
      },
      '& table th':{
        backgroundColor: '#ff6600',
        color:'white',
        fontSize:'16px'
      },
      '& table td':{
        backgroundColor: 'white'
      },
      '& > button':{
        fontFamily:'Anelize',
        margin:'20px 0',
        border:'none',
        backgroundColor: '#33cc33',
        color:'white',
        padding:'10px 20px',
        cursor:'pointer',
      },
      '& > button:hover':{
        color: '#33cc33',
        backgroundColor:'white',
      }
    },

    'actions':{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > div':{
        width:'100px',
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

    /*---------- Table View -------------------------------------------------*/

    /*---------- Form View --------------------------------------------------*/

    'permissionsFormView':{
      width:'80%',
      padding:'20px 0',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > button':{
        backgroundColor: '#ff6600',
        color:'white',
        padding:'8px 20px',
        width:'auto',
        marginTop:'30px',
        fontSize:'17px',
        cursor:'pointer',
        border:'none',
        fontFamily:'Anelize',
        alignSelf:'flex-start'
      },
      '& > button:hover':{
        backgroundColor: 'white',
        color:'#ff6600',
      },
      '& form':{
        backgroundColor: 'white',
        padding:'40px 0',
        width:'60%',
        minWidth:'600px',
        margin:'20px 0 60px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& form h1':{
        color:'#333333',
        marginBottom:'60px',
        fontFamily:'Bebas',
        letterSpacing:'2px',
        fontSize:'35px'
      },
      '& form input[type="submit"]':{
        backgroundColor: '#ff6600',
        color:'white',
        padding:'8px 20px',
        width:'auto',
        marginTop:'30px',
        fontSize:'17px',
        cursor:'pointer',
        border:'none',
        fontFamily:'Anelize'
      },
      '& form input[type="submit"]:hover':{
        backgroundColor: '#333333',
        color:'white',
      },
    },

    'field':{
      width:'100%',
      display: 'flex',
      justifyContent:'center',
      margin:'10px 0',
      '& > label':{
        backgroundColor: '#333333',
        color:'white',
        padding:'10px'
      },
      '& > input':{
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
    }

    /*---------- End Form View ----------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
