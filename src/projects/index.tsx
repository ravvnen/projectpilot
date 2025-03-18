import {FC, useState} from 'react'

type CarProps = {
    brand: string
    speed: number
    speedUp: React.Dispatch<React.SetStateAction<number>>
}

const Car: FC<CarProps> = ({speed, speedUp}) => {

    const handleClick = () =>
        {
            speedUp(speed + 1)
        } 

    return (
        <div>
            <h2>Your speed: {speed}</h2>
            <button title= 'Hit the gas!' onClick={handleClick}></button>
        </div>
    )
}

const Index: FC = () => {
    const [speed, speedUp] = useState<number>(0)

    return (
        <div>
            <h1>Your car</h1>
            <Car 
                brand={'Mercedes'} 
                speed={speed}
                speedUp={speedUp}
            />
        </div>
    )
}

export default Index