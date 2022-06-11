import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'

import Session from './Session'
import { useTestContext } from '../Contexts/TestContext'
import RaciocioLogico from '../Database/RaciocioLogico'
import Informatica from '../Database/Informatica'

function Test(){
	const { setFinished, progress, correctAnswer, totalQuestions, setTotalQuestions } = useTestContext()

	setTotalQuestions(2)
	
	return (
			<Form target='#' onSubmit={(e) => {
					e.preventDefault()
					alert(`Você acertou: ${correctAnswer}`)
					setFinished(true)
			}}>
					<Session theme={"Raciocinio Logico"} numberOfQuestions={1} database={new RaciocioLogico()} />
					<Session theme={"Informática"} numberOfQuestions={1} database={new Informatica()} />
					<hr />
					<ProgressBar now={parseInt((progress / totalQuestions) * 100)} label={`${parseInt((progress / totalQuestions) * 100)}%`} />
					<hr />
					<Button variant="primary" type="submit"> Submit </Button>
			</Form>
	)
}

export default Test;