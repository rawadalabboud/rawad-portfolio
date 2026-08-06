export function McpAgentsContent() {
  return (
    <>
      <p>
        Most agent demos stop at chat. Ask a question, get an answer, applause.
        Production agents need to read CRM records, trigger workflows, fetch live
        pricing, and write back outcomes without a human copying JSON between
        tabs. That gap is where MCP earned a permanent slot in my stack.
      </p>

      <p>
        Model Context Protocol is not magic. It is a standard way to expose tools
        and data sources so an LLM client can discover them, call them, and stay
        inside guardrails you define. For voice and text agents at Hipto, that
        meant fewer one-off integrations and more reusable connectors ops could
        reason about.
      </p>

      <h2>Tools should look boring on purpose</h2>

      <p>
        The first mistake is treating every integration as a custom function
        with its own JSON schema and error format. Agents get brittle fast. MCP
        pushes you toward small, explicit tools: fetch lead by ID, update
        qualification field, search knowledge base chunk, schedule callback.
        Each tool does one thing and returns structured output the model can
        parse reliably.
      </p>

      <p>
        Boring tools are easier to test. You can unit test the server, mock the
        CRM, and replay transcripts without calling OpenAI at all. That matters
        when you are iterating on voice flows where every failed tool call is a
        dropped call.
      </p>

      <h2>Auth and boundaries live outside the prompt</h2>

      <p>
        Another trap is stuffing secrets or policy into system prompts.
        &ldquo;Never delete records&rdquo; is not a security model. MCP servers
        run with their own credentials and scopes. The model only sees what you
        expose. If a tool should not run for a given tenant or role, enforce
        that in the server, not in natural language.
      </p>

      <p>
        For lead-gen stacks, that separation is non-negotiable. Partners have
        different data access. Voice agents run in regulated verticals. You
        want audit logs on tool calls the same way you want them on API
        endpoints.
      </p>

      <h2>Voice adds latency pressure</h2>

      <p>
        Text chat tolerates a slow tool chain. Voice does not. A two-second
        pause after &ldquo;let me check that&rdquo; feels like failure. MCP
        does not fix latency by itself, but standardizing tools lets you
        optimize once: parallel fetches where safe, aggressive caching on
        read-only lookups, pre-warming context at call start when the CRM ID is
        already known.
      </p>

      <p>
        We also learned to keep tool descriptions short. Long schemas burn
        tokens and confuse smaller models on the edge of a voice pipeline.
        Describe inputs in plain language, keep required fields minimal, validate
        hard on the server.
      </p>

      <h2>Observability is the real deliverable</h2>

      <p>
        Demos optimize for clever answers. Production optimizes for traces: which
        tool fired, with what args, what came back, how long it took, whether the
        agent recovered from a 500. MCP fits neatly into that story because tool
        calls are discrete events you can log and alert on.
      </p>

      <p>
        When a voice agent mis-qualifies a lead, the fix is rarely &ldquo;tweak
        the prompt.&rdquo; More often it is a bad retrieval result, a stale CRM
        field, or a tool that returned empty and the model guessed. Structured
        logs make that visible.
      </p>

      <h2>When MCP is not the answer</h2>

      <p>
        Not every integration needs a protocol. A single webhook from Retell to
        your API might be enough for v1. MCP pays off when you have multiple
        agents, multiple data sources, and a team that will maintain connectors
        over months. If you are shipping one static demo, YAGNI applies.
      </p>

      <h2>What I would repeat</h2>

      <ol>
        <li>Start with three to five tools, not thirty.</li>
        <li>Enforce auth and tenancy in the server, not the prompt.</li>
        <li>Design for voice latency: cache reads, parallelize safely.</li>
        <li>Log every tool call with timing and redacted args.</li>
        <li>Keep a non-agent fallback path when tools fail.</li>
      </ol>

      <p>
        Agents that ship are mostly plumbing. MCP does not replace product
        judgment, but it gives you a sane shape for the plumbing so you can spend
        brain cycles on qualification logic instead of yet another bespoke
        integration.
      </p>
    </>
  );
}
