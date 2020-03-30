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

export const showSnackbar = () => {
  toast.warn('🦄 Wow so easy!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
}

export const showMessages = (e, type) => {
  if(type === "error"){
    if(e.response && e.response.status !== 422){
      if(e.response.status === 404)
        showSnackbar(e.response.statusText, "error");
      else
        showSnackbar(e.response.data.message, "error");
    }else if(e.response && e.response.status === 422){
      for (const key in e.response.data) {
        e.response.data[key].forEach(element => {
          showSnackbar(element,type);
        });
      }
    }else{
      showSnackbar("Hubo un error interno", "error");
    }
  }else{
    showSnackbar(e,type)
  }
}
