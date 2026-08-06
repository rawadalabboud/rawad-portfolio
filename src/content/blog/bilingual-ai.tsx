export function BilingualAiContent() {
  return (
    <>
      <p>
        Bilingual AI products fail in quiet ways. The UI is in French, the model
        answers in English, the voice agent mishears a number because the prompt
        assumed Parisian phrasing, or the RAG corpus mixes languages and
        retrieval returns the right fact in the wrong one. Living in Paris and
        working across EN/FR flows, I have seen each of these in production-shaped
        systems, not just demos.
      </p>

      <p>
        Arabic is my native language. English and French are fully bilingual for
        me. Spanish is still beginner territory. That mix shapes how I think
        about multilingual products: fluency is not binary, and your stack should
        not pretend it is.
      </p>

      <h2>Pick a language policy before you pick a model</h2>

      <p>
        Teams often ask &ldquo;which model is best in French?&rdquo; before
        deciding what should happen when a user code-switches mid-sentence. Policy
        first: mirror the user, stay in French unless asked, always respond in the
        language of the form submission, escalate to human if confidence drops.
        Without that, you tune prompts forever.
      </p>

      <p>
        Voice makes this sharper. STT language hints, TTS voice selection, and
        LLM instructions must agree. A French caller with an English product name
        in the transcript is normal, not an edge case. Your agent should handle
        mixed tokens without resetting the conversation.
      </p>

      <h2>RAG is a language problem, not just an embedding problem</h2>

      <p>
        Ingestion for a French banking assistant taught me that chunk boundaries
        differ across languages. Acronyms, polite formulas, and regulatory
        phrasing do not split cleanly with English-default chunkers. Metadata
        matters: store language per chunk, filter at query time, and avoid
        merging EN marketing pages with FR policy PDFs in one index unless you
        mean to.
      </p>

      <p>
        Evaluation needs native phrasing. A retrieval hit that is technically
        correct but sounds translated fails user trust. We built eval cases in
        French with colloquial variants, not just textbook questions. Accuracy
        without naturalness still loses in support chat.
      </p>

      <h2>Do not outsource fluency to translation at the end</h2>

      <p>
        The lazy pattern is English core plus machine translation on output.
        Latency doubles, nuance dies, and compliance language drifts. Better:
        single-language paths end to end where possible, with shared tool layers
        underneath. The CRM update logic stays language-agnostic; the spoken
        prompts and retrieval filters are language-aware.
      </p>

      <p>
        For Spanish beginner coverage, I am honest about limits: ship narrow
        intents with tight scripts, do not open-domain chat. Partial language
        support with clear boundaries beats fluent-sounding hallucination.
      </p>

      <h2>Humans in the loop for edge cases</h2>

      <p>
        Bilingual ops teams catch failures models miss: cultural context, tone,
        regulatory wording. Design handoff paths when language confidence is low
        or when the user explicitly asks for another language. Agents should not
        argue about which language to use.
      </p>

      <h2>Practical checklist</h2>

      <ol>
        <li>Write the language policy in one page. Share it with eng and ops.</li>
        <li>Tag chunks and transcripts with language metadata.</li>
        <li>Eval in the languages you claim to support, including messy input.</li>
        <li>Align STT, LLM, and TTS settings per locale.</li>
        <li>Scope down languages you do not truly cover yet.</li>
      </ol>

      <p>
        Multilingual AI is a product decision before it is a model decision.
        The teams that do it well treat language as part of system design, not
        a flag you flip after launch.
      </p>
    </>
  );
}
