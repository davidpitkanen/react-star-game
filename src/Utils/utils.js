const utils = {};
utils.setArray = (length) => {
    let x = [];
    for (let i=0; i < length; i++) {
        x.push(i);
    }
    return x;
}

utils.setStarGrid = (length, rowLength) => {
    let x = [[]];
    let lastRowIndex = 0;
    for (let i = 0; i < length; i++) {
        if (i % rowLength === 0 && i !== 0) {
            x.push([]);
            lastRowIndex++;
        }
        x[lastRowIndex].push(i);
    }
    return x;
}
export default utils;