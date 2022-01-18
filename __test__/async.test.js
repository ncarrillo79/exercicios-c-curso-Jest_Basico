const getData = require("../src/promisse");
const API = "https://pokeapi.co/api/v2/pokemon/raticate"


it('should return raticate info', async ()=>{
    const response = await getData(API)

    expect(response.data.name).toBe('raticate')
})

it('shouls fail if url invalid' , async()=>{
    expect.assertions(1)
    try{

        await getData('hdlhdhflhjh')
    }catch(err){
        expect(err).not.toBeNull()
    }
})

