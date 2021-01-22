function growFunction() {
    document.getElementById("box").style.height = "250px"
}
function blueFunction() {
    document.getElementById("box").style.backgroundColor = "blue"
}
function fadeFunction() {
    //if color = orange  
    document.getElementById("box").style.backgroundColor = "#ffa50080" //faded orange
    //iff color = blue
    document.getElementById("box").style.backgroundColor = "#0000ff5c" //faded blue
    //I need to figure out the proper way to code this
}
function resetFunction() {
    document.getElementById("box").style.height = "150px"
    document.getElementById("box").style.backgroundColor = "orange"
    document.body.style.backgroundColor = "#ffffff"
}
function purpleFunction() {
    document.body.style.backgroundColor = "#8a178aba"
}