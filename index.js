const convertFahrToCelsius = (fahrenheit) => {

    if (typeof fahrenheit == "string" || fahrenheit == "") {
        return ("This is a string")
    }

    if (fahrenheit === "Array") {
        return (JSON.stringify(fahrenheit) + " is not a valid number but a/an " + typeof fahrenheit)
    }

    else if (typeof fahrenheit === "object" && fahrenheit !== null) {
        return (JSON.stringify(fahrenheit) + " is not a valid number but a/an " + typeof fahrenheit)
    }

    else {
        let celsuis = (fahrenheit - 32) * 5 / 9;

        let roundUp = celsuis.toFixed(4);

        let res = `${fahrenheit} is ${roundUp}`
        return res
    }

}

let result = convertFahrToCelsius([1]);
console.log(result)
