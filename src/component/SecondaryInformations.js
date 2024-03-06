import sset from "../assets/sunset.svg"
import srise from "../assets/sunrise.svg"
import precip from "../assets/precipitation.svg"
import humid from "../assets/humidity.svg"
import wind from "../assets/wind.svg"

export default function SecondaryInformations({ sunRise, sunSet, humidity, windSpeed, precipitation }) {

    return (
        <div className="secondary-informations">
            <div className="info"><img className="icone" src={ srise } alt="sunrise" /> { sunRise }</div>
            <div className="info"><img className="icone" src={ sset } alt="sunset" /> { sunSet }</div>
            <div className="info"><img className="icone" src={ humid } alt="humidity" /> { humidity } %</div>
            <div className="info"><img className="icone" src={ wind } alt="wind" /> { windSpeed } kph</div>
            <div className="info"><img className="icone" src={ precip } alt="precipitation" /> { precipitation } mm</div>
        </div>
    )
}