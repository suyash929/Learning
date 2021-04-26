const add = (input) => {
    if (input.length < 2) {
        return console.log('Number of inputs are not valid. Minimum two arguments are required to perform addition');
    }

    try {
        return console.log(input.reduce((prev, curr) => prev + curr));
    } catch (e) {
        console.log(e);
    }
};

const multiply = (input) => {
    if (input.length < 2) {
        return console.log('Number of inputs are not valid. Minimum two arguments are required to perform multiplication');
    }

    try {
        return console.log(input.reduce((prev, curr) => prev * curr));
    } catch (e) {
        console.log(e);
    }
};

const subtraction = (input) => {
    if (input.length !== 2) {
        return console.log('Number of inputs are not valid. Two arguments are required to perform subtraction');
    }

    try {
        return console.log(input.reduce((prev, curr) => prev - curr));
    } catch (e) {
        console.log(e);
    }
};

const division = (input) => {
    if (input.length !== 2) {
        return console.log('Number of inputs are not valid. Two arguments are required to perform subtraction');
    }

    try {
        return console.log(input.reduce((prev, curr) => prev / curr));
    } catch (e) {
        console.log(e);
    }
};

const argv = require('yargs').argv;
switch (argv.operation) {
    case 'addition':
        add(argv._);
        break;

    case 'multiply':
        multiply(argv._);
        break;

    case 'subtraction':
        subtraction(argv._);
        break;

    case 'division':
        division(argv._);
        break;

    default:
        console.log('Unsuppoted operations');
}
