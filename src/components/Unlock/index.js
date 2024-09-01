import {useState} from 'react'
import {
  Container,
  Paragraph,
  ImageSection,
  Lockbutton,
} from './styledComponents'

const UnlockCard = () => {
  const [isLock, setLock] = useState(true)

  const toggleLock = () => {
    setLock(prevLock => !prevLock)
  }

  return (
    <Container>
      <ImageSection
        src={
          isLock
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLock ? 'lock' : 'unlock'}
      />
      <Paragraph>Your Device is {isLock ? 'Locked' : 'Unlocked'}</Paragraph>
      <Lockbutton onClick={toggleLock}>{isLock ? 'Unlock' : 'Lock'}</Lockbutton>
    </Container>
  )
}

export default UnlockCard
