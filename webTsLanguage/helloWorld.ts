/// <reference path="node_modules/@types/jquery/index.d.ts" />

console.log("load ts")

function hello(name: string, id: string): void {
    console.log(`will update ${id} by ${name}`)
    document.getElementById(id).innerHTML = `hello from ${name}`
}

document.getElementById("bt_hello").addEventListener("click", function () {
    hello("func", 'hello_text')
}, false)
document.getElementById("bt_input_hello").addEventListener("click", function () {
    const t = (document.getElementById("in_input_hello") as HTMLInputElement).value
    console.log(t)
    hello(t, 'hello_text')
}, false)

$(function () {
    console.log("document ready")
})

function formToJson(formData: FormData) {
    let object = {}
    formData.forEach((value, key) => object[key] = value)
    return JSON.stringify(object)
}

$("#form1").find(":button[name='submit']")[0].onclick = function () {
    console.log("on btn clicked")
    let form = $("#form1").get(0) as HTMLFormElement
    let data = new FormData(form)
    console.log(`data : ${data}`)
    let jsonData = formToJson(data)
    console.log(`json : ${jsonData}`)
    let output = $("#form1").find("label[name='output']").get(0) as HTMLLabelElement
    output.innerHTML=jsonData

}