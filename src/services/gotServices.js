export default class GotResourses {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api"
    }

    getResources = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`could not fetch ${url}`)
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResources("/characters?page=5");
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const character = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses() {
        return this.getResources("/houses/")
    }

    getHouse(id) {
        return this.getResources(`/houses/${id}`)
    }

    getAllBooks () {
        return this.getResources("/books/")
    }

    getBook(id) {
        return this.getResources(`/books/${id}`)
    }

    _transformCharacter = (char) => {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}