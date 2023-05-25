(() => {

    // No aplicando el principio de responsabilidad unica    

    type Gender = 'M' | 'F';

    // interface PersonProps
    interface PersonProperties {
        birthDate: Date;
        gender: Gender;
        name: string;
    }

    class Person {

        public birthDate: Date;
        public gender: Gender;
        public name: string;

        constructor({ birthDate, gender, name }: PersonProperties) {
            this.birthDate = birthDate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProperties {
        birthDate: Date;
        email: string;
        gender: Gender;
        name: string;
        role: string;
    }

    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({
            birthDate,
            email,
            gender,
            name,
            role
        }: UserProperties) {

            super({ birthDate, gender, name });
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProperties {
        birthDate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name: string;
        role: string;
        workDirectory: string;
    }

    class UserSettings extends User {

        public lastOpenFolder: string;
        public workDirectory: string;

        constructor({
            birthDate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workDirectory
        }: UserSettingsProperties) {

            super({ birthDate, email, gender, name, role });
            this.lastOpenFolder = lastOpenFolder;
            this.workDirectory = workDirectory;
        }

    }

    const userSettings = new UserSettings({
        birthDate: new Date('1999-03-01'),
        email: 'david@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'David-Cartagena',
        role: 'Admin',
        workDirectory: '/usr/home',
    });

    console.log({ userSettings });

})();