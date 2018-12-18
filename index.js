const createQueue = (arr) => arr.reduce((p, c) => p = p.then(c), Promise.resolve());

function doubleAfter2Seconds(x) {
  console.log('double after 2 sec - started');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

/**
 * must log last promise value
 */
createQueue([1, 2, 3, 4, 5].map(i => () => doubleAfter2Seconds(i))).then(console.log);

/**
 * also working example 
 */ 

/*
createQueue([1, 2, 3, 4, 5].map(i => () =>
  new Promise(async resolve => {
    resolve(await doubleAfter2Seconds(i));
  })
)).then(console.log);
*/