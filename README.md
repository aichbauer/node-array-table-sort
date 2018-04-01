# array-table-sort

[![npm](https://img.shields.io/npm/v/array-table-sort.svg?style=flat-square)](https://www.npmjs.com/package/array-table-sort)
[![Travis branch](https://img.shields.io/travis/aichbauer/node-array-table-sort/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/node-array-table-sort)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/node-array-table-sort/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/node-array-table-sort)

> Sort an array (asc, desc) that holds data for tables

## Table of Contents

* [Why?](#why)
* [Installation](#installation)
* [Functions](#functions)
* [Usage](#usage)
* [License](#license)

## Why?

I wanted to have a simple way to sort a table component in react.

## Installation

```sh
$ npm i array-table-sort -S
```

or

```sh
$ yarn add array-table-sort
```

## Functions

Take a look into the [usage section](#usage) for a detailed example.

### sortArrayByKey

This function can sort on object keys (one row).

#### Syntax

Returns a new array.

```js
const sortedArray = sortArrayByKey(data, options);
```

##### Parameters

* **data**: an array of object
  * each object represents one row
  * each key of one object has to be the name of the column
  * each value of a key of one object is the value of the cell in the table
* **options**: an object
  * the keys in that object has to be the name of the column + one key active
  * the active key holds name the current column to sort
  * each other key holds another object with one key (asc)
  * asc equals true if the array is sorted ascending and false if descending

### searchArrayTable

This function can filter (search) on the complete object (one row).
If one key value filter is `true` the object (row) is in the returned data set.

## Usage

An example how to use it.

```js
const { sortArrayByKey } = require('array-table-sort');

/*
  the data that is contained in the table
  each row represented by an object
  each column represented by the keys used in the objects
*/
const data = [
  {
    number: 1,
    first: 'Mark',
  },
  {
    number: 2,
    first: 'Jacob',
  },
  {
    number: 3,
    first: 'Larry',
  },
];

/*
  the active key holds the current column to sort
  each column has a key asc
  the active key and the asc usually change on an event (e.g. button click etc)
*/
const sortOptions = {
  active: 'first',
  number: {
    asc: false,
  },
  first: {
    asc: true,
  },
};

/*
  returns a new array

  const sortedTable = [
    {
      number: 2,
      first: 'Jacob',
    },
    {
      number: 3,
      first: 'Larry',
    },
    {
      number: 1,
      first: 'Mark',
    },
  ];
*/
const sortedTable = sortArrayByKey(data, sortOptions);
```

## License

MIT © Lukas Aichbauer
