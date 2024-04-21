// function convertTamilToEnglish(tamilText) {
//   const tamilToEnglishMap = {
//     //அ:
//     அ: "a",
//     ஆ: "aa",
//     இ: "e",
//     ஈ: "ee",
//     உ: "u",
//     ஊ: "oo",
//     எ: "ye",
//     ஏ: "yae",
//     ஐ: "i",
//     ஒ: "o",
//     ஓ: "oa",
//     ஔ: "ow",
//     ஃ: "ah",
//     //க்:
//     க்: "ik",
//     ங்: "ing",
//     ச்: "ich",
//     ஞ்: "ing",
//     ட்: "it",
//     ண்: "in",
//     த்: "ith",
//     ந்: "inth",
//     ப்: "ip",
//     ம்: "im",
//     ய்: "iy",
//     ர்: "ir",
//     ல்: "il",
//     வ்: "iv",
//     ழ்: "izh",
//     ள்: "il",
//     ற்: "ir",
//     ன்: "in",
//     //க:
//     க: "ka",
//     கா: "kaa",
//     கி: "ki",
//     கீ: "kii",
//     கு: "ku",
//     கூ: "kuu",
//     கெ: "ke",
//     கே: "kee",
//     கை: "kai",
//     கொ: "ko",
//     கோ: "koo",
//     கௌ: "kau",
//     //ங:
//     ங: "nga",
//     ஙா: "ngaa",
//     ஙி: "ngi",
//     ஙீ: "ngii",
//     ஙு: "ngu",
//     ஙூ: "nguu",
//     ஙெ: "nge",
//     ஙே: "ngee",
//     ஙை: "ngai",
//     ஙொ: "ngo",
//     ஙோ: "ngoo",
//     ஙௌ: "ngau",
//     //ச:
//     ச: "sa",
//     சா: "saa",
//     சி: "si",
//     சீ: "sii",
//     சு: "su",
//     சூ: "suu",
//     செ: "se",
//     சே: "see",
//     சை: "sai",
//     சொ: "so",
//     சோ: "soo",
//     சௌ: "sau",
//     //ஞ:
//     ஞ: "nja",
//     ஞா: "njaa",
//     ஞி: "nji",
//     ஞீ: "njii",
//     ஞு: "nju",
//     ஞூ: "njuu",
//     ஞெ: "nje",
//     ஞே: "njee",
//     ஞை: "njai",
//     ஞொ: "njo",
//     ஞோ: "njoo",
//     ஞௌ: "sjau",
//     //ட:
//     ட: "ta",
//     டா: "taa",
//     டி: "ti",
//     டீ: "tii",
//     டு: "tu",
//     டூ: "tuu",
//     டெ: "te",
//     டே: "tee",
//     டை: "tai",
//     டொ: "to",
//     டோ: "too",
//     டௌ: "tau",
//     //ண:
//     ண: "na",
//     ணா: "naa",
//     ணி: "ni",
//     ணீ: "nii",
//     ணு: "nu",
//     ணூ: "nuu",
//     ணெ: "ne",
//     ணே: "nee",
//     ணை: "nai",
//     ணொ: "no",
//     ணோ: "noo",
//     ணௌ: "nau",
//     //த:
//     த: "tha",
//     தா: "thaa",
//     தி: "thi",
//     தீ: "thii",
//     து: "thu",
//     தூ: "thuu",
//     தெ: "the",
//     தே: "thee",
//     தை: "thai",
//     தொ: "tho",
//     தோ: "thoo",
//     தௌ: "thau",
//     //ந:
//     ந: "na",
//     நா: "naa",
//     நி: "ni",
//     நீ: "nii",
//     நு: "nu",
//     நூ: "nuu",
//     நெ: "ne",
//     நே: "nee",
//     நை: "nai",
//     நொ: "no",
//     நோ: "noo",
//     நௌ: "nau",
//     //ப:
//     ப: "pa",
//     பா: "paa",
//     பி: "pi",
//     பீ: "pii",
//     பு: "pu",
//     பூ: "puu",
//     பெ: "pe",
//     பே: "pee",
//     பை: "pai",
//     பொ: "po",
//     போ: "poo",
//     பௌ: "pau",
//     //ம:
//     ம: "ma",
//     மா: "maa",
//     மி: "mi",
//     மீ: "mii",
//     மு: "mu",
//     மூ: "muu",
//     மெ: "me",
//     மே: "mee",
//     மை: "mai",
//     மொ: "mo",
//     மோ: "moo",
//     மௌ: "mau",
//     //ய:
//     ய: "ya",
//     யா: "yaa",
//     யி: "yi",
//     யீ: "yii",
//     யு: "yu",
//     யூ: "yuu",
//     யெ: "ye",
//     யே: "yee",
//     யை: "yai",
//     யொ: "yo",
//     யோ: "yoo",
//     யௌ: "yau",
//     //ர:
//     ர: "ra",
//     ரா: "raa",
//     ரி: "ri",
//     ரீ: "rii",
//     ரு: "ru",
//     ரூ: "ruu",
//     ரெ: "re",
//     ரே: "ree",
//     ரை: "rai",
//     ரொ: "ro",
//     ரோ: "roo",
//     ரௌ: "rau",
//     //ல:
//     ல: "la",
//     லா: "laa",
//     லி: "li",
//     லீ: "lii",
//     லு: "lu",
//     லூ: "luu",
//     லெ: "le",
//     லே: "lee",
//     லை: "lai",
//     லொ: "lo",
//     லோ: "loo",
//     லௌ: "lau",
//     //வ:
//     வ: "va",
//     வா: "vaa",
//     வி: "vi",
//     வீ: "vii",
//     வு: "vu",
//     வூ: "vuu",
//     வெ: "ve",
//     வே: "vee",
//     வை: "vai",
//     வொ: "vo",
//     வோ: "voo",
//     வௌ: "vau",
//     //ழ:
//     ழ: "zha",
//     ழா: "zhaa",
//     ழி: "zhi",
//     ழீ: "zhii",
//     ழு: "zhu",
//     ழூ: "zhuu",
//     ழெ: "zhe",
//     ழே: "zhee",
//     ழை: "zhai",
//     ழொ: "zho",
//     ழோ: "zhoo",
//     ழௌ: "zhau",
//     //ள:
//     ள: "la",
//     ளா: "laa",
//     ளி: "li",
//     ளீ: "lii",
//     ளு: "lu",
//     ளூ: "luu",
//     ளெ: "le",
//     ளே: "lee",
//     ளை: "lai",
//     ளொ: "lo",
//     ளோ: "loo",
//     ளௌ: "lau",
//     //ற:
//     ற: "ra",
//     றா: "raa",
//     றி: "ri",
//     றீ: "rii",
//     று: "ru",
//     றூ: "ruu",
//     றெ: "re",
//     றே: "ree",
//     றை: "rai",
//     றொ: "ro",
//     றோ: "roo",
//     றௌ: "rau",
//     //ன:
//     ன: "na",
//     னா: "naa",
//     னி: "ni",
//     னீ: "nii",
//     னு: "nu",
//     னூ: "nuu",
//     னெ: "ne",
//     னே: "nee",
//     னை: "nai",
//     னொ: "no",
//     னோ: "noo",
//     னௌ: "nau",
//   };

//   let englishText = "";
//   let i = 0;
//   while (i < tamilText.length) {
//     const currentChar = tamilText[i];
//     const nextChar = tamilText[i + 1];

//     if (tamilToEnglishMap.hasOwnProperty(currentChar + nextChar)) {
//       englishText += tamilToEnglishMap[currentChar + nextChar];
//       i += 2; // Skip the next character since it's part of a combined character
//     } else if (tamilToEnglishMap.hasOwnProperty(currentChar)) {
//       englishText += tamilToEnglishMap[currentChar];
//       i += 1; // Move to the next character
//     } else {
//       englishText += currentChar; // If no mapping found, retain the character as it is
//       i += 1; // Move to the next character
//     }
//   }
//   return englishText;
// }

// // Function to handle user input and display the result
// function handleInput() {
//   const tamilInput = document.getElementById("tamilInput").value;
//   const englishOutput = convertTamilToEnglish(tamilInput);
//   document.getElementById("englishOutput").innerText = englishOutput;
// }

// Define a dictionary mapping Tamil letters to English transliterations
// const tamilToEnglishMap = {
//   அ: "a",
//   ஆ: "aa",
//   இ: "i",
//   ஈ: "ii",
//   உ: "u",
//   ஊ: "uu",
//   எ: "e",
//   ஏ: "ee",
//   ஐ: "ai",
//   ஒ: "o",
//   ஓ: "oo",
//   ஔ: "au",
//   க: "ka",
//   ங: "nga",
//   ச: "cha",
//   ஞ: "nya",
//   ட: "ṭa",
//   ண: "ṇa",
//   த: "tha",
//   ந: "na",
//   ப: "pa",
//   ம: "ma",
//   ய: "ya",
//   ர: "ra",
//   ல: "la",
//   வ: "va",
//   ழ: "ḻa",
//   ள: "ḷa",
//   ற: "ṟa",
//   ன: "ṉa",
//   ஜ: "ja",
//   ஷ: "ṣa",
//   ஸ: "sa",
//   ஹ: "ha",
//   க்ஷ: "kṣa",
//   ஸ்ரீ: "śrī",
// };

// Define a dictionary mapping Tamil letters to English transliterations
const tamilToEnglishMap = {
  அ: "a",
  ஆ: "aa",
  இ: "i",
  ஈ: "ii",
  உ: "u",
  ஊ: "uu",
  எ: "e",
  ஏ: "ee",
  ஐ: "ai",
  ஒ: "o",
  ஓ: "oo",
  ஔ: "au",
  க: "ka",
  ங: "nga",
  ச: "cha",
  ஞ: "nya",
  ட: "ṭa",
  ண: "ṇa",
  த: "tha",
  ந: "na",
  ப: "pa",
  ம: "ma",
  ய: "ya",
  ர: "ra",
  ல: "la",
  வ: "va",
  ழ: "ḻa",
  ள: "ḷa",
  ற: "ṟa",
  ன: "ṉa",
  ஜ: "ja",
  ஷ: "ṣa",
  ஸ: "sa",
  ஹ: "ha",
  க்ஷ: "kṣa",
  ஸ்ரீ: "śrī",
  "ா": "aa",
  "ி": "i",
  "ீ": "ii",
  "ு": "u",
  "ூ": "uu",
  "ெ": "e",
  "ே": "ee",
  "ை": "ai",
  "ொ": "o",
  "ோ": "oo",
  "ௌ": "au",
  "்": "",
  "ஂ": "ng",
  ஃ: "ah",
  // Add more mappings for other Tamil letters as needed
};

// Function to transliterate Tamil text to English
function tamilToEnglish(tamilText) {
  let englishText = "";
  for (let char of tamilText) {
    if (char in tamilToEnglishMap) {
      englishText += tamilToEnglishMap[char];
    } else {
      englishText += char; // Keep non-Tamil characters unchanged
    }
  }
  return englishText;
}

// // User input in Tamil
// const tamilInput = "நிதானம் அவசியம்";

// // Transliterate the user input to English
// const englishOutput = tamilToEnglish(tamilInput);

// // Print the transliterated text
// console.log("Transliterated text in English:", englishOutput);

function handleInput() {
  const tamilInput = document.getElementById("tamilInput").value;
  const englishOutput = tamilToEnglish(tamilInput);
  document.getElementById("englishOutput").innerText = englishOutput;
}
