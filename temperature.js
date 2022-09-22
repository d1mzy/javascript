let temperature = 10
let condition = 'sunny'

 


if (temperature >=10 && temperature < 20) {
switch (condition) {
    case 'sunny':
    goToWork = true
    console.log (`It's a nice day to go to work`);
    break;
    case 'cloudy':
    goToWork = true
    console. log (`It's an alright day to go to work`);
    break;
    case 'raining':
    goToWork = false
    console.log (`It's wet and cold, stay home!`);
    break;
    case 'snowing':
    goToWork = false
    console.log (`It's freezing! Stay home!`);
    break;
    case 'thunder':
    goToWork = false
    console.log (`Beware of the storm, stay home!`);
    break;
    default:
    console.log (`Shall we go to work?`);
    break;
}

} else if (temperature >=20 && temperature < 30) {
    switch (condition) {
        case 'sunny':
        goToWork = true
        console.log (`It's a nice day to go to work`);
        break;
        case 'cloudy':
        goToWork = true
        console. log (`It's an alright day to go to work`);
        break;
        case 'raining':
        goToWork = true
        console.log (`Being warm and wet isnt the worst!`);
        break;
        case 'snowing':
        goToWork = false
        console.log (`It's freezing! Stay home!`);
        break;
        case 'thunder':
        goToWork = false
        console.log (`Beware of the storm, stay home!`);
        break;
        default:
        console.log (`Shall we go to work?`);
        break;
    }
        
    } else if (temperature >= 30) {
        switch (condition) {
            case 'sunny':
            goToWork = false
            console.log (`It's a heatwave, stay home!`);
            break;
            case 'cloudy':
            goToWork = false
            console. log (`It's too hot`);
            break;
            case 'raining':
            goToWork = false
            console.log (`It's too hot!`);
            break;
            case 'snowing':
            goToWork = false
            console.log (`It's too hot!`);
            break;
            case 'thunder':
            goToWork = false
            console.log (`Its too hot!`);
            break;
            default:
            console.log (`Shall we go to work?`);
            break;
}
    
} else if (temperature < 10) {
    switch (condition) {
        case 'sunny':
        goToWork = false
        console.log (`It'stoo cold!`);
        break;
        case 'cloudy':
        goToWork = false
        console. log (`It's too cold`);
        break;
        case 'raining':
        goToWork = false
        console.log (`It's too cold!`);
        break;
        case 'snowing':
        goToWork = false
        console.log (`It's too cold!`);
        break;
        case 'thunder':
        goToWork = false
        console.log (`Its too cold!`);
        break;
        default:
        console.log (`Shall we go to work?`);
        break;
    }
};