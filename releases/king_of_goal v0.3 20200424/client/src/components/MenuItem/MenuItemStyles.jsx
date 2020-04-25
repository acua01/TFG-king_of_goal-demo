const styles = {

  /*========== STYLES =======================================================*/

  'menuItem':{
    width:'47%',
    margin:'20px 0',
    backgroundColor:'white',
    paddingBottom:'20px',
    cursor:'pointer',
    transition: '0.2s',
    '& > h2':{
      backgroundColor:'none',
      fontSize:'30px',
      fontFamily:'Bebas',
      color:'#ff6600',
      letterSpacing:'2px',
      margin:0,
      padding:'10px 20px',
      transition: '0.2s',
    },
    '& > div':{
      backgroundColor:'#ff6600',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      padding:'20px 0',
      transition: '0.2s',
    },
    '& > div > p':{
      width:'50%',
      margin:0,
      fontSize:'15px',
      fontFamily:'Anelize',
      color:'white'
    },
    '&:hover':{
      backgroundColor:'#333333',
      '& > h2':{
        color:'white',
      },
      '& > div':{
        backgroundColor:'#333333',
      },
    }
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

  /*========== END STYLES ===================================================*/

}

export default styles;
