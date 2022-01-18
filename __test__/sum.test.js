const sum =require('../src/sum')

describe('pruebas para suma', ()=>{
    test('15+5 is 20', ()=>{
        expect(sum(15,5)).toBe(20)
    })
    // it('should return 20 whit 15 + 5', ()=>{
    //     expect(sum(15,5)).toBe(20)
    // })

    test('1 + (-2) is -1', ()=>{
        expect(sum(1,-2)).toBe(-1)
    })

     test('-1 + (-2) is -3', ()=>{
         expect(sum(-1,-2)).toBe(-3)
     })
})

//console.log(sum) //imprime:[Function: soma]


