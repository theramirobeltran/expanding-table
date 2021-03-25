// making it easy to test out different lengths of data
let numberOfColumns = randomInt(2, 5); 
let numberOfRows = randomInt(3, 10)

export default {
    headers: _generateRowData('Header'),
    rows: _generateTableData()
}

function _generateRowData(label, rows=1, columns=numberOfColumns) {
    if (rows > 1) {
        let data = new Array(rows);
        return data.fill(_generateRowData(label))
    }
    else {
        let data = new Array(columns);
        return data.fill(0).map((_, idx) => {
            return `Column ${idx+1} ${label}`
        })
    } 
}

function _generateTableData() {
    let rows = new Array(numberOfRows);
    return rows.fill(
        {
            primary: _generateRowData('Primary Data'),
            secondary: _generateRowData('Secondary Row', randomInt(1, 4))
        }
    )
}

function randomInt(min=0, max=3) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}