export default class Images {
    constructor(img) {
        this.img = img
    }

    toString() {
        return JSON.stringify({img: this.img})
}
}