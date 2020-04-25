const styles = {

  /*========== STYLES =======================================================*/

  'card':{
    margin:0,
    width:'165px',
    height:'231px',
    backgroundSize:'100%',
    position:'relative',
    '& > img.player':{
      width:'85px',
      position:'absolute',
      top:'35px',
      left:'62px',
    },
    '& > span.rating':{
      position:'absolute',
      fontFamily: 'DINPro',
      top:'36px',
      left:'36px',
      fontSize:'28px'
    },
    '& > span.position':{
      position:'absolute',
      textTransform:'uppercase',
      fontFamily: 'DINPro',
      top:'56px',
      left:'41px',
    },
    '& > img.country':{
      width:'20px',
      position:'absolute',
      top:'76px',
      left:'37px',
    },
    '& > img.team':{
      height:'25px',
      position:'absolute',
      top:'91px',
      left:'35px',
    },
    '& > div.name':{
      width:'100%',
      position:'absolute',
      textTransform:'uppercase',
      fontFamily: 'DINPro',
      top:'122px',
      fontSize:'16px',
      fontWeight:'bold',
      textAlign:'center'
    },
    '& > div.stats':{
      width:'100%',
      position:'absolute',
      top:'142px',
    },
    '& > div.stats > span':{
      fontSize:'15px',
      textTransform:'uppercase',
      fontFamily: 'DINPro',
      position:'absolute',
    },
    '& > div.stats > span.pace':{
      top:0,
      left:'38px'
    },
    '& > div.stats > span.dribbling':{
      top:0,
      left:'95px'
    },
    '& > div.stats > span.shooting':{
      top:'15px',
      left:'38px'
    },
    '& > div.stats > span.defending':{
      top:'15px',
      left:'95px'
    },
    '& > div.stats > span.passing':{
      top:'30px',
      left:'38px'
    },
    '& > div.stats > span.physicality':{
      top:'30px',
      left:'95px'
    },
    '& > div.stats > span > span':{
      fontWeight:'bold'
    },
  }

  /*========== END STYLES ===================================================*/

}

export default styles;
