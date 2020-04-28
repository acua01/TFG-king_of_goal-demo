import {toast} from 'react-toastify';

export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};

export const removeSpecialCharactersFromString = (string,whiteSpace) => {
  string = string.toLowerCase();
  string = string.replace(/á/g, 'a');
  string = string.replace(/é/g, 'e');
  string = string.replace(/í/g, 'i');
  string = string.replace(/ó/g, 'o');
  string = string.replace(/ú/g, 'u');
  string = string.replace(/ñ/g, 'n');
  string = string.replace(/ /g, whiteSpace);

  return string;
}

export const showSnackbar = (type, message) => {

  switch (type) {
    case 'error':
      toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      break;
    default:
      toast.success(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
  }
}

export const showMessages = (type, e) => {
  if(type === "error"){
    if(e.response && e.response.status !== 422){
      if(e.response.status === 404)
        showSnackbar("error", e.response.statusText);
      else
        showSnackbar("error", e.response.data.message);
    }else if(e.response && e.response.status === 422){
      for (const key in e.response.data) {
        e.response.data[key].forEach(element => {
          showSnackbar(type, element);
        });
      }
    }else{
      showSnackbar("error", "Hubo un error interno");
    }
  }else{
    showSnackbar(type, e);
  }
}

export const moneyFormat = (money) => {
  const str = money.toString();
  const reverse = str.split('').reverse().join('');
  let res = '';
  let cont = 0;

  for(let i = 0; i < reverse.length; i++){
    if(cont === 3){
      res = reverse[i] + '.' + res;
      cont = 1;
    }else{
      res = reverse[i] + res;
      cont++;
    }
  }
  return res;
}

export const strToBool = (str) => {

  let res;

  if(str === 'true'){
    res = true;
  }else{
    res = false;
  }

  return res;
}
