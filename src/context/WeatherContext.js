import { createContext, useState } from "react"

export const WeatherContext = createContext(null)
export const WeatherSetterContext = createContext(null)

export function WeatherProvider({ children }) {

    const [weather, setWeather] = useState({ city: '', res: null })

    return (
        <WeatherContext.Provider value={ weather }>
            <WeatherSetterContext.Provider value={ setWeather }>
                { children }
            </WeatherSetterContext.Provider>
        </WeatherContext.Provider>
    )
}