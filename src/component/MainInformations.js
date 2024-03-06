export default function MainInformations({ maxTemp, minTemp, temp, date, conditions }) {

    return (
        <div className="main-informations">
            <div className="date">{ date }</div>
            <div className="temperatures">
                <div className="fork min">{ minTemp }°C</div>
                <div className="average">{ temp }°C</div>
                <div className="fork max">{ maxTemp }°C</div>
            </div>
            <div className="conditions">{ conditions }</div>
        </div>
    )
}