import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/solutionpage.css'

const checks = [
  'Write off 100% of your debt',
  'No monthly payments',
  'Stops bailiffs & legal action',
]

const advantages = [
  'Wipes away all unsecured debts, allowing you to start over',
  'Stops creditors from taking legal action',
  'You will be left with enough money after repayments to live on',
]

const disadvantages = [
  'Your possessions, such as your car and house, may be repossessed',
  'There is an initial fee to pay',
  'Your bankruptcy will be placed on a public record in the Bankruptcy Insolvency Register',
  'Your credit rating will be negatively impacted for 6 years',
]

const faqs = [
  {
    q: 'Am I eligible for Bankruptcy?',
    a: 'There are set requirements to be considered for bankruptcy. These include: Being a resident of England, Wales, or Northern Ireland, Having no reasonable way to repay your debts through other methods, Be able to pay an initial fee of £680 (this can be paid in instalments), No spare income that could be used in another debt solution such as an Individual Voluntary Arrangement (IVA).',
  },
  { q: 'What debts can\'t be included in Bankruptcy?', a: 'Certain debts cannot be included in bankruptcy. These include student loans, child support, magistrates court fines, and debts obtained through fraud.' },
  { q: 'Will filing for Bankruptcy stop bailiffs?', a: 'Yes. Once bankruptcy is declared, an automatic stay is put in place which stops most creditors and bailiffs from taking action against you.' },
  { q: 'What restrictions will I have during Bankruptcy?', a: 'During bankruptcy you cannot act as a company director, borrow more than £500 without disclosing your bankruptcy, or be involved in the management of a company without court permission.' },
  { q: 'Are you seeking Bankruptcy and wish to know more?', a: 'Our advisors can help you understand whether bankruptcy is the right solution for your situation. Contact us today for a free, no-obligation consultation.' },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sp-faq-item">
      <button className="sp-faq-question" onClick={() => setOpen(p => !p)}>
        <span>{q}</span>
        <span className={`sp-faq-icon${open ? ' open' : ''}`}>+</span>
      </button>
      {open && <div className="sp-faq-answer">{a}</div>}
    </div>
  )
}

export default function Bankruptcy() {
  const navigate = useNavigate()
  const goToQuiz = () => navigate('/quiz')

  return (
    <div>
      <div className="sp-hero">
        <div className="sp-hero-left">
          <h1>Bankruptcy</h1>
          <div className="sp-hero-checks">
            {checks.map((c, i) => (
              <div key={i} className="sp-hero-check">
                <div className="sp-check-icon">✓</div>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <button className="sp-hero-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
        <div className="sp-hero-right">
          <img className="sp-hero-img-main" src="/images/hero-img.png" alt="Bankruptcy debt advice" />
        </div>
      </div>

      <div className="sp-what-section">
        <h2>What is Bankruptcy?</h2>
        <p>Bankruptcy is a formal insolvency solution that means your outstanding debts are written off. It is available to people living in England, Wales and Northern Ireland. The equivalent for people living in Scotland is called Sequestration.</p>
        <p>Bankruptcy is typically viewed as a last resort. It's a legally binding solution and is intended for those who can't repay their debts using income or assets in a reasonable period of time.</p>
        <button className="sp-qualify-btn" onClick={goToQuiz}>Do I Qualify? 🤔</button>
      </div>

      <div className="sp-adv-section">
        <div className="sp-adv-card advantages">
          <h3>Bankruptcy Advantages</h3>
          <ul className="sp-adv-list">
            {advantages.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
        <div className="sp-adv-card disadvantages">
          <h3>Bankruptcy Disadvantages</h3>
          <ul className="sp-adv-list">
            {disadvantages.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
      </div>

      <div className="sp-faq-section">
        <h2>Bankruptcy FAQs</h2>
        <div className="sp-faq-list">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
        <button className="sp-faq-bottom-btn" onClick={goToQuiz}>Get Debt Advice</button>
      </div>
    </div>
  )
}