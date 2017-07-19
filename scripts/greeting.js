'use strict';

const greeting = (...names) =>  {
  names.forEach(name => {
    console.log(`Hello, ${name}!`)
  })
};

export default greeting;
