// This file is required by karma.conf.js and loads recursively all the .spec
// and framework files


declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp):
      {<T>(id: string): T; keys(): string[];};
};


// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);

// Mark this as an ES module
export {};
