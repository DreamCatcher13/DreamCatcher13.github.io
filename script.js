function enigma(reflector, rot1, rot2, rot3, rots, mess, panel, alph){
    var reflector = reflector;
    var rotR = rot1;
    var rot = rot2;
    var rotL = rot3;
    var rots = rots;
    var mess = mess;
    var panel = panel;
    var alph = alph;
    var alphlength = alph.length;
    var encoded = new String();
    function check(numb, mod){
        if (numb < 0){
            numb += mod;
            return numb;
        } else {
            return numb;
        }
    }
    function connects(panel, char){
        var p = panel;
        var c = char;
        var temp1 = char;
        var temp2 = char;
        for (var i = 0; i<p.length; i+=2){
            if (p[i] == c){
                c = p[i+1];
                temp1 = p[i+1];
            }
        }
        for (var j = 1; j<=p.length; j+=2){
            if (p[j] == c){
                c = p[j-1];
            }
        }
        if (c == temp2){
            c = temp1;
        }
        return c;
    }
    var temp1 = alph.indexOf(rots[2]);
    var temp2 = alph.indexOf(rots[1]);
    var temp3 = alph.indexOf(rots[0]);
    var diff;
    var k = 0;
    if (panel.length == 0){
    for (var i = 0; i < mess.length; i++){
        var char = mess[i];
        if (char == " "){
            encoded += char;
            continue;
        }
        var number = alph.indexOf(char);
        temp1 = (temp1+1)%alphlength;
        temp2 = (temp2+1)%alphlength;
        if (k==4){
            temp3 = (temp3+1)%alphlength;
            k=0;
        }
        number = (temp1 + number)%alphlength;
        char = rotR.charAt(number);
        number = alph.indexOf(char);
        diff = temp2 - temp1;
        diff = check(diff, alphlength);
        number = (number + diff)%alphlength;
        char = rot.charAt(number);
        number = alph.indexOf(char);
        diff = temp3 - temp2;
        diff = check(diff, alphlength);
        number = (number + diff)%alphlength;
        char = rotL.charAt(number);
        number = alph.indexOf(char);
        number = number - temp3;
        number = check(number, alphlength);
        char = reflector.charAt(number);
        number = alph.indexOf(char);
        number = (number + temp3)%alphlength;
        char = alph.charAt(number);
        number = rotL.indexOf(char);
        diff = temp3 - temp2;
        diff = check(diff, alphlength);
        number = number - diff;
        number = check(number, alphlength);
        char = alph.charAt(number);
        number = rot.indexOf(char);
        diff = temp2 - temp1;
        diff = check(diff, alphlength);
        number = number - diff;
        number = check(number, alphlength);
        char = alph.charAt(number);
        number = rotR.indexOf(char);
        number -= temp1;
        number = check(number, alphlength);
        char = alph.charAt(number);
        encoded += char;
        if (i == mess.length-1){
            encoded += alph.charAt(temp3); 
            encoded += alph.charAt(temp2);
            encoded += alph.charAt(temp1);
        }
        k++;
    }
    return encoded;
} else {
        for (var i = 0; i < mess.length; i++){
        var char = mess[i];
        if (char == " "){
            encoded += char;
            continue;
        }
        char = connects(panel, char);
        var number = alph.indexOf(char);
        temp1 = (temp1+1)%alphlength;
        temp2 = (temp2+1)%alphlength;
        if (k==4){
            temp3 = (temp3+1)%alphlength;
            k=0;
        }
        number = (temp1 + number)%alphlength;
        char = rotR.charAt(number);
        number = alph.indexOf(char);
        diff = temp2 - temp1;
        diff = check(diff, alphlength);
        number = (number + diff)%alphlength;
        char = rot.charAt(number);
        number = alph.indexOf(char);
        diff = temp3 - temp2;
        diff = check(diff, alphlength);
        number = (number + diff)%alphlength;
        char = rotL.charAt(number);
        number = alph.indexOf(char);
        number = number - temp3;
        number = check(number, alphlength);
        char = reflector.charAt(number);
        number = alph.indexOf(char);
        number = (number + temp3)%alphlength;
        char = alph.charAt(number);
        number = rotL.indexOf(char);
        diff = temp3 - temp2;
        diff = check(diff, alphlength);
        number = number - diff;
        number = check(number, alphlength);
        char = alph.charAt(number);
        number = rot.indexOf(char);
        diff = temp2 - temp1;
        diff = check(diff, alphlength);
        number = number - diff;
        number = check(number, alphlength);
        char = alph.charAt(number);
        number = rotR.indexOf(char);
        number -= temp1;
        number = check(number, alphlength);
        char = alph.charAt(number);
        char = connects(panel, char);
        encoded += char;
        if (i == mess.length-1){
            encoded += alph.charAt(temp3); 
            encoded += alph.charAt(temp2);
            encoded += alph.charAt(temp1);
        }
        k++;
    }
    return encoded;
}
}
