import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/solutionpage.css'

const checks = [
  'No up front fee',
  'Write off 100% of your debt',
  'No monthly payments',
  'Stops bailiffs & legal action',
]

const advantages = [
  'Potential to write off debts',
  '12 months respite from your debt repayments',
  'Creditors cannot contact you during the 12 months',
  'You don\'t need to appear in court',
]

const disadvantages = [
  'Not available if you own property',
  'Your credit rating will be affected',
  'Only available if you owe less than £50,000',
]

const faqs = [
  {
    q: 'Am I eligible for a Debt Relief Order?',
    a: 'As a Debt Relief Order is a scheme designed to help people who cannot realistically get out of debt themselves, you will need to meet some qualifying criteria. These include: Debts up to £50,000, Not owning property, Not owning a vehicle worth more than £4,000, No assets worth more than £2,000, Less than £75 a month in disposable income, A resident of England, Wales, or Northern Ireland, Unable to repay your debts, No DRO in the last 6 years, Not currently in any formal insolvency solution (e.g. IVA or Bankruptcy).',
  },
  { q: 'Living with a Debt Relief Order', a: 'During your DRO period, you will need to follow certain restrictions. You cannot borrow more than £500 without disclosing your DRO, and you cannot act as a company director or be involved in company management.' },
  { q: 'Can I get a mortgage on a Debt Relief Order?', a: 'Getting a mortgage during or shortly after a DRO is very difficult. The DRO will remain on your credit file for 6 years, significantly affecting your ability to obtain credit.' },
  { q: 'Will a Debt Relief Order stop bailiffs?', a: 'Yes. Once a DRO is approved, creditors included in the order are not permitted to contact you or take any enforcement action during the 12 month moratorium period.' },
  { q: 'Should I apply for a Debt Relief Order?', a: 'A DRO could be right for you if you have a low income, few assets, and debts under £50,000. We recommend speaking to one of our advisors to understand if a DRO is the best solution for your circumstances.' },
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

export default function DRO() {
  const navigate = useNavigate()
  const goToQuiz = () => navigate('/quiz')

  return (
    <div>
      <div className="sp-hero">
        <div className="sp-hero-left">
          <h1>Debt Relief Order (DRO)</h1>
          <div className="sp-hero-checks">
            {checks.map((c, i) => (
              <div key={i} className="sp-hero-check">
                <div className="sp-check-icon">✓</div>
                <span>{c}</span>
              </div>
            ))}
          </div>
          <button className="sp-hero-btn" onClick={goToQuiz}>Get Debt Advice</button>
          <div className="sp-hero-disclaimer">
            <p>*There is a strict criteria on who does and doesn't qualify for a DRO</p>
          </div>
        </div>
        <div className="sp-hero-right">
          <img className="sp-hero-img-main" src="/images/hero-img.png" alt="DRO debt advice" />
        </div>
      </div>

      <div className="sp-what-section">
        <h2>What is a DRO?</h2>
        <p>A Debt Relief Order (DRO) is a debt solution that allows people with debts up to £50,000 and little income or valued assets, to be relieved from their repayments for 12 months. After this time, if they are still unable to repay, their debts are officially written off.</p>
        <p>A Debt Relief Order is designed for those living in England, Wales, or Northern Ireland who are unable to repay outstanding debts. It offers an opportunity to take a break from repayments, in the hope that their financial situation improves.</p>
        <button className="sp-qualify-btn" onClick={goToQuiz}>Do I Qualify? 🤔</button>
      </div>

      <div className="sp-adv-section">
        <div className="sp-adv-card advantages">
          <h3>DRO Advantages</h3>
          <ul className="sp-adv-list">
            {advantages.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
        <div className="sp-adv-card disadvantages">
          <h3>DRO Disadvantages</h3>
          <ul className="sp-adv-list">
            {disadvantages.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
      </div>

      <div className="sp-faq-section">
        <h2>DRO FAQs</h2>
        <div className="sp-faq-list">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
        <button className="sp-faq-bottom-btn" onClick={goToQuiz}>Get Debt Advice</button>
      </div>
    </div>
  )
}