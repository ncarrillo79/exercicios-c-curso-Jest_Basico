const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://pokeapi.co/api/v2/pokemon/ditto'


function fetchAPI(url, callback){
    var req = new XMLHttpRequest()
    req.open('GET', url, true)
    req.onreadystatechange = function(event){
        if(req.readyState === 4){
            if(req.status === 200){
                callback(null, JSON.parse(req.responseText))
            } else {
                const err = new Error(`URL invalida ${url}`)
                return callback(err, null)
            }
        }
    }

    req.send()
}

module.exports = fetchAPI