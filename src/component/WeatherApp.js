import { useContext, useEffect, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import AddCity from "./AddCity"
import Geoloc from "./Geoloc"
import Weather from "./Weather"

export default function WeatherApp() {

    const [asking, setAsking] = useState(true)
    const weather = useContext(WeatherContext)

    useEffect(() => {

        weather.res ? setAsking(false) : setAsking(true)
    }, [weather.res])

    return asking ? (

        <div className="container center">
            <AddCity />
            <div>OU</div>
            <Geoloc />
        </div>
    ) : (
        <Weather />
    )
}