import {goBackButtonStyles} from '../../../../shared/styles/mixins/general';

const styles = {

  /*========== STYLES =======================================================*/

  'result':{
    margin:'40px 0 60px 0',
    width:'95%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'20px 0',
    '& > button.goBack':{
      extend: goBackButtonStyles,
    },
    '& > div':{
      margin:'40px 0 60px 0',
      width:'85%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'white',
      padding:'20px 0',
      '& > h1':{
        width:'100%',
        textAlign:'center',
        backgroundColor:'#f2f2f2',
        color:'#333333',
        margin:'20px 0',
        padding:'10px 0',
        fontFamily:'Bebas',
        letterSpacing:'2px',
        fontSize:'35px'
      },
      '& > button.reward':{
        margin:'20px 0',
        backgroundColor:'#ff6600',
        color:'white',
        fontFamily:'Bebas',
        fontSize:'18px',
        letterSpacing:'1px',
        border:'2px solid #ff6600',
        padding:'10px 20px',
        '&:hover':{
          color:'#ff6600',
          backgroundColor:'white',
          cursor:'pointer'
        }
      },
      '& > div.resultData':{
        margin:'10px 0',
        width:'80%',
        '& > hr':{
          border:'none',
          backgroundColor:'#8c8c8c',
          height:'2px',
          width:'100%',
          borderRadius:'10px'
        },
        '& > div':{
          display:'flex',
          alignItems:'center',
          padding:'20px 0',
          '& > div:first-child':{
            width:'50%',
            display:'flex',
            justifyContent:'flex-end',
            paddingRight:'15px',
            '& > img':{
              width:'50px',
              marginLeft:'30px',
              marginRight:'20px'
            },
            '& > span':{
              color:'#ff6600',
              marginLeft:'30px',
              marginRight:'20px',
              fontFamily: 'DINPro',
              fontSize:'40px',
              textTransform:'uppercase'
            }
          },
          '& > div:last-child':{
            width:'50%',
            paddingLeft:'15px',
            '& > span':{
              fontFamily: 'DINPro',
              fontSize:'40px',
              textTransform:'uppercase'
            }
          },         
        },
        '& > div.coins':{
          '& > div:first-child':{
            '& > img':{
              width:'30px'
            }
          }         
        }
      }     
    }
  },

  /*========== END STYLES ===================================================*/

}

export default styles;