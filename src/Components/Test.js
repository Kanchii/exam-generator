import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { useEffect, useState, useRef } from 'react'

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

	const raciocinioLogicoQuestions = useRef(null)
	const informaticaQuestions = useRef(null)

	useEffect(() => {
		setTotalQuestions(3)
		
		raciocinioLogicoQuestions.current = new RaciocioLogico().getQuestions(1)
		informaticaQuestions.current = new Informatica().getQuestions(2)
	}, [])
	
	return (
		<Container style={{"margin": "5px"}}>
			<Row >
				<Col>
					<StartButton style={{"width": "100px"}} totalTime={totalTime} setTotalTime={setTotalTime} />
				</Col>
				{formatTime(totalTime)}
			</Row>
			<Row style={{"marginTop": "15px"}}>
				<Form target='#' onSubmit={(e) => {
					e.preventDefault()
					alert(`Você acertou: ${correctAnswer}`)
					setFinished(true)
				}}>
					<Row>
						<Session theme={"Raciocinio Logico"} questions={raciocinioLogicoQuestions.current} />
						<Session theme={"Informática"} questions={informaticaQuestions.current} />
					</Row>
					<hr />
					<ProgressBar now={parseInt((progress / totalQuestions) * 100)} label={`${parseInt((progress / totalQuestions) * 100)}%`} />
					<Row style={{"marginTop": "10px"}}>
						<Col>
							<Button variant="primary" type="submit" style={{"width": "100px"}}> Submit </Button>
						</Col>
					</Row>
				</Form>
			</Row>
		</Container>
	)
}

export default Test;