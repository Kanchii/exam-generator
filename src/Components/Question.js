import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

import { useState } from 'react'
import { useTestContext } from '../Contexts/TestContext'

function Question({
    index,
    title,
    description,
    options,
    answer,
    answered,
    setAnswered
}){
    const { finished, progress, setProgress, correctAnswer, setCorrectAnswer } = useTestContext()
    const [ clicked, setClicked ] = useState(false)

    const [hit, setHit] = useState(false)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                {options.map((value, idx) => (
                    <Form.Check
                        key={`question-${index}-option-${idx}`}
                        type="radio"
                        name={`question-${index}`}
                        label={value}
                        disabled={finished}
                        style={idx === answer && finished ? {"background-color": "#00FF00"} : {"background-color": "#FFFFFF"}}
                        id={`question-${index}-option-${idx}`}
                        onClick={() => {
                            if(clicked === false){
                                setProgress(progress + 1)
                                setClicked(true)
                                setAnswered(answered + 1)
                            }
                            if(idx === answer){
                                if(hit === false){
                                    setCorrectAnswer(correctAnswer + 1)
                                }
                                setHit(true)
                            } else {
                                if(hit === true){
                                    setCorrectAnswer(correctAnswer - 1)
                                }
                                setHit(false)
                            }
                        }}
                    />
                ))}
            </Card.Body>
        </Card>
    )
}

export default Question;