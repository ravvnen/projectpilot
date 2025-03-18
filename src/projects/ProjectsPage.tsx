type Car = {
    brand: string;
    model: string;
    year: number;
}

function Cars(car: Car) {
    const { brand, model, year } = car;
    return <h1>{brand} {model} {year}</h1>
}

export default Cars;