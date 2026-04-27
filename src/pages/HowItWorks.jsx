import { useNavigate } from 'react-router-dom'
import '../styles/howitworks.css'

const WHATSAPP_NUMBER = '447700000000'

const steps = [
  {
    label: 'Step 1',
    title: 'Answer a few quick questions',
    desc: 'Tell us a bit about your situation so we can understand what help may be suitable.',
    checks: [
      'Takes less than 30 seconds',
      'Simple, multiple-choice questions',
      'No documents needed',
    ],
  },
  {
    label: 'Step 2',
    title: 'We match you with suitable options',
    desc: 'Based on your answers, we identify solutions that may help you:',
    checks: [
      'Reduce your monthly payments',
      'Manage your debt more easily',
      'In some cases, write off a portion of your debt',
    ],
  },
  {
    label: 'Step 3',
    title: 'Get your personalised results via WhatsApp',
    desc: "We'll send your results directly to you so you can review them in your own time.",
    checks: [
      'No phone calls unless you request one',
      'Completely confidential',
      'No pressure to continue',
    ],
  },
]

export default function HowItWorks() {
  const navigate = useNavigate()

  const goToQuiz = () => navigate('/quiz')

  const openWA = () => {
    const msg = encodeURIComponent('Hi! I would like to find out more about debt solutions.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <div className="hiw-page">
      {/* HERO WHITE CARD */}
      <div className="hiw-hero">
        <div className="hiw-hero-card">
          <div className="hiw-hero-left">
            <h1>How it Works<span>?</span></h1>
            <p className="hiw-hero-subtitle">simple, fast and confidential...</p>
            <p>Getting help with your debt doesn't need to be complicated.</p>
            <p>We've made it quick and easy to see what options may be available to you – with no pressure and no obligation.</p>
            <button className="hiw-hero-btn" onClick={goToQuiz}>Be Debt Free! 👉</button>
          </div>
          <div className="hiw-hero-right">
            <img src="/images/how-it-work-girl-img.png" alt="How it Works" />
          </div>
        </div>
      </div>

      {/* 3 STEPS */}
      <div className="hiw-steps-section">
        <div className="hiw-steps-grid">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step-card">
              <div className="hiw-step-label">{step.label}</div>
              <div className="hiw-step-title">{step.title}</div>
              <p className="hiw-step-desc">{step.desc}</p>
              <div className="hiw-step-checks">
                {step.checks.map((c, j) => (
                  <div key={j} className="hiw-step-check">
                    <div className="hiw-check-icon">✓</div>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <button className="hiw-wa-btn" onClick={openWA}>
                Send us a WhatsApp 🤳
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}