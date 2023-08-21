let fs = require("fs");

let txtPath = `${__dirname}/test.txt`
console.log(`path is ${txtPath}`)

fs.readFile(txtPath, "utf-8", (err, data) => {
    if (err == null) {
        console.log(`read success :${data}`)
    } else {
        console.log(`read fail ${err}`)
    }
})
fs.open(txtPath, "r", (err, fd) => {
    if (err == null) {
        console.log(`open success ${fd}`)
    } else {
        console.log(`read fail ${err}`)
    }
})
for (const f in fs) {
    console.log(f)
}