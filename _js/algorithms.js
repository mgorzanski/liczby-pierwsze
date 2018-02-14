
function algorithmOne (p) {
    if (p > 1) {
        var g = Math.sqrt(p);
        var i;
        var numberPrimitive = true;

        for (i = 2; i <= g; i++) {
            if (p % i == 0) {
                console.log(i);
                numberPrimitive = false;
                break;
            }
        }

        console.log(numberPrimitive);
    }
}

function algorithmTwo (p) {
    var g, i, isPrimitive;
    isPrimitive = true;
    if (p === 2) {
        isPrimitive = true;
    } else if (p % 2 === 0) {
        isPrimitive = false;
    }
    g = Math.sqrt(p);
    i = 3;
    while (i <= g) {
        if (p % i === 0) {
            isPrimitive = false;
            break;
        }
        i = i + 2;
    }
    console.log(isPrimitive);
}

function algorithmThree (p) {
    var g, i, k, d;
    g = Math.sqrt(p);
    i = 2;
    k = 1;
    d = false;
    isPrimitive = true;
    while (i <= g) {
        if (p % i === 0) {
            isPrimitive = false;
            break;
        } else if (i > 2) {
            d = !d;
            i = k * 6;
            if (d) {
                i--;
            } else {
                k++;
                i++;
            }
        } else {
            i++;
        }
    }

    console.log(isPrimitive);
}

function multiplyModulo (a, b, n) {
    var m, w;
    w = 0;
    m = 1;

    while (m) {
        if (b & m) {
            w = (w + a) % n;
        }
        a = (a << 1) % n;
        m <<= 1;
    }
    return w;
}

function powerModulo (e, n) {
    var m, p, w;

    p = 2;
    w = m = 1;
    while (m) {
        if (e & m) {
            w = multiplyModulo(w, p, n);
        }
        p = multiplyModulo(p, p, n);
        m <<= 1;
    }
    return w;
}

function algorithmFour (p) {
    var isPrime;
    (powerModulo(p,p) == 2 ? isPrime = true : isPrime = false);
    console.log(isPrime);
}