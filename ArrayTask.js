

let arr = ["Amazonn", "AmazonHousing.com", "AmazonMicrosoft", "azonMorgan Stanley"];
let shortestString = arr.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
let longestSubstring = '';

for (let i = 0; i < shortestString.length; i++) {
    for (let j = i + longestSubstring.length + 1; j <= shortestString.length; j++) {
        const substring = shortestString.substring(i, j);
        if (arr.every(str => str.includes(substring))) {
            longestSubstring = substring;
        } else {
            break; 
        }
    }
}

console.log(longestSubstring);

