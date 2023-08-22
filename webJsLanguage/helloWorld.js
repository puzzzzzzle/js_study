console.log("on load")
document.getElementById("hello_str").innerHTML = "hello world"

/**
 *
 * @param {string} id
 * @param {string} value
 * @return {void}
 */
function changeVar(id, value) {
    document.getElementById(id).innerHTML = value
}

changeVar("hello_str2", "hello 2")

$(document).ready(function () {
    console.log("ready")
})

$("#form1").find(":button[name='submit']")[0].onclick = function () {
    console.log("on btn clicked")
    let form = $("#form1")[0]
    let data = new FormData(form)
    console.log(`data : ${data}`)
    let object = {};
    data.forEach((value, key) => object[key] = value);
    let json = JSON.stringify(object);
    console.log(`json : ${json}`)
    $("#form1").find("label[name='output']").get(0).innerHTML = json
}
