import * as fs from "fs"
import {fileURLToPath} from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
