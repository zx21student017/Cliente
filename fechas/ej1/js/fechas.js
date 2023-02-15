/*
console.log(Date());//string

let fecha = new Date();//objeto
console.log(typeof fecha);
*/

// fecha de cum //
let fechaNac = new Date(2003, 0, 9);
let fechaAct = Date.now();

console.log(fechaNac);
console.log(fechaAct);

console.log(fechaAct-fechaNac);

// día de hoy //
let curday = function(s) {
    let f = new Date();
    return f.getFullYear()+s+f.getMonth()+s+f.getDay();
};
console.log(curday('/'));
console.log(curday('-'));
console.log(curday('"'));

//  //
let month_name = function(f) {
    const options = {month: 'long'}
    return f.toLocaleDateString(undefined, options);
};
console.log(month_name(new Date("10/11/2009")));

// compara fechas //
let compare_dates = function(f1,f2) {
    if(f1 === f2){
        return "f1 es la misma que f2"
    }else if(f1>f2){
        return "f1 es mayor que f2"
    }else if(f1<f2){
        return "f1 es menor que f2"
    }   
};
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));