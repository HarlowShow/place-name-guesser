import { funFacts } from '../data/answers'

type Result = {
    answer: string,
    isCorrect: boolean
  }


export function useFacts(res: Result) {
    const fact = funFacts[res.answer]
    return fact
}