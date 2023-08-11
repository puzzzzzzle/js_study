console.log("load ts")

function hello(name: string, id: string): void {
    console.log(`will update ${id} by ${name}`)
    document.getElementById(id).innerHTML = `hello from ${name}`
}

document.getElementById("bt_hello").addEventListener("click", function () {
    hello("func", 'hello_text');
}, false);
document.getElementById("bt_input_hello").addEventListener("click", function () {
    const t = (document.getElementById("in_input_hello") as HTMLInputElement).value;
    console.log(t)
    hello(t, 'hello_text');
}, false);