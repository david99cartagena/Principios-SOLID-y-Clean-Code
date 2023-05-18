(() => {

    const temperaturesCelsius = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{ id: 1, email: 'fernando@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map(user => user.email);

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

    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea(side: number) {
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

    // Mal
    class Manager { };
    class Data { };
    class Info { };
    class Individual { };
    class Processor { };
    class SpecialMonsterView { };

    class SquareAreaExtendsViewModelEventHandlerActionSingleton { };
    // Mas palabra !== mejor nombre
    //Simple, dividir

    //Funciones

    /*
    "Sabemos que estamos desarrollando codigo limpio cuando
    cada funcion hace exactamente lo que su nombre indica".
    -Ward Cunningham
     */
    // Esta bien
    function sendEmailprueba(toWhom: string): boolean {

        // verificar correo
        if (!toWhom.includes('@')) return false;

        // construir el cuerpo o mensaje
        // Enviar correo
        // Si todo esta bien
        return true;
    };

    // Se puede mejorar
    function sendEmailprueba2(): boolean {

        // verificar si el usuario existe
        // revisar contrasena
        // crear usuario en base de datos
        // si todo esta bien
        return true;
    };

    //Parametros y argumentos
    // Mejor
    interface SendEmailOptions {
        toWho: string;
        from: string;
        body: string;
        subject: string;
        apikey: string;
    }

    // Mejor
    function sendEmail({ toWho, from, body, subject, apikey }: SendEmailOptions): boolean {
        console.log({ toWho, from, body, subject, apikey });
        return true;
    };

    // Se puede mejorar
    function sendEmaill (toWhoo: string, from: string, body: string, subject: string, apikey: string): boolean {
        return true;
    }

})();