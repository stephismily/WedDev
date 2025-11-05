function findWordsWithVowels() {
  const text = document.getElementById("vowelText").value;
  const vowelWords = text.match(/\b\w*[aeiouAEIOU]\w*\b/g);
  document.getElementById("vowelResult").textContent = vowelWords
    ? vowelWords.join(", ")
    : "No words with vowels found.";
}
