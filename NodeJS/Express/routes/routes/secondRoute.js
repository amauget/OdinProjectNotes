const Route = require('express')

const secondRoute = Route()

secondRoute.get('/secondRoute', (req, res) => res.send('Second Route!'))

secondRoute.get(':/secondRouteId', (req, res) => {
    const { secondRouteId } = req.params
    
    res.send(`SecondRoute ID: ${secondRouteId}`)
})

module.export = secondRoute