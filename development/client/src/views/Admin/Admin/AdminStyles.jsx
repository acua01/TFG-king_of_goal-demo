const styles = {

  /*========== STYLES =======================================================*/

  'admin':{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },

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
      fontSize:'25px',
      '&:hover':{
        textDecoration:'underline',
        cursor:'pointer'
      }
    },
    '& > span:first-child':{
      marginLeft:'5%',
      fontSize:'40px',
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
