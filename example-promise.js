// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City Not Found');
// }
//
// getTempCallback('Philadelphia', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City Not Found');
//     } 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then( function(temp) {
//   console.log('Promise Success', temp);
// }, function(err) {
//   console.log('Promise error', err);
// });


// Challenge Area

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      var sum = a + b;
      resolve(sum);
    } else if (typeof a !== 'number' || typeof b !== 'number'){
      reject('One or both of these are not numbers.');
    } else if (a === null || b === null){
      reject('One or both of these are empty.');
    } else {
      reject('Something went wrong.');
    }
  });
}

addPromise(2,6).then(
  function(temp) {
    console.log('Sum: ', temp);
  },
  function(err) {
    console.log('Error: ', err);
  }
);
