export function LeadRoutingContent() {
  return (
    <>
      <p>
        Round-robin routing is the default because it feels fair. It also ignores
        performance. Two leads arrive in the same minute, same vertical, similar
        profile. Partner X closes fiber at 12%. Partner Y closes at 19%.
        Alternating between them treats them as equal when they are not.
      </p>

      <p>
        At Hipto I prototyped an ML conversion-scoring module for smarter
        routing: estimate how likely a lead is to convert, match it to the
        partner with the best historical fit, backtest on past data before
        changing production flows. It became the starting point for Hipto&apos;s
        Hopti integration.
      </p>

      <h2>Define the label first</h2>

      <p>
        &ldquo;Conversion&rdquo; sounds clear until you sit with ops. Connected
        call? Sale? Sale within 72 hours? Revenue above some threshold? Each
        definition changes the model and what it is worth to the business. We
        picked a label tied to downstream CRM outcomes, not proxy clicks, so
        training data matched what sales actually cared about.
      </p>

      <p>
        Features came from acquisition context: vertical, operator, UTM source,
        time of day, experiment profile, qualification fields from voice
        transcripts. The model never saw future information. That sounds
        obvious, but it is easy to leak future outcomes through sloppy timestamp
        joins if you are not careful.
      </p>

      <h2>CatBoost and calibration</h2>

      <p>
        We used CatBoost for tabular data with mixed categorical and numeric
        features. Training was fast enough to iterate weekly as new partner data
        came in, without the feature engineering spiral you often get with
        neural nets on this kind of data.
      </p>

      <p>
        Raw scores are not enough for routing. You want calibrated probabilities:
        when the model says 0.18, roughly eighteen percent of those leads
        should convert. Isotonic calibration on held-out data let us compare
        leads on one scale and set thresholds partners could reason about.
      </p>

      <p>
        Uncalibrated models often rank fine but mislead when you turn scores
        into expected revenue. Teams skip calibration because accuracy looks
        good in a notebook. Routing needs numbers you can trust.
      </p>

      <h2>Backtest in time, not at random</h2>

      <p>
        Random train-test splits lie here. Partners change scripts. Seasonality
        shifts. A model trained on January and tested on shuffled February rows
        can look great until you deploy in March and it falls apart.
      </p>

      <p>
        We used temporal backtests: train on a rolling window, predict the next
        period, measure business metrics on that forward slice, slide the
        window, repeat. That caught leakage early (features that smuggled in
        future outcomes through bad joins) and gave more honest uplift
        estimates.
      </p>

      <p>
        The useful question is not just what is the AUC. It is: if we had routed
        with this model last quarter, how many more sales would we have gotten,
        and where?
      </p>

      <h2>Something ops can actually open</h2>

      <p>
        A model in Jupyter does not help in a call-center ops meeting. We wrapped
        inference in FastAPI (one endpoint, versioned artifact, sub-100ms
        latency) and built a Streamlit dashboard for score distributions by
        partner, calibration plots, feature importance, predicted buckets vs
        actual outcomes.
      </p>

      <p>
        The dashboard was how we got buy-in. Ops teams do not adopt black boxes.
        They adopt tools that explain why one lead went to Partner Y instead of
        Partner X.
      </p>

      <h2>Scoring is half of it</h2>

      <p>
        The other half is policy: given scores and partner capacity, who gets the
        lead? Pure argmax routing can starve smaller partners and hide
        regressions. We simulated score-weighted allocation, exploration slots
        for new partners, and capacity limits inside the backtest harness before
        touching live traffic.
      </p>

      <p>
        Model outputs are signals. Business rules are guardrails. That boundary
        was exactly where Hopti plugged in.
      </p>

      <h2>What I would repeat next time</h2>

      <ol>
        <li>Agree on the conversion label with sales before writing SQL.</li>
        <li>Calibrate probabilities. Ranking alone is not enough for allocation.</li>
        <li>Backtest temporally and report uplift in sales, not just AUC.</li>
        <li>Ship a thin API and a visual diagnostic tool early. Adoption is a product problem.</li>
        <li>Keep a round-robin fallback. Models fail, partners go offline, leads still need a home.</li>
      </ol>

      <p>
        CPL tells you what you bought. Conversion modeling tells you what to do
        with the lead once it arrives. ML does not replace call-center judgment.
        It can stop you from sending good leads to the wrong desk.
      </p>
    </>
  );
}
