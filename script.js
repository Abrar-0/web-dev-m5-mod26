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

function calcRec(){
    const w = parseFloat(document.getElementById('rec-w').value);
    // console.log(b);

    const l = parseFloat(document.getElementById('rec-l').value);
    // console.log(h);

    const area = w*l;
    console.log(area)

    const rec = document.getElementById('rec-area');
    rec.innerText = area;
}

function calcPar(){
    const b = parseFloat(document.getElementById('par-b').value);
    // console.log(b);

    const h = parseFloat(document.getElementById('par-h').value);
    // console.log(h);

    const area = b*h;
    console.log(area)

    const par = document.getElementById('par-area');
    par.innerText = area;
}

function calcRho(){
    const d1 = parseFloat(document.getElementById('rho-d1').value);
    // console.log(b);

    const d2 = parseFloat(document.getElementById('rho-d2').value);
    // console.log(h);

    const area = 0.5*d1*d2;
    console.log(area)

    const rho = document.getElementById('rho-area');
    rho.innerText = area;
}

function calcPen(){
    const p = parseFloat(document.getElementById('pen-p').value);
    // console.log(b);

    const b = parseFloat(document.getElementById('pen-b').value);
    // console.log(h);

    const area = 0.5*p*b;
    console.log(area)

    const pen = document.getElementById('pen-area');
    pen.innerText = area;
}

function calcEll(){
    const a = parseFloat(document.getElementById('ell-a').value);
    // console.log(b);

    const b = parseFloat(document.getElementById('ell-b').value);
    // console.log(h);
    
    const pi = 22/7;
    const area = pi*a*b;
    console.log(area)

    const ell = document.getElementById('ell-area');
    ell.innerText = area;
}
