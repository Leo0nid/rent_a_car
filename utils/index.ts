export async function fetchCars() {
    const headers  ={
            'X-RapidAPI-Key': '1f8946dd43mshaf3d1287c2e4831p1751f7jsn5833ab0c9acb',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    }
    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers: headers,
    })
    const result = await response.json()

    return result
}