const styles = {

  /*========== STYLES =======================================================*/

  'card':{
    margin:0,   
    position:'relative',
    backgroundSize:'100%',
    lineHeight:'unset !important',
    '& > img.player':{
      position:'absolute',
    },
    '& > span.rating':{
      position:'absolute',
      fontFamily: 'DINPro',
    },
    '& > div.position':{
      display:'flex',
      justifyContent:'center',
      position:'absolute',    
    },
    '& > div.position > span':{
      textTransform:'uppercase',
      fontFamily: 'DINPro',
    },
    '& > img.country':{
      position:'absolute',
    },
    '& > img.team':{
      position:'absolute',
    },
    '& > div.name':{
      width:'100%',
      position:'absolute',
      textTransform:'uppercase',
      fontFamily: 'DINPro',
      textAlign:'center',
      fontWeight:'bold',         
    },
    '& > div.stats':{
      width:'100%',
      position:'absolute',
    },
    '& > div.stats > span':{      
      textTransform:'uppercase',
      fontFamily: 'DINPro',
      position:'absolute',     
    },
    '& > div.stats > span > span':{
      fontWeight:'bold'
    },
  }

  /*========== END STYLES ===================================================*/

}

export default styles;
