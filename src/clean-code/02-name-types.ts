(() => {

    const temperaturesCelsius = [33.6, 12.34];
    
    const serverIp = '123.123.123.123';
    
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' },{ id: 3, email: 'melissa@google.com' }];
    
    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;
    
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }
    
    function printJob() {
        throw new Error('Function not implemented.');
    }

    // Uso de Clases
    /*
    *El nombre es lo mas importante
    *Formado por un sustantivo o frases de sustantivo
    *No deben de ser muy genericos
    *Usar UpperCamelCase

    Que exactamente hace la clase ?
    Como exactamente esta clase realiza cierta tarea ?
    Hay algo especifico sobre su ubicacion ?
    
    Si algo no tiene sentido, remuevelo o refactoriza.
    
    */

    class SquareAreaExtendsViewModelEventHandlerActionSingleton {};
    //Simple, dividir

    // Mal
    class Manager {};
    class Data {};
    class Info {};
    class Individual {};
    class Processor {};
    class SpecialMonsterView {};

})();