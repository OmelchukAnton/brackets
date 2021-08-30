module.exports = function check(str, bracketsConfig) {
    let bracketObj = new Object();
    let openBracketsArr = [];
    let stack = [];

    for (let value of bracketsConfig) {
        bracketObj[value[1]] = value[0];
    }

    for (let value of bracketsConfig) {
        openBracketsArr.push(value[0]);
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (openBracketsArr.includes(char)) {
            bracketObj[char] === char && stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
        } else {
            if (bracketObj[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}
