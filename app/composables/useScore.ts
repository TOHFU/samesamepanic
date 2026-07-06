export const useScore = () => {
  const catScore = useState('catScore', () => 0)
  const sharkScore = useState('sharkScore', () => 0)
  const hammerheadScore = useState('hammerheadScore', () => 0)

  const incrementCatScore = () => {
    catScore.value++
  }

  const incrementSharkScore = () => {
    sharkScore.value++
  }

  const incrementHammerheadScore = () => {
    hammerheadScore.value++
  }


  const resetScores = () => {
    catScore.value = 0
    sharkScore.value = 0
    hammerheadScore.value = 0
  }

  return {
    catScore,
    sharkScore,
    hammerheadScore,
    incrementCatScore,
    incrementSharkScore,
    incrementHammerheadScore,
    resetScores,
  }
}