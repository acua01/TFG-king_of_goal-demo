const styles = {

  /*========== STYLES =======================================================*/

  'permissionsForm':{
    width:'80%',
    padding:'20px 0',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& form':{
      backgroundColor: 'white',
      padding:'40px 0',
      width:'60%',
      minWidth:'600px',
      margin:'60px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& form h1':{
      color:'#333333',
      marginBottom:'60px',
      fontFamily:'Bebas',
      letterSpacing:'2px',
      fontSize:'35px'
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
      backgroundColor: '#ff6600',
      color:'white',
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
      backgroundColor:'#cccccc',
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
