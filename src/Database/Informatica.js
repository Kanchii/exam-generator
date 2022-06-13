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
        },
        {
            "question": "O Microsoft Word é um processador de textos onde podemos encontrar diversas ferramentas de edição e formatação de textos. Sobre essas ferramentas é correto afirmar que:",
            "options": [
                "para inserir número de páginas em um documento, utiliza-se o recurso Indicadores.",
                "a cor da fonte de um documento só pode ser modificada se houver uma impressora colorida instalada no computador.",
                "para salvar um documento no word pode-se usar a opção Salvar no menu Arquivo ou usar as teclas de atalho CTRL+N",
                "uma tabela pode ser convertida em texto através do Recurso Converter tabela em texto.",
                "para inserir uma imagem no Word ela deve estar no formato jpeg ou bmp, não sendo aceito outros formatos."
            ],
            "answer": 3
        }
    ]
}