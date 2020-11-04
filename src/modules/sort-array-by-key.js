const checkIfValid = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`data has to be typeof: ${typeof []} data instanceof Array: ${[] instanceof Array} but got typeof: ${typeof data} data instanceof Array: ${data instanceof Array}`);
  } else if (
    Array.isArray(data)
    && data.length > 0
    && typeof data[0] !== 'object'
  ) {
    throw new Error(`data has to be an array of objects but data[0] got typeof: ${typeof data[0]}`);
  }
};

export const sortArrayByKey = (data, options) => {
  checkIfValid(data);

  const dataToSort = [...data];

  let sortedData = dataToSort.sort((currentObj, nextObj) => {
    const currentValue = currentObj[options.active].toLowerCase();
    const nextValue = nextObj[options.active].toLowerCase();

    if (currentValue > nextValue) {
      return 1;
    }

    if (currentValue < nextValue) {
      return -1;
    }

    return 0;
  });

  if (!options[options.active].asc) {
    sortedData = sortedData.reverse();
  }

  return sortedData;
};
