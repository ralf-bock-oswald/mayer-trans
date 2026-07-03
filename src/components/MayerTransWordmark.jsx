import wordmarkWhite from '../assets/mayer-trans-wordmark-white.png'
import wordmarkBlack from '../assets/mayer-trans-wordmark-black.png'

function MayerTransWordmark({ className, variant = 'white' }) {
  const src = variant === 'black' ? wordmarkBlack : wordmarkWhite
  return <img src={src} alt="Mayer-Trans" className={className} />
}

export default MayerTransWordmark
