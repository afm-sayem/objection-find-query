## objection-find-query

Construct complex api query on the frontend, for endpoints implementing [objection-find](https://github.com/Vincit/objection-find).


Usage:

```javascript

/*
  expected format:
  {
    op: {
      column: value
    }
  }

  sample input:
  {
    gt: {
      released: 1953,
      gross_income: 200000,
      actors: {
        age: 23
      }
    },
    lt: {
      released: 1984
    },
    in: {
      ratings: [3, 4]
    }
  }

  output:
  {
    'released:gt': 1953,
    'gross_income:gt': 200000,
    'actors.age:gt': 23,
    'released:lt': 1984,
    'ratings:in': [3, 4]
  }
*/

const ofq = require('objection-find-query');
const formattedParams = ofq.format(params);

```

## Installation

`npm install objection-find-query`
