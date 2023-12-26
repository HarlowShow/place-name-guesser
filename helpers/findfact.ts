import { funFacts } from '../data/answers'

type Result = {
    answer: string,
    isCorrect: boolean
  }


export function useFacts(res: Result) {
    const fact = funFacts[res.answer]
    return fact
}

export function testFacts(res: string) {
  const fact = funFacts[res]
  console.log('place was: ' + res + 'fun fact was: ' + fact)
}