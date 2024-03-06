import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { WeatherContext, WeatherSetterContext } from "../context/WeatherContext"

export default function AddCity() {

    const [city, setCity] = useState('')
    const [error, setError] = useState(false)
    const setWeather = useContext(WeatherSetterContext)
    const weather = useContext(WeatherContext)

    useEffect(() => {

        setError(weather.error)
    }, [weather.error])

    function handleSubmit(e) {

        e.preventDefault()

        const options = {

            method: "GET",
            url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
            params: {

                location: city,
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
                
                if (res.data.locations[city]) {

                    setWeather({
                        city: city,
                        res: res.data.locations[city]
                    })
                } else {

                    setError("Votre lieu de recherche est sans doute trop flou...")
                }
            })
            .catch( err => {
                
                setError(err)
            })
    }

    return (
        <form onSubmit={ e => handleSubmit(e) }>
            <input type="text" className="asking" placeholder="Quel temps fait-il à ... ?" value={ city } onChange={ e => setCity(e.target.value) } />
            { error ? (<div className="error">{ error }</div>) : (null) }
        </form>
    )
}