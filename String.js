
let strWithSingleQuote='Hello Single Quote'
let strWithDoubleQuote="Hello Double Quote"

console.log(strWithSingleQuote)
console.log(strWithDoubleQuote)

let specialCharaters= "this is CodeCraft \nit is a service base IT company\t team"

console.log(specialCharaters)

//concatination
let strConc1 = 'Dinesh'
let strConc2="kumar"
let strConcat3="    Dinesh Kumar!   "
let strConcat4="Dinesh Kumar"
let padEx="5"
console.log(strConc1+strConc2)

//interpolation
let num = 123
console.log(`My name is ${strConc1}`+ ` and my id is ${num}`)
console.log(strConc1.toLocaleLowerCase())
console.log(strConc1.indexOf("n"))

//String Methods
//length
console.log(strConc1.length)

//String charAt()
console.log("charAt method: "+strConc1.charAt(2))

//String charCodeAt()
console.log("String charCodeAt: "+strConc1.charCodeAt(2))

//String at()
console.log("String at: "+strConc1.at(2))

//String [ ]
console.log("String [ ]:"+strConc1[1])

//String slice()
console.log("String slice : "+strConc1.slice(3,5)) //includes first character, Exclude last char, if it is negative this will count from end

//String substring()
console.log("String substring : "+strConc1.substring(0,5))// similar to slice

//String substr()
console.log("String substr : "+strConc1.substr(1,3))

//String toUpperCase()
console.log("String toUpperCase : "+strConc1.toUpperCase())

//String toLowerCase()
console.log("String toLowerCase : "+strConc1.toLowerCase())

//String trim()
console.log("String trim:"+strConcat3.trim())// removing the unwanted space before the string

//String trimStart()
console.log("String trimStart : "+strConcat3.trimStart())

//String String trimEnd()
console.log("String trimEnd : "+strConcat3.trimEnd())

//String padStart()
console.log("String padStart:"+padEx.padStart(4,"0"))

//String padEnd()
console.log("String padEnd :"+padEx.padEnd(4,"0"))

//String repeat()
console.log("String repeat:"+strConc1.repeat(3))

//String replace()
console.log("String repeat:"+strConc1.replace("Dinesh","Prakash"))

//ReplaceAll()
console.log("ReplaceAll:"+strConc1.replaceAll("Dinesh","dine"))

//String split()
console.log("String split:"+strConcat4.split(" "))