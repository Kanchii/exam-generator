export default class Database {
    constructor(){
        this.questions = []
    }
    getQuestions(quantity){
        return this.questions.sort(() => Math.random() - Math.random()).slice(0, quantity)
    }
}