const express = require('express')
const router = express.Router()

let airSigns = ['Aquarius', 'Gemini', 'Libra']
const airPaths = airSigns.map((sign) => {
    return sign.toLowerCase()
})

router.get('/', (req, res) =>{
    let airTraits = ['movement', 'creativity', 'action', 'adventure', 'exciting', 'easly provoked']
    res.render('air.ejs', {signs: airSigns, traits: airTraits})
})

router.get('/:sign', (req, res) => {
    if(airPaths.includes(req.params.sign)) {
        console.log(req.params.sign)
        res.send(req.params.sign)
    } else {
        console.log('error404')
        res.sendStatus(404)
    }
    console.log(req.params.sign)
})

module.exports = router