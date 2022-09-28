function Card({logo, song, rockband, albuM}){

    return(
        <div className="containerContact-p">
            <div className="containerContact-card">
                {logo}
                <table>
                    <tr>
                        <th>Cancion: {song}</th>
                    </tr>
                   
                    <tr>
                        <td>Banda: {rockband}</td>
                        <td>Album: {albuM}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Card;