## objection-find-query

Construct complex api query for endpoints using objection-find.


Usage:

```
const paramUtility = require('objection-find-query');

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
    'released:lt': 1984,
    'ratings:in': [3, 4]
  }
*/

  const params = getParams();
  const formattedParams = paramUtility.format(params);

```

Use a library like `query-string` to stitch together 
