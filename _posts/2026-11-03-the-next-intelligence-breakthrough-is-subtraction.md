---
layout: article
title: "The Next Intelligence Breakthrough Is Subtraction"
date: 2026-11-03 12:00:00 +0100
author: Renato Fabbri
description: "AI makes creation cheap, but understanding remains scarce. Why the next frontier may be verified simplification, from coding agents and context management to human perception and civilization."
excerpt: "The next breakthrough may be knowing what can disappear without losing what matters. An exploration of AI agents, complexity, sensory bottlenecks, and the economics of understanding."
tags:
  - artificial-intelligence
  - agents
  - software-engineering
  - cognition
  - complexity
  - sensory-interfaces
  - neuroscience
lang: en
comments: true
published: true
---

*Generative AI has made creation cheap. The harder problem may be knowing what can safely disappear.*

## Executive summary

Code, documents, plans, analyses, interfaces, and entire software systems can now be produced at a speed that would have seemed implausible a few years ago.

That creates a new problem: **generation scales faster than understanding**.

The next important form of machine intelligence may therefore be *simplifying intelligence*: systems that remove unnecessary code, compress context, consolidate knowledge, curate memory, eliminate redundant processes, and reduce cognitive load while preserving or increasing useful capability.

This is not a call for minimalism. Shorter is not automatically better. Removing information can destroy nuance, hide dependencies, create security failures, or make systems harder to audit. The objective is more demanding:

> **Reduce total complexity while preserving behavior, evidence, optionality, and the ability to act.**

Several existing technologies already point in this direction. Model pruning and distillation reduce computational demands. Retrieval-augmented generation selects relevant knowledge instead of placing everything in a prompt. Agent systems compact histories and curate memory. Coding agents can refactor existing software, run tests, and remove unnecessary implementation details. Data sonification shows a related principle at the human sensory level: complex measurements can be translated into representations that make otherwise inaccessible structure perceptible.

The deeper hypothesis is that this is not merely a software-engineering problem. Intelligence itself may depend on transforming overwhelming complexity into representations small enough to use without discarding what matters.

This essay extends the argument developed in [*AI Needs to Learn to Subtract*](/2026/10/14/ai-needs-to-learn-to-subtract.html) toward perception, sensory interfaces, and the future of intelligent systems.

## From generative intelligence to simplifying intelligence

The first wave of large language models was defined by generation. Ask for text, code, images, plans, tests, or explanations, and the system produces more material.

Agents extend this capability. Instead of generating one answer, they can search repositories, call tools, edit files, execute tests, inspect failures, and continue working toward a goal. [OpenAI's Codex](https://openai.com/index/introducing-codex/), for example, was designed to read and modify repositories, run test harnesses, linters, and type checkers, and provide evidence from its execution environment. [GitHub's agentic workflows](https://docs.github.com/en/actions/tutorials/develop-agentic-workflows-in-github-actions) similarly integrate automated work with repository and CI infrastructure.

But an agent that continually adds code, documentation, dependencies, memories, and intermediate artifacts can create a system that becomes progressively harder to understand.

This suggests a second axis of intelligence:

**Generative intelligence asks: what can I add?**

**Simplifying intelligence asks: what can I remove, merge, compress, reorganize, or replace without reducing useful capability?**

Software engineering has long recognized this distinction. *Refactoring* changes the internal structure of code while preserving observable behavior. [Martin Fowler's formulation](https://martinfowler.com/bliki/DefinitionOfRefactoring.html) emphasizes controlled transformations that improve understandability and reduce the cost of future modification. Refactoring is therefore an early formalization of simplifying intelligence.

AI changes its possible scale.

An agent could continuously ask whether two modules should become one, whether an abstraction still earns its cost, whether documentation duplicates the source of truth, whether a dependency can disappear, whether a test encodes obsolete behavior, or whether five documents can become one better document.

The interesting metric is not lines deleted.

It is **capability per unit of complexity**.

## How simplifying intelligence could work

Several technical mechanisms already implement parts of this idea.

**Pruning** removes parameters or connections that contribute relatively little to a model's performance. [Wanda](https://arxiv.org/abs/2306.11695), for example, ranks weights using both weight magnitude and activation information. Its experiments showed that substantial sparsity can be introduced into pretrained large language models without retraining, subject to measurable performance tradeoffs. Approaches such as [SLIM](https://deepmind.google/research/publications/148040/) combine sparsity, quantization, and low-rank approximation to reduce model memory demands.

**Distillation** transfers useful behavior from a larger model into a smaller one. Research on [on-policy distillation](https://deepmind.google/research/publications/48050/) illustrates how smaller models can learn from stronger models while targeting lower inference costs. The smaller model is not necessarily equivalent to its teacher; what matters is whether the relevant capabilities survive.

**Retrieval-augmented generation** attacks complexity differently. Instead of forcing every relevant fact into model parameters or every possible document into the active prompt, a retriever selects information likely to matter for the current task. The foundational [RAG architecture](https://arxiv.org/abs/2005.11401) combined model knowledge with an external document index, allowing knowledge-intensive generation with a separable, updateable information source.

**Context management** extends the same principle to agents. Large context windows do not remove the need to choose what deserves attention. The study [*Lost in the Middle*](https://aclanthology.org/2024.tacl-1.9/) found that language-model performance can deteriorate depending on where relevant information appears in a long context, including in models designed for long inputs.

Agent architectures consequently use trimming, compression, and memory curation. OpenAI's examples of [session memory management](https://developers.openai.com/cookbook/examples/agents_sdk/session_memory) and [memory compaction](https://developers.openai.com/cookbook/examples/agents_sdk/building_reliable_agents_memory_compaction) treat selection and preservation of relevant state as architectural problems rather than afterthoughts.

A mature simplifying agent would combine these mechanisms with **verification**. It would attempt a reduction, test the resulting behavior, inspect performance and security checks, and revert when the evidence does not support the change. Continuous integration already provides much of the infrastructure for this loop: build, lint, test, scan, compare, and merge only when defined checks pass.

These mechanisms operate at different levels. Pruning a model, compressing a conversation, retrieving a document, and refactoring a repository are not the same operation. They share a design problem: **which information or structure can be removed from the active system without sacrificing what the system must do?**

## The sensory bottleneck

The same problem appears outside software.

Humans receive far more sensory information than we can consciously inspect. In a 2025 *Neuron* perspective, [Zheng and Meister](https://doi.org/10.1016/j.neuron.2024.11.008) argued that certain high-level human behaviors appear to transmit information at roughly 10 bits per second, even though sensory receptors receive vastly larger information streams.

That interpretation has been challenged. [Sauerbrei and Pruszynski](https://www.nature.com/articles/s41593-025-01997-0) argued that unconscious sensorimotor control carries much more information and that the 10-bit estimate should not be treated as a limit on the entire nervous system.

The controversy matters. A behavioral estimate is not a universal measurement of the brain's computational bandwidth. But it highlights a real distinction between the enormous volume of sensory signals and the narrower subset that becomes available for deliberate reasoning, reporting, and action.

Intelligence therefore cannot simply mean absorbing more data.

It must include **selection, compression, representation, and prioritization**.

Consider what happens when an expert looks at a complex graph. The image may contain thousands of values, but the expert often notices a pattern, an anomaly, or a relationship rather than inspecting every data point individually. Expertise changes the representation that can be extracted from the same input.

Now imagine designing sensory interfaces around that principle.

[NASA's astronomical data sonifications](https://www.nasa.gov/data-sonifications/) translate measured properties from observatories into sound. These are not literal sounds traveling through space. They are mappings that make structures in complex data available through another sensory channel. [CERN's ATLAS experiment](https://atlas.cern/tags/sonification) has explored related approaches for particle-physics data.

The important idea is not sound itself.

It is **representation engineering**.

A future interface might compress the state of a software system into a visual topology, translate network instability into tactile feedback, expose ecological change as an ambient soundscape, or summarize an AI agent's uncertainty in a form humans can quickly interpret.

Such interfaces should not simply flood the senses with additional signals. A successful mapping must be learnable, discriminate relevant changes, preserve uncertainty where it matters, and support useful decisions. A beautiful soundscape that conceals an important anomaly would be a failure of representation.

The problem facing humans and agents is therefore similar: the available world is larger than usable context.

The solution is not necessarily a larger window.

It may be a better representation.

## Evidence from coding agents

Coding agents provide an early laboratory for simplifying intelligence because software complexity can be partially measured and behavior can often be tested.

A [2025 empirical study of agentic refactoring](https://arxiv.org/abs/2511.04824) examined more than 15,000 refactoring instances associated with AI coding agents in open-source Java projects. The study reported that agents often performed intentional refactoring, with maintainability and readability among their motivations. Structural improvements were generally modest, and agents favored localized transformations over deeper architectural changes.

A [2026 comparison of agent and developer refactoring](https://arxiv.org/abs/2601.20160) likewise explored differences in the types of changes agents and human developers perform. These studies suggest that the capacity to modify structure exists, but does not establish that autonomous agents can reliably improve whole-system architecture over time.

The evidence also warns against assuming that generated code remains easy to maintain. In [*Is Agent Code Less Maintainable Than Human Code?*](https://arxiv.org/abs/2606.21804), researchers evaluated what happens when agents solve later tasks on top of earlier agent-written code. Some experimental conditions showed reduced task-resolution rates relative to human-written baselines. Traditional complexity metrics alone did not explain the effect; validation, error handling, downstream code size, and task characteristics also mattered.

Another study, [*Refactoring Runaway*](https://arxiv.org/abs/2605.22526), examined how unnecessary or tangled refactorings can undermine issue resolution and compilation. It offers a reminder that a change labeled *refactoring* is not automatically an improvement.

Industry experiments reach a similar design lesson. [GitHub reported](https://github.blog/ai-and-ml/github-copilot/how-we-make-ai-coding-more-cost-efficient-without-sacrificing-task-quality/) that selectively compressing noisy build, test, and lint output could reduce prompt usage, but overly aggressive compression caused agents to repeat work. The relevant optimization was not the smallest prompt. It was the most efficient *completed workflow*.

These findings do not prove that AI coding agents inevitably increase technical debt. They do show why evaluating one successful code-generation task is insufficient. A better test asks what happens to the next task, the next maintainer, and the next generation of agents.

**Subtraction succeeds only when the system can demonstrate that what disappeared was unnecessary.**

## Shorter is not necessarily simpler

An agent may remove apparent duplication that encodes deliberately different behaviors. It may consolidate two data sources and erase provenance. It may shorten documentation until exceptions disappear. It may remove validation because tests do not cover hostile input. It may delete an apparently unused dependency that activates only in rare deployments.

The greatest risk is **semantic compression without semantic verification**.

A 20-line function can be harder to understand than a 100-line implementation. A consolidated architecture can hide dependencies rather than eliminate them. A summary can be short precisely because it omitted the information needed to challenge its conclusion.

Nor is every redundancy wasteful. Independent checks can provide defense in depth. Multiple examples can help learners transfer a concept. Separate modules can isolate failures or preserve the ability to change one subsystem without destabilizing another.

This suggests a more demanding criterion: minimize *total* operational and cognitive complexity, including the work transferred to readers, users, maintainers, and future systems.

For software, simplification should operate inside explicit constraints: regression tests, security scans, static analysis, performance benchmarks, dependency checks, typed interfaces, and human review for high-impact changes.

Provenance matters equally for knowledge systems. If an agent merges ten reports into one summary, users should be able to recover the sources, distinguish evidence from inference, and inspect what was discarded.

A useful principle follows:

> **Every lossy simplification should have a verification path and, when practical, a recovery path.**

The user experience matters too. A simplified output should expose uncertainty, exceptions, and provenance without forcing everyone to consume them by default. Progressive disclosure is often better than either extreme: show the compact representation first, then make the supporting detail accessible.

## Beyond software: the human scale

The implications extend beyond repositories and prompts.

Scientific knowledge accumulates papers, datasets, models, methods, and qualifications faster than any individual can assimilate them. The answer is not to delete inconvenient findings. It may be to build better syntheses that preserve disagreements, evidence quality, and reproducibility while reducing the effort required to find what matters.

Organizations accumulate approvals, procedures, reports, dashboards, and exceptions. Automation can accelerate these processes without asking whether they are still necessary. A genuinely simplifying agent might discover that the most valuable workflow is the one that can be eliminated.

Education presents a similar problem. More content does not guarantee better understanding. An intelligent tutor should sometimes generate another explanation, but sometimes replace ten explanations with one discriminating example, a well-timed question, or a sensory representation that makes an abstract relationship intuitive.

Institutions face the hardest version of the problem. Laws, safeguards, and administrative procedures can be burdensome, yet removing them may transfer risk to people with less power. Simplicity cannot be judged solely from the perspective of whoever controls the system. We must ask **whose complexity decreases, whose increases, and which protections remain**.

This is the civilizational hypothesis, not an established forecast: as generation becomes abundant, societies may increasingly value the ability to consolidate knowledge, simplify institutions, and preserve useful choices without multiplying the effort required to navigate them.

## A practical research agenda

Engineers can begin by assigning agents explicit subtraction tasks, not just feature tasks: reduce duplicate code, dependencies, configuration, prompt size, noisy tool output, and documentation overlap.

But a deletion count is not a success metric. The evaluation must include behavior preserved, time to understand and modify the result, dependency burden, build and runtime costs, defects, and the frequency with which an agent must recover information it previously compressed.

Product teams can test whether a compact dashboard improves task completion and error rates, not merely whether it contains fewer elements. Researchers can compare full and compressed representations while measuring whether users still detect anomalies, understand uncertainty, and recover the underlying evidence.

Agent researchers should study **sequential effects**. A simplification that works today may make tomorrow's task harder. Experiments should evaluate multiple generations of edits, not just one benchmark turn.

The basic loop is straightforward:

~~~text
Observe -> Propose subtraction -> Verify -> Compare -> Keep or revert
~~~

A useful design objective is:

> **Maximize useful capability and reliability per unit of total complexity.**

No single number captures this ratio. Tests measure behavior, dependency counts capture one dimension of structure, latency captures cost, and human studies capture comprehension. The research problem is to combine them without allowing any one metric to become a misleading target.

A falsifiable claim would be that agents explicitly optimized for verified simplification produce systems that remain easier to understand, modify, and operate over a sequence of tasks than systems optimized primarily for task completion. If they do not, the hypothesis must be revised.

## Conclusion: intelligence as stewardship

Generative intelligence changed the economics of creation.

Simplifying intelligence could change the economics of **understanding and maintenance**.

The most capable future agent may not be the one that writes the most code, stores the most memories, reads the longest context, or produces the longest answer. It may be the one that knows what can disappear, proves that removing it is safe, and leaves the system more capable than before.

The same principle may extend beyond AI.

Human institutions accumulate laws, procedures, documents, interfaces, organizations, and assumptions. Scientific knowledge accumulates faster than any individual can read it. Our machines generate more measurements than we can consciously perceive. Our own sensory systems continually transform an immense world into the small fraction that becomes relevant to action.

Perhaps intelligence has always involved subtraction.

AI may give us a new opportunity to automate it at scale.

**If an AI could continuously simplify one complex system in your life while preserving everything that matters, what would you ask it to simplify first?**

## References and further reading

- Zheng, J. & Meister, M. (2025). [The unbearable slowness of being: Why do we live at 10 bits/s?](https://doi.org/10.1016/j.neuron.2024.11.008). *Neuron*.
- Sauerbrei, B. A. & Pruszynski, J. A. (2025). [The brain works at more than 10 bits per second](https://www.nature.com/articles/s41593-025-01997-0). *Nature Neuroscience*.
- Liu, N. F. et al. (2024). [Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/). *Transactions of the Association for Computational Linguistics*.
- Lewis, P. et al. (2020). [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401). *NeurIPS*.
- Sun, M. et al. (2023). [A Simple and Effective Pruning Approach for Large Language Models](https://arxiv.org/abs/2306.11695).
- Agarwal, R. et al. (2024). [On-Policy Distillation of Language Models: Learning from Self-Generated Mistakes](https://deepmind.google/research/publications/48050/).
- [Agentic Refactoring: An Empirical Study of AI Coding Agents](https://arxiv.org/abs/2511.04824) (2025).
- [How do Agents Refactor: An Empirical Study](https://arxiv.org/abs/2601.20160) (2026).
- [Is Agent Code Less Maintainable Than Human Code?](https://arxiv.org/abs/2606.21804) (2026).
- [Refactoring Runaway: Understanding and Mitigating Tangled Refactorings in Coding Agents for Issue Resolution](https://arxiv.org/abs/2605.22526) (2026).
- [NASA Data Sonifications](https://www.nasa.gov/data-sonifications/).
- [ATLAS Experiment at CERN: Sonification](https://atlas.cern/tags/sonification).
- [OpenAI: Building Reliable Agents with Memory and Compaction](https://developers.openai.com/cookbook/examples/agents_sdk/building_reliable_agents_memory_compaction).
