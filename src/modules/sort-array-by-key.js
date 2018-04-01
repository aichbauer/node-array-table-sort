const checkIfValid = (data) => {
  if (!Array.isArray(data)) {
    throw new Error(`data has to be typeof: ${typeof []} data instanceof Array: ${[] instanceof Array} but got typeof: ${typeof data} data instanceof Array: ${data instanceof Array}`);
  } else if (
    Array.isArray(data) &&
    data.length > 0 &&
    typeof data[0] !== 'object'
  ) {
    throw new Error(`data has to be an array of objects but data[0] got typeof: ${typeof data[0]}`);
  }
};

export const sortArrayByKey = (data, options) => {
  checkIfValid(data);

  const dataToSort = [...data];

  const sortedData = dataToSort.sort((currentObj, nextObj) => {
    const currentValue = currentObj[options.active];
    const nextValue = nextObj[options.active];

    if (currentValue < nextValue) {
      const sortTo = options[options.active].asc
        ? -1
        : 1;

      return sortTo;
    } else if (currentValue > nextValue) {
      const sortTo = options[options.active].asc
        ? 1
        : -1;

      return sortTo;
    }

    return 0;
  });

  return sortedData;
};
