export function VoiceAiLeadsContent() {
  return (
    <>
      <p>
        Voice agent demos usually sound fine for about ninety seconds. A synthetic
        voice asks your name, confirms your address, says someone will call you
        back. Then you point it at real traffic: fiber offers, health insurance,
        pet coverage, five telco operators, six call-center partners. That is
        when the gaps show up.
      </p>

      <p>
        At Hipto I spent most of a year on this: turning Click-to-Call voice
        qualification from a slide-deck idea into something running on NestJS
        and Retell AI. By H1 2026 we were past 4,400 AI-qualified calls on
        2,655 qualified leads. You learn a lot more at that volume than in a
        sandbox.
      </p>

      <h2>Production is routing, not just prompts</h2>

      <p>
        A landing-page call is never just a call. It has UTM parameters, a
        vertical, an operator brand (Orange, Sosh, SFR, Free, Bouygues), and a
        partner who expects the lead in a specific format. The agent has to sound
        natural and still output structured data that downstream systems can use.
      </p>

      <p>
        We ended up with seven Retell pipelines (events, transfer, reach,
        relance, receptionist, flux-froid, transcript) across fifteen NestJS
        modules and sixty-plus HTTP endpoints. Each one handles part of the
        lifecycle: starting the call, transfers, retrying unreachable numbers,
        extracting fields from transcripts, deduplicating webhook events in
        Upstash Redis.
      </p>

      <p>
        The setup looks heavy until you see what happens at volume. Retell
        fires webhooks on call start, end, transfer, and analysis completion.
        Without deduplication and idempotent handlers, you inject duplicate leads
        into call-center CRMs. Without separate pipelines, a prompt change for
        one vertical breaks another. We needed that modularity to run thirteen
        experiment profiles without freezing the whole system every time
        marketing wanted a new test.
      </p>

      <h2>Prompts that do not sound like old IVR</h2>

      <p>
        The hard part is keeping a conversational tone while following business
        rules. Fiber needs address validation. Health insurance needs consent
        language. Pet insurance needs species and breed without turning the call
        into a twenty-question form.
      </p>

      <p>
        A few things that helped:
      </p>

      <ul>
        <li>
          Dynamic variables per call: campaign name, offer details, partner
          routing hints injected at call start so the agent is not reading a
          generic script.
        </li>
        <li>
          Validation that sounds human. Instead of &ldquo;invalid input, try
          again,&rdquo; the agent confirms what it heard and offers a way to
          correct it before moving on.
        </li>
        <li>
          Separate prompt templates per vertical. Same infrastructure, different
          system prompts. One mega-prompt across five verticals was the fastest
          way to get regressions.
        </li>
      </ul>

      <p>
        People hang up when the agent feels robotic or asks for info they already
        gave on the landing page. Passing attribution data into the agent
        context cut down repeat questions and helped completion rates.
      </p>

      <h2>After the call ends</h2>

      <p>
        Qualification does not stop when the caller hangs up. We run transcripts
        through OpenAI structured outputs to pull out eligibility flags, contact
        preferences, objection tags, in a schema call centers can ingest. Audio
        is useful for QA. Ops teams run on JSON.
      </p>

      <p>
        That step is what turns an AI phone agent into a lead in the CRM with
        the right campaign ID. Skip it and someone has to re-listen to calls
        to fill spreadsheets. At a few thousand calls a month, that does not
        work.
      </p>

      <h2>A few things I would do differently</h2>

      <ol>
        <li>
          Put webhook infrastructure in place early. Retell is solid, but your
          handlers need retries, dedup keys, and logging before you go live.
        </li>
        <li>
          Keep prompts separate from plumbing. Prompt work should not require
          redeploying routing logic.
        </li>
        <li>
          Track completion, not just call volume. A thousand calls that drop at
          minute one are worse than three hundred qualified handoffs.
        </li>
        <li>
          Expect partner variance. Six call centers means six slightly different
          lead formats. Build adapters instead of one-off fixes.
        </li>
      </ol>

      <p>
        Voice AI in lead gen is less about sounding human and more about
        closing the loop: marketing click, conversational qualification,
        structured data, human closer with the right context. When that loop
        works, the tech fades into the background. When it does not, you have an
        expensive chatbot with a phone number.
      </p>
    </>
  );
}
