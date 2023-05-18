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
    function getPayAmount({ isDead =false, isSeparate = true , isRetired = false }): number {
        
        if (isDead) return 1500;
        if (isSeparate) return 2500;
        // ternario
        return (isRetired) ? 3000 : 4000;

    }
    
    
})();