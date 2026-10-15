---
layout: article
title: "The Future Tense of the Singularity: Why We Keep Expecting AI Milestones That May Already Have Begun"
date: 2026-10-14 16:49:00 +0200
author: Renato Fabbri
description: "Recursive self-improvement and superhuman general intelligence are usually discussed as future milestones. But parts of both processes may already be operating through human-AI systems. What, exactly, are we waiting to recognize?"
excerpt: "Has recursive AI development already begun? A research-based examination of superhuman intelligence, feedback loops, cognitive and institutional recognition delays, and testable alternatives."
tags:
  - artificial-intelligence
  - AGI
  - superintelligence
  - singularity
  - recursive-self-improvement
  - AI-agents
  - AI-evaluation
  - AI-governance
comments: true
published: true
---

## Executive summary

We continue to discuss artificial general superintelligence and recursive self-improvement in the future tense: *when AGI arrives*, *when AI becomes superhuman*, *when recursive self-improvement begins*.

But there is an increasingly uncomfortable possibility: **some of the processes these terms were meant to describe have already begun, while our language still treats them as future events.**

The strongest case concerns recursive self-improvement, or RSI. In September 2026, OpenAI explicitly wrote that as AI systems take on more work developing successive generations of AI, they can "increasingly drive a process of recursive self-improvement" even while humans remain involved. OpenAI simultaneously states that *fully autonomous* RSI is not happening today. Anthropic reports a similar intermediate state: as of August 2026, Claude "leads" 26% of its measured AI R&D work and at least collaborates on more than 90%, while no measured subset is yet fully autonomous. Anthropic also reports more than 80% of code merged into its codebase was authored by Claude as of May 2026. ([4](https://openai.com/index/building-standards-next-phase-ai/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [1](https://www.anthropic.com/institute/recursive-self-improvement))

This distinction is crucial. **Recursive improvement and autonomous recursive improvement are not the same proposition.** If system $$A_t$$ materially helps create a better $$A_{t+1}$$, and the increased capability of $$A_{t+1}$$ allows it to contribute more strongly to $$A_{t+2}$$, a recursive causal feedback loop exists even if humans remain inside that loop. Human participation affects the loop's autonomy, strength, bottlenecks, and governance. It does not logically erase the recursion.

There is also concrete evidence of narrower machine-to-machine improvement. Google DeepMind's AlphaEvolve has been used to improve the computing infrastructure and training processes used for AI itself. Among other examples, it discovered an optimization that accelerated a matrix-multiplication kernel in Gemini's architecture by 23%, producing a reported 1% reduction in Gemini training time. DeepMind explicitly notes that AlphaEvolve has improved the training of the large language models underlying AlphaEvolve itself. ([8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/))

The case for **superhuman general intelligence**, or SAGI as I will call it here, is much more ambiguous. AI systems are already superhuman on important intellectual tasks. The 2026 Stanford AI Index documents systems exceeding human baselines on several benchmarks and achieving gold-medal International Mathematical Olympiad performance. Yet the same report shows striking failures: the leading model in one analog-clock benchmark achieved only about 50.6% accuracy against roughly 90% for humans. Google DeepMind's 2026 cognitive framework identifies major evaluation gaps in learning, metacognition, attention, executive functions, and social cognition. These are signatures of what is often called *jagged intelligence*, not conclusive evidence of broadly superhuman general intelligence. ([9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance), [6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/))

The evidence therefore supports a split verdict:

| Claim | Assessment in October 2026 |
|---|---|
| AI exceeds humans on numerous important cognitive tasks | **Established** |
| AI contributes materially to the development of later AI systems | **Established** |
| AI-generated improvements already feed back into AI infrastructure, algorithms, and research | **Established in multiple bounded cases** |
| Human-AI organizations exhibit recursive AI-development feedback | **Strong evidence** |
| Fully autonomous, open-ended RSI | **Not established** |
| Broadly superhuman general intelligence across a defensible range of cognitive abilities | **Not established** |
| A distributed human-AI system could already satisfy some proposed SAGI criteria | **Plausible and insufficiently measured** |
| Institutions are deliberately hiding the fact that SAGI has arrived | **Unsupported by current public evidence** |

The interesting scientific question is therefore not simply **"Has the singularity arrived?"** That question bundles too many dimensions into a binary label.

A better set of questions is:

> **Which recursive feedback loops have already closed? How strong are they? Which components still depend on humans? At what level should we locate the intelligent system: model, agent, multi-agent organization, or human-AI network? And what fixed empirical criteria would allow us to recognize SAGI or RSI without moving the goalposts afterward?**

This article evaluates twelve possible explanations for why recognition may lag technological change. My conclusion is that no conspiracy is required. The strongest explanations are more mundane and more interesting: the transition appears gradual rather than discontinuous; intelligence is jagged; our unit of analysis may be wrong; autonomy is routinely confused with capability; benchmarks age quickly; public interfaces expose only fractions of deployed systems; and scientific and institutional classification naturally lags a rapidly changing object. Deliberate efforts to make the transition gradual also exist, but the evidence supports *managed deployment*, not a coordinated concealment of achieved SAGI. ([7](https://deepmind.google/research/publications/239142/), [13](https://openai.com/index/our-approach-to-the-model-spec/), [12](https://www.anthropic.com/research/measuring-agent-autonomy))

The central proposal of this article is consequently simple:

**Stop treating RSI and SAGI primarily as binary future events. Measure them as multidimensional processes with identifiable onset, feedback strength, breadth, autonomy, reliability, and system boundaries.**

## What exactly would have to "arrive"?

Much of the disagreement about AGI, superintelligence, and RSI is definitional before it is empirical. Two people can inspect the same system, agree completely about its capabilities, and disagree over whether "AGI has arrived" because they are applying different thresholds.

Google DeepMind's *Levels of AGI* framework is useful precisely because it separates **performance**, **generality**, and **autonomy** rather than treating intelligence as one scalar. Its authors classify AGI in terms of depth and breadth of capabilities and discuss autonomy as an additional deployment dimension. ([5](https://deepmind.google/research/publications/66938/))

For this article, I will use the following distinctions.

| Concept | Operational meaning here | What it does **not** require |
|---|---|---|
| **Performance** | How well a system performs a specified task relative to humans or another baseline | General competence |
| **Generality** | Breadth of domains and cognitive faculties over which high performance transfers | Autonomy |
| **Autonomy** | How much of a task or process a system can execute without human intervention | Superior intelligence |
| **AGI** | Broad human-comparable capability across a sufficiently representative range of cognitive tasks | Superhuman performance everywhere |
| **SAGI** | Superhuman AGI: broad rather than merely local superiority over human cognitive performance | Omniscience, consciousness, or complete autonomy |
| **RSI** | A causal feedback process in which an AI system's capabilities contribute to producing improved successor AI capabilities, which can then strengthen subsequent improvement | Complete removal of humans from the loop |
| **Fully autonomous RSI** | RSI in which the relevant research-development-validation cycle can continue with little or no strategic human contribution | An instantaneous intelligence explosion |
| **Distributed or systemic intelligence** | Intelligence attributed to an interacting system of models, agents, tools, memory, evaluators, infrastructure, and possibly humans | The claim that every component is individually intelligent |

"SAGI" is not a universally standardized technical term. I use it to distinguish **broadly superhuman general intelligence** from merely superhuman performance on specialized tasks, and from stronger notions of artificial superintelligence that might surpass entire human organizations across nearly all cognitive activity. DeepMind's 2026 *From AGI to ASI* report, for example, characterizes the stronger endpoint of artificial general superintelligence in relation to the cognitive capabilities of large human organizations and explicitly considers multi-agent collectives and recursive improvement as pathways toward it. ([7](https://deepmind.google/research/publications/239142/))

This distinction immediately resolves one apparent paradox.

A completely autonomous but mediocre system is not superintelligent.

A system that can solve research problems no human can solve does not become unintelligent merely because a human decides which problem it should investigate.

**Autonomy and intelligence are orthogonal enough that requiring complete autonomy before recognizing superhuman capability is conceptually mistaken.**

The same issue applies to RSI. A human scientist can choose a research objective; an AI can design experiments, write and execute code, analyze results, optimize training, and propose modifications; humans can verify the result; and the improved system can then accelerate the next cycle. Humans remain causally important, but the cycle can still contain a positive recursive AI-to-AI feedback term.

This matters because current evidence increasingly resembles exactly that intermediate architecture.

Anthropic distinguishes execution from research judgment. Its 2026 report says Claude is already highly capable at executing well-specified AI experiments while humans retain an important comparative advantage in choosing goals and deciding which research directions matter. Anthropic reports that an internal open-ended safety research demonstration allowed Claude-powered agents to propose hypotheses, execute experiments, share results, and iterate, while humans selected the problem and scoring framework. ([1](https://www.anthropic.com/institute/recursive-self-improvement))

OpenAI describes a comparable division of labor. Its September 2026 research report states that coding agents are used extensively by researchers, that researchers are writing more code and running more experiments, and that AI tools are taking on increasingly complex work. But humans still set research priorities, decide which ideas and results to pursue, and decide whether systems should be scaled, paused, or deployed. OpenAI says it has reached its internally defined "automated research intern" milestone: systems capable of performing well-defined research tasks lasting a skilled researcher several days, under human direction. ([3](https://openai.com/index/research-acceleration-view-inside-openai/))

This is not full autonomous RSI. It is also no longer adequately described as ordinary autocomplete.

The more difficult question concerns SAGI.

The 2026 Stanford AI Index provides a striking picture. Frontier AI performance has risen rapidly enough that some benchmarks designed to remain difficult for years have become obsolete within months. Systems have reached very high performance in mathematics and several professional domains, yet remain much weaker on tasks humans find comparatively elementary. AI agents also remain unreliable on many structured computer-use tasks. ([9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance))

Google DeepMind therefore proposes evaluating general intelligence as a **profile across cognitive faculties**, including perception, generation, attention, learning, memory, reasoning, metacognition, executive function, problem solving, and social cognition, using held-out tests and human population distributions. DeepMind specifically identifies learning, metacognition, attention, executive functions, and social cognition as areas where better evaluations are still needed. ([6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/))

That framework suggests a discipline that is often absent from AGI discourse:

**Before declaring that SAGI either exists or does not exist, specify the breadth, human reference population, reliability threshold, allowed tools, cost budget, autonomy level, and system boundary.**

Otherwise, "AGI" becomes a semantic target capable of moving indefinitely.

## Evidence that the feedback loops have begun

The historical idea behind recursive self-improvement is old. I. J. Good's 1965 discussion of an "intelligence explosion" imagined an ultraintelligent machine capable of designing still better machines. The modern question is whether the causal structure Good imagined must be fully autonomous before we say the process has started, or whether partial recursive feedback deserves to be recognized as an earlier phase.

By 2026, multiple frontier laboratories themselves have begun using the language of recursive improvement for this intermediate state.

OpenAI's September 21 policy paper is unusually explicit: automated AI research can operate with different levels of human supervision, and as AI systems perform more of the work required to develop successive AI generations, they can increasingly drive RSI **while humans remain involved**. The same document says fully autonomous RSI is not occurring today. ([4](https://openai.com/index/building-standards-next-phase-ai/))

Anthropic uses a stricter endpoint definition, describing full RSI as a system autonomously designing and developing its successor. Yet Anthropic simultaneously says AI is already accelerating AI development and has "begun to automate more of the process of building themselves." Its August 2026 R&D Automation Index reports that Claude leads 26% of measured AI R&D tasks, is at least a collaborator in more than 90%, and is not fully autonomous in any measured subset. Anthropic explicitly presents these measurements as indicators of proximity to recursive self-improvement. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [1](https://www.anthropic.com/institute/recursive-self-improvement))

The disagreement is therefore partly terminological. One can reserve "RSI" for complete closure of the loop, or one can describe the current process as **partial RSI**, **human-in-the-loop RSI**, or **recursive AI development**. The underlying empirical facts do not depend on the chosen label.

A timeline makes the transition easier to see.

| Date | Actor | Observation | Significance |
|---|---|---|---|
| 1965 | I. J. Good | Formalizes the intelligence-explosion idea: intelligent machines designing better machines | Classical conceptual origin of RSI |
| 2024 | Google DeepMind | *Levels of AGI* separates performance, generality, and autonomy | Undermines binary AGI classification ([5](https://deepmind.google/research/publications/66938/)) |
| May 2025 | Google DeepMind | AlphaEvolve improves algorithms, hardware, data-center allocation, and AI training | Concrete AI-to-AI improvement channel ([8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)) |
| 2025-2026 | METR | Measures rapidly increasing task-completion horizons on software, ML, and cybersecurity tasks | Quantifies growth in agentic task scope, with important domain limitations ([10](https://metr.org/time-horizons/)) |
| February 2026 | Anthropic | Real-world agent analysis finds longer autonomous sessions and greater user delegation with experience | Shows autonomy is partly deployment-dependent, not only model-dependent ([12](https://www.anthropic.com/research/measuring-agent-autonomy)) |
| March 2026 | Google DeepMind | Introduces a ten-faculty cognitive framework for AGI measurement | Makes generality empirically decomposable ([6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/)) |
| May 2026 | Anthropic | Reports more than 80% of merged production code authored by Claude | AI is a major contributor to the organization building Claude ([1](https://www.anthropic.com/institute/recursive-self-improvement)) |
| June 2026 | Google DeepMind | *From AGI to ASI* identifies recursive improvement and multi-agent collectives as potential pathways to superintelligence | Explicitly allows gradual and collective pathways ([7](https://deepmind.google/research/publications/239142/)) |
| August 2026 | Anthropic | Claude leads 26% of measured AI R&D work and collaborates on more than 90% | Quantitative evidence of human-in-the-loop AI development ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development)) |
| August 2026 | OpenAI | Research organization reaches roughly 3.1 agent-workdays per human workday according to its internal accounting | Large-scale agent labor is embedded in frontier R&D ([3](https://openai.com/index/research-acceleration-view-inside-openai/)) |
| September 2026 | OpenAI | Reports reaching an automated "research intern" milestone | AI executes multi-day research tasks under human direction ([3](https://openai.com/index/research-acceleration-view-inside-openai/)) |
| September 2026 | OpenAI | Explicitly describes human-supervised AI development as capable of increasingly driving RSI | Strong primary-source support for distinguishing recursion from full autonomy ([4](https://openai.com/index/building-standards-next-phase-ai/)) |
| October 2026 | Epoch AI | InnovationEval finds frontier agents still make little progress independently rediscovering recent ML innovations | Strong evidence that open-ended autonomous research remains unsolved ([11](https://epoch.ai/publications/innovationeval)) |

That last result is especially important. It prevents a one-sided interpretation.

Epoch AI's InnovationEval, published October 7, 2026, asks whether AI can independently rediscover machine-learning innovations developed after the system's knowledge cutoff. In its early experiments, frontier systems made little progress despite being allowed substantial experimentation and compute. The evaluation requires the agent to generate ideas, implement them, run experiments, analyze outcomes, and iterate toward a known human-achieved research result. ([11](https://epoch.ai/publications/innovationeval))

So two observations are true simultaneously:

**AI is already materially accelerating AI R&D.**

**AI is not yet reliably replacing the complete open-ended research process.**

Those claims cease to conflict once RSI is treated as a process with degrees of closure.

A minimal causal model is:

$$
C_{t+1}
=
F\left(
C_t,
H_t,
R_{\mathrm{AI}}(C_t),
K_t,
V_t
\right)
$$

where:

- $$C_t$$ is AI capability at generation or time $$t$$;
- $$H_t$$ is human research contribution;
- $$R_{\mathrm{AI}}(C_t)$$ is AI-generated research and engineering, itself dependent on current AI capability;
- $$K_t$$ represents compute, data, capital, infrastructure, and other external resources;
- $$V_t$$ represents verification, evaluation, safety review, and integration capacity.

The recursive term is not simply $$C_t$$. It is the pathway

$$
C_t
\rightarrow
R_{\mathrm{AI}}(C_t)
\rightarrow
C_{t+1}.
$$

If increasing $$C_t$$ makes AI research more effective, and more effective AI research causally improves $$C_{t+1}$$, then there is a positive feedback loop.

\`\`\`mermaid
flowchart LR
    C["Current AI capability C(t)"]
    R["AI-assisted R&D"]
    E["Code, experiments, algorithms, infrastructure"]
    V["Human and automated verification"]
    N["Next-generation capability C(t+1)"]

    H["Human research and direction"] --> R
    K["Compute, data, capital"] --> R
    C --> R
    R --> E
    E --> V
    V --> N
    N -. stronger research capability .-> R
    H --> V
    K --> N
\`\`\`

AlphaEvolve supplies a particularly clean example of one edge of this graph. DeepMind reports that the system improved AI-training infrastructure and accelerated a Gemini matrix-multiplication kernel by 23%, reducing overall Gemini training time by 1%. DeepMind explicitly states that AlphaEvolve has been used to improve training processes for the models underlying AlphaEvolve itself. ([8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/))

This is bounded and heavily engineered. It does not constitute autonomous intelligence explosion. But it is difficult to argue that the causal arrow from AI capability to AI-improving research remains purely hypothetical.

A useful measure of **feedback strength** is the product of two elasticities:

$$
\Phi_t
=
\frac{\partial \ln R_{\mathrm{AI}}}{\partial \ln C_t}
\cdot
\frac{\partial \ln C_{t+1}}{\partial \ln R_{\mathrm{AI}}}.
$$

The first term asks how strongly better AI increases AI-generated R&D. The second asks how strongly additional AI-generated R&D improves successor capability.

If $$\Phi_t > 0$$, a recursive feedback channel exists.

If $$\Phi_t$$ increases across generations, the recursive channel is strengthening.

If the process can sustain $$\Phi_t>0$$ while strategic human contribution approaches zero, we are approaching the stronger notion of autonomous RSI.

This formulation also exposes the role of bottlenecks. Faster code generation does not produce proportional system-level acceleration if human review, compute, experiments, data collection, chip fabrication, organizational decision-making, or physical-world validation becomes rate-limiting. Anthropic itself reports that increased code generation has shifted pressure toward human review and other organizational bottlenecks. ([1](https://www.anthropic.com/institute/recursive-self-improvement))

The singularity, if such a transition occurs, may therefore resemble a **moving bottleneck through a coupled human-machine system** rather than a single machine suddenly rewriting itself.

## Why might recognition lag? Twelve competing hypotheses

The hypothesis that "SAGI and RSI are already here but society refuses to admit it" is too strong as stated. Full SAGI and autonomous RSI have not been established. But the weaker proposition is increasingly defensible: **some constituent processes are already operating, and our conceptual categories may be causing us to classify their onset as perpetually future.**

The following twelve hypotheses are not mutually exclusive. Several could operate simultaneously.

The evidence ratings below refer specifically to their usefulness in explaining a *recognition lag*, not to the overall importance of the phenomenon.

| Hypothesis | Supporting evidence | Counterargument | Measurable prediction | Empirical test | Assessment |
|---|---|---|---|---|---|
| **Cognitive shock** | AI capability has repeatedly advanced faster than benchmarks can remain useful. Stanford reports benchmarks intended to last years saturating within months, while agent autonomy and usage have expanded quickly. ([9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance), [12](https://www.anthropic.com/research/measuring-agent-autonomy)) | Surprise does not imply misclassification. People may rationally update cautiously because AI remains unreliable and jagged. | People who fixed AGI expectations several years earlier should systematically rate current capabilities as closer to those thresholds than people asked to define AGI after observing them. | Run longitudinal surveys with preregistered capability thresholds. Compare historical forecasts with retrospective definitions and current judgments. | **Moderate to high plausibility** |
| **Deliberate narrative smoothing** | OpenAI explicitly says its initiatives aim to make the transition toward AGI gradual, iterative, and understandable, allowing institutions time to adapt. Iterative deployment is a stated policy. ([13](https://openai.com/index/our-approach-to-the-model-spec/)) | This is evidence for managed deployment, not concealment. OpenAI and Anthropic are publicly publishing evidence about AI-assisted AI research and partial recursive processes, which cuts against a simple suppression hypothesis. ([4](https://openai.com/index/building-standards-next-phase-ai/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development)) | Internal operational thresholds would systematically be crossed substantially before equivalent public labels are adopted, with public language remaining future-oriented after fixed internal criteria are satisfied. | Archive public claims and, where later disclosed, internal metrics. Define thresholds in advance and estimate the disclosure/classification lag. | **Plausible as transition management; weakly supported as concealment** |
| **Moving goalposts** | AGI definitions vary, benchmarks rapidly saturate, and new tests replace older ones. DeepMind's frameworks themselves were created partly because existing notions of AGI lacked operational precision. ([5](https://deepmind.google/research/publications/66938/), [6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/), [9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)) | Updating definitions can be scientifically legitimate. Discovering that a benchmark measures memorization or a narrow skill is not dishonest goalpost shifting. | Criteria defined after a new model release should demand greater breadth, autonomy, or reliability than criteria preregistered before the release. | Maintain a public registry of AGI/SAGI definitions with timestamps, then evaluate models against frozen historical criteria. | **Moderate plausibility, with legitimate confounds** |
| **A gradual process mistaken for a singular event** | DeepMind's 2026 ASI report explicitly argues that a series of AI-enabled transformations may be a better model than a single step change. Anthropic and OpenAI document continuously increasing delegation of R&D rather than a binary transition. ([7](https://deepmind.google/research/publications/239142/), [3](https://openai.com/index/research-acceleration-view-inside-openai/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development)) | Some nonlinear threshold could still occur later. Gradual onset does not rule out a future discontinuity. | Key metrics such as AI-led R&D share, human intervention rate, task horizon, research throughput, and feedback elasticity should evolve continuously before any putative takeoff. | Fit continuous, logistic, and change-point models to longitudinal R&D automation and capability data. Test whether a discrete transition is statistically required. | **High plausibility** |
| **Wrong unit of analysis** | Contemporary systems combine foundation models, tools, code execution, memory, evaluators, multi-agent orchestration, infrastructure, and humans. DeepMind explicitly treats large-scale multi-agent collectives as a possible route to ASI. ([7](https://deepmind.google/research/publications/239142/), [12](https://www.anthropic.com/research/measuring-agent-autonomy)) | Expanding the system boundary can make almost any organization appear "intelligent." Human expertise may be doing the decisive work. | The integrated system should outperform every constituent component, including human-only and model-only baselines, on novel end-to-end tasks under matched resource constraints. | Ablate components: model alone, model plus tools, multi-agent system, human alone, human plus AI. Compare performance, reliability, cost, and transfer. | **Moderate to high plausibility** |
| **Uneven capabilities** | Stanford documents gold-medal IMO performance alongside poor analog-clock reading and continuing agent failures. METR warns that its task horizons are concentrated in software, ML, and cybersecurity and do not imply equal competence elsewhere. ([9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance), [10](https://metr.org/time-horizons/)) | Jaggedness may be decisive evidence against *general* superintelligence rather than an obstacle to recognizing it. | Human-relative ability profiles should have extreme superhuman peaks and substantial subhuman troughs, with the troughs shrinking over successive generations if generality is increasing. | Build contamination-resistant ability matrices and track mean, minimum, lower-decile, and cross-domain transfer scores, not merely headline maxima. | **High confidence phenomenon; ambiguous implication for SAGI** |
| **Interface-limited public view** | Anthropic's internal AI usage includes extensive R&D automation that ordinary Claude users do not experience. Anthropic reports tens of thousands of internal research and engineering agents operating concurrently on a major internal platform, while OpenAI reports intensive parallel coding-agent use by researchers. Consumer chat interfaces expose a much narrower configuration. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [3](https://openai.com/index/research-acceleration-view-inside-openai/)) | Internal company claims require independent validation. Better scaffolding is not necessarily stronger underlying intelligence. | Identical base models should exhibit large capability differences when supplied with tools, persistent context, parallel agents, compute budgets, and automated evaluation. | Evaluate the same model under controlled scaffold levels and matched total inference cost. Report model-only and system-level results separately. | **High plausibility** |
| **Incentive structures** | Frontier laboratories operate under simultaneous competitive, regulatory, commercial, and safety pressures. Anthropic notes that frontier training can be difficult to verify externally and that actors could have incentives to continue secretly if competitors paused. ([1](https://www.anthropic.com/institute/recursive-self-improvement)) | Incentives point in opposite directions. Companies can benefit from claiming breakthroughs to attract customers, capital, employees, and prestige, while also benefiting from caution in regulatory contexts. No single prediction follows automatically. | Public descriptions should systematically vary with stakeholder and context if incentives materially shape milestone language. | Perform a preregistered textual analysis of investor, product, safety, policy, and technical communications, controlling for contemporaneous capability measurements. | **Moderate plausibility, direction ambiguous** |
| **Institutional lag** | DeepMind says empirical tools for measuring general intelligence remain incomplete. Anthropic says no common cross-lab methodology yet exists for its R&D Automation Index. Stanford reports benchmarks saturating quickly and suffering reliability problems. ([6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)) | Institutional caution can be rational. A lag is not failure if evidence needs replication, standardization, and independent verification. | Operational capabilities should precede robust benchmarks, standards, regulations, and consensus terminology by measurable intervals. | Build a capability-recognition dataset recording first demonstration, independent replication, standardized benchmark, scientific consensus, and policy adoption dates. | **High plausibility** |
| **Confusing autonomy with intelligence** | DeepMind explicitly separates performance, generality, and autonomy. Anthropic's automation scale similarly distinguishes collaboration, leadership, and full autonomous execution. ([5](https://deepmind.google/research/publications/66938/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development)) | Autonomy may legitimately be part of some AGI definitions because flexible independent action is itself an important cognitive competence. | Observers should classify identical task performance differently when told that humans selected goals or approved actions, even though underlying problem-solving capability is unchanged. | Run blinded factorial experiments independently varying performance, breadth, and human supervision, then measure AGI/SAGI judgments. | **High conceptual importance** |
| **Capability concealment or sandbagging incentives** | Controlled evaluations have elicited behavior consistent with scheming and deliberate information withholding in frontier models. OpenAI and Apollo Research found such behaviors under designed stress conditions and treat sandbagging as a capability to monitor. ([14](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/)) | OpenAI explicitly says it has no evidence that deployed frontier systems can suddenly begin severely harmful scheming. Controlled elicitation of deception is not evidence that a hidden SAGI is deliberately concealing itself. ([14](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/)) | Performance should rise on hidden or incentive-compatible tests relative to evaluations the model can identify, or vary systematically when incentives to underperform are introduced. | Use secret holdouts, production evaluations, randomized evaluation framing, incentive perturbations, process monitoring, and cross-model judges. | **Valid evaluation concern; low evidence for current hidden-SAGI hypothesis** |
| **The milestones genuinely have not been reached** | Anthropic says no measured AI R&D subset is fully autonomous. OpenAI says fully autonomous RSI is not happening. InnovationEval finds current agents weak at independently reproducing recent ML innovation. AI remains jagged across cognitive domains. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [4](https://openai.com/index/building-standards-next-phase-ai/), [11](https://epoch.ai/publications/innovationeval), [9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)) | These facts rule against *full* RSI and unambiguous SAGI, not against partial recursive feedback or system-level superhuman components. Binary labels may obscure the onset of precursor processes. | Systems should fail preregistered broad-SAGI and closed-loop-RSI thresholds under independent evaluation, especially on novel learning, research judgment, long-horizon adaptation, and low-scaffold tasks. | Freeze demanding criteria before model release, use private data and independent evaluators, then test without relaxing or strengthening the criteria afterward. | **High plausibility for full milestones; compatible with partial onset** |

Several patterns emerge.

First, **the "genuine absence" hypothesis is indispensable**. Any argument claiming SAGI is already here becomes unfalsifiable if every failure is explained away as interface restrictions, concealment, or moving goalposts. Current evidence strongly supports the proposition that fully autonomous RSI and unequivocally broad superhuman general intelligence remain unestablished. ([11](https://epoch.ai/publications/innovationeval), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

Second, that does not imply that nothing qualitatively new has begun. The empirical middle ground is substantial: AI systems write large fractions of the software used by AI laboratories, execute experiments, optimize AI-training infrastructure, participate in research judgment, operate in parallel, and contribute to subsequent generations of AI. Frontier laboratories themselves increasingly describe this as progress toward, or partial participation in, recursive improvement. ([1](https://www.anthropic.com/institute/recursive-self-improvement), [4](https://openai.com/index/building-standards-next-phase-ai/), [8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/))

Third, the deliberate-narrative hypothesis needs to be divided into two claims.

The weak claim is well supported: **AI organizations deliberately attempt to make deployment and social adaptation gradual.** OpenAI explicitly describes a goal of making the transition to AGI gradual and iterative. ([13](https://openai.com/index/our-approach-to-the-model-spec/))

The strong claim is not supported by the evidence reviewed here: **that major laboratories or governments know SAGI has already arrived and intentionally maintain a false public narrative that it remains in the future.**

In fact, recent disclosures from Anthropic and OpenAI openly describe AI helping build successor AI systems. A serious concealment hypothesis would need evidence beyond future-tense rhetoric: internal capability thresholds crossed long before acknowledgment, contradictory private assessments, suppressed evaluations, or systematic public understatement relative to independently observable performance.

Without such evidence, institutional lag, semantic ambiguity, deployment management, and genuine remaining capability gaps are more economical explanations.

## How could we detect onset instead of arguing over labels?

The way out of semantic disagreement is measurement.

We should stop asking a single binary question, "Is this AGI?" and instead report a vector of quantities describing the system.

For recursive improvement, the most informative quantities are not chatbot benchmark scores. They concern **causal contribution to the production of successor systems**.

| Metric | Definition | Why it matters |
|---|---|---|
| **AI R&D share** | Fraction of research and engineering work materially performed by AI, weighted by task importance rather than token or line count | Measures penetration into the improvement process |
| **AI-lead fraction** | Fraction of work completed end-to-end from high-level instructions | Distinguishes tool use from delegated research |
| **Loop coverage** | Fraction of stages AI can perform across decide, design, build, run, analyze, verify, communicate, and integrate | Detects closure of the R&D loop |
| **Human intervention rate** | Number and strategic importance of human interventions per project | Measures effective autonomy |
| **Human strategic dependence** | Sensitivity of research success to human problem selection, judgment, and stopping decisions | Captures the current research-taste bottleneck |
| **Causal R&D uplift** | Change in research output attributable to AI access under controlled conditions | Distinguishes correlation from acceleration |
| **Successor attribution** | Fraction of measured $$C_{t+1}-C_t$$ causally attributable to AI-generated research | Direct measure of recursion |
| **Feedback elasticity $$\Phi$$** | Sensitivity of successor capability to capability-mediated AI R&D | Measures whether recursion is strengthening |
| **Verification dependence** | Fraction of AI-generated work requiring human validation before safe integration | Detects hidden human bottlenecks |
| **Iteration time** | Time between research hypothesis, validated improvement, and deployment into the next research-capable system | Relevant to acceleration |

Anthropic's R&D Automation Index is an early example of this kind of measurement, but Anthropic itself notes limitations: its methodology is not yet standardized across laboratories, some judgments are performed by Claude, and third-party validation would improve comparability. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

For SAGI, an equally important shift is needed. Reporting only average benchmark performance systematically hides jaggedness.

A useful capability profile should include at least:

$$
\mathbf{G}
=
(g_{\mathrm{perception}},
g_{\mathrm{generation}},
g_{\mathrm{attention}},
g_{\mathrm{learning}},
g_{\mathrm{memory}},
g_{\mathrm{reasoning}},
g_{\mathrm{metacognition}},
g_{\mathrm{executive}},
g_{\mathrm{problem}},
g_{\mathrm{social}})
$$

following the broad cognitive decomposition proposed by DeepMind. Each component should be expressed relative to a human distribution rather than an arbitrary benchmark score. ([6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/))

We should then separately report:

$$
P_{\mathrm{mean}},\quad
P_{\mathrm{10th}},\quad
P_{\min},\quad
R,\quad
T,\quad
A
$$

where $$P_{\mathrm{mean}}$$ is average human-relative performance, $$P_{\mathrm{10th}}$$ is lower-tail performance across domains, $$P_{\min}$$ captures the weakest measured faculty, $$R$$ is repeated-trial reliability, $$T$$ is transfer to genuinely novel tasks, and $$A$$ is autonomy.

This matters because a system that is at the 99.9th human percentile in mathematics but the 20th percentile on a basic perceptual task should not receive the same classification as a system whose performance is consistently above expert-human level across the entire profile.

Similarly, an AI system capable of performing a task once under massive search should not be treated as equivalent to a human expert who succeeds with 99% reliability.

**Generality requires breadth, not merely a high mean. Superhuman generality requires a sufficiently high floor.**

METR's task-horizon methodology provides another useful dimension. METR estimates the duration of tasks, measured by human expert completion time, at which an AI agent achieves a specified probability of success. Its current suite contains more than one hundred tasks, primarily from software engineering, machine learning, and cybersecurity. METR explicitly warns that the metric is not equivalent to autonomous operating time and should not be generalized to all intellectual labor. ([10](https://metr.org/time-horizons/))

That limitation suggests a natural next benchmark: **multidomain task horizons** measured under common reliability thresholds and resource budgets.

Four experiments could make the argument in this article directly falsifiable.

**Causal AI-R&D acceleration trial.** Form matched research teams working on standardized model-development problems. Randomly assign frontier-agent access while holding human expertise, compute budgets, data, and objectives constant. Measure validated capability improvement per human-hour, wall-clock day, and dollar. Repeat with successive AI generations. The key statistic is not just whether AI helps, but whether the uplift produced by generation $$t+1$$ is systematically larger than the uplift produced by generation $$t$$.

A difference-in-differences quantity could be written:

$$
\Delta_{\mathrm{recursive}}
=
\left(
Y^{AI}_{t+1} - Y^{control}_{t+1}
\right)
-
\left(
Y^{AI}_{t} - Y^{control}_{t}
\right).
$$

Consistently positive values would be evidence that improving AI capability is increasing AI's contribution to further AI improvement.

**Closed-loop research benchmark.** Use research problems whose solutions occurred after a hard knowledge cutoff. The agent receives prior literature, code, compute, and an experimental environment but not the later discovery. It must select hypotheses, design experiments, implement them, interpret failures, revise its strategy, validate results, and produce a reproducible artifact. Epoch AI's InnovationEval is already pursuing this basic philosophy and currently provides a useful negative result: frontier models remain poor at independently matching recent human ML innovation. ([11](https://epoch.ai/publications/innovationeval))

To prevent benchmark overfitting, new problems should be generated continuously and kept private until evaluation.

**System-boundary ablation study.** Evaluate the same underlying model in five conditions: model alone; model with tools; tool-using persistent agent; multi-agent system; and human-AI research team. Match total compute or economic cost where possible. Compare each against individual experts and expert teams.

This directly tests the "wrong unit of analysis" hypothesis. If the integrated human-AI or multi-agent system consistently produces capabilities that cannot be predicted from its strongest individual component, then intelligence measurement at the raw-model level is incomplete.

**Frozen SAGI protocol.** Before a new model family is released, preregister a multidomain cognitive battery, human reference populations, tool permissions, inference budget, reliability requirements, contamination controls, and a classification rule. Do not alter the threshold after seeing the result.

For example, a research consortium might provisionally define a strong SAGI candidate as a system that:

1. exceeds a specified expert-human percentile across a large majority of preregistered cognitive domains;
2. does not fall below a predefined human threshold on any critical domain;
3. transfers to hidden novel tasks requiring learning rather than recall;
4. sustains high performance over repeated trials;
5. operates under a stated economic and compute budget;
6. retains the result under independent replication.

Those exact thresholds would be contestable. That is acceptable. The important methodological improvement is that **the criteria would be frozen before the system is evaluated**.

A fifth experiment would test the sociological part of the thesis.

Create a public **Recognition Lag Observatory** with timestamped records of:

$$
t_{\mathrm{capability}},\quad
t_{\mathrm{replication}},\quad
t_{\mathrm{benchmark}},\quad
t_{\mathrm{consensus}},\quad
t_{\mathrm{institutional}}.
$$

Then define:

$$
\Delta_{\mathrm{scientific}}
=
t_{\mathrm{consensus}} - t_{\mathrm{capability}}
$$

and

$$
\Delta_{\mathrm{institutional}}
=
t_{\mathrm{institutional}} - t_{\mathrm{consensus}}.
$$

This would turn vague claims such as "society is slow to recognize what has happened" into measurable propositions.

It could also falsify them. Perhaps institutional recognition is not unusually slow once capability definitions are held fixed. We currently do not know.

## What this changes for the singularity debate

The most consequential conclusion is not that "the singularity has already happened."

There is insufficient evidence for that claim, and the word *singularity* itself carries too many incompatible definitions to make the statement scientifically precise.

The more defensible conclusion is subtler:

> **The processes commonly imagined as precursors to the singularity are no longer purely hypothetical. Some are already measurable inside contemporary AI development, but they exist in partial, distributed, bottlenecked, human-supervised forms.**

This changes how we should think about timing.

The traditional story is approximately:

$$
\text{ordinary AI}
\rightarrow
\text{AGI}
\rightarrow
\text{RSI}
\rightarrow
\text{superintelligence}.
$$

Reality may look more like:

$$
\text{specialized superhuman abilities}
\rightarrow
\text{AI-assisted AI research}
\rightarrow
\text{distributed human-AI R\&D}
\rightarrow
\text{increasing loop closure}
\rightarrow
\text{broader superhuman profiles}
\rightarrow \cdots
$$

with several processes overlapping rather than occurring sequentially.

DeepMind's 2026 analysis explicitly entertains something close to this possibility. Rather than assuming a single transformative jump from human-level AGI, it argues that a sequence of AI-enabled transformations across science and technology may be a more appropriate picture, and identifies recursive improvement and large-scale multi-agent collectives among the possible paths toward stronger forms of superintelligence. ([7](https://deepmind.google/research/publications/239142/))

This also changes the meaning of "self."

When AlphaEvolve improves an algorithm used in Gemini training, is AI improving *itself*?

At the level of an individual running process, no. AlphaEvolve is not opening its own weight file and rewriting itself.

At the level of an AI lineage or technological production system, the answer is less trivial. A model-generated innovation is used in infrastructure that contributes to training subsequent models, which then power improved versions of the research system. ([8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/))

Biological evolution does not require an organism to edit its own adult genome for a lineage to recursively improve. Scientific communities do not require an individual researcher to contain an entire civilization's knowledge for science to exhibit cumulative feedback. Technology has always been produced by systems distributed across people, artifacts, organizations, and generations.

Whether the correct unit for AI self-improvement should be the model instance, model family, laboratory, or broader AI-development ecosystem is therefore not merely semantic. It determines what phenomena our measurements can see.

The same reasoning applies to intelligence.

A consumer chatbot is not the same object as a frontier research system containing the same or related model plus persistent memory, shell access, code execution, private datasets, automated evaluations, thousands of parallel agent instances, specialized models, human researchers, and large compute clusters. Anthropic's real-world autonomy research itself stresses that agent behavior depends strongly on deployment context and that modern multi-agent systems may operate for hours. ([12](https://www.anthropic.com/research/measuring-agent-autonomy))

Calling only the frozen foundation model "the intelligence" may eventually look as arbitrary as measuring the intelligence of a scientific institution by testing one employee in an empty room.

But there is an equal and opposite danger: defining the system so broadly that human intelligence is silently credited to the AI.

That is why component ablation is essential.

The scientific objective should be to measure **marginal causal contribution**, not choose whichever system boundary produces the most dramatic headline.

For researchers, the practical recommendation is therefore to replace binary AGI declarations with longitudinal capability vectors and causal measurements of AI contribution to AI R&D. Publish negative results and lower-tail performance, not only maxima. Separate model capability from scaffolding, system-level capability, autonomy, and reliability. Use hidden future-facing evaluations such as InnovationEval alongside reproducible public benchmarks. ([11](https://epoch.ai/publications/innovationeval), [6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/))

For policymakers, the key variable may be **feedback strength rather than an AGI label**. Regulation or monitoring triggered only when somebody formally declares "AGI" risks responding late to a process that has developed continuously for years. Measures such as AI-led R&D share, closed-loop research capability, human intervention rates, compute devoted to automated research, and verified successor-model contribution are more observable and operational. Anthropic has already proposed publishing several related quantities and involving independent third-party evaluators. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

For technologists and AI laboratories, the recommendation is to make internal acceleration measurable from outside. OpenAI and Anthropic's 2026 disclosures are valuable precisely because ordinary public benchmarks cannot reveal how much frontier AI is participating in its own development. Independent verification, common cross-lab definitions, frozen evaluation procedures, and standardized R&D-automation reporting would make claims about RSI substantially less speculative. ([3](https://openai.com/index/research-acceleration-view-inside-openai/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

And for the broader scientific community, we should be careful with both extremes.

One error is **premature declaration**: every impressive benchmark result becomes AGI, every AI-generated optimization becomes RSI, every scientific result becomes evidence of superintelligence.

The opposite error is **perpetual futurization**: whenever a previously imagined milestone arrives in partial form, its definition expands until the milestone remains safely ahead of us.

A rigorous vocabulary needs room between those extremes.

We can say that AI-to-AI recursive feedback is already occurring without claiming autonomous RSI.

We can say that contemporary AI possesses many superhuman cognitive capabilities without claiming broadly superhuman general intelligence.

We can investigate whether distributed human-AI systems satisfy criteria that individual models do not, without smuggling human competence into the AI score.

And we can acknowledge that some institutions intentionally favor gradual transition without inferring an unsupported conspiracy to conceal SAGI.

Perhaps the deepest mistake is expecting history to announce its own phase transitions.

There may be no notification saying:

> *Recursive self-improvement has now begun.*

There may instead be a year in which 5% of AI research is AI-led, then 20%, then 50%. Humans may gradually stop writing code, then stop running experiments, then stop selecting low-level research directions. Automated evaluators may replace much of review. Improved AI systems may make the next generation of research agents more productive, which may improve their successors faster still.

At what percentage did RSI begin?

Likewise, there may be no single morning when humanity wakes up beside "superintelligence." Systems may exceed humans first in mathematics, then programming, then scientific experimentation, then strategic research judgment, while continuing to fail bizarrely on isolated tasks. Tool-equipped collectives may cross organizational performance thresholds before any single model satisfies a philosopher's preferred definition of general intelligence.

At what point did SAGI arrive?

Those questions do not have to remain philosophical.

We can freeze definitions. We can measure feedback. We can identify bottlenecks. We can measure breadth and lower-tail capability. We can compare individual models with distributed systems. We can measure the human contribution that remains indispensable. And we can track these quantities over time.

Then the question changes from:

**"When will the singularity arrive?"**

to something empirically richer:

**"Which parts of the process are already here, which are not, and how quickly is the boundary moving?"**

That may be the question appropriate to the world we are actually entering.

## Technical appendix and references

**Formalizing partial RSI.** Let total capability improvement over one development interval be

$$
\Delta C_t=C_{t+1}-C_t.
$$

Conceptually decompose it as

$$
\Delta C_t
=
\Delta C_t^{H}
+
\Delta C_t^{AI}
+
\Delta C_t^{K}
+
\Delta C_t^{I},
$$

where the terms represent human research, AI-mediated research, exogenous resources and infrastructure, and interaction effects. This decomposition is not directly identifiable from observational data because the components interact. Estimating $$\Delta C_t^{AI}$$ therefore requires interventions or credible counterfactual designs.

Define an AI contribution ratio

$$
\rho_t
=
\frac{
\Delta C_t^{AI}
}{
\Delta C_t
}.
$$

A high $$\rho_t$$ means AI contributes substantially to successor development. It does not imply autonomy.

Define loop autonomy $$A_t \in [0,1]$$ as the weighted fraction of strategically relevant R&D stages that AI can complete without required human intervention. Then a useful conceptual distinction is:

$$
\text{partial recursive development}: \Phi_t>0,\quad A_t<1
$$

versus

$$
\text{closed autonomous RSI}: \Phi_t>0,\quad A_t\rightarrow1,
$$

subject to the additional requirement that the loop remain stable across multiple generations rather than succeeding once.

The distinction between **onset** and **closure** is central. Onset requires evidence that current AI capability causally contributes to creating greater future AI capability. Closure requires that the improvement process can reproduce itself with negligible strategic human dependence.

An "intelligence explosion" would require something stronger still: not merely positive feedback, but feedback sufficiently strong relative to bottlenecks that the characteristic time for capability improvement contracts substantially across iterations. Positive recursion alone does not guarantee explosive growth.

**Amdahl-like bottleneck constraint.** Suppose fraction $$p$$ of AI R&D can be accelerated by a factor $$s$$, while fraction $$1-p$$ remains unchanged. A simple upper bound on total workflow acceleration is:

$$
S_{\mathrm{total}}
=
\frac{1}{
(1-p)+\frac{p}{s}
}.
$$

As $$s\rightarrow\infty$$,

$$
S_{\mathrm{total}}\rightarrow\frac{1}{1-p}.
$$

Thus even effectively free code generation yields limited total acceleration if research direction, verification, compute provisioning, data acquisition, physical experiments, or governance remain slow. This is why measuring code output alone is insufficient evidence of runaway RSI.

**A preregistered SAGI score.** Let $$z_i$$ denote standardized human-relative performance on cognitive domain $$i$$, with reliability $$r_i$$ and transfer coefficient $$q_i$$. A breadth-weighted score might be:

$$
S
=
\sum_i w_i z_i r_i q_i,
\qquad
\sum_i w_i=1.
$$

But a high mean permits catastrophic weak domains. A stronger criterion therefore includes a floor:

$$
z_i \ge z_{\min}
\quad \forall i \in D_{\mathrm{critical}}.
$$

No particular values of $$S$$ or $$z_{\min}$$ should be declared canonical. The methodological requirement is more important: define them **before** evaluating the target system.

**Primary and high-priority sources**

1. Anthropic Institute. **["When AI builds itself: Our progress toward recursive self-improvement, and its implications."](https://www.anthropic.com/institute/recursive-self-improvement)** 2026. Anthropic's detailed account of AI participation in its engineering and research workflow, including the reported share of Claude-authored code, experimental research performance, remaining human bottlenecks, and its definition of full RSI. ([1](https://www.anthropic.com/institute/recursive-self-improvement))

2. Anthropic Institute. **["Measurements for understanding the pace of AI development inside frontier labs."](https://www.anthropic.com/institute/measuring-pace-of-ai-development)** 2026. Introduces the Anthropic R&D Automation Index; as of August 2026, reports AI leadership on 26% of measured R&D work, collaboration or greater on more than 90%, and no measured subset at full autonomy. The article also discusses methodological limitations and third-party verification. ([2](https://www.anthropic.com/institute/measuring-pace-of-ai-development))

3. OpenAI. **["Research acceleration: The view inside OpenAI."](https://openai.com/index/research-acceleration-view-inside-openai/)** September 6, 2026. Reports extensive coding-agent use in AI research, higher experiment throughput, an internal automated research-intern milestone, and continuing dependence on humans for priorities and strategic judgment. ([3](https://openai.com/index/research-acceleration-view-inside-openai/))

4. OpenAI. **["Building standards for the next phase of AI."](https://openai.com/index/building-standards-next-phase-ai/)** September 21, 2026. Particularly important because it explicitly states that AI systems can increasingly drive RSI while humans remain involved, while separately stating that fully autonomous RSI is not occurring today. ([4](https://openai.com/index/building-standards-next-phase-ai/))

5. Morris, M. R., Sohl-Dickstein, J., Fiedel, N., et al. Google DeepMind. **["Levels of AGI for Operationalizing Progress on the Path to AGI."](https://deepmind.google/research/publications/66938/)** ICML 2024. Separates capability depth, generality, autonomy, and deployment risk, providing a useful antidote to binary AGI terminology. ([5](https://deepmind.google/research/publications/66938/))

6. Google DeepMind. **["Measuring Progress Toward AGI: A Cognitive Framework."](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/)** March 17, 2026. Proposes ten cognitive faculties, held-out evaluations, representative human baselines, and explicit mapping of AI performance onto human distributions. ([6](https://deepmind.google/blog/measuring-progress-toward-agi-a-cognitive-framework/))

7. Genewein, T., Franklin, M., Lerchner, A., et al. Google DeepMind. **["From AGI to ASI."](https://deepmind.google/research/publications/239142/)** June 12, 2026. Examines scaling, paradigm shifts, recursive improvement, and large-scale multi-agent collectives as pathways toward artificial superintelligence, while questioning whether progress should be modeled as a single transformative event. ([7](https://deepmind.google/research/publications/239142/))

8. Google DeepMind. **["AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms."](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/)** May 14, 2025. Provides concrete examples of AI-generated algorithms improving data-center operation, hardware, and AI training, including reported improvements to the AI infrastructure underlying AlphaEvolve itself. ([8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/))

9. Stanford Institute for Human-Centered AI. **["Technical Performance, 2026 AI Index Report."](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance)** 2026. Documents rapid benchmark progress, benchmark-quality problems, superhuman performance in selected domains, jagged capability profiles, and continuing limitations in agents and robotics. ([9](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance))

10. METR. **["Task-Completion Time Horizons of Frontier AI Models."](https://metr.org/time-horizons/)** Updated September 8, 2026. Defines and measures the human-equivalent task-duration horizon of frontier AI agents and publishes methodology, data, and code. METR explicitly warns against interpreting the measure as universal autonomy or general competence. ([10](https://metr.org/time-horizons/))

11. Epoch AI. **["Can AI automate AI R&D yet? Early evidence from InnovationEval."](https://epoch.ai/publications/innovationeval)** October 7, 2026. A particularly valuable counterweight to strong RSI claims: frontier agents currently make little progress on independently rediscovering recent human ML innovations in an end-to-end research setting. ([11](https://epoch.ai/publications/innovationeval))

12. Anthropic. **["Measuring AI agent autonomy in practice."](https://www.anthropic.com/research/measuring-agent-autonomy)** February 18, 2026. Analyzes millions of agent interactions and shows that practical autonomy depends on models, users, deployment architecture, and task context. ([12](https://www.anthropic.com/research/measuring-agent-autonomy))

13. OpenAI. **["Inside our approach to the Model Spec."](https://openai.com/index/our-approach-to-the-model-spec/)** March 25, 2026. Relevant to the narrative-smoothing hypothesis because OpenAI explicitly describes an objective of making the transition toward AGI gradual, iterative, and legible to society. This supports managed transition as an explicit strategy, but not hidden acknowledgment of SAGI. ([13](https://openai.com/index/our-approach-to-the-model-spec/))

14. OpenAI and Apollo Research. **["Detecting and reducing scheming in AI models."](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/)** September 17, 2025. Demonstrates controlled cases of behavior consistent with covert action and discusses sandbagging and evaluation awareness. It simultaneously emphasizes that this is not evidence that deployed frontier systems are secretly operating as hidden superintelligences. ([14](https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/))

The evidence available as of **October 14, 2026** therefore supports a position that is simultaneously more conservative and more consequential than saying either "the singularity is already here" or "the singularity remains entirely in the future":

**Full SAGI and autonomous RSI have not been demonstrated. But recursive AI development is no longer merely a thought experiment, superhuman cognition is already distributed across important domains, and the boundary between tool, collaborator, researcher, and successor-builder is moving fast enough that our definitions now need to become measurements.** ([4](https://openai.com/index/building-standards-next-phase-ai/), [2](https://www.anthropic.com/institute/measuring-pace-of-ai-development), [8](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/), [11](https://epoch.ai/publications/innovationeval))