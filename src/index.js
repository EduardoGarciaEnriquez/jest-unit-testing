cities = ['cdmx', 'buenos aires', 'quito', 'medellin', 'amsterdam']

const randomCity = () => {
    const city = cities[Math.floor(Math.random() * cities.length)];
    return city 
}

module.exports = randomCity; 