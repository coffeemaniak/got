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

    getAllCharacters = async () => {
        const res = await this.getResources("/characters?page=5");
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResources(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = () => {
        return this.getResources("/houses/")
    }

    getHouse = (id) => {
        return this.getResources(`/houses/${id}`)
    }

    getAllBooks = () => {
        return this.getResources("/books/")
    }

    getBook = (id) => {
        return this.getResources(`/books/${id}`)
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return "no data"
        }
    }  

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    }

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }
}