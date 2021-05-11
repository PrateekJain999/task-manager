const calculatetip = (total, tipPercent = .25) => total + (total * tipPercent)

const fahrenheitTocelsius = (temp) => {
    return (temp-32)/1.8;
}

const celsiusTofahrenheit = (temp) => {
    return (temp*1.8)+32;
}

const add =(a,b) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Numbers Must Be Non-Negative');
            }
            resolve(a+b)
        }, 2000);
    })
}

module.exports = {
    calculatetip,
    fahrenheitTocelsius,
    celsiusTofahrenheit,
    add
}