const removeEmptyValues = (values, setFn) => {
  for (let property in values) {
    if (values.hasOwnProperty(property) && values[property].length == 0) {
      delete values[property];
    }
    setFn(values);
  }
};

export default removeEmptyValues;
