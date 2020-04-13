const styles = {

  /*========== STYLES =======================================================*/

  'gameLayout':{
    '& > div':{
      border:'none !important',
      borderRadius:'0 !important',
      backgroundColor:'rgba(0,0,0,0) !important',
    },
    '& > div > div:first-child':{
      width:'200px !important'
    },
    '& > div > div:last-child':{
      width:'100% !important',
      display:'flex',
      flexDirection:'column',
      alignItems:'center !important'
    },
  },

    /*---------- Header -----------------------------------------------------*/

    '@global':{
      header:{
        width:'100%',
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
        fontSize:'25px',
        color:'#ff6600'
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

    // Header Responsive

    '@media screen and (max-width:632px)':{
      '@global':{
        header:{
          '& > div:first-child > button':{
            margin:'0 10px',
          },
          '& > div:last-child > img':{
            display:'none'
          }
        }
      },
      'userDataCoins':{
        marginLeft:'20px',
      },
    },

    '@media screen and (max-width:458px)':{
      '@global':{
        header:{
          '& > div:first-child > button':{
            margin:'0 10px',
          },
          '& > div:last-child > img':{
            display:'none'
          }
        }
      },
      'userData':{
        '& > img':{
          width:'40px'
        },
        '& > *':{
          margin:'0 5px'
        }
      },
      'userDataNames':{
        '& > p:first-child':{
          fontSize:'18px'
        }
      },
      'userDataCoins':{
        marginLeft:'20px',
      },
    },

    /*---------- End Header -------------------------------------------------*/

    /*---------- Sidebar ----------------------------------------------------*/

    'sidebarUserData':{
      padding:'20px 0',
      '& > img':{
        width:'45%',
        margin:'10px 0'
      },
      '& > p':{
        margin:0,
        color:'white',
        fontFamily:'Anelize'
      },
      '& > p:nth-child(2)':{
        fontSize:'20px',
        color:'#ff6600'
      }
    },

    'sidebarItem':{
      '&:hover':{
        backgroundColor:'#ff6600 !important'
      }
    },

    /*---------- End Sidebar ------------------------------------------------*/

    /*---------- BreadCrumb -------------------------------------------------*/

    'breadCrumb':{
      width:'100%',
      margin:'40px 0 0 0',
      display:'flex',
      alignItems:'center',
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
        marginLeft:'5%'
      },
    },

    // BreadCrumb Responsive

    '@media screen and (max-width:480px)':{
      'breadCrumb':{
        '& > span':{
          textTransform:'uppercase',
          fontFamily:'Bebas',
          fontSize:'30px'
        },
      },
    },


    /*---------- End BreadCrumb ---------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
