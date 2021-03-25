import TableRow from './TableRow';

export default ({ headers, rows }) => {

    const _renderHeaders = _headers => {
        if (!headers) return null;
        return _headers.map(header => <td key={header}>{header}</td>);
    }

    const _renderRows = _rows => {
        if (!_rows?.length) return null;
        return _rows.map((row, idx) => <TableRow key={idx} row={row} />)
    }

    return (
        <table>
            <thead>
                <tr>{ _renderHeaders(headers) }</tr>
            </thead>
            <tbody>
                { _renderRows(rows) }
            </tbody>
        </table>
    )
}