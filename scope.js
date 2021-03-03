<<<<<<< HEAD
const a = 1; const b = 2; const c = 3;  
       
(function firstFunction () {  
  const b = 5; const c = 6;  
  
  (function secondFunction () {  
    const b = 8;  
  
    (function thirdFunction () {  
      const a = 7; const c = 9;  
  
      (function fourthFunction () {  
        const a = 1; const c = 8  
      })()  
    })()  
    console.log(`a: ${a}, b: ${b}, c: ${c}`)  
  })()  
})();

=======
const a = 1; const b = 2; const c = 3;  
       
(function firstFunction () {  
  const b = 5; const c = 6;  
  
  (function secondFunction () {  
    const b = 8;  
  
    (function thirdFunction () {  
      const a = 7; const c = 9;  
  
      (function fourthFunction () {  
        const a = 1; const c = 8  
      })()  
    })()  
    console.log(`a: ${a}, b: ${b}, c: ${c}`)  
  })()  
})();

>>>>>>> 36f81f55c755a90eb40b71456e5896082b67d6d0
