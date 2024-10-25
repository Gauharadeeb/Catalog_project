// Test Cases  
const testCases = [  

    {  
        "keys": {  
          "n": 4,  
          "k": 3  
        },  
        "1": {  
          "base": "10",  
          "value": "4"  
        },  
        "2": {  
          "base": "2",  
          "value": "111"  
        },  
        "3": {  
          "base": "10",  
          "value": "12"  
        },  
        "4": {  
          "base": "4",  
          "value": "213"  
        }  
      } ,
    {  
      "keys": {  
        "n": 10,  
        "k": 7  
      },  
      "1": {  
        "base": "6",  
        "value": "13444211440455345511"  
      },  
      "2": {  
        "base": "15",  
        "value": "aed7015a346d63"  
      },  
      "3": {  
        "base": "15",  
        "value": "6aeeb69631c227c"  
      },  
      "4": {  
        "base": "16",  
        "value": "e1b5e05623d881f"  
      },  
      "5": {  
        "base": "8",  
        "value": "316034514573652620673"  
      },  
      "6": {  
        "base": "3",  
        "value": "2122212201122002221120200210011020220200"  
      },  
      "7": {  
        "base": "3",  
        "value": "20120221122211000100210021102001201112121"  
      },  
      "8": {  
        "base": "6",  
        "value": "20220554335330240002224253"  
      },  
      "9": {  
        "base": "12",  
        "value": "45153788322a1255483"  
      },  
      "10": {  
        "base": "7",  
        "value": "1101613130313526312514143"  
      }  
    }
     
  ];  
  
  function decodeValue(value, base) {  
    return BigInt(parseInt(value, base));  
  }  
  
  function calculateSecret(decodedYValues, k) {  
    let secret = BigInt(0);  
    for (let i = 0; i < k; i++) {  
      let term = decodedYValues[i];  
      for (let j = 0; j < k; j++) {  
        if (i !== j) {  
          term *= BigInt(-j) / BigInt(i - j);  
        }  
      }  
      secret += term;  
    }  
    return secret;  
  }  
  
  function processTestCase(input) {  
    const n = input.keys.n;  
    const k = input.keys.k; 
  
    const decodedYValues = [];  
  
    for (let i = 1; i <= n; i++) {  
      const base = parseInt(input[i].base);  
      const value = input[i].value;  
      const decodedY = decodeValue(value, base);  
      decodedYValues.push(decodedY);  
    }  
  
    const secret = calculateSecret(decodedYValues, k);  
  
    console.log("Secret (C):", secret.toString());  
  }  
  
  function main() {  
    testCases.forEach(testCase => {  
      processTestCase(testCase);  
    });  
  }  
  
  main();