export class HeroModel {
    immutableFields = {
        id: uuidv4(),
    };
    mutableFields = {
        name: {
            first: "",
            last: "",
        },
        photo: "",
        gender: "",
        codename: "",
        phoneNumber: "",
        email: "",
        password: "",
    };

    errorMessage = "";

    constructor(heroData) {
        this.heroData = heroData;
    }

    set() {
        const checkers = [this.checkMissingFields()];

        if (checkers.includes(true)) return this.getCheckFailObj();
        return { ...this.immutableFields, ...this.heroData };
    }

    checkMissingFields() {
        for (let heroModelProperty of Object.keys(this.mutableFields)) {
            const isFieldMissing =
                !this.heroData.hasOwnProperty(heroModelProperty);
            if (isFieldMissing) {
                this.errorMessage = `EXTERNAL ERROR: hero data received from sign up param method does not have "${heroModelProperty}" field`;
                return isFieldMissing;
            }
        }
    }

    getCheckFailObj() {
        return {
            hasError: true,
            errorMessage: this.errorMessage,
        };
    }
}
