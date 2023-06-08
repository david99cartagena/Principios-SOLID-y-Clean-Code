(() => {

    function getMovieById(id: string) {
        console.log({ id });
    }

    function getMovieCastById(id: string) {
        console.log({ id });
    }

    function getActorBioById(id: string) {
        console.log({ id });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        if (fullName === 'david') return false;

        console.log('Crear actor', birthdate);
        return true;

    }

    // Continuar

    /* la simplicidad es fundamental
    evita el uso del "else"
    prioriza el uso de la condicional ternaria */

    /* const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    } */

    function getPayAmount({ isDead =false, isSeparate = true , isRetired = false }): number {
        
        if (isDead) return 1500;
        if (isSeparate) return 2500;
        // ternario
        return (isRetired) ? 3000 : 4000;

    }
    
    
})();