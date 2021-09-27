// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
let subD = [];
                // callBack Fn // 

    // step 3 use for loop to calculate total sum of 
    //each array[i] from step 2

    subD = (array) => {
        let res = 0;
        for (let i = 0; i < array.length; i++) {
            res += array[i];
        }
        return res;
        }

    // step 4  check if total sum from step 3  % 10 === 0
    // ? true : false
const isValid = (parameter) => {return parameter % 10 === 0 ? true : false;};

const validateCred = (array) => {
    // declare  my temp calculate array
    let mapA1 = [];
    let mapA2 = [];

    // step 1 multiply every other element in array 
    //follow luna algorithm
    
    mapA1 = array.reverse().map((x, i) => {return i % 2 === 0 ? x : x * 2;});

    // step 2  use . map()  if the step1 array[i] > 9 than sub 9

    mapA2 = mapA1.map(x => x > 9 ? x - 9 : x);
    // step 3 + 4 using the callBack Fn
    return isValid(subD(mapA2));
};

// search in Batch (the nested array of the C.C for invalid C.C) 

const findInvalidCards = (nestedA) => {
    let tinValidC = [];
    for (let i = 0; i < nestedA.length; i++) {
        if (!validateCred(nestedA[i])) {
            tinValidC.push(nestedA[i].reverse());
        }
    }
    return tinValidC;
};

const idInvalidCardCompanies = (nestArray) => {
    let cArray = [];
    for (let i = 0; i < nestArray.length; i++) {

        switch (nestArray[i][0]) {
            case 3:
                if (cArray.indexOf('Amex (American Express)') === -1) {
                    cArray.push('Amex (American Express)');
                }
                break;
            case 4:
                if (cArray.indexOf('Visa') === -1) {
                    cArray.push('Visa');
                }
                break;
            case 5:
                if (cArray.indexOf('MasterCard') === -1) {
                    cArray.push('MasterCard');
                }
                break;
            case 6:
                if (cArray.indexOf('Discover') === -1) {
                    cArray.push('Discover');
                }
                break;
            default:
                console.log('Company not found!');
        }
    }
    return cArray;
}
//take C.C number as a string and and convert it into array  
//of numbers so we can use our Fn

const cardStringToArray = (string) => {
    return string.split('').map(Number);
}
// Take invalid C.card and convert it 
//to valid one , print to screen 

const invalidCardToValidCard = (string) => {
    let temp = cardStringToArray(string);
    let temp1 = [];
    let temp2 = [];
    let temp3 = null;
    temp1 = temp.reverse().map((x, i) => {return i % 2 === 0 ? x : x * 2;});
    temp2 = temp1.map(x => x > 9 ? x - 9 : x);
    temp3 = subD(temp2) % 10;
    temp[0] -= temp3;
    return `Valid credit card should be ${temp.reverse().join('')}`; 
};


                        // Test My Fn //

//console.log(validateCred(valid4));

//let test = findInvalidCards(batch);
//console.log(test);

//let test = idInvalidCardCompanies(findInvalidCards(batch));
//console.log(test);

//console.log(validateCred(cardStringToArray('5795593392134643')));

//console.log(invalidCardToValidCard('5795593392134643')); // invalid // 
//console.log(validateCred(cardStringToArray('5795593392134641'))); // valid // 
 
                        //           //
                        
                        
                        // array to string // 

 //let test = invalid2.join('');
 //console.log(test);
                        //                 //

                        // string to array //  

//let test = '4539677908016808';
//let test1 = test.split('');
//console.log(test1);
                        //                  //

