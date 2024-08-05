// TASK #1
function steppingCount(steps: string[]) {
    // If steps are not equals 10 steps, then return false
    if (steps.length !== 10) {
        return false;
    }

    // Make starting points which is 0,0
    let x = 0;
    let y = 0;

    for (let index = 0; index < steps.length; index++) {
        switch (steps[index]) {
            case 'n':
                y += 1;
                break;
            case 's':
                y -= 1;
                break;
            case 'w':
                x -= 1;
                break;
            case 'e':
                x += 1;
                break;

            default:
                // If there's an invalid direction, return false
                return false;
        }
    }

    // if the steps are back to starting point (0,0) then return true, if not then return false
    return x === 0 && y === 0;
}

// TASK #2
function remainderCheck(a: number, b: number) {
    if (a === 0 || b === 0) {
        return 'NaN';
    }

    return a > b ? a % b : b % a;
}

// TASK #3
function combinedLetters(a: string, b: string, c: string) {
    // expect all of the inputs to be the same length.
    let combinedLetter = '';
    for (let index = 0; index < a.length; index++) {
        combinedLetter += `${a[index]}${b[index]}${c[index]}`;
    }

    return combinedLetter;
}
