// const CityFunction = require('./cityFunction')
// const {city1,city2,city3}= require('./city')



// CityFunction(city1)
// CityFunction(city2)
// CityFunction(city3)

// const {writeFileSync , readFileSync} = require('fs')


// const newWriteFile = writeFileSync('./dummy.txt','file is created using FS module')

// const newReadFile = readFileSync('./test-1.txt','utf8')


// console.log(newReadFile)


const http = require("http")

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('this is about page')
        res.end()

    }

    if (req.url === '/about') {
        res.write('this about new page')
        res.end()
    }

    if (req.url === '/ home') {

        res.write('this about page')
        res.end()

    }


})

server.listen(3800, () => {

    console.log('Server is running on part 3800...')
})