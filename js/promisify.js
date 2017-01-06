const fs = require('fs');

function promisify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        fn(...args, (...args) => {
            const err = args.shift();
            if (err) return reject(err);
            resolve(...args);
        });
    });
}

const test = () => {
    const readFileAsync = promisify(fs.readFile);
    readFileAsync('./adder.js').then(console.log);
}
