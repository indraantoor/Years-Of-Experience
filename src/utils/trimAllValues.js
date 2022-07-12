const trimAllValues = (valuesObj, setFn) => {
  const values = { ...valuesObj };
  for (let property in values) {
    if (values.hasOwnProperty(property) && values[property].length > 0) {
      values[property] = String(values[property]).trim();
    }
  }
  if (!setFn) {
    return values;
  } else {
    setFn(values);
  }
};

export default trimAllValues;
