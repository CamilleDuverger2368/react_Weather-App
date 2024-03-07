import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import MainInformations from "./MainInformations"
import SecondaryInformations from "./SecondaryInformations"

export default function Weather({ changeAsking }) {

    const weather = useContext(WeatherContext)

    let today = weather.res.values[0]
    today.temp = weather.res.currentConditions.temp
    today.sunrise = weather.res.currentConditions.sunrise
    today.sunset = weather.res.currentConditions.sunset
    today.date = new Date(today.datetimeStr)
    today.sunrise = new Date(today.sunrise)
    today.sunset = new Date(today.sunset)

    let week = [...weather.res.values]
    week.splice(0, 1)
    week.splice(7, 8)

    return (
        <div className="container">
            <button className="geoloc" onClick={ () => changeAsking(true) }>Return</button>
            { !weather.city ? (<h2>Your Location</h2>) : (<h2>{ weather.city }</h2>) }
            <div className="today">
                <MainInformations maxTemp={ today.maxt }
                                  minTemp={ today.mint }
                                  temp={ today.temp }
                                  date={ today.date.toLocaleDateString() }
                                  conditions={ today.conditions } />
                <SecondaryInformations sunRise={ today.sunrise.toLocaleTimeString("fr", { hour: "numeric", hour12: true, minute: "numeric" }) }
                                       sunSet={ today.sunset.toLocaleTimeString("fr", { hour: "numeric", hour12: true, minute: "numeric" }) }
                                       humidity={ today.humidity }
                                       windSpeed={ today.wspd }
                                       precipitation={ today.precip } />
            </div>
            <div className="week">
                { week.map( day => {

                    day.date = new Date(day.datetimeStr)
                    return (
                    <div key={ day.datetime } className="day">
                        <MainInformations maxTemp={ day.maxt }
                                          minTemp={ day.mint }
                                          temp={ day.temp }
                                          date={ day.date.toLocaleDateString() }
                                          conditions={ day.conditions } />
                    </div>
                )})}
            </div>
        </div>
    )
}