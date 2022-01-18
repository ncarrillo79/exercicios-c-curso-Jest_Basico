test('2 +2 = 4', () => {
    expect(2+2).toBe(4)
    
})

test('object validation' , ()=>{
    const data = {username: 'Norma Carrillo'}
    const data2 = {username: 'Normita'}


    
    expect(data).toEqual({username:'Norma Carrillo'})
    expect(data).not.toEqual(data2)
})