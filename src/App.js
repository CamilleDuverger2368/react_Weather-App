import "./App.css"
import WeatherApp from "./component/WeatherApp"
import { WeatherProvider } from "./context/WeatherContext"

export default function App() {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  )
}