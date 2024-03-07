import { useContext, useState } from "react"
import axios from "axios"
import { WeatherSetterContext } from "../context/WeatherContext"

export default function Geoloc() {

    const [error, setError] = useState(false)
    const setWeather = useContext(WeatherSetterContext)

    function changeWeather(position) {

        const place = position.coords.latitude + ", " + position.coords.longitude

        const options = {

            method: "GET",
            url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
            params: {

                location: place,
                aggregateHours: "24",
                shortColumnNames: false,
                unitGroup: "metric",
                contentType: "json"
            },
            headers: {

                "X-RapidAPI-Key": process.env.REACT_APP_X_RAPID_API_KEY,
                "X-RapidAPI-Host": process.env.REACT_APP_X_RAPID_API_HOST
            }
        }

        axios.request(options)
            .then( res => {
                
                if (res.data.locations[place]) {

                    setWeather({
                        city: null,
                        res: res.data.locations[place]
                    })
                } else {

                    setError("Votre lieu de recherche est sans doute trop flou...")
                }
            })
            .catch( err => {
                
                setError(err.request.responseText)
            })
    }

    function geoloc() {

        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(changeWeather)
        } else {

            setError("La geolocation n'est pas supportée par ce navigateur.")
        }
    }

    return (
        <>
            <button className="geoloc" onClick={ geoloc }>Me géolocaliser</button>
            { error ? (<div className="error">{ error }</div>) : (null) }
        </>
    )
}