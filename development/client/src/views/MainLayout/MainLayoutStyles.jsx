const styles = {

  /*========== FONTS ========================================================*/

  '@font-face': [
    {
      fontFamily: 'Bebas',
      src: 'url("/fonts/BebasNeueRegular.otf")',
    },
    {
      fontFamily: 'Anelize',
      src: 'url("/fonts/Aneliza.otf")',
    }
  ],

  /*========== END FONTS ====================================================*/

  /*========== STYLES =======================================================*/

    /*---------- Global Styles ----------------------------------------------*/

    '@global':{
      body:{
        margin:0,
        backgroundImage: 'url("/storage/background.png") !important',
        backgroundColor:'#C6C6C6',
        backgroundAttachment: 'fixed !important'
      },
      main:{
        width:'100%',
      },
      footer:{
        textAlign: 'center',
        backgroundColor: '#262626',
        color:'white',
        padding:'50px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > img':{
          margin:'10px 0',
          backgroundColor: 'white',
          padding:'10px',
          borderRadius:'5px',
          width:'55px'
        },
        '& > p':{
          margin:'10px 10px',
          fontFamily: 'Anelize',
        }
      },

      '@media screen and (max-width:552px)':{
        footer:{
          flexDirection:'column'
        }
      },
    },

    /*---------- End Global Styles ------------------------------------------*/

  /*========== END STYLES ===================================================*/

}

export default styles;
