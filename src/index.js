export const longestSentence = (string) => {
  // Clean string
  // Split string into sentences
  // Sort sentences by length
  // Return count of first sentence
  return string
    .replace(/[,;:!?]/g, "")
    .split(".")
    .sort((a, b) => b.length - a.length)[0]
    .trim()
    .split(" ").length;
};

// Reverse words in a sentence
export const reverseStr = (str) => {
  // split by whitespace ["hello","my"...]
  // reverse
  // join(" ")
  return str.split(" ").reverse().join(" ");
};

export const findDogs = (dogs) => {
  // age > 5
  const oldDogs = dogs.filter((dog) => dog.age > 5);
  // if dog age < 5 increase by 3
  const youngDogs = dogs.filter((dog) => dog.age < 5);

  const agedDogs = youngDogs.map((dog) => {
    dog.age += 3;
    if (dog.age > 5) {
      oldDogs.push(dog);
    }
  });
  return oldDogs;
};
