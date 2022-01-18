
describe('email validation' , () =>{
    test('this is an email' , ()=>{
        const email = 'ncarrillo79@gmail.com'

        expect(email).toMatch(/\S+@\S+\.\S+/)

    })

    test('this is not an email' , ()=>{
        const email = 'ncarrillo79gmail.com'

        expect(email).not.toMatch(/\S+@\S+\.\S+/)

    })


})