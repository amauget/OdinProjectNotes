const Route = require('express')

const thirdRoute = Route()

thirdRoute.get('/thirdRoute', (res, req) => thirdRoute.send('Third Route!'))

thirdRoute.get('/:thirdRouteId', (req, res) => {
    const { thirdRouteId } = req.params

    res.send(`ThirdRoute ID: ${thirdRouteId}`)
})

module.export = thirdRoute