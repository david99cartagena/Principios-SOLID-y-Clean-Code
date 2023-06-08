(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'David';
    
    // primer apellido - last name
    const lastName = 'Cartagena';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

    
    // Uso de arreglos
    // Malo
    const fruit = ['manzana','platano','fresa'];
    // Regular
    const fruitList = ['manzana','platano','fresa'];
    // Bueno
    const fruits = ['manzana','platano','fresa'];
    // Mejor
    const fruitNames = ['manzana','platano','fresa'];

    // Uso de Booleanos
    // Mal
    const open = true;
    const write =true;
    const fruta = true;
    const active = false;
    const noValues = true;
    const notEmpty = true;
    
    // Mejor
    const isOpen = true;
    const canWrite =true;
    const hasFruta = true;
    const isActive = false;
    const hasValues = false;
    const isEmpty = false;

    // Uso de numeros
    // Mal
    const frutas=3;
    const carros=10;
    
    // Mejor
    const maxFrutas=6;
    const minFrutas=1;
    const totalFrutas=7;

    const totalOfCars = 5;

    // Uso de Funciones
    // Mal
    function createUserIfNotExists() {}
    function updateUserIfNotEmpty() {}
    function sendEmailIfFieldsValid() {}

    // Mejor
    // verbo accion + sustantivo
    function createUser() {}
    function updateUser() {}
    function sendEmail() {}

})();


