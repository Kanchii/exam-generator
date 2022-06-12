import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useState } from 'react'

import Session from './Session'
import { useTestContext } from '../Contexts/TestContext'
import RaciocioLogico from '../Database/RaciocioLogico'
import Informatica from '../Database/Informatica'
import StartButton from './StartButton'

function formatTime(seconds){
	var date = new Date(null);
	date.setSeconds(seconds);
	return date.toISOString().substr(11, 8);
}

function Test({
	maximumTime
}){
	const { setFinished, progress, correctAnswer, totalQuestions, setTotalQuestions } = useTestContext()

	const [totalTime, setTotalTime] = useState(maximumTime);

	setTotalQuestions(2)
	
	return (
		<Container>
			<Row style={{"margin": "5px"}}>
				<Col sm={11}><StartButton totalTime={totalTime} setTotalTime={setTotalTime} /></Col>
				<Col sm={1}>{formatTime(totalTime)}</Col>
			</Row>
			<Row style={{"margin": "5px"}}>
				<Form target='#' onSubmit={(e) => {
					e.preventDefault()
					alert(`Você acertou: ${correctAnswer}`)
					setFinished(true)
				}}>
					<Row style={{"marginBotton": "5px"}}>
						<Session theme={"Raciocinio Logico"} numberOfQuestions={1} database={new RaciocioLogico()} />
						<Session theme={"Informática"} numberOfQuestions={1} database={new Informatica()} />
					</Row>
					<hr />
					<ProgressBar now={parseInt((progress / totalQuestions) * 100)} label={`${parseInt((progress / totalQuestions) * 100)}%`} />
					<Row>
						<Col sm={11}>
							<Button variant="primary" type="submit" style={{'marginTop': "5px", "width": "15%"}}> Submit </Button>
						</Col>
					</Row>
				</Form>
			</Row>
		</Container>
	)
}

export default Test;