export function useQuestions(real: string[], fake: string[]) {
    // type threeArray = [string, string, string]
   //  type questionsArray = threeArray[]
//    console.log('generating questions')
    const questions = []
    const [...sortedFake ] = fake
    const [...sortedReal ] = real
   

    for (let i = 0; questions.length < 20; i++) {
        const thruple = []
        // get one answer from the fake
        const randomIdx = Math.floor(Math.random() * sortedFake.length)
        const firstChoice = sortedFake[randomIdx]
        sortedFake.splice(randomIdx, 1)
        thruple.push(firstChoice)

        // get two answers from the real
        const randomIdxTwo = Math.floor(Math.random() * sortedReal.length)
        const secondChoice = sortedReal[randomIdxTwo]
        sortedReal.splice(randomIdxTwo, 1)
        thruple.push(secondChoice)

        const randomIdxThree = Math.floor(Math.random() * sortedReal.length)
        const thirdChoice = sortedReal[randomIdxThree]
        sortedReal.splice(randomIdxThree, 1)
        thruple.push(thirdChoice)

        if (thruple.length === 3) {
            // const shuffledThruple = thruple.sort(() => 0.5 - Math.random())
            // questions.push(shuffledThruple)
            questions.push(thruple)
        }
       
    }
    return questions
}