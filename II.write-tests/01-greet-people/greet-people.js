const greetPeople = (people) => {

  const isAString = typeof people === 'string';
  const isAnArray = Array.isArray(people);
  const isAnArrayOfStrings = isAnArray && people.every( person => typeof person === 'string' );

  if( !isAString && !isAnArrayOfStrings ) {
    throw new Error('invalid input');
  }

  if( !isAnArrayOfStrings ) {
    return `Hello ${people}.`;
  }

  let greeting = "Hello";

  if( isAnArrayOfStrings ) {
    people.forEach( (person, index) => {
  
      const isFirstItem = index === 0;
      const isMiddleItem = index >= 1 && index < people.length -1;
  
      if( isFirstItem ) {
        greeting += ` ${person}`;
      } else if( isMiddleItem ) {
        greeting += `, ${person}`;
      } else {
        greeting += ` and ${person}.`;
      }
    });
  }

  return greeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
