const {calculatetip, fahrenheitTocelsius, celsiusTofahrenheit, add} = require('../src/math')

// test('Should Calculate total', () => {
//     const total = calculatetip(10,.3)
//     expect(total).toBe(13)

//     // if(total !==13){
//     //     throw new Error('Total tip should be 13' + total)
//     // }
// })

// test('Should covert 32 F to 0 C', ()=> {
//     const temp = fahrenheitTocelsius(32)
//     expect(temp).toBe(0)
// })

// test('Should covert 0 C to 32 F', ()=> {
//     const temp = celsiusTofahrenheit(0)
//     expect(temp).toBe(32)
// })

// test('Async test demo', (done) => {
//     setTimeout(()=>{
//         expect(2).toBe(2)
//         done()
//     },2000)
// })

// test('Should add Two numbers', (done)=>{
//     add(2,3).then((sum) => {
//         expect(sum).toBe(5)
//         done()
//     })
// })

test('Should add two numbers async/await', async() => {
    const sum = await add(1,21)
    expect(sum).toBe(22)
})
// 
// Why test?
// 
// - Saves time
// - Creates reliable software
// - Gives flexibility to developers
//   - Refactoring
//   - Collaborating
//   - Profiling
// - Peace of mind