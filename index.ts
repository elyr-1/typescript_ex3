export const charChange = (str : string) =>{
    let char = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) { // traverse all characters in the string   
        char = str.charAt(i); // get each character in the string
        if (char.match(/[0-9]/)) { // check if character is a number
            letter += char;
        } else if (char === "Z" || char === "z") { // check if character is z (ignore case)
            letter += "A"; // wrap around
        } else { // characters other than numbers and z
            let next = String.fromCharCode(char.charCodeAt(char.length - 1) + 1); // replace with the next character
            if (next.match(/[AEIOUaeiou]/)) { // check if vowels
                letter += next.toUpperCase(); // change vowels to upper case
            } else {
                letter += next.toLowerCase(); // change consonants to lower case
            }
        }
    }
    console.log(letter);
}
charChange("00typescript99");
charChange("Cat30");