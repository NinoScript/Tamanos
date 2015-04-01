/**
 * Created by ninoscript on 4/1/15.
 */

// Playground - noun: a place where people can play

function cantidadDeTamanos ( f_grande_x:number, f_grande_y:number,
                             f_chico_x:number, f_chico_y:number) : number {
    var grande_x = Math.floor(f_grande_x);
    var grande_y = Math.floor(f_grande_y);
    var chico_x  = Math.floor(f_chico_x);
    var chico_y  = Math.floor(f_chico_y);

    //var cantidadPorFilaALoAncho    = Math.floor(grande_x / chico_x);
    var cantidadPorColumnaALoAncho = Math.floor(grande_y / chico_y);
    var cantidadPorColumnaALoLargo = Math.floor(grande_y / chico_x);

    var cantidadesTotales:Array<number> = [];
    for (var aLoAncho = 0; aLoAncho*chico_x < grande_x; aLoAncho += 1) {
        var restoPapel = grande_x - aLoAncho*chico_x;
        var cantidadPrimerTrozo = aLoAncho * cantidadPorColumnaALoAncho;
        var cantidadPorFilaALoLargo = Math.floor(restoPapel / chico_y);
        var cantidadSegundoTrozo = cantidadPorFilaALoLargo * cantidadPorColumnaALoLargo;

        var cantidadTotal = Math.floor(cantidadPrimerTrozo + cantidadSegundoTrozo);
        cantidadesTotales.push(cantidadTotal);
    }

    return Math.max.apply(null, cantidadesTotales);
}

function cantidadDeTamanosOptima ( grande_x:number, grande_y:number,
    chico_x:number, chico_y:number) : number {

    var permutacionA = cantidadDeTamanos(grande_x, grande_y, chico_x, chico_y);
    var permutacionB = cantidadDeTamanos(grande_x, grande_y, chico_y, chico_x);
    var permutacionC = cantidadDeTamanos(grande_y, grande_x, chico_x, chico_y);
    var permutacionD = cantidadDeTamanos(grande_y, grande_x, chico_y, chico_x);

    return Math.max(permutacionA, permutacionB, permutacionC, permutacionD);
}

module.exports.cantidadDeTamanosOptima = cantidadDeTamanosOptima;
