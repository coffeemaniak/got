import moment from "moment";

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

    getAllHouses = async () => {
        const houses = await this.getResources("/houses/");
        return houses.map(this._transformHouse);
    }

    getHouse = async (id) => {
        const house = await this.getResources(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResources(`/books/`);
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        const book = await this.getResources(`/books/${id}/`);
        return this._transformBook(book);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return "no data"
        }
    }

    transformData = (data) => {
        const time = moment(data).format("YYYY/MM/DD");
        return time;
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

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        };
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.transformData(book.released)
        };
    }
}