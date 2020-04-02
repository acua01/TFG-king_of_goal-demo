const styles = {

  /*========== STYLES =======================================================*/

    /*---------- Header -----------------------------------------------------*/

    '@global':{
      header:{
        backgroundColor:'rgba(13, 13, 13, .7)',
        padding:'10px 0',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        '& > div:first-child':{
          display:'flex',
          alignItems:'center',
        },
        '& > div:first-child > button':{
          backgroundColor:'#1a1a1a',
          color:'white',
          border:'1px solid white',
          padding:'10px',
          margin:'0 20px',
          cursor:'pointer',
          borderRadius:'2px'
        },
        '& > div:last-child > img':{
          width:'150px',
          marginRight:'20px'
        }
      }
    },

    'userData':{
      display:'flex',
      alignItems:'center',
      '& > img':{
        width:'70px'
      },
      '& > *':{
        margin:'0 10px'
      }
    },

    'userDataNames':{
      '& > p':{
        margin:0,
        color:'white',
        fontFamily:'Anelize'
      },
      '& > p:first-child':{
        fontSize:'25px'
      }
    },

    'userDataCoins':{
      display:'flex',
      alignItems:'center',
      marginLeft:'50px',
      '& > img':{
        margin:'0 5px'
      },
      '& > p':{
        color:'white',
        fontFamily:'Anelize'
      }
    },

    /*---------- End Header -------------------------------------------------*/

    /*---------- BreadCrumb -------------------------------------------------*/

    'breadCrumb':{
      margin:'40px 0',
      '& > *':{
        textTransform:'uppercase',
        fontFamily:'Bebas',
        fontSize:'40px',
        color:'#262626'
      },
      '& > span':{
        textTransform:'uppercase',
        fontFamily:'Bebas',
        fontSize:'40px'
      },
      '& > span:first-child':{
        marginLeft:'60px'
      },
    },

    /*---------- End BreadCrumb ---------------------------------------------*/

    'mainMenu':{
      '& > div':{
        border:'none !important',
        borderRadius:'0 !important',
        backgroundImage: 'url("./storage/background.png") !important'
      },
      '& h1':{
        margin:'50px'
      }
    },

    'sidebarLogo':{
      width:'60%',
      margin:'40px 0'
    },

    'menuItem':{
      width:'40%',
      margin:'50px',
      backgroundColor:'white',
      paddingBottom:'20px',
      '& > h2':{
        backgroundColor:'white',
        fontSize:'30px',
        fontFamily:'Bebas',
        color:'#ff6600',
        letterSpacing:'2px',
        margin:0,
        padding:'10px 20px'
      },
      '& > div':{
        backgroundColor:'#ff6600',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        padding:'20px 0'
      },
      '& > div > p':{
        width:'50%',
        margin:0,
        fontSize:'15px',
        fontFamily:'Anelize',
        color:'white'
      },
    },

    'menuItemIcon':{
      color:'white'
    }

  /*========== END STYLES ===================================================*/

}

export default styles;
