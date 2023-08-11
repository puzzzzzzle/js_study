console.log("load ts")

function hello(name: string, id: string): void {
    console.log(`will update ${id} by ${name}`)
    document.getElementById(id).innerHTML = `hello from ${name}`
}