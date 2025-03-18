import {FC, useState} from "react";
import {Button} from "@chakra-ui/react"

type WeatherDashboardProps = {
    weatherData: {
        temperature: number;
        condition: string;
        location: string;
        humidity: number;
    }

    isCelsius: boolean;
    onToggleTemperatureUnit: () => void
}

const WeatherDashboard: FC<WeatherDashboardProps> = ({weatherData, isCelsius, onToggleTemperatureUnit}) => {


    const displayTemperature = () => {
        if (isCelsius)
        {
            return `${weatherData.temperature} °C`
        }
        else
        {
            const fahrenheit = (weatherData.temperature * 9/5) + 32
            return `${fahrenheit.toFixed(1)}°F`
        }
    }

    return (
        <div>
            <h2> The temperature is {displayTemperature()}</h2>
            <Button
                colorPalette='teal'
                variant='outline'
                onClick={onToggleTemperatureUnit}
                width={250}
            >
                Switch to {isCelsius ? 'Fahrenheit' : 'Celsius' }
            </Button>
        </div>
    )
}


const WeatherPage: FC = () => {

    // State management for the temperature unit toggle
    const [isCelsius, setIsCelsius] = useState<boolean>(true)

    // Hardcoded data for now
    const weatherData = {
        temperature: 22, // in Celsius
        condition: "Sunny",
        location: "New York",
        humidity: 45,
    }

    // Function to toggle between temperature units
    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <div>
            <WeatherDashboard weatherData={weatherData} isCelsius={isCelsius} onToggleTemperatureUnit={toggleTemperatureUnit}/>
        </div>
    )
};

export default WeatherPage;