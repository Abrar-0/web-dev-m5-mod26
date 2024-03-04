// triangle calculator
function calcTri(){
    const b = parseFloat(document.getElementById('tri-b').value);
    // console.log(b);

    const h = parseFloat(document.getElementById('tri-h').value);
    // console.log(h);

    const area = 0.5*b*h;
    console.log(area)

    const tri = document.getElementById('tri-area');
    tri.innerText = area;
}

