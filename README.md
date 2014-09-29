# is-core-module

[![NPM](https://nodei.co/npm/is-core-module.png?downloads=true)](https://npmjs.org/package/is-core-module)

Returns whether or not the `packageName` you pass in is a core module or not.

module list pulled from [nodejs repo](https://github.com/joyent/node/tree/master/lib)

# Usage

``` javascript
require('is-core-module')('fs') // returns true
require('is-core-module')('butts') // returns false
```

## License
MIT
