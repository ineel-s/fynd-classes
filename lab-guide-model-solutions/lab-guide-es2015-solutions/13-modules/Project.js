export default class Project {
    constructor( id, name, client ) {
        this.id = id;
        this.name = name;
        this.client = client;
    }

    toString() {
        return `${this.name}`;
    }
}