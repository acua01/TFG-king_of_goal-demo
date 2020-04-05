const styles = {

  /*========== STYLES =======================================================*/

  'mainMenu':{
    padding:'50px 0',
    width:'85%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between'
  },

    /*---------- Menu Item --------------------------------------------------*/

    'menuItem':{
      width:'47%',
      margin:'20px 0',
      backgroundColor:'white',
      paddingBottom:'20px',
      cursor:'pointer',
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
      color:'white',
    },

    // Menu Item Responsive

    '@media screen and (max-width:998px)':{
      'menuItemIcon':{
        fontSize:'80px !important'
      }
    },

    '@media screen and (max-width:712px)':{
      'menuItem':{
        width:'100%'
      }
    },

    /*---------- End Menu Item ----------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
