import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/solutionpage.css'

const checks = [
  'One affordable monthly payment',
  'Potentially write-off debt*',
  'Stop interest and charges',
  "We'll manage your creditors for you",
]

const advantages = [
  'An IVA may result in a substantial amount of your debt being written off',
  'One affordable monthly payment each month',
  'Protection from bailiffs and other legal action',
  'Creditors can only communicate with the IP',
  'No additional interest or fees will accumulate',
  'The IVA is a legally binding agreement, offering security',
  'Major assets, including your home, are generally protected',
]

const disadvantages = [
  "Entering an IVA will negatively affect your credit rating and it'll remain on your credit file for six years from the start date",
  "There's no assurance that creditors will agree to your proposed IVA plan",
  'An IVA only applies to unsecured debts, with secured debts still requiring payment',
  'Entry into an IVA is noted on the public Insolvency Register, disclosing your name',
  'Failing to comply with the terms permits creditors to recommence collection activities',
  'You must stick to a strict budget for everyday expenses throughout your IVA',
  "You might need to release home equity. If this isn't possible, your IVA period could be extended",
]

const faqs = [
  { q: 'How do I choose an IVA company?', a: 'Look for a licensed Insolvency Practitioner with good reviews and transparent fees. Always check they are authorised by a recognised body.' },
  { q: 'How do I know if an IVA company is good or bad?', a: 'Check their authorisation, read reviews, and ensure they explain all fees clearly before you commit.' },
  { q: 'Are there free IVA services?', a: 'Initial advice is always free. Fees are only charged once your IVA is approved and are included in your monthly payment.' },
  { q: 'How long does an IVA last?', a: 'A standard IVA usually lasts 5 to 6 years, after which any remaining eligible debt is written off.' },
  { q: 'How long does it take to set up an IVA?', a: 'Typically 4 to 6 weeks from initial consultation to approval by creditors.' },
  { q: 'How long does an IVA stay on your credit report?', a: 'An IVA stays on your credit report for 6 years from the start date.' },
  { q: 'Can an IVA get my debt written off?', a: 'Yes. Once you complete your IVA, any remaining unsecured debt included in the arrangement is written off.' },
  { q: 'Do I have to be employed to enter into an IVA?', a: 'No. You can enter an IVA whether employed, self-employed, or unemployed, as long as you have a regular income.' },
  { q: 'How will an IVA affect my credit rating?', a: 'An IVA will significantly impact your credit rating for 6 years, making it harder to obtain credit during this period.' },
  { q: 'Can I improve my credit score after an IVA?', a: 'Yes. After your IVA ends and it is removed from your credit file, you can begin rebuilding your credit score.' },
  { q: 'Will an IVA stop bailiffs?', a: 'Yes. Once an IVA is in place, creditors and bailiffs cannot contact you directly or take further action.' },
  { q: 'Can you pay off an IVA early?', a: 'Yes, in some cases you can make a lump sum offer to settle your IVA early.' },
  { q: 'Whats the difference between an IVA and a Debt Management Plan?', a: 'An IVA is a formal legal agreement that can write off debt, while a DMP is informal and requires you to pay back everything you owe.' },
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

export default function IVA() {
  const navigate = useNavigate()
  const goToQuiz = () => navigate('/quiz')

  return (
    <div>
      {/* HERO */}
      <div className="sp-hero">
        <div className="sp-hero-left">
          <h1>Individual Voluntary Arrangement (IVA)</h1>
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
            <p>*Once completed, any outstanding debt included in the IVA will be written-off.</p>
            <p>All benefits and risks of eligible debt solutions will be discussed on the assessment call</p>
          </div>
        </div>
        <div className="sp-hero-right">
          <img className="sp-hero-img-main" src="/images/hero-img.png" alt="IVA debt advice" />
        </div>
      </div>

      {/* WHAT IS IVA */}
      <div className="sp-what-section">
        <h2>What is an IVA?</h2>
        <p>An Individual Voluntary Arrangement (IVA) is an agreement reached between you and your creditors to repay the money you owe over a set period. It's a legally binding arrangement designed to make your debt more manageable, offering you a clear path towards becoming debt-free.</p>
        <p>For personalised IVA debt advice, our experts can guide you through the process and help you understand if an IVA is the right solution for your financial situation.</p>
        <p>Once you enter an IVA, your creditors aren't permitted to contact you directly. Instead, all contact goes through your Insolvency Practitioner (IP).</p>
        <p>After making repayments for a set period (usually five years), any remaining debt is officially written off.</p>
        <button className="sp-qualify-btn" onClick={goToQuiz}>Do I Qualify? 🤔</button>
      </div>

      {/* ADVANTAGES & DISADVANTAGES */}
      <div className="sp-adv-section">
        <div className="sp-adv-card advantages">
          <h3>IVA Advantages</h3>
          <ul className="sp-adv-list">
            {advantages.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
        <div className="sp-adv-card disadvantages">
          <h3>IVA Disadvantages</h3>
          <ul className="sp-adv-list">
            {disadvantages.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
      </div>

      {/* FAQ */}
      <div className="sp-faq-section">
        <h2>IVA FAQs</h2>
        <div className="sp-faq-list">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
        <button className="sp-faq-bottom-btn" onClick={goToQuiz}>Get Debt Advice</button>
      </div>
    </div>
  )
}