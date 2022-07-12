const removeEmptyValues = (valuesObj, setFn) => {
  const values = { ...valuesObj };
  for (let property in values) {
    if (values.hasOwnProperty(property) && values[property].length == 0) {
      delete values[property];
    }
  }
  if (!setFn) {
    return values;
  } else {
    setFn(values);
  }
};

export default removeEmptyValues;
