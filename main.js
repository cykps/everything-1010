
function tenten() {
    let input = document.getElementById('input').value , output='';
    for (let i=0; i<input.length; i++) {
        output += input.charAt(i) + String.fromCharCode(12441);
    }
    console.log(output);
    document.getElementById('output').textContent = output;
}

window.onkeydown = function(e){
    if (e.key=="Enter") {
        tenten();
    }
}
