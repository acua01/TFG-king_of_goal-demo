const styles = {

  /*========== STYLES =======================================================*/

  'createClub':{
    width:'100%',
    backgroundColor:'#ff6600',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& > h1':{
      color:'white',
      marginTop:'60px',
      marginBottom:'60px',
      fontFamily:'Bebas',
      letterSpacing:'2px',
      fontSize:'40px'
    },
    '& > form':{
      width:'60%',
      minWidth:'600px',
      marginBottom:'120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& > form input[type="submit"]':{
      backgroundColor: '#333333',
      color:'white',
      padding:'8px 20px',
      width:'auto',
      marginTop:'30px',
      fontSize:'17px',
      cursor:'pointer',
      border:'none',
      fontFamily:'Anelize'
    },
    '& > form input[type="submit"]:hover':{
      backgroundColor: 'white',
      color:'#333333',
    },
    '& > form > p':{
      color:'white',
      fontFamily:'Anelize',
      fontSize:'17px',
      margin:'25px 0'
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
      fontFamily:'Anelize'
    }
  },

  'dropdown':{
    borderRadius:'0 !important',
    width:'30%',
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
      border:'2px solid #ff944d',
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
  }

  /*========== END STYLES ===================================================*/
}

export default styles;
