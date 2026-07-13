export function RagProductionContent() {
  return (
    <>
      <p>
        RAG demos are easy to like. Ingest a PDF, embed some chunks, add a chat
        UI, and the assistant answers questions fluently in a meeting room. Put
        the same stack on a live insurance site with six product lines, CMS
        pages that change every week, and 150,000 insured clients asking about
        coverage, and the gaps show up fast.
      </p>

      <p>
        I built that production setup for Groupe Hueber Assurances: a Webflow RAG
        assistant on their public site, with hybrid retrieval, LLM reranking,
        Redis for sessions, and SSE streaming. We ran a 40-question golden set
        before go-live. Most of the work was not glamorous.
      </p>

      <h2>Your corpus keeps changing</h2>

      <p>
        Treating ingestion as a one-time job is the first mistake. Marketing
        updates Webflow pages. Product adds FAQs. Legal tweaks guarantee
        wording. If the vector index is stale, the model cites old policy
        language. For insurance, that is about as bad as it gets.
      </p>

      <p>
        We built a pipeline that pulls Webflow pages and CMS collections,
        chunks with structure-aware splitting (headings, product sections,
        lists), and re-embeds on a schedule. Not exciting. Required.
      </p>

      <h2>Embeddings alone miss things</h2>

      <p>
        Cosine similarity breaks on exact terminology. Users ask for product
        names, article numbers, French regulatory phrases that need a lexical
        match, not just a semantic neighbor. Hybrid retrieval (BM25 plus
        embedding search) picked up chunks that vector-only search missed,
        especially rare terms and proper nouns.
      </p>

      <p>
        Hybrid top-k still had near-duplicates and half-relevant sections. We
        added LLM reranking to reorder candidates before building context. More
        latency and cost, but fewer answers stitched together from two
        unrelated paragraphs.
      </p>

      <h2>Sessions and streaming matter to users</h2>

      <p>
        Users do not feel retrieval quality. They feel wait time and whether the
        answer reads cleanly. We stored conversation state in Upstash Redis so
        returning visitors kept context in a session, and streamed tokens over
        SSE so the widget showed progress instead of sitting blank for ten
        seconds.
      </p>

      <p>
        The chat widget had to match Webflow styling, load without blocking the
        page, and handle slow API responses without breaking. That frontend work
        is part of shipping RAG, not a nice-to-have.
      </p>

      <h2>Test before launch</h2>

      <p>
        The golden dataset was probably the best call on the project. Forty
        questions on product coverage, eligibility edge cases, contact routing,
        and cases where the right answer is &ldquo;I don&apos;t know.&rdquo; Each
        one had expected source pages and acceptable answer patterns. We ran it
        on every retrieval change.
      </p>

      <p>
        Demo RAG gets judged by feel. Production RAG needs regression tests like
        any API. Change chunk size or swap embedding models and you want to
        know if question 23 broke before a user hits it.
      </p>

      <h2>What broke in prod</h2>

      <ul>
        <li>
          Out-of-scope questions. People ask about claims that should go through
          support, not chat. Better to escalate than guess.
        </li>
        <li>
          Chunk boundaries. An answer split across two chunks might mean neither
          ranks high enough on its own. Overlap and heading-aware splitting
          help.
        </li>
        <li>
          Mixed language. French queries against pages with English product names
          in them. Normalization matters.
        </li>
        <li>
          Cost at scale. Reranking every query is fine at a few hundred users a
          day. At much higher volume you cache frequent questions and tighten
          top-k.
        </li>
      </ul>

      <h2>Stack</h2>

      <p>
        Next.js and React for the widget and API routes. OpenAI for embeddings
        and chat. BM25 in a lightweight in-memory index synced with the vector
        store. Upstash Redis for sessions. Webflow API for ingestion. Nothing
        unusual. The reliability came from pipelines and evaluation, not from
        picking a trendy tool.
      </p>

      <p>
        Past the demo stage, RAG is mostly data engineering with an LLM on top.
        Fresh ingestion, hybrid retrieval, reranking, streaming, session state,
        and a golden set you actually run before deploy. That is what separates
        a staging chatbot from something an insurer puts in front of customers.
      </p>
    </>
  );
}
