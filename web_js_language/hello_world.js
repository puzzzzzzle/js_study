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
