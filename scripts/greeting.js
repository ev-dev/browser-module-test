'use strict';

const greeting = (...names) =>  {
  names.forEach(name => {
    console.log(`Hello, ${name}!`)
    
    // Will not work because of async loading
    document.write(`Hello, ${name}!`)
  })
};

export default greeting;

