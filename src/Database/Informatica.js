import Database from './Database'

export default class Informatica extends Database {
    questions = [
        {
            "question": "Paulo precisa montar um relatório no MS Excel 2010, idioma português, configuração padrão que some os valores menores do que quinze no intervalo de células de A1 até A5. Assinale a alternativa correta que representa a fórmula que Paulo irá utilizar:",
            "options": [
                "=SOMASE(A1:A5;<15)",
                "=SE(A1:A5<15;SOMA())",
                "=SOMASE(A1:A5;\"<15\")",
                "=SOMA(SE(A1:A5<15))",
                "=SOMASE(A1^A5;\"<15\")"
            ],
            "answer": 1
        }
    ]
}