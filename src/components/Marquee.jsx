import './Marquee.css'

const ITEMS = [
  'Transporte',
  'Erdarbeiten',
  'Straßenreinigung',
  'Kanalarbeiten',
  'Baustoffzustellung',
  'Baggerarbeiten',
]

function Marquee() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
