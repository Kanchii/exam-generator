import Database from "./Database"

export default class RaciocioLogico extends Database {
    questions = [
        {
            "question": "A negação da proposição \"Todo o aluno do 3º ano do Ensino Médio é bem comportado\" é a proposição:",
            "options": [
                "\"Nenhum aluno do 3º ano do Ensino Médio é bem comportado\"",
                "\"Existe pelo menos um aluno do 3º ano do Ensino Médio que não é bem comportado\"",
                "\"Nenhum aluno do 3º ano do Ensino Médio não é bem comportado\"",
                "\"Somente os alunos do 3º ano do Ensino Médio não são bem comportados\"",
                "\"Todo o aluno do 3º ano do Ensino Médio não é bem comportado\""
            ],
            "answer": 1
        }
    ]
}