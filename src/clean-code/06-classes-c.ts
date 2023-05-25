(() => {

    // Aplicando el principio de responsabilidad unica
    // Priorizar la composición frente a la herencia!

    type Gender = "M" | "F";
    
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
        email: string;
        role: string;
    }

    class User {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor({ email, role }: UserProperties) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProperties {
        lastOpenFolder: string;
        workDirectory: string;
    }

    class Settings {
        
        public lastOpenFolder: string;
        public workDirectory: string;

        constructor({ lastOpenFolder, workDirectory }: SettingsProperties) {
            this.lastOpenFolder = lastOpenFolder;
            this.workDirectory = workDirectory;
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

    class UserSettings {
        
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthDate,
            email, role,
            lastOpenFolder, workDirectory,
        }: UserSettingsProperties) {
            this.person = new Person({ name, gender, birthDate });
            this.user = new User({ email, role });
            this.settings = new Settings({ lastOpenFolder, workDirectory });
        }
    }

    const userSettings = new UserSettings({
        birthDate: new Date("1999-03-01"),
        email: "david@google.com",
        gender: "M",
        lastOpenFolder: "/home",
        name: "David-Cartagena",
        role: "Admin",
        workDirectory: "/usr/home",
    });

    console.log({ userSettings });
    
    userSettings.user.checkCredentials();

})();
