const add = () => {
    let operanda = +document.getElementById("opa").value
    let operandb = +document.getElementById("opb").value
    let answer = Number(operanda) + Number(operandb)
    document.getElementById("ans").value = answer
}
const sub = () => {
    let operanda = +document.getElementById("opa").value
    let operandb = +document.getElementById("opb").value
    let answer = Number(operanda) - Number(operandb)
    document.getElementById("ans").value = answer
}
const mult = () => {
    let operanda = +document.getElementById("opa").value
    let operandb = +document.getElementById("opb").value
    let answer = Number(operanda) * Number(operandb)
    document.getElementById("ans").value = answer
}
const div = () => {
    let operanda = +document.getElementById("opa").value
    let operandb = +document.getElementById("opb").value
    let answer = Number(operanda) / Number(operandb)
    document.getElementById("ans").value = answer
}

// I don't know what the plus sign does that's in front of document, the functions works w/o the plus sign in front of document as well