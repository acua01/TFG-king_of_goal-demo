const styles = {

  /*========== STYLES =======================================================*/

    'login':{
      display:'flex'
    },

    /*---------- Left Side --------------------------------------------------*/

    'leftSide':{
      backgroundColor: '#333333',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'50%',
      '& img':{
        width:'60%',
        margin:'250px 0',
      }
    },

    /*---------- End Left Side ----------------------------------------------*/

    /*---------- Right Side -------------------------------------------------*/

    'rightSide':{
      backgroundColor: '#ff6600',
      width:'50%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& form':{
        width:'80%',
        minWidth:'400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& form h1':{
        color:'white',
        marginTop:'20%',
        marginBottom:'15%',
        fontFamily:'Bebas',
        letterSpacing:'2px',
        fontSize:'40px'
      },
      '& form input[type="submit"]':{
        backgroundColor: '#333333',
        color:'white',
        padding:'8px 20px',
        width:'auto',
        marginTop:'30px',
        fontSize:'17px',
        cursor:'pointer',
        border:'none',
        fontFamily:'Anelize',
      },
      '& form input[type="submit"]:hover':{
        backgroundColor: 'white',
        color:'#333333',
      },
      '& form > p':{
        fontFamily:'Anelize',
        color:'white',
        marginTop:'50px',
        fontSize:'16px'
      },
      '& form > p > a':{
        textDecoration:'underline',
        cursor:'pointer',
        color:'white'
      }
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
        width:'40%',
        border:'none',
        paddingLeft:'5px',
        fontFamily:'Anelize',
      }
    },

    'icon':{
      color:'white',
      margin:0,
      padding:0
    },

    'smallerScreen':{
      width:'100%',
      backgroundColor:'#ff6600',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& form':{
        width:'60%',
        minWidth:'400px',
        marginBottom:'20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      '& form h1':{
        color:'white',
        marginTop:'10%',
        marginBottom:'10%',
        fontFamily:'Bebas',
        letterSpacing:'2px',
        fontSize:'40px'
      },
      '& form input[type="submit"]':{
        backgroundColor: '#333333',
        color:'white',
        padding:'8px 20px',
        width:'auto',
        marginTop:'30px',
        fontSize:'17px',
        cursor:'pointer',
        border:'none'
      },
      '& form input[type="submit"]:hover':{
        backgroundColor: 'white',
        color:'#333333',
      },
      '& form > p':{
        fontFamily:'Anelize',
        color:'white',
        marginTop:'50px',
        fontSize:'16px'
      },
      '& form > p > a':{
        textDecoration:'underline',
        cursor:'pointer',
        color:'white'
      }
    }

    /*---------- End Right Side ---------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
