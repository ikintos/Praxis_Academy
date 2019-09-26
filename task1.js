const manipulate = data => {
    let length, abjad, first, last

        abjad = data.sort()
    length = data.length
    first = data[0]
    last = data [length -1]

    return result1 = {
        abjad,
        length,
        first,
        last
    }
}
const ascending_test = data => {
    return data.sort();
};

const descending_test = data => {
    let sorting = ascending_test(data);

    return sorting.reverse();
};

module.exports = {
    ascending_test, descending_test, manipulate
};