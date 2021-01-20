var input = 'alphabetoi'
var vowelsArray = ['a', 'e', 'i', 'o', 'u']
var chars = input.split('')
var rightCharacterIndexStart = chars.length - 1

for (var i = 0; i < chars.length; i++) {
    if (i > rightCharacterIndexStart) {
        break
    } else if (vowelsArray.includes(chars[i])) {
        var leftCharacter = chars[i]
        for (var ii = rightCharacterIndexStart; ii >= 0; ii--) {
            if (vowelsArray.includes(chars[ii])) { 
                chars[i] = chars[ii]
                chars[ii] = leftCharacter
                rightCharacterIndexStart = ii - 1
                break
            } else {
                continue
            }
        }
    } else {
        continue
    }
}
console.log(chars.join(''))