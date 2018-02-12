function naiveAlgorithmOne (p) {
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

function naiveAlgorithmTwo (p) {
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

function naiveAlgorithmThree (p) {
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