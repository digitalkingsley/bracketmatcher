const trueBracket = (stringOfBrackets) => {

  let dataContainer = {
    leftBracketCounter: 0,
    rightBracketCounter: 0,
    stringOfBrackets: ''
  }
  let status = 0;
  dataContainer.stringOfBrackets = stringOfBrackets;

  if (dataContainer.stringOfBrackets.length > 0) {

    console.log('stringOfBrackets is now: ' + dataContainer.stringOfBrackets);

    console.log('\n\nNow getting bracket count...');
    getBracketCount(dataContainer);
    
    console.log('\n\nNow calling matchTerminalBrackets function...');
    matchTerminalBrackets(dataContainer);

    console.log('\n\nNow checking status after terminal bracket match...');
    status = checkStatus(dataContainer);

    if (status === 0) {
    
      console.log('\n\nResult not reached. Now calling matchBrackets function...');
      matchBrackets(dataContainer);

      console.log('\n\nNow checking status after matchBrackets function call...');
      status = checkStatus(dataContainer);

      if (status === 0) {

        console.log('\n\nNow applying Special Case Function ...');
        applySpecialCaseFunction(dataContainer);
        return dataContainer.stringOfBrackets;
      } else { return dataContainer.stringOfBrackets; }

    } else { return dataContainer.stringOfBrackets; }

 } else { return stringOfBrackets; }

}

const getBracketCount = (dataContainer) => {
  for (let i = 0; i < dataContainer.stringOfBrackets.length; i += 1) {
    if (dataContainer.stringOfBrackets [i] === '(') { 
        dataContainer.leftBracketCounter += 1;
        console.log('leftBracketCounter is now: ' + dataContainer.leftBracketCounter);
  } else if (dataContainer.stringOfBrackets [i] === ')') {
        dataContainer.rightBracketCounter += 1;
        console.log('rightBracketCounter is now: ' + dataContainer.rightBracketCounter);
   } else {}
  }
}

const getBracketCount2 = (tempArrayOfBracketString) => {
  let leftBracketCounter = 0, rightBracketCounter = 0;
  for (let i = 0; i < tempArrayOfBracketString.length; i += 1) {
    if (tempArrayOfBracketString[i] === '(') { 
      leftBracketCounter += 1;
      console.log('leftBracketCounter is now: ' + leftBracketCounter);
      console.log('The bracket itself is now: ' + tempArrayOfBracketString[i]);
  } else if (tempArrayOfBracketString[i] === ')') {
      rightBracketCounter += 1;
      console.log('rightBracketCounter is now: ' + rightBracketCounter);
      console.log('The bracket itself is now: ' + tempArrayOfBracketString[i]);

   } else {}
  }

  if (leftBracketCounter === rightBracketCounter) {
    return 1;
  } else { return 0; }
}

const matchTerminalBrackets = (dataContainer) => {
  for (let i = 0; i < dataContainer.stringOfBrackets.length; i += 1) {
  if (dataContainer.stringOfBrackets[i] !== '(' && dataContainer.stringOfBrackets[i] !== ')') {
    continue;

  } else if (dataContainer.stringOfBrackets[i] === ')') {
    dataContainer.stringOfBrackets = '(' + dataContainer.stringOfBrackets;
    console.log('stringOfBrackets is now: ' + dataContainer.stringOfBrackets);
    dataContainer.leftBracketCounter += 1;
    console.log('leftBracketCounter is now: ' + dataContainer.leftBracketCounter);
    break;
  } else { break; }
}

  for (let i = dataContainer.stringOfBrackets.length -1; i >= 0; i -= 1) {
  
  if (dataContainer.stringOfBrackets[i] !== '(' && dataContainer.stringOfBrackets[i] !== ')') {
    continue;

  } else if (dataContainer.stringOfBrackets[i] === '(') {
    dataContainer.stringOfBrackets = dataContainer.stringOfBrackets + ')';
    console.log('stringOfBrackets is now: ' + dataContainer.stringOfBrackets);
    dataContainer.rightBracketCounter += 1;
    console.log('rightBracketCounter is now: ' + dataContainer.rightBracketCounter);
    break;
  } else { break; }

  console.log('stringOfBrackets is now: ' + dataContainer.stringOfBrackets);
  }

}

const matchBrackets = (dataContainer) => {
console.log('\n\nNow actually matching...');
  do {

    if (dataContainer.leftBracketCounter > dataContainer.rightBracketCounter) {
      dataContainer.stringOfBrackets = dataContainer.stringOfBrackets + ')';
      dataContainer.rightBracketCounter += 1;
      console.log('rightBracketCounter is now: ' + dataContainer.rightBracketCounter)
      console.log ('string of brackets after a match is now: ' + dataContainer.stringOfBrackets);
      
    } else if (dataContainer.leftBracketCounter < dataContainer.rightBracketCounter) {
      dataContainer.stringOfBrackets = '(' + dataContainer.stringOfBrackets;
      dataContainer.leftBracketCounter += 1;
      console.log('leftBracketCounter is now: ' + dataContainer.leftBracketCounter)
      console.log ('string of brackets after another match is now: ' + dataContainer.stringOfBrackets);
    } else {}

    }
  while(dataContainer.leftBracketCounter != dataContainer.rightBracketCounter);
  // return bracketStringAfterTerminalMatch;
}

const checkStatus = (dataContainer) => {
 // Check if the first bracket on the left is ')' or that on the right is '('
 //If that's the case, we don't have a   
let tempBracketStringArray = [];

console.log('Now performing double loop to check status...');
  for (let i = 0; i < dataContainer.stringOfBrackets.length-1; i += 1) {
    console.log('\n\ni in first loop is now: ' + i);
    for (let j = i+1; j < dataContainer.stringOfBrackets.length; j += 1) {
      console.log('\n\nj in inner loop is now: ' + j);
      //console.log('\n\nbracket in tempBracketStringArray is now: ' + tempBracketStringArray);
      if (dataContainer.stringOfBrackets[i] !== ' ' && dataContainer.stringOfBrackets[j] !== ' ' && dataContainer.stringOfBrackets[i] === dataContainer.stringOfBrackets[j]) {
        tempBracketStringArray.push(dataContainer.stringOfBrackets[i]);
        console.log('\n\nbracket in tempBracketStringArray is now: ' + tempBracketStringArray);
        break;

      } else if (dataContainer.stringOfBrackets[i] !== ' ' && dataContainer.stringOfBrackets[j] !== ' ' && (dataContainer.stringOfBrackets[i] === '(' && dataContainer.stringOfBrackets[j] === ')')) {   
        i += 1;
        break;

      } else if (dataContainer.stringOfBrackets[i] !== ' ' && dataContainer.stringOfBrackets[j] !== ' ' && (dataContainer.stringOfBrackets[i] === ')' && dataContainer.stringOfBrackets[j] === '(')) {   
        tempBracketStringArray.push(dataContainer.stringOfBrackets[i]);
        console.log('\n\nbracket in tempBracketStringArray is now: ' + tempBracketStringArray);
        break;

      } else { continue; }
    }
  }

  console.log('tempBracketStringArray is now: ' + tempBracketStringArray);

  if (tempBracketStringArray[0] === ')' || tempBracketStringArray[tempBracketStringArray.length-1] === '(') { return 0; }

  if (getBracketCount2(tempBracketStringArray) === 0) { return 0; }
  else { return 1; }

}


const applySpecialCaseFunction = (dataContainer) => {

  let bracketDuplicateCount = 1, bracketType = '', statusReport = 0;
  console.log ('The string of brackets is currently: ' + dataContainer.stringOfBrackets);
  for (let i = 0; i < dataContainer.stringOfBrackets.length - 1; i += 1) {
    if ((dataContainer.stringOfBrackets[i] === dataContainer.stringOfBrackets[i+1]) && (dataContainer.stringOfBrackets[i] == '(' || dataContainer.stringOfBrackets[i+1] == ')')) {
      bracketDuplicateCount += 1;
      console.log ('bracketDuplicateCount is now: ' + bracketDuplicateCount);
    } else {
      if (bracketDuplicateCount > 1 && bracketDuplicateCount < 3) {
        bracketDuplicateCount = 1;
        console.log ('bracketDuplicateCount is now: ' + bracketDuplicateCount);
      } else if (bracketDuplicateCount >= 3) {
        bracketType = dataContainer.stringOfBrackets[i];
        console.log ('bracketDuplicateCount is now: ' + bracketDuplicateCount);
        console.log ('The duplicate bracket type is: ' + bracketType);
        break;
      } else {}
    }
  }

  if(bracketDuplicateCount >= 3) {
    for (let count = 1; count <= bracketDuplicateCount; count += 1 ) {
      dataContainer.stringOfBrackets = '(' +  dataContainer.stringOfBrackets;
      console.log ('matchedBracketsString is now: ' +  dataContainer.stringOfBrackets);
      statusReport = checkStatus(dataContainer);
      if (statusReport === 1) { break; }
      dataContainer.stringOfBrackets =  dataContainer.stringOfBrackets + ')';
      console.log ('matchedBracketsString is now: ' +  dataContainer.stringOfBrackets);
       statusReport = checkStatus(dataContainer);
      if (statusReport === 1) { break; }
    }
  }
}

console.log (trueBracket(') (() ( ()))) (  '));