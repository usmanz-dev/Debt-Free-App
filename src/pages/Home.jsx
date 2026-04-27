import { useNavigate } from 'react-router-dom'
import '../styles/home.css'

const WHATSAPP_NUMBER = '447700000000'
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

const checks = [
  'Write off Unaffordable debt',
  'Stop any Bailiff or Legal action',
  'One monthly payment',
  'Advice on all UK solutions available',
]

const hiwSteps = [
  { img: '/images/1.png', bg: '#f5a623', title: 'Complete our quick form', desc: 'Complete our form so we know about you, and get a general sense of your situation.' },
  { img: '/images/2.png', bg: '#9b59b6', title: 'Solutions', desc: 'Your advisor will run through each of the solutions you qualify for. We can do this on a call via SMS or WhatsApp.' },
  { img: '/images/3.png', bg: '#e74c3c', title: 'Application', desc: 'Your advisor will complete the application for your selected solution. We do all the hard work so you do not have to.' },
  { img: '/images/4.png', bg: '#27ae60', title: 'Debt Freedom', desc: 'There is nothing left for you to do! Your chosen debt solution will start so you can kick back and relax!' },
]

const reviewsData = [
  'I reached out as I felt like I was hiding the level of debt I was in and realised I could not manage it any more. I have always been quite good with managing it in the past but one thing after another happened and it creeped up on me. I contacted via WhatsApp and agreed to a call and I am currently in the process of getting my DRO approved. Marcus has been amazing and if you are struggling I would recommend reaching out before things get too difficult!',
  'I had an amazing case manager called Darren!! Honestly he was sooo helpful and kind and made me instantly so much calmer about my situation!! He is an absolute credit to the team!!...within less than 24 hrs he helped me sort an IVA and reduced my payments and debt. I recommend this team 100%. Just have the courage to reach out people!! I am so glad I did. Charlie x Lincolnshire x',
  'Made me feel they could help without judgement as having been trying to do it alone for last few years and getting no where! Used WhatsApp for initial contact. Kevin the advisor was supportive and courteous throughout and asked all the relevant questions in a non judgemental way to ease the process. On way to becoming less stressed and debt free in 5 years.',
  'Fantastic team! They are incredibly kind, professional, and take a very personalized approach to the individuals they work with. They took the time to understand what I had been through and why I ended up in my situation. I was guided step by step, with everything explained to me in detail. I am especially grateful to Megan, who I spoke with -- she was amazing. I highly recommend them.',
]

const helpButtons = [
  { icon: '😊', label: 'Reduce Stress & Anxiety' },
  { icon: '📋', label: 'Create a Budget' },
  { icon: '⚖️', label: 'Avoid Legal Action' },
  { icon: '💡', label: 'Guidance on all Solutions' },
]

export default function Home() {
  const navigate = useNavigate()
  const goToQuiz = () => navigate('./quiz')
  const openWA = () => window.open(WA_LINK, '_blank')

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>A better way to manage your debts<span className="hero-dots">...</span></h1>
          <div className="hero-checks">
            {checks.map((item, i) => (
              <div key={i} className="hero-check-item">
                <div className="check-icon">✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <button className="hero-btn" onClick={goToQuiz}>Be Debt Free! 👉</button>
          <div className="hero-disclaimer">
            <p>To discover more about how to manage your debt and to receive free debt advice visit <a href="https://www.moneyhelper.org.uk" target="_blank" rel="noreferrer">www.moneyhelper.org.uk</a></p>
            <p>May not be suitable in all circumstances. <a href="#">Fees apply</a>. Your credit rating may be affected.</p>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-col hero-col-left">
            <div className="hero-img-circle size-lg">
              <img src="/images/hero-img.png" alt="client" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="hiw-home-section">
        <h2>How it works...</h2>
        <p className="hiw-home-subtitle">Our 4 step process takes all the hassle out of getting the debt help you deserve</p>
        <div className="hiw-home-grid">
          {hiwSteps.map((step, i) => (
            <div key={i} className="hiw-home-card">
              <div className="hiw-home-icon" style={{ background: step.bg }}>
                <img src={step.img} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <button className="hiw-home-btn" onClick={goToQuiz}>Be Debt Free! 👉</button>
      </section>

      {/* REVIEWS */}
      <section className="home-reviews-section">
        <h2>Our clients<br />love us</h2>
        <p className="home-reviews-find">FIND OUT WHY</p>
        <div className="home-reviews-grid">
          {reviewsData.map((text, i) => (
            <div key={i} className="home-review-card">
              <div className="home-review-stars">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="home-review-text">{text}</p>
            </div>
          ))}
        </div>
        <button className="home-reviews-btn" onClick={goToQuiz}>Be Debt Free! 👉</button>
      </section>

      {/* HELP SECTION */}
      <section className="home-help-section">
        <div className="home-help-left">
          <h2>How Getting Debt Advice Could Help</h2>
          <p>Struggling with debt can be overwhelming, but seeking professional advice can make a significant difference. Here's how getting debt advice could help:</p>
          <div className="home-help-buttons">
            {helpButtons.map((btn, i) => (
              <button key={i} className="home-help-btn">
                <span>{btn.icon}</span>
                <span>{btn.label}</span>
              </button>
            ))}
          </div>
          <button className="home-help-cta" onClick={goToQuiz}>Be Debt Free! 👉</button>
        </div>
        <div className="home-help-right">
          <img src="/images/girl-img.png" alt="debt advice help" />
        </div>
      </section>

      {/* BETTER LIFE */}
      <section className="better-life-section">
        <h2>A better life starts now</h2>
        <p>Click the button and begin your journey to debt freedom</p>
        <button className="better-life-btn" onClick={goToQuiz}>Be Debt Free! 👉</button>
      </section>
    </div>
  )
}