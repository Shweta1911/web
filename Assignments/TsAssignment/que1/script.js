function countOcc(string1) {
    var vowels = 0;
    var whiteSpace = 0;
    for (var i = 0; i < string1.length; i++) {
        if (string1.charAt(i) == 'a' || string1.charAt(i) == 'e' || string1.charAt(i) == 'i' || string1.charAt(i) == 'o' || string1.charAt(i) == 'u') {
            vowels++;
        }
        if (string1.charAt(i) == ' ')
            whiteSpace++;
    }
    var consonants = string1.length - (vowels + whiteSpace);
    console.log("Number of vowels are ".concat(vowels));
    console.log("Number of consonants are ".concat(consonants));
}
countOcc("Hi I am shweta");
