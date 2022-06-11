import Accordion from 'react-bootstrap/Accordion'

import Question from './Question'
import { useState } from 'react'

function Session({
    theme,
    numberOfQuestions,
    database
}) {
    const questions = database.getQuestions(numberOfQuestions)
    const [ answered, setAnswered ] = useState(0)
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>{`${theme} (${answered}/${numberOfQuestions})`}</Accordion.Header>
                <Accordion.Body>
                    {questions.map((v, idx) => {
                        return <>
                            <Question
                                title={`Questão ${idx+1}`}
                                description={v.question}
                                index={`${theme}-${idx+1}`}
                                options={v.options}
                                answer={v.answer}
                                answered={answered}
                                setAnswered={setAnswered}
                            />
                        </>
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Session