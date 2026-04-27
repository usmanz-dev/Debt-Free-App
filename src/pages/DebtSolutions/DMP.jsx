import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/solutionpage.css'

const checks = [
  'One affordable monthly payment',
  'Potentially stop interest and charges*',
  'Reduce creditor contact',
  'Cancel anytime',
]

const advantages = [
  'Reduced monthly repayments',
  'Creditors can freeze interest and charges on your debts',
  "DMPs aren't recorded on a public register",
  'You should receive less contact from your creditors',
]

const disadvantages = [
  "You're still liable for your full debt",
  'Creditors can still take legal action',
  'There are no guarantees that the creditors will accept offers',
  "Your creditors aren't obligated to cease contact",
  'Can affect credit file',
]

const faqs = [
  {
    q: 'Can you get a mortgage with a DMP?',
    a: 'Having a DMP in place can make it difficult to get a mortgage. The reason for this is that payments towards your debts will show on your credit file, and this may be used against you in a mortgage application. Similarly, it can be difficult to remortgage your existing home on a DMP, though there are options depending on the length of your current plan. If your mortgage plan expires, your current lender will likely offer their standard variable rate. While not the best deal, it will allow you to continue making repayments. Renting, on the other hand, should be more straightforward. If you keep your rent payments up-to-date and pay off any rental debts that you may have, then a DMP should not affect your current tenancy.',
  },
  { q: 'Can a Debt Management Plan protect me against bailiffs?', a: 'A DMP is an informal arrangement and does not legally stop bailiff action. However, if creditors agree to the plan, they may suspend further action while you keep up with payments.' },
  { q: 'How long do Debt Management Plans last?', a: 'The length of a DMP depends on how much you owe and how much you can afford to repay each month. They can last anywhere from a few years to over ten years.' },
  { q: 'Can you pay off your Debt Management Plan early?', a: 'Yes. If your financial situation improves and you can afford to pay more, you can pay off your DMP early with no penalty.' },
  { q: 'How does a DMP impact your credit score?', a: 'A DMP will be noted on your credit file and can negatively affect your credit score for the duration of the plan and for some time afterwards.' },
  { q: 'Can you take out credit while on a Debt Management Plan?', a: 'It is generally not advisable to take out new credit while on a DMP as it could undermine your repayment plan and affect your credit file further.' },
  { q: 'Can you get car finance on a Debt Management Plan?', a: 'It may be difficult to obtain car finance while on a DMP as lenders will see your credit file and existing debt repayments. Some specialist lenders may consider your application.' },
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

export default function DMP() {
  const navigate = useNavigate()
  const goToQuiz = () => navigate('/quiz')

  return (
    <div>
      <div className="sp-hero">
        <div className="sp-hero-left">
          <h1>Debt Management Plan (DMP)</h1>
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
            <p>* Interest and charges are not guaranteed to be frozen, but we succeed in negotiating this over 95% of the time.</p>
          </div>
        </div>
        <div className="sp-hero-right">
          <img className="sp-hero-img-main" src="/images/hero-img.png" alt="DMP debt advice" />
        </div>
      </div>

      <div className="sp-what-section">
        <h2>What is a DMP?</h2>
        <p>If you're struggling to make your monthly payments but have a stable enough income to make consistent, smaller repayments over an extended period, then a Debt Management Plan (DMP) could be right for you. An informal agreement between you and your creditors, it helps you to repay your debts through affordable monthly instalments.</p>
        <p>The amount you pay back each month is worked out by reviewing your income and expenditure to calculate what you can realistically afford. Each of your creditors will then be offered your proposed reduced monthly repayment and if they accept it, your debts will be repaid at this rate over an extended period.</p>
        <p>A DMP can be a great option for anyone struggling to pay household bills, relying more on an overdraft or credit cards, or consistently getting into arrears.</p>
        <button className="sp-qualify-btn" onClick={goToQuiz}>Do I Qualify? 🤔</button>
      </div>

      <div className="sp-adv-section">
        <div className="sp-adv-card advantages">
          <h3>DMP Advantages</h3>
          <ul className="sp-adv-list">
            {advantages.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
        <div className="sp-adv-card disadvantages">
          <h3>DMP Disadvantages</h3>
          <ul className="sp-adv-list">
            {disadvantages.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
          <button className="sp-adv-btn" onClick={goToQuiz}>Get Debt Advice</button>
        </div>
      </div>

      <div className="sp-faq-section">
        <h2>DMP FAQs</h2>
        <div className="sp-faq-list">
          {faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
        <button className="sp-faq-bottom-btn" onClick={goToQuiz}>Get Debt Advice</button>
      </div>
    </div>
  )
}