export const sortOptions = (sort) => ({
  active: 'first',
  number: {
    asc: true,
  },
  first: {
    asc: sort,
  },
  last: {
    asc: true,
  },
  handle: {
    asc: true,
  },
});
