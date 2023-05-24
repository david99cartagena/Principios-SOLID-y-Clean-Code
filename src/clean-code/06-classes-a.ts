(() => {

    // No aplicando el principio de responsabilidad

    type Gender = 'M' | 'F';

    class Person {
        // forma larga
        // public name: string;
        // public gender: Gender;
        // public birthDate: Date;

        // constructor(name: string, gender: Gender, birthDate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthDate = birthDate;
        // }

        // abreviada
        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ){}

    }

    // const newPerson = new Person('David', 'M', new Date('1999-03-01'));
    // console.log({ newPerson });

    class User extends Person {
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workDirectory :string,
            public lastOpenFolder:string,
            email                :string,
            role                 :string,
            name                 :string,
            gender               :Gender,
            birthDate            :Date

        ) {
            super(email, role, name, gender, birthDate);
        }

    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'david@google.com',
        'Admin',
        'David-Cartagena',
        'M',
        new Date('1999-03-01')
    );

    // console.log({ userSettings, areCredentialsValid: userSettings.checkCredentials() });
    console.log({ userSettings });

})();