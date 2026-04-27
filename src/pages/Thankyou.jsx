import { useNavigate } from 'react-router-dom'
import '../styles/thankyou.css'

const WHATSAPP_NUMBER = '447700000000'

const steps = [
  {
    num: '1',
    cls: 'n1',
    title: 'Free debt advice',
    desc: "We'll contact you shortly to find out more about you and your financial situation.",
  },
  {
    num: '2',
    cls: 'n2',
    title: 'Your options',
    desc: "Next, we'll get to know you and guide you through all possibilities to help manage what you owe.",
  },
  {
    num: '3',
    cls: 'n3',
    title: 'Recommendation',
    desc: "Finally, we'll advise on the best option for your needs, based on what YOU want.",
  },
]

const solutions = [
  {
    label: 'Debt Management Plan',
    name: 'DMP',
    featured: false,
    features: [
      'One Affordable Monthly Payment',
      'You will have to pay off all of your debt',
      'Does not guarantee to Freeze Interest',
      'No Legal Support',
    ],
    path: '/debt-solutions/dmp',
  },
  {
    label: 'Debt Relief Order',
    name: 'DRO',
    featured: false,
    features: [
      'Writes off 100% of Unsecured Debt',
      'You cannot own any assets worth over £4,000',
      'No monthly payments or fees',
      'Will fail if your circumstances improve',
    ],
    path: '/debt-solutions/dro',
  },
  {
    label: 'Individual Voluntary Arrangement',
    name: 'IVA',
    featured: true,
    badge: 'Best choice',
    features: [
      'One Affordable Monthly Payment',
      'Full Legal Protection from Creditors/Bailiffs',
      'Writes off Unaffordable Debts',
      'Know your exact Debt Free Date',
    ],
    path: '/debt-solutions/iva',
  },
  {
    label: 'Breathing Space',
    name: 'BSP',
    featured: false,
    features: [
      'Short Term Solution',
      'Puts debts on hold for 30 days',
      'Does not solve most peoples debt issues',
      'Could affect credit file',
    ],
    path: '/debt-solutions/bankruptcy',
  },
]

export default function ThankYou() {
  const navigate = useNavigate()

  const openWA = () => {
    const msg = encodeURIComponent("Hi! I just completed the debt quiz on Be Debt Free and I'm waiting for my results.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <div className="ty-page">
      {/* HERO DARK CARD */}
      <div className="ty-hero">
        <div className="ty-hero-card">
          <h1>Great news we can help<span>...</span></h1>
          <p>You should shortly receive a WhatsApp from your dedicated advisor. If you haven't received the message please click below to start a chat 👇</p>
          <button className="ty-wa-btn" onClick={openWA}>
            Send a WhatsApp
          </button>
        </div>
      </div>

      {/* 3 STEP PROCESS */}
      <div className="ty-steps-section">
        <div className="ty-steps-card">
          <h2>Our 3 Step Process</h2>
          <div className="ty-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="ty-step">
                <div className={`ty-step-num ${s.cls}`}>{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOLUTIONS */}
      <div className="ty-solutions-section">
        <div className="ty-solutions-card">
          <div className="ty-solutions-label">FIND OUT MORE ABOUT</div>
          <h2>Our Solutions</h2>
          <div className="ty-solutions-grid">
            {solutions.map((sol, i) => (
              <div key={i} className={`ty-solution-card${sol.featured ? ' featured' : ''}`}>
                <div className="ty-solution-label">{sol.label}</div>
                {sol.featured && <div className="ty-best-badge">Best choice</div>}
                <div className="ty-solution-name">{sol.name}</div>
                <div className="ty-solution-features">
                  {sol.features.map((f, j) => (
                    <div key={j} className="ty-solution-feature">
                      <span className="ty-feature-icon">✔</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className="ty-find-btn" onClick={() => navigate(sol.path)}>
                  Find Out More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}