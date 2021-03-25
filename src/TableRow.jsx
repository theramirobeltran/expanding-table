import { useState } from "react";

export default ({ row }) => {

    const [showMore, setShowMore] = useState();

    const _renderSecondaryData = (secondaryData) => {
        return (
            <>
                {
                    // secondary data is an array of arrays
                    secondaryData.map(row => {
                        return (
                            <tr className="secondary-data">
                                {
                                    row.map((data, idx) => <td key={idx}>{data}</td>)
                                }
                            </tr>
                        )
                    })
                }
            </>
        )
    }

    return (
        <>
            <tr>
                {
                    row.primary.map((data, idx) => <td key={idx}>{data}</td>)
                }
                <td>
                    <button className="more-button" onClick={() => setShowMore(!showMore)}>
                        {!showMore ? 'Show More Info' : 'Show Less Info'}
                    </button>
                </td>
            </tr>
            {
                showMore ? _renderSecondaryData(row.secondary) : null
            }
        </>
    )
}