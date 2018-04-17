function enigma(reflector, rot1, rot2, rot3, rots, mess, alph){
    var reflector = reflector;
    var rotR = rot1;
    var rot = rot2;
    var rotL = rot3;
    var rots = rots;
    var mess = mess;
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
    var temp1 = alph.indexOf(rots[2]);
    var temp2 = alph.indexOf(rots[1]);
    var temp3 = alph.indexOf(rots[0]);
    var diff;
    var k = 0;
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
    
}
