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
