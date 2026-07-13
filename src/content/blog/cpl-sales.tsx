export function CplSalesContent() {
  return (
    <>
      <p>
        Marketing teams love cost per lead. It is easy to compare across
        channels and it fits on a dashboard. After enough time in lead-gen ops,
        though, you see the problem: CPL tells you what you paid for a form fill
        or a phone click. It tells you very little about what that lead is
        worth once it hits a call center.
      </p>

      <p>
        I saw this clearly while working on Hipto&apos;s Click-to-Call platform:
        dynamic number allocation, UTM attribution, voice qualification across
        five verticals and five telco operators. Acquisition metrics and revenue
        metrics were telling different stories.
      </p>

      <h2>Two funnels</h2>

      <p>
        Marketing usually stops measuring at &ldquo;lead captured.&rdquo; Sales
        starts at &ldquo;human agent dials.&rdquo; In between you have IVR
        handoffs, AI qualification, duplicate submissions, wrong numbers, leads
        sent to a partner who closes that vertical poorly.
      </p>

      <p>
        CPL only covers the first part. A campaign with low CPL and a 4%
        contact-to-sale rate can lose money next to a higher-CPL campaign at 14%.
        I have watched teams pause profitable campaigns because the acquisition
        number looked bad on its own.
      </p>

      <h2>Attribution first</h2>

      <p>
        Before you judge lead quality, you need to know where each lead came
        from. Phone leads are trickier than web forms. Someone clicks an ad,
        lands on a Webflow page, taps call now. Which campaign gets credit?
      </p>

      <p>
        Our C2C stack ties each call to landing-page context: UTM parameters,
        vertical, operator brand, experiment profile. When the voice agent
        finishes, structured extraction attaches the same IDs to the qualified
        lead. Marketing can ask which ad drove calls that converted, not just
        which ad drove the most clicks.
      </p>

      <p>
        Without that link from click to call to qualification to CRM, analytics
        falls back to channel averages. That is how you over-invest in cheap
        traffic and under-invest in traffic that actually brings buyers.
      </p>

      <h2>Qualified is not the same as ready to close</h2>

      <p>
        AI qualification helped us: fewer wrong numbers, fewer incomplete
        profiles, less manual listening. But qualified is still a threshold, not
        a guarantee. A lead can pass every check and still fail because it went
        to the wrong call center, at the wrong time, or to a partner whose
        script does not fit the offer.
      </p>

      <p>
        That is part of why we started prototyping ML conversion scoring: estimate
        how likely a lead is to convert, route it to the partner most likely to
        close it. CPL optimization alone cannot do that. You need outcome data
        (connects, sales, revenue per partner when you have it) joined back to
        acquisition features.
      </p>

      <h2>Metrics worth tracking alongside CPL</h2>

      <p>
        When I talk to growth teams, I usually push for a few downstream numbers:
      </p>

      <ul>
        <li>Contact rate: did we reach a human after qualification?</li>
        <li>
          Qualified-to-connected rate: how much drops between AI handoff and
          agent pickup?
        </li>
        <li>
          Conversion by partner and vertical: same lead type, different close
          rates.
        </li>
        <li>
          Revenue or margin per lead when you have it. That tends to settle
          arguments quickly.
        </li>
      </ul>

      <p>
        None of this replaces CPL. It puts CPL in context. A campaign at €12 CPL
        with 11% conversion beats €7 CPL at 3% most of the time, even when the
        spreadsheet suggests otherwise.
      </p>

      <h2>From reporting to routing</h2>

      <p>
        If you can measure which partners convert which lead profiles, you can
        route on purpose instead of round-robin. That was the point of our
        CatBoost scoring prototype: temporal backtests, calibrated probabilities,
        evaluation weighted toward business outcomes rather than accuracy for its
        own sake.
      </p>

      <p>
        CPL will stay on dashboards. It is simple and fast. Just do not treat it
        as the only lens. Most of the interesting analytics work in lead gen
        happens after the lead exists, when you connect spend to the people who
        actually close deals.
      </p>
    </>
  );
}
