const styles = {

  /*========== STYLES =======================================================*/

  'register':{
    width:'100%',
    backgroundColor:'#ff6600',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& form':{
      width:'60%',
      minWidth:'600px',
      marginBottom:'120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& form h1':{
      color:'white',
      marginTop:'120px',
      marginBottom:'60px',
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
      fontFamily:'Anelize'
    },
    '& form input[type="submit"]:hover':{
      backgroundColor: 'white',
      color:'#333333',
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

  /*========== END STYLES ===================================================*/
}

export default styles;
