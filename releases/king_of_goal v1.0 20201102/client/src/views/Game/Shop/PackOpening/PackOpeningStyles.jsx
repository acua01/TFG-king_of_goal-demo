const styles = {

  /*========== ANIMATIONS ===================================================*/

  '@keyframes appears': {
    from: {opacity: '0'},
    to: {opacity: '1'}
  },

  /*========== END ANIMATIONS ===============================================*/

  /*========== STYLES =======================================================*/

  'packOpening':{
    margin:'40px 0 60px 0',
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },

    /*---------- Player View --------------------------------------------------*/

    'playerView':{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > div':{
        margin:'50px 0',
        animationName:'$appears',
        animationDuration: '0.5s',
        animationDelay: '1s',
        animationFillMode:'backwards',
        '& .country':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '2s',
          animationFillMode:'backwards',
        },
        '& .position':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '3s',
          animationFillMode:'backwards',
        },
        '& .team':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '4s',
          animationFillMode:'backwards',
        },
        '& .player':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '5s',
          animationFillMode:'backwards',
        },
        '& .rating':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '5s',
          animationFillMode:'backwards',
        },       
        '& .name':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '5s',
          animationFillMode:'backwards',
        },
        '& .stats':{
          animationName:'$appears',
          animationDuration: '0.5s',
          animationDelay: '5s',
          animationFillMode:'backwards',
        }
      },
      '& > button':{
        backgroundColor:'#ff6600',
        color:'white',
        fontFamily:'Bebas',
        fontSize:'18px',
        letterSpacing:'1px',
        border:'none',
        padding:'10px 20px',
        '&:hover':{
          color:'#ff6600',
          backgroundColor:'white',
          cursor:'pointer'
        }
      }
    },

    /*---------- End Player View ----------------------------------------------*/

    /*---------- Players List View --------------------------------------------*/

    'playersListView':{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      '& > div':{
        padding:'20px 0',
        backgroundColor:'white',
        width:'85%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        '& > div.cardsList':{
          margin:'20px 0',
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center'
        },
        '& > button':{
          backgroundColor:'#ff6600',
          color:'white',
          fontFamily:'Bebas',
          fontSize:'18px',
          letterSpacing:'1px',
          border:'none',
          padding:'10px 20px',
          '&:hover':{
            color:'white',
            backgroundColor:'gray',
            cursor:'pointer'
          }
        }
      },
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

    /*---------- End Players List View ----------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;