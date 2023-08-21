"use strict"

{
    let a = 0
    new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 100
            // throw Error("error happened")
            resolve(a)
        }, 500)
    })
        .then((res) => {
            console.log(res)
        })
        .catch((reason) => {
            console.log(`error happened ${reason}`)

        })
}

{
    function printDelay(txt, time) {
        console.log(`set print latter ${time}`)
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log(txt)
                resolve()
            }, time)
        })

    }

    printDelay("ssss", 500)
        .then(function () {
            // throw "test error"
            return printDelay("a2", 300)
        })
        .then(function () {
            return printDelay("s3", 1000)
        })
        .catch(function (reason) {
            console.log(`error happened ${reason}`)
        })

}

{
    async function test() {
        let a = 0
        const res = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 42
                resolve(a)
            }, 500)
        })
        console.log(res)
    }

    test()
}

{
    fetch("https://www.baidu.com/")
        .then(res => {
            return res.text()
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}