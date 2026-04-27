import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/quiz.css'

const WHATSAPP_ADMIN = '447700000000'

const COUNTRY_OPTIONS = [
  { label: 'England', value: 'England', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', code: '44' },
  { label: 'Scotland', value: 'Scotland', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', code: '44' },
  { label: 'Wales', value: 'Wales', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', code: '44' },
  { label: 'Northern Ireland', value: 'Northern Ireland', flag: '🇬🇧', code: '44' },
]

const QUESTIONS = [
  {
    id: 'debtAmount',
    question: 'What is the total amount of your debt?',
    why: 'When considering your debt level remember to include the following commonly missed debts: HMRC, rent arrears, bailiff enforcements and council tax.',
    options: [
      { label: '£15,000 to £20,000+', value: '£15,000 to £20,000+' },
      { label: '£10,000 to £15,000', value: '£10,000 to £15,000' },
      { label: '£5,000 to £10,000', value: '£5,000 to £10,000' },
      { label: 'Less than £5,000', value: 'Less than £5,000' },
    ],
  },
  {
    id: 'monthlyRepayments',
    question: 'Are your monthly repayments becoming difficult to manage?',
    why: 'This will allow us to tailor our advice to your current situation.',
    options: [
      { label: "Yes, I'm struggling", value: 'Yes struggling' },
      { label: 'Starting to struggle', value: 'Starting to struggle' },
      { label: "No, but it's tight", value: 'No but tight', full: true },
    ],
  },
  {
    id: 'billsBehind',
    question: 'Have you fallen behind on any bills or payments?',
    why: 'This is helpful to know not only to ensure we give the best advice but to allow us to help put your mind at ease.',
    options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
      { label: 'About to', value: 'About to', full: true },
    ],
  },
  {
    id: 'mentalHealth',
    question: 'Is debt causing you stress and anxiety or affecting your mental health?',
    why: null,
    options: [
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' },
    ],
  },
  {
    id: 'propertyType',
    question: 'What type of property do you live in?',
    why: "Letting us know this helps us provide appropriate advice and ensure your property isn't at risk.",
    options: [
      { label: 'Rented', value: 'Rented' },
      { label: 'Owned', value: 'Owned' },
      { label: 'Living with Parents', value: 'Living with Parents' },
      { label: 'Other', value: 'Other' },
    ],
  },
  {
    id: 'employmentStatus',
    question: "What's your employment status?",
    why: 'This information helps us tailor advice to your current situation.',
    options: [
      { label: 'Employed', value: 'Employed' },
      { label: 'Self-Employed', value: 'Self-Employed' },
      { label: 'Retired', value: 'Retired' },
      { label: 'Unemployed', value: 'Unemployed' },
    ],
  },
  {
    id: 'location',
    question: 'Where do you live?',
    why: 'Telling us your location allows us to offer information about the debt solutions and help available in your area.',
    options: COUNTRY_OPTIONS.map(c => ({ label: c.label, value: c.value })),
  },
]

const reviewsData = [
  { title: 'Rebecca Hayes has been super suppor....', body: 'Rebecca Hayes has been super supportive and reassuring throughout the process....', author: 'Emma, 17 hours ago' },
  { title: 'Jodie Done has been a great help', body: "Jodie Done has been a great help. Supportive and understanding and doesn't make...", author: 'Customer, 18 hours ago' },
  { title: 'Rebecca was amazing she made feel...', body: 'Rebecca was amazing she made feel confident and comfortable talking about my deb...', author: 'Sarah Richardson, 1 day ago' },
]

const helpButtons = [
  { icon: '😊', label: 'Reduce Stress & Anxiety' },
  { icon: '📋', label: 'Create a Budget' },
  { icon: '⚖️', label: 'Avoid Legal Action' },
  { icon: '💡', label: 'Guidance on all Solutions' },
]

function TrustpilotBadge() {
  return (
    <div className="tp-badge">
      <div className="tp-logo-row">
        <span style={{ color: '#00b67a', fontSize: 26 }}>★</span>
        <span className="tp-logo-text">Trustpilot</span>
      </div>
      <div className="tp-stars-row">
        {[1,2,3,4,5].map(i => <div key={i} className="tp-star-box">★</div>)}
      </div>
      <div className="tp-rated-text">Rated Excellent on Trustpilot</div>
    </div>
  )
}

function WhyToggle({ text }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="quiz-why">
      <button className="quiz-why-toggle" onClick={() => setOpen(p => !p)}>
        Why are we asking this question?
      </button>
      {open && <p className="quiz-why-text">{text}</p>}
    </div>
  )
}

function ReviewsRow() {
  return (
    <div className="quiz-reviews-row">
      <div className="qr-left">
        <div className="qr-excellent">Excellent</div>
        <div className="qr-stars-row">
          {[1,2,3,4,5].map(i => <div key={i} className="qr-star-box">★</div>)}
        </div>
        <div className="qr-based">Based on 100 reviews</div>
        <div className="qr-tp-logo">★ Trustpilot</div>
      </div>
      <div className="qr-cards">
        {reviewsData.map((r, i) => (
          <div key={i} className="qr-card">
            <div className="qr-card-stars">
              {[1,2,3,4,5].map(j => <div key={j} className="qr-card-star">★</div>)}
            </div>
            <div className="qr-card-title">{r.title}</div>
            <div className="qr-card-body">{r.body}</div>
            <div className="qr-card-author">{r.author}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HelpSection({ onCta }) {
  return (
    <div className="quiz-help-section">
      <div className="quiz-help-left">
        <h2>How Getting Debt Advice Could Help</h2>
        <p>Struggling with debt can be overwhelming, but seeking professional advice can make a significant difference. Here's how getting debt advice could help:</p>
        <div className="quiz-help-buttons">
          {helpButtons.map((btn, i) => (
            <button key={i} className="quiz-help-btn">
              <span>{btn.icon}</span>
              <span>{btn.label}</span>
            </button>
          ))}
        </div>
        <button className="quiz-help-cta" onClick={onCta}>Be Debt Free! 👉</button>
      </div>
      <div className="quiz-help-right">
        <img src="/images/girl-img.png" alt="debt advice" />
      </div>
    </div>
  )
}

export default function Quiz() {
  const navigate = useNavigate()
  const [phase, setPhase] = useState('questions')
  const [qIndex, setQIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_OPTIONS[0])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const total = QUESTIONS.length
  const currentQ = QUESTIONS[qIndex]

  const handleAnswer = (id, value) => {
    const newAnswers = { ...answers, [id]: value }
    setAnswers(newAnswers)
    if (id === 'location') {
      const found = COUNTRY_OPTIONS.find(c => c.value === value)
      if (found) setSelectedCountry(found)
    }
    if (qIndex < total - 1) {
      setQIndex(q => q + 1)
    } else {
      setPhase('contact')
    }
  }

  const handleSubmit = async () => {
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      setError('Please fill in all fields.')
      return
    }

    // Sirf numbers allow
    const phoneDigits = phone.replace(/\s/g, '').replace(/^0/, '')
    if (!/^\d+$/.test(phoneDigits)) {
      setError('Please enter numbers only.')
      return
    }

    // UK number 10 digits hona chahiye
    if (phoneDigits.length !== 10) {
      setError('Please enter a valid UK mobile number (10 digits e.g. 07911123456).')
      return
    }

    // UK number 7 se shuru hona chahiye
    if (!phoneDigits.startsWith('7')) {
      setError('Please enter a valid UK mobile number starting with 07.')
      return
    }

    setError('')
    setLoading(true)

    const fullPhone = selectedCountry.code + phoneDigits

    // Admin ko WhatsApp message bhejo - yeh automatically admin ka WhatsApp kholta hai
    const adminMessage =
      `🔔 NEW LEAD - Be Debt Free%0A%0A` +
      `👤 Name: ${firstName} ${lastName}%0A` +
      `📱 Phone: +${fullPhone}%0A` +
      `📍 Location: ${answers?.location || 'N/A'}%0A` +
      `💰 Debt Amount: ${answers?.debtAmount || 'N/A'}%0A` +
      `💼 Employment: ${answers?.employmentStatus || 'N/A'}%0A` +
      `🏠 Property: ${answers?.propertyType || 'N/A'}%0A` +
      `📊 Monthly Repayments: ${answers?.monthlyRepayments || 'N/A'}%0A` +
      `📋 Bills Behind: ${answers?.billsBehind || 'N/A'}%0A` +
      `🧠 Mental Health Affected: ${answers?.mentalHealth || 'N/A'}`

    // Admin ka WhatsApp open karo message ke saath
    window.open(`https://wa.me/${WHATSAPP_ADMIN}?text=${adminMessage}`, '_blank')

    // Data MongoDB mein save karo
    try {
      const res = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, phone: fullPhone, answers }),
      })
      const data = await res.json()
      console.log('Saved:', data)
    } catch (e) {
      console.warn('API error:', e)
    } finally {
      setLoading(false)
      navigate('/thank-you')
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="quiz-page">
      <div className="quiz-top">
        <TrustpilotBadge />

        {phase === 'questions' && (
          <div className="quiz-card">
            <div className="quiz-question">{currentQ.question}</div>
            <div className="quiz-options">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  className={`quiz-option-btn${opt.full ? ' full' : ''}`}
                  onClick={() => handleAnswer(currentQ.id, opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {currentQ.why && <WhyToggle text={currentQ.why} />}
          </div>
        )}

        {phase === 'contact' && (
          <div className="quiz-contact">
            <h2>Where should we send your results?</h2>
            <p className="quiz-contact-sub">We'll send your personalised debt options via WhatsApp</p>
            <div className="quiz-contact-checks">
              <span>✅ No phone calls unless you request one</span>
              <span>✅ Completely confidential</span>
              <span>✅ Free, no obligation</span>
            </div>
            <input
              className="quiz-input"
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              className="quiz-input"
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <div className="quiz-phone-row">
              <div className="quiz-country-flag">
                <span>{selectedCountry.flag}</span>
                <span>+{selectedCountry.code}</span>
              </div>
              <input
                className="quiz-phone-input"
                type="tel"
                placeholder="07911 123456"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/[^0-9\s]/g, ''))}
                onKeyDown={e => { if (e.key === 'Enter') handleSubmit() }}
              />
            </div>
            {error && <div className="quiz-error">{error}</div>}
            <button className="quiz-submit-btn" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Sending...' : 'Send my results via WhatsApp 👉'}
            </button>
            <div className="quiz-secure">🔒 Safe, secure and confidential</div>
          </div>
        )}
      </div>

      <div className="quiz-bottom">
        <ReviewsRow />
        <HelpSection onCta={scrollToTop} />
      </div>
    </div>
  )
}