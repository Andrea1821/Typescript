let nombre: string = "Andrea";
nombre ="Ortiz";
console.log(nombre);
let numero: number =21;
console.log(numero);

type address ={
    city?: string;
    country : string;
    ad: string;
}

//crear objeto en typescript
type estudiante ={
    firstName: string;
    lastName: string;
    age?: number;
    address?: address;
}

const e1 : estudiante ={
    firstName: "Paula",
    lastName: "Gonzalez",
    address: {
        city: "bogotá",
        country: "colombia",
        ad: "carrera 2 #2-22" ,
    }
}

const e2 : estudiante ={
    firstName: "Andrea",
    lastName: "Ortiz",
    address: {
        city: "bogotá",
        country: "colombia",
        ad: "calle 54 #21-10" ,
    }
}

//funcion para mostrar info del estudiante
//version declarativa
const mostrarEstudiante = 
    (estudiante: estudiante): string => {
        const { firstName, lastName } = estudiante;
         return `Nombre de estudiante: ${ firstName} 
                 apellido: ${lastName}`;
                     
}  

console.log (mostrarEstudiante(e1));

//Arreglos
//Crear un arreglo de estudiantes:
//crear objeto en typescript

let estudiantes: estudiante[] = []

const agregarEstudiante = (estudiante: estudiante) => {
    estudiantes.push(estudiante)
}

const eliminarEstudiante = (lastName: string) => {
    estudiantes = estudiantes.filter(estudiante => estudiante.lastName !== lastName);
}
agregarEstudiante({
    firstName: "Eimy",
    lastName: "Cifuentes"
})

agregarEstudiante({
    firstName: "Nicol",
    lastName: "Montealegre"
})

eliminarEstudiante("Cifuentes")

console.log(estudiantes);
//recorrer el arreglo de estudiantes
//imprimiendo nombre y apellido
//utilizando el metodo de arreglo forEach

estudiantes.forEach((estudiante) => {
    console.log(`Nombre: ${estudiante.firstName}, Apellido: ${estudiante.lastName}`);
});

