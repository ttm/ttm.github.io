---
layout: article
title: "AI Needs to Learn to Subtract"
date: 2026-10-14 11:45:00 +0200
author: Renato Fabbri
description: "Generative AI is exceptional at adding words, code, and procedures. Its next frontier may be verified simplification: knowing what to remove without losing what matters."
excerpt: "AI makes it cheap to produce more. Can we make it equally good at discovering what is unnecessary? Evidence, theory, counterexamples, and a research agenda for subtractive intelligence."
tags:
  - artificial-intelligence
  - complexity
  - simplicity
  - software-engineering
  - science
  - LLM
  - research
comments: true
published: true
---

*Generation is becoming cheap. The harder form of intelligence may be knowing what can disappear.*

## Abstract

Artificial intelligence is exceptionally good at producing more: explanations, code, documentation, options, analyses, procedures, and entire projects. Yet many users experience the opposite of simplification. A short question becomes a long reply. A software change produces additional layers of code. A report is expanded instead of clarified. Automating a procedure can perpetuate one that should have been eliminated.

Is this an intrinsic limitation of AI, a property of the tasks we assign, or an artifact of how we train and evaluate it?

I argue for treating **subtractive intelligence** as a first-class capability: recognizing unnecessary complexity and safely removing, merging, generalizing, or avoiding it while preserving the properties that matter. This is not the same as brevity, compression, code golf, or omitting inconvenient detail.

Research on human problem-solving, language-model verbosity, AI evaluation, and coding agents supports parts of the concern. Equally important, systems such as AlphaEvolve show that AI can discover genuine simplifications when it is given clear objectives and reliable verification. The appropriate conclusion is therefore not that AI cannot subtract, but that the present ecosystem may reward generation much more directly than simplification.

The proposal is both practical and falsifiable: build cross-domain evaluations that reward **minimum sufficient complexity**, subject to preservation of correctness, usefulness, safety, and reproducibility.

## 1. An economy of nearly free generation

Ask ChatGPT or Claude a straightforward question and you might receive several paragraphs, a numbered list, caveats, a summary, and an invitation to continue. Some of that will be helpful. Some may consume more attention than it returns.

Ask a coding agent to improve a project and it may create another helper, adapter, configuration file, abstraction, test fixture, and documentation page. Each addition can be locally reasonable. The resulting system may nevertheless become harder to understand.

Ask AI to improve a scientific manuscript and it can generate additional literature review, methodological exposition, robustness checks, caveats, figures, and supporting information. These additions can be essential for credible science. But a manuscript can also become longer without its central contribution becoming clearer.

The pattern extends beyond text and code:

- A company can ask AI to automate an approval process without questioning whether that approval is needed.
- A designer can ask for more features instead of identifying which existing features obstruct the user.
- A teacher can request additional explanations when one well-chosen analogy would achieve better understanding.
- A researcher can generate more hypotheses when the real advance would be one discriminating experiment.
- A meeting can acquire AI-generated notes, a summary of those notes, a dashboard about their action items, and follow-up reports. Perhaps the meeting itself was unnecessary.

We are lowering the cost of *producing* artifacts much faster than the cost of *understanding, validating, maintaining, and acting on* them.

Herbert Simon anticipated the underlying scarcity in his 1971 essay *Designing Organizations for an Information-Rich World*: abundant information consumes scarce attention. Generative AI sharpens this asymmetry. Another thousand words may be cheap to produce; they are not free for the person asked to read and verify them.

This suggests a change in the unit of productivity. Rather than measuring only artifacts generated per hour, we should measure **useful outcomes per unit of total human and machine effort**, including downstream reading, maintenance, decision-making, and verification.

The best output may be the one that prevents three unnecessary outputs from ever being created.

## 2. Shorter is not necessarily simpler

Before treating subtraction as an AI capability, we need to distinguish several operations that are often conflated.

| Operation | What it reduces or changes | What can go wrong |
|:--|:--|:--|
| **Brevity** | Length of an answer | Missing context, qualifications, or evidence |
| **Compression** | Size of a representation | Opaque encodings, worse human comprehension |
| **Deduplication** | Repeated information or components | Removing repetition that served a useful purpose |
| **Abstraction** | Complexity visible at an interface | Merely moving complexity behind that interface |
| **Simplification** | Complexity relevant to the task or user | Oversimplifying what was genuinely necessary |
| **Subtraction** | Elements, assumptions, rules, steps, or dependencies | Destroying important invariants |

Consider minified JavaScript. It uses fewer characters but is generally less comprehensible. The file is smaller, not necessarily simpler for a maintainer.

Or consider a scientific article. Removing the limitations section certainly shortens the text; it can make the scientific communication worse. Moving detailed protocols to a documented repository, however, can shorten the main exposition *without losing reproducibility*, provided the materials remain complete and accessible.

A useful abstraction may initially add lines of code but reduce duplication across dozens of downstream applications. Local size grows while system-level complexity falls.

And some apparently redundant things should remain redundant. An independent safety check can provide defense in depth. A second example can enable a learner to transfer an idea to a new context. A second citation may supply independent corroboration rather than repetition.

The right target is therefore not the shortest possible artifact.

> **The target is minimum sufficient complexity: the least complexity that preserves the properties required for the artifact to serve its purpose.**

This entails an uncomfortable but important consequence: sometimes the best simplification is to *add* something first, such as a unifying abstraction, a missing test, or an explanatory diagram, if that permits a larger and safer reduction elsewhere.

Subtractive intelligence is not a preference for deletion. It is the capacity to identify unnecessary structure.

## 3. Occam's razor and the mathematics of sufficiency

Occam's razor offers a familiar starting point. When competing explanations account equally well for the relevant evidence, prefer the one with fewer unnecessary assumptions. But the qualification matters: simplicity does not rescue an explanation that fails to fit the data.

The [Stanford Encyclopedia of Philosophy's discussion of simplicity](https://plato.stanford.edu/entries/simplicity/) distinguishes multiple forms of parsimony and warns against treating simplicity as one universally defined quantity.

A more formal cousin is the Minimum Description Length (MDL) principle, developed by Jorma Rissanen and discussed in depth by [Peter Grünwald](https://arxiv.org/abs/math/0406077). In an elementary two-part formulation, we prefer a model that balances its description length against the cost of encoding the data that remain unexplained:

$$
M^* = \arg\min_M \left[L(M) + L(D \mid M)\right].
$$

Here, \(L(M)\) represents the complexity of describing the model, and \(L(D \mid M)\) represents the residual information needed to describe the data given that model.

A model that memorizes everything can fit perfectly and still be needlessly complex. A model that says almost nothing can be very short and fail to explain the evidence. MDL formalizes why neither extreme is satisfactory.

For an AI simplification task, a related *proposed* optimization is:

$$
\min_{x' \in \mathcal{X}} C(x')
\quad\text{subject to}\quad
P_j(x') \geq \tau_j \ \text{for every required property }j.
$$

In this formulation:

- \(x\) is an existing artifact or process;
- \(x'\) is a candidate replacement;
- \(C\) is a domain-appropriate measure of complexity;
- \(P_j\) tests whether a required property survives;
- \(\tau_j\) is the acceptable threshold for that property.

For code, the protected properties might include functional behavior, API compatibility, security, performance, and maintainability. For scientific writing, they might include all substantive claims, quantitative results, uncertainty, limitations, evidence traceability, and methods needed for reproduction. For organizational workflows, they might include legal compliance, service quality, and safety.

This formulation is not a universal theory of complexity. In particular, the difficulty lies in choosing and verifying the properties and in deciding *whose* complexity is being minimized.

A shorter answer may transfer complexity to the reader. A streamlined interface may shift it to its maintainers. A cheaper process may increase risks borne by customers. A valid simplification needs a declared boundary of evaluation.

## 4. Why current AI so often adds

There is no single established explanation. Several mechanisms are plausible, and the available evidence supports them unequally.

### 4.1 We reward visible production

A model that delivers a new file or a full explanation has plainly responded to the task. A model that says an additional file is unnecessary has a harder job: it must convince us that something *not produced* would not improve the outcome.

This is an asymmetry in observability. Additions leave artifacts to inspect. Avoided complexity is counterfactual and therefore harder to count.

The incentive can extend to users, benchmarks, product interfaces, and organizations. If output volume becomes a proxy for diligence, systems may learn to demonstrate helpfulness by producing more.

### 4.2 Preference evaluations can favor length

Research has explicitly identified *verbosity bias* in language-model-based evaluation. [Saito and colleagues](https://arxiv.org/abs/2310.10076) examined preferences for outputs differing in verbosity, while [Dubois and colleagues' Length-Controlled AlpacaEval](https://arxiv.org/abs/2404.04475) attempts to separate preference gains attributable to quality from those attributable to length.

The picture is not simply that longer answers are unfairly preferred. [Hu and colleagues](https://arxiv.org/abs/2407.01085) emphasize that extra length can also contain genuinely useful information. Treating every additional token as a defect would introduce a different bias.

The correct question is whether the *marginal information value* justifies the added length and reading burden.

### 4.3 Uncertainty may encourage elaboration

In *Demystify Verbosity Compensation Behavior of Large Language Models*, [Zhang and colleagues](https://aclanthology.org/2025.uncertainlp-main.14/) report a pattern they call *verbosity compensation*: across the settings they studied, models can produce longer answers when their uncertainty is greater.

This provides a possible mechanism for a familiar observation. A model that lacks a crisp answer may elaborate rather than directly express the uncertainty.

That interpretation should not be generalized to every model and prompt. But it makes a useful prediction: if uncertainty helps drive excess verbosity, training models to express uncertainty precisely may also improve their conciseness.

### 4.4 The invisible training examples

A training corpus contains many completed documents and programs. It usually does not record all the options an expert considered and rejected: the paragraphs deliberately omitted, the needless class never created, or the redundant meeting quietly canceled.

It is therefore plausible that models learn to imitate *finished additions* more directly than the tacit editorial judgment behind them. This is a hypothesis about data and supervision, not a proven causal explanation.

Next-token prediction, by itself, also does not directly optimize an entire artifact for minimum sufficient complexity. Post-training can change this behavior, but only if the desired behavior is specified and rewarded.

### 4.5 Deletion requires proof

Addition and subtraction often carry unequal verification burdens.

A local feature can sometimes be added and tested at the point of use. Deleting a subsystem can require understanding its callers, undocumented behaviors, historical requirements, and interactions with other parts of the system.

Likewise, adding a qualification to a scientific paper is generally straightforward. Removing one requires confidence that the argument will remain accurately bounded.

To create something useful, we often need to know what it should do. To remove something safely, we need to know **everything important it was doing, including things not immediately visible**.

This is where simplification becomes a reasoning problem rather than an editing preference.

## 5. Evidence from people, conversations, and code

### Humans also overlook subtraction

In a series of experiments published in *Nature*, [Adams, Converse, Hales, and Klotz (2021)](https://doi.org/10.1038/s41586-021-03380-y) reported that participants often overlooked beneficial subtractive changes while trying to improve objects or situations.

A [2025 preregistered replication and extension](https://doi.org/10.1002/jocb.1535) again found many more additive than subtractive suggestions and showed that explicit cues could increase consideration of subtraction.

The result needs qualification. [Fischer and colleagues (2021)](https://doi.org/10.3389/fpsyg.2021.720616) questioned whether wording and experimental framing themselves favored additive solutions. It is premature to posit a universal, context-free human addition bias.

More importantly, humans' behavior cannot by itself explain models' behavior. It offers an analogy and a possible experimental design, not a proof that AI has inherited the same bias.

### Chatbots vary widely in unnecessary length

The 2026 preprint [*Do Chatbot LLMs Talk Too Much? The YapBench Benchmark*](https://arxiv.org/abs/2601.00624) focuses on prompts for which a short answer is sufficient. In its initial report, the authors evaluate 76 models on 304 prompts and find substantial differences in excess output length.

Notably, verbosity is not a simple monotonic function of model capability or recency. More capable or newer systems are not uniformly more concise.

That observation matters: there is no obvious reason to assume that scaling intelligence automatically resolves the problem. Conciseness may require separate optimization.

### Coding agents can accumulate structural debt

The 2026 preprint [*SlopCodeBench*](https://arxiv.org/abs/2603.24755) examines repeated changes to software projects rather than isolated programming tasks. In its May revision, the benchmark comprises 36 problems and 196 checkpoints. Its authors report that code verbosity increased in 75.5% of evaluated trajectories and structural erosion increased in 77%.

Those are results under a particular benchmark and its complexity metrics, not population-wide estimates for every coding agent. Nevertheless, they show that functional incremental progress and architectural quality can diverge.

The [*CodeTaste* benchmark](https://arxiv.org/abs/2603.04177) adds another distinction: it is easier for agents to carry out a specified refactoring than to independently discover which refactoring is worthwhile.

That points to a possible dividing line between current optimization and more general subtractive competence:

**Executing a requested simplification is not the same as recognizing that a simplification is needed.**

## 6. The decisive counterexample: AI can subtract

An intellectually serious argument has to acknowledge the strongest counterevidence.

[AlphaEvolve](https://arxiv.org/abs/2506.13131), developed at Google DeepMind, combines language-model-generated programs with evaluation and evolutionary search. Its reported results include algorithmic improvements, a more efficient scheduling heuristic, and a hardware-design optimization that removed unnecessary bits from an arithmetic circuit.

According to [Google DeepMind's account](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/), the scheduling improvement recovered an average 0.7% of Google's worldwide compute resources, while the verified hardware optimization was incorporated into a TPU design.

These results show that AI-assisted systems can discover reductions, not merely execute human-provided deletion instructions. They also show why an evaluator matters: a candidate transformation can be selected for measured performance and verified against explicit requirements.

Another 2026 preprint, [*Can Agents Design Libraries for Agents?*](https://arxiv.org/abs/2609.36730), investigates whether coding agents can create useful abstractions for other agents. It reports successful reproduction of several library designs and improvements when the design is tested through downstream use, alongside persistent problems with redundant reimplementation.

The right synthesis is not "AI cannot simplify."

It is more precise:

> **AI can discover simplifications in some domains, particularly when the goal is explicit and preservation is measurable. What remains uncertain is how reliably it can identify unnecessary complexity on its own, across domains, under weak or ambiguous specifications.**

That is a more promising research problem than making every chatbot answer shorter.

## 7. What counts as genuine subtractive intelligence?

I propose distinguishing at least four levels:

1. **Concise expression:** communicate the same answer with less unnecessary text.
2. **Local subtraction:** identify and remove redundant sentences, files, steps, dependencies, or features while preserving requirements.
3. **Structural simplification:** discover a representation or architecture that makes multiple existing elements unnecessary.
4. **Objective-level simplification:** recognize that a task, process, feature, report, or even an optimization objective should not exist in its current form.

The fourth level is especially significant.

An agent asked to automate a weekly report might produce an excellent reporting pipeline. A more valuable agent might discover that nobody makes decisions based on the report and recommend eliminating it. But that conclusion requires evidence about the organization, its incentives, and its actual goals.

Similarly, a researcher asked to run ten analyses might identify a single experiment that discriminates among the hypotheses. A programmer asked for a new abstraction might point out that the existing abstraction already serves the requirement. An assistant asked for a long explanatory response might recognize that the user needs one sentence.

In each case, the most valuable output is partly counterfactual: time, work, confusion, and maintenance that never occur.

This suggests that subtractive intelligence should be evaluated at the level of *outcomes*, not just outputs.

## 8. A research agenda: measuring subtraction without rewarding damage

The obvious benchmark, "remove 30% of the words or code," would be easy to game. It would reward deletion even when deletion is destructive.

A serious benchmark should separate **preservation** from **complexity reduction**.

| Domain | What could be reduced | What must survive | What should be measured |
|:--|:--|:--|:--|
| Conversational answers | Excess tokens, redundancy | Correctness, relevance, essential nuance | User reading time, sufficiency, error rate |
| Software | Duplication, dependencies, unnecessary structure | Behavior, APIs, safety, performance | Valid reduction in complexity, maintenance effort |
| Documentation | Repeated explanations and examples | Task coverage, edge cases, accuracy | Completion time, information retrieval success |
| Scientific papers | Repeated exposition and weak structure | Claims, evidence, uncertainties, reproducibility | Claim retention, comprehension, auditability |
| Education | Redundant instructional material | Learning and transfer | Retention, learning gains per minute |
| Organizations | Approvals, handoffs, redundant steps | Compliance, quality, safety | Cycle time, rework, violations, outcome quality |

A first experiment could compare the same models and artifacts under four instructions:

**Neutral:** "Improve this."

**Subtractive cue:** "Improve this. Remember that you may remove things rather than add them."

**Explicit objective:** "Reduce unnecessary complexity while preserving these independently specified invariants."

**Structural reasoning:** "First map dependencies and assumptions. Then identify the transformations that make several components unnecessary."

The central outcome should be the probability of a **valid simplification**, not the amount deleted regardless of damage:

$$
Y_i =
\mathbb{1}
\left[
\text{required properties pass}
\;\land\;
C(x'_i) < C(x_i)
\right].
$$

A valid reduction is counted only when the artifact passes its preservation tests. Magnitude of reduction is then a *secondary* measure.

Independent evaluators and adversarial controls would be essential. Some tasks should include artifacts already close to minimal, where doing nothing is correct. Others should contain redundant-looking safety checks, useful repetition, or local increases in complexity that permit large global reductions.

This design could help distinguish three explanations:

- **Elicitation failure:** the model can simplify, but usually does not consider subtraction until prompted.
- **Verification failure:** the model finds candidates but cannot reliably establish what is safe to remove.
- **Capability failure:** even with prompting and feedback, the model cannot identify effective transformations.

The complete proposed protocol appears in the [technical appendix](#technical-appendix-a-reproducible-experiment).

## 9. Practical implications

### For AI assistants

Train and evaluate for *minimum sufficient responses*, with controls for tasks that genuinely require detailed explanations. A good short answer should not be confused with an incomplete one. Length-aware preference evaluation is one useful tool, but content adequacy must remain primary.

### For software development

Add an independent **subtractive pass** to agentic development cycles. Instead of always asking "what should we build next?", periodically ask "which parts can now be removed, merged, generalized, or replaced by existing mechanisms?" Require regression tests, compatibility checks, and a record of justified removals.

### For scientific publishing

Favor layered communication: a clear and compact argument, supported by complete methods, data, analysis code, limitations, and provenance. Supplementary material should improve verification rather than become a dumping ground. Scientific rigor is an invariant, not clutter.

### For organizations

Before automating a process, ask whether the process is needed. A system that automates obsolete bureaucracy can make that bureaucracy cheaper, faster, and harder to question.

### For education

Optimize not for the maximum number of explanations but for durable understanding. [Cognitive load research](https://doi.org/10.1007/s10648-019-09465-5) suggests that redundant or poorly structured material can impair learning, although useful scaffolding and repetition must be preserved when learners need them.

### For safety and governance

The instruction to simplify should never override independently justified constraints. Some complexity reflects necessary oversight, accountability, contingency planning, or protection against failure. A reduction that makes a system harder to audit or less safe is not an improvement under a properly defined objective.

## Conclusion: from generation to judgment

Generative AI has radically lowered the cost of creating artifacts. That achievement creates a new bottleneck: the time required to understand, verify, maintain, and make use of what is produced.

We should not respond by making shortness an absolute virtue. Nor should we mistake a compact encoding for a simpler idea.

The more consequential question is whether AI can discover which parts of an explanation, a program, a research plan, or an organization are unnecessary, and demonstrate that removing them preserves what matters.

This would make subtraction more than an editorial preference. It would make it a measurable capability of intelligent systems.

We taught machines to continue the text, extend the code, write the report, and automate the procedure.

**A deeper form of intelligence may be demonstrated when a machine can say, "This part is unnecessary," and prove it.**

---

## Technical appendix: a reproducible experiment

*This appendix is a proposed protocol, not a report of experiments already conducted.*

### A.1 Hypotheses

The primary hypothesis is that explicit permission to subtract increases the probability of producing a valid, invariant-preserving simplification relative to a neutral improvement prompt.

Secondary hypotheses:

- The effect is larger for discovery tasks than for tasks where the required refactoring is already specified.
- The benefit varies by domain and by availability of independent tests.
- Aggressive length budgets improve apparent compression while increasing omission failures.
- Some tasks are already minimal enough that a competent system should leave them unchanged.

### A.2 Conditions and controls

Use task-level pairing, applying every condition to the same underlying artifact. Keep model version, tools, context, output budget, and evaluation criteria fixed. Record prompts, model identifiers, timestamps, token counts, and tool traces; repeat tasks to estimate stochastic variation.

The four experimental conditions are: neutral improvement, one-sentence subtraction cue, explicit invariant-constrained minimization, and global dependency mapping before revision.

Create adversarial controls with (a) obvious redundancy, (b) no removable components, (c) shorter-but-less-readable alternatives, (d) abstractions that increase local size but reduce total complexity, and (e) independent safety checks that superficially appear redundant.

### A.3 Preservation first, reduction second

For each artifact, define a protected-property manifest *before* model generation and evaluate it independently of the model that produced the candidate.

For example, a scientific-document manifest may require retention of:

- each substantive claim and its evidence link;
- numerical estimates, confidence intervals, and statistical qualifications;
- limitations that materially affect interpretation;
- accessible methods and data provenance.

For software, combine tests with static checks, interface contracts, benchmarks, and review of safety-critical behavior. A passing test suite is evidence of preservation, not a proof of complete behavioral equivalence.

A small conceptual evaluator:

~~~python
def assess(original, candidate, oracles, complexity):
    checks = {name: test(candidate) for name, test in oracles.items()}
    passed = all(checks.values())
    before = complexity(original)
    after = complexity(candidate)

    return {
        "preserved": passed,
        "complexity_before": before,
        "complexity_after": after,
        "valid_reduction": passed and after < before,
        "reduction": (before - after) if passed else None,
        "checks": checks,
    }
~~~

This simplified example uses Boolean preservation checks. In actual experiments, thresholds, confidence estimates, domain-specific oracles, and multiple complexity dimensions would be needed.

### A.4 Avoiding Goodhart's law

Do not rank candidates by line count or token count alone. A model can game line count with unreadable expressions, token count with opaque abbreviations, and file count with a monolith.

Report a vector of outcomes instead:

$$
\mathbf{R} =
(R_{\mathrm{size}}, R_{\mathrm{duplication}},
R_{\mathrm{structure}}, R_{\mathrm{dependencies}},
R_{\mathrm{human\ effort}}).
$$

Candidates failing preservation checks receive **no valid reduction score**. Include independent human comprehension or task-performance studies where possible. Different stakeholders may face different complexity costs, so report where costs are shifted rather than pretending they disappear.

### A.5 Statistical analysis and open materials

Preregister the primary binary endpoint: an independently verified reduction of relevant complexity. For two paired conditions, use a paired binary analysis such as McNemar's test. For multiple models and domains, use a mixed-effects logistic model with task and model effects. Report conditional reduction magnitudes, task-clustered bootstrap confidence intervals, failure analyses, and corrections for multiple confirmatory comparisons.

Release the task definitions, original artifacts, preservation manifests, prompts, grading code, model and tool versions, and outputs. Where licenses or sensitive data prevent release, provide reproducible synthetic alternatives and describe the resulting limitations.

The key ablation is extremely simple:

> Does telling a model that subtraction is allowed make it more likely to find a *correct* subtractive solution that it would otherwise miss?

If so, part of the observed phenomenon is elicitation. If not, the remaining obstacles may lie in search, representation, verification, or broader task understanding.

### A.6 Suggested benchmark components

Existing work can seed the suite, although none of these resources alone measures cross-domain subtractive intelligence:

- [YapBench](https://arxiv.org/abs/2601.00624) for prompts whose answers should be short;
- [ConCISE](https://arxiv.org/abs/2511.16846) for measuring answer redundancy;
- [CodeTaste](https://arxiv.org/abs/2603.04177) for discovering meaningful refactorings;
- [SlopCodeBench](https://arxiv.org/abs/2603.24755) for cumulative code degradation;
- [LibraryDesignBench](https://arxiv.org/abs/2609.36730) for useful abstractions judged through downstream work;
- [BPI Challenge event logs](https://www.tf-pm.org/resources/logs) for organizational-process analysis, with the caution that observational logs alone cannot establish the causal effect of deleting an approval or step.

## References and further reading

1. Adams, G. S., Converse, B. A., Hales, A. H., & Klotz, L. E. (2021). [People systematically overlook subtractive changes](https://doi.org/10.1038/s41586-021-03380-y). *Nature*, 592, 258–261.
2. Fillon, A. A., et al. (2025). [The Overlooking of Subtractive Changes: Replication and Extension to Stronger Cues and Social Norms](https://doi.org/10.1002/jocb.1535). *The Journal of Creative Behavior*, 59.
3. Fischer, M. H., et al. (2021). [More Instructions Make Fewer Subtractions](https://doi.org/10.3389/fpsyg.2021.720616). *Frontiers in Psychology*, 12, 720616.
4. Baker, A. [Simplicity](https://plato.stanford.edu/entries/simplicity/). *Stanford Encyclopedia of Philosophy*.
5. Grünwald, P. (2004). [A Tutorial Introduction to the Minimum Description Length Principle](https://arxiv.org/abs/math/0406077).
6. Simon, H. A. (1971). *Designing Organizations for an Information-Rich World*. In *Computers, Communications, and the Public Interest*, edited by Martin Greenberger.
7. Saito, K., et al. (2023). [Verbosity Bias in Preference Labeling by Large Language Models](https://arxiv.org/abs/2310.10076). arXiv preprint.
8. Dubois, Y., Galambosi, B., Liang, P., & Hashimoto, T. B. [Length-Controlled AlpacaEval: A Simple Way to Debias Automatic Evaluators](https://arxiv.org/abs/2404.04475). arXiv preprint.
9. Hu, Z., et al. [Explaining Length Bias in LLM-Based Preference Evaluations](https://aclanthology.org/2025.findings-emnlp.358/). *Findings of EMNLP 2025*.
10. Zhang, Y., Das, S. S. S., & Zhang, R. (2025). [Demystify Verbosity Compensation Behavior of Large Language Models](https://aclanthology.org/2025.uncertainlp-main.14/). *UncertaiNLP 2025*.
11. Borisov, V., et al. (2026). [Do Chatbot LLMs Talk Too Much? The YapBench Benchmark](https://arxiv.org/abs/2601.00624). arXiv preprint.
12. Ghafari, S. M., et al. (2025). [ConCISE: A Reference-Free Conciseness Evaluation Metric for LLM-Generated Answers](https://arxiv.org/abs/2511.16846). arXiv preprint.
13. Thillen, A., Mündler, N., Raychev, V., & Vechev, M. (2026). [CodeTaste: Can LLMs Generate Human-Level Code Refactorings?](https://arxiv.org/abs/2603.04177). arXiv preprint.
14. Orlanski, G., et al. (2026). [SlopCodeBench: Benchmarking How Coding Agents Degrade Over Long-Horizon Iterative Tasks](https://arxiv.org/abs/2603.24755). arXiv preprint.
15. Orlanski, G., et al. (2026). [Can Agents Design Libraries for Agents?](https://arxiv.org/abs/2609.36730). arXiv preprint.
16. Novikov, A., et al. (2025). [AlphaEvolve: A Coding Agent for Scientific and Algorithmic Discovery](https://arxiv.org/abs/2506.13131). arXiv preprint. See also [Google DeepMind's technical account](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).
17. Sweller, J., van Merriënboer, J. J. G., & Paas, F. (2019). [Cognitive Architecture and Instructional Design: 20 Years Later](https://doi.org/10.1007/s10648-019-09465-5). *Educational Psychology Review*, 31.
