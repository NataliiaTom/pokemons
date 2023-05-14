export default function Details({ data }) {


    const upperCase = (result) => {
        return result.charAt(0).toUpperCase() + result.slice(1)
    }

    return (
        < div className="DetailsContainer" >
            <img alt="not found" src={data.sprites.other.dream_world.front_default}></img>
            <h5 className="DetailsHeader">{upperCase(data.name) + `##${String(data.id).padStart(3, '0')}`}</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Type</th>
                        <th scope="col">Fire</th>

                    </tr>
                </thead>
                <tbody>
                    {data.stats.map((result, i) =>
                        <tr key={i}>
                            <td>{upperCase(result.stat.name)}</td>
                            <td>{result.base_stat}</td>

                        </tr>
                    )}
                    {<tr>
                        <td>{upperCase(Object.keys(data).pop())}</td>
                        <td>{data.weight}</td>

                    </tr>}
                    {<tr>
                        <td>{`Total moves`}</td>
                        <td>{data.moves.length}</td>
                    </tr>}
                </tbody>
            </table>
        </div >
    )
}