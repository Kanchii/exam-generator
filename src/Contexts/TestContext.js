import { useState, useContext, createContext } from "react"

const TestContext = createContext()

export default function TestProvider({ children }) {
    const [finished, setFinished] = useState(false)
    const [progress, setProgress] = useState(0)
    const [totalQuestions, setTotalQuestions] = useState(0)
    const [correctAnswer, setCorrectAnswer] = useState(0)

    return <TestContext.Provider value={{
        finished,
        setFinished,
        progress,
        setProgress,
        correctAnswer,
        setCorrectAnswer,
        totalQuestions,
        setTotalQuestions
    }}> {children} </TestContext.Provider>
}

export function useTestContext() {
    const context = useContext(TestContext)
    if(!context) throw new Error('TestContext must be used within a TestProvider')
    const { finished, setFinished, progress, setProgress, correctAnswer, setCorrectAnswer, totalQuestions, setTotalQuestions } = context

    return { finished, setFinished, progress, setProgress, correctAnswer, setCorrectAnswer, totalQuestions, setTotalQuestions }
}