function receivesAFunction(cb) {
    return cb();
}

function returnsANamedFunction() {
    return testName = () => x **2;
}

function returnsAnAnonymousFunction() {
    return ((x) => x ** 2)
}