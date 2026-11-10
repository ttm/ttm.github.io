---
layout: article
title: "Everyone Will Know Everything"
date: 2026-11-10 17:00:00 +0100
author: Renato Fabbri
description: "From AI and verifiable knowledge to reconstructing events no one recorded: a scientific case for an expanding frontier of what humanity can know, and the physical limits that remain."
excerpt: "The next knowledge revolution may go beyond finding existing records. It may let us reconstruct increasingly remote events from traces we do not yet know how to read."
tags:
  - artificial-intelligence
  - knowledge
  - epistemology
  - information-theory
  - physics
  - quantum-information
  - neuroscience
  - future
lang: en
comments: true
published: true
---

*From universal access to verifiable knowledge, and from verifiable knowledge to recovering a past that no one recorded.*

## The question behind the title

Imagine asking a future intelligence what a particular forest looked like two million years ago.

It answers with a reconstruction of its vegetation, climate, and animals, and shows the physical evidence supporting each conclusion.

That is not science fiction. Researchers have already used ancient environmental DNA preserved in Greenlandic sediments to reconstruct an ecosystem roughly two million years old, including plants and animals absent from the region today. The result was not a recovered video of the past. It was a constrained scientific reconstruction from surviving molecular evidence. [The study appeared in *Nature* in 2022](https://doi.org/10.1038/s41586-022-05453-y).

Now imagine asking what was written inside a scroll buried by the eruption of Vesuvius in AD 79, without physically opening it. High-resolution scanning, computational reconstruction, and machine learning have already made previously inaccessible passages of the Herculaneum scrolls readable. [The Vesuvius Challenge](https://vesuviuschallenge.org/) is an unusually tangible demonstration of how a better measurement-and-inference pipeline can convert inaccessible evidence into historical knowledge.

Or ask what happened when two black holes merged more than a billion years ago. In 2015, detectors on Earth recorded a gravitational-wave signal from such an event. Physicists inferred properties of the collision by comparing the signal with models of general relativity. [The discovery paper](https://doi.org/10.1103/PhysRevLett.116.061102) was published in 2016.

These achievements differ radically in scale, instrumentation, and certainty. But they share a principle:

> **The past can become knowable even when no human being witnessed it, understood it, or deliberately recorded it.**

The evidence may survive in DNA, damaged materials, electromagnetic radiation, gravitational waves, geological strata, or correlations we have not yet learned to measure.

This leads to a provocative thesis: **the frontier of human knowledge is likely to expand not only because we record more of the present, but because we become increasingly capable of reconstructing the unrecorded past.**

The title, *Everyone Will Know Everything*, is deliberately stronger than the evidence. Literal omniscience is not an established physical possibility. But a world in which a far larger share of knowable reality becomes accessible to ordinary people is a credible technological trajectory. And the ultimate question, whether the physical universe retains recoverable evidence of events we currently consider lost, is a serious scientific question rather than a prediction disguised as certainty.

## 1. We are moving from information scarcity to access scarcity

For much of history, the principal difficulty was acquiring information.

A person needed a library, a specialist, a laboratory, an institution, or years of training to obtain answers that might already exist somewhere. The internet made publication and distribution much cheaper. Search engines made documents discoverable. Large language models made it possible to ask for explanations in ordinary language.

But none of these developments made the world's knowledge complete, consistent, or reliably accessible.

A document may exist but be impossible to locate. A database may be inaccessible to other systems. A result may be wrong, outdated, or unsupported. Two disciplines may describe the same phenomenon using incompatible vocabularies. A model may give a fluent answer without distinguishing observation from inference.

The next step is therefore not simply to generate more text.

It is to build systems that can answer four questions:

1. **What is known?** Locate the relevant observations, records, models, and claims.
2. **Why should we believe it?** Preserve sources, provenance, methods, uncertainty, and competing explanations.
3. **What follows from it?** Connect evidence across fields and derive conclusions that can be tested.
4. **What can be recovered?** Infer information that was never explicitly written down, measured directly, or stored in a conventional archive.

The fourth question is the most radical. It turns knowledge infrastructure into an instrument of discovery.

## 2. A universal library is not enough

The idea of machine-readable, interconnected knowledge predates today's generative AI.

The Semantic Web, linked data, and knowledge graphs attempt to represent entities, relationships, and claims in forms that software can traverse and combine. Projects such as [Wikidata](https://www.wikidata.org/) demonstrate how collaboratively maintained structured knowledge can connect concepts across languages and domains.

But the difference between a *knowledge graph* and a *trustworthy knowledge system* is substantial.

A claim needs more than a subject, predicate, and object. It may need a source, a timestamp, a measurement procedure, a confidence interval, a jurisdiction, a definition, or a record of how it was derived. The [W3C PROV standard](https://www.w3.org/TR/prov-o/) provides a framework for describing provenance, although adopting a provenance format does not itself establish that a claim is true.

This distinction matters because a sufficiently large system can connect errors as efficiently as it connects facts.

Retrieval-augmented generation offers a practical architectural direction: combine a language model with external evidence that can be retrieved and updated independently. The [original RAG paper](https://arxiv.org/abs/2005.11401) formalized one influential version of this approach. Retrieval can improve grounding, but it cannot guarantee the correctness of a source or the reasoning built on it.

A credible future knowledge system would therefore expose a chain of support:

**Question → evidence → interpretation → uncertainty → answer.**

It would also know when the evidence is insufficient.

That last ability is not a minor feature. It is part of what separates knowledge from confident storytelling.

## 3. The first revolution will be verifiable answers

Consider a question that currently requires weeks of work: What does the combined evidence from several scientific disciplines imply about a particular disease mechanism, historical migration, or environmental change?

The relevant information may be distributed across thousands of papers, laboratory datasets, archival records, and incompatible databases.

A sufficiently capable system could identify the evidence, normalize terminology, detect contradictions, compare methods, reproduce calculations, and propose a synthesis. It could attach each conclusion to its supporting observations and make its reasoning available for independent checking.

This is a plausible continuation of technologies already in use, not a claim that present-day AI can do all of it reliably.

The difficult work lies in verification: measuring source quality, resolving conflicts, evaluating causal claims, checking calculations, and resisting fabricated or misleading evidence.

The goal is not a machine that always produces an answer.

It is a machine that makes **well-supported answers dramatically cheaper to obtain**, while making unsupported answers easier to recognize.

If that succeeds, the experience of knowledge changes. Instead of memorizing the location of information, people can interrogate an evolving body of evidence.

That would already be a major shift in civilization's cognitive infrastructure.

## 4. The second revolution will be reconstructing what was never recorded

This is where the argument becomes more interesting.

A conventional archive contains information intentionally preserved by people or instruments. A physical system contains traces of processes that occurred whether or not anyone was trying to document them.

An ancient sediment layer is not a database in the ordinary sense. Yet it can preserve biological and climatic information. A charred papyrus is not readable to the naked eye. Yet its geometry and residual material properties can encode text. A gravitational wave is not a historical report. Yet it carries information about an astrophysical event.

Scientific reconstruction is an *inverse problem*: infer a past state or process from effects that survive into the present.

Schematically, if an event or history is represented by H and the surviving evidence by E, the task is to infer which histories are compatible with E.

A useful formal expression is Bayes' rule:

$$
P(H\mid E) \propto P(E\mid H)P(H).
$$

The equation does not make reconstruction automatic. It states the logic of updating beliefs about possible histories when evidence becomes available.

Three things can improve over time:

- **Measurement:** instruments detect weaker, smaller, or previously invisible traces.
- **Models:** better physics, chemistry, biology, and historical knowledge constrain which past events could have produced those traces.
- **Inference:** more capable algorithms combine heterogeneous evidence and quantify which reconstructions remain plausible.

When all three improve together, questions that once had no scientific answer can become answerable.

The Greenland DNA result is a strong example. The organisms were not filmed, and no written record existed. Nevertheless, fragments preserved in minerals made part of that ancient ecosystem recoverable. The finding does not imply that every organism, movement, or interaction can be reconstructed. It demonstrates that the category of *recoverable historical information* is larger than earlier technology allowed.

**The probable development is not that we will recover every lost detail. It is that the set of past events we can reconstruct will keep growing, often in ways that would have seemed impossible before the relevant instruments existed.**

That is a much stronger proposition than an unsupported promise of omniscience, because it follows an established pattern of scientific progress.

## 5. The universe is not a perfect archive we can simply search

A tempting argument goes like this: if fundamental physics preserves information, then everything that ever happened must still be recoverable.

The first part has a serious foundation. In standard quantum mechanics, an isolated system evolves unitarily, preserving distinctions between quantum states. Research on quantum information scrambling investigates how initially localized information becomes distributed across many degrees of freedom. Experiments have demonstrated signatures of scrambling and recovery protocols in carefully controlled quantum systems, including [work reported in *Nature* in 2019](https://doi.org/10.1038/s41586-019-0952-6).

But the conclusion does **not** follow.

**Information conservation is not the same as information accessibility.**

Reversing the dynamics of an idealized, fully controlled quantum system is one thing. Reconstructing an event after its traces have dispersed through an uncontrolled environment is another.

Several obstacles are fundamental or potentially overwhelming:

- **Incomplete observations.** Different histories can produce the same accessible evidence. If the surviving data do not distinguish them, no algorithm can identify a unique past with justified certainty.
- **Decoherence and scrambling.** Information can become encoded in correlations involving an enormous number of environmental degrees of freedom, far beyond practical measurement or control.
- **Quantum measurement limits.** An arbitrary unknown quantum state cannot be perfectly cloned, and measurements cannot extract every property of a single unknown state without constraints.
- **Chaos and computational cost.** Small uncertainties can grow, while reconstructing microscopic dynamics may demand resources far beyond any feasible machine.
- **Causal horizons.** Some information cannot reach an observer because of the causal structure of spacetime.

The black-hole information problem makes these distinctions particularly vivid. Theoretical developments suggest important ways that unitary evolution may be compatible with black-hole evaporation, but they do not establish that an observer can reconstruct arbitrary events from the remote past.

A conversation in an unrecorded room two centuries ago is therefore not equivalent to a hidden scroll. The scroll may preserve stable, measurable evidence. The conversation's relevant acoustic and environmental traces may have dispersed so thoroughly that multiple incompatible conversations fit everything we could ever observe.

Even a perfect AI cannot infer a unique answer from evidence that does not contain enough distinguishing information.

This is the boundary a scientifically credible vision must respect.

## 6. Why the long-term direction is still compelling

Once those limits are acknowledged, the case for progress becomes clearer rather than weaker.

We do not need to assume universal recoverability to predict a substantial expansion of historical knowledge.

We already know that new measurement modalities can expose evidence invisible to earlier generations. We already know that algorithms can recover meaningful structure from noisy, incomplete observations. We already know that combining independent sources can constrain explanations more tightly than any one source alone.

And we have barely begun to integrate the world's scientific instruments, archives, models, and datasets into systems capable of reasoning across them.

A plausible progression is:

**First: connected evidence.** Scientific publications, sensor data, archives, and structured records become easier to query together, with provenance and uncertainty attached.

**Next: verified inference.** AI systems move beyond summarization to reproducible analysis, model comparison, contradiction detection, and the generation of testable hypotheses.

**Then: reconstruction by design.** New instruments and experiments are built specifically to recover hidden or historical information. The AI is not merely reading existing records; it helps decide which measurement would best distinguish competing accounts of the past.

**Finally: physical retrodiction as a general research discipline.** Researchers systematically map which aspects of past states can be recovered from present traces, at what resolution, over what timescales, and under which physical assumptions.

The first stages are already under development. The later stages are research directions, not scheduled product releases.

The most consequential advance may be a shift from asking, *Where is the record?* to asking, *What physical evidence would the event have left, and can we measure it?*

That shift is the bridge between universal access to existing knowledge and discovery of previously inaccessible knowledge.

## 7. Human cognition will not need to store everything

A separate question concerns the word *everyone*.

If knowledge becomes vastly more accessible, must each person acquire an enormous memory or a direct neural connection to a global database?

Probably not.

We already rely on external cognitive systems: language, writing, libraries, calculators, software, and networks. AI can extend this arrangement by turning complex questions into accessible explanations and by adapting representations to the user's expertise.

Brain-computer interfaces may eventually contribute, especially where communication or sensory functions are impaired. A [2023 *Nature* study](https://doi.org/10.1038/s41586-023-06377-x), for example, demonstrated decoding of attempted speech in a participant with paralysis, reaching 62 words per minute under the reported experimental conditions. This is a meaningful clinical research achievement. It is not evidence that arbitrary memories can be uploaded or that knowledge can be downloaded directly into a healthy brain.

For most people, the near-term transformation may be less invasive and more powerful than it sounds:

**You do not need to contain all knowledge if you can reliably reach, question, understand, and test the knowledge relevant to you.**

The bottleneck becomes judgment rather than storage.

That connects this vision to a related argument I explored in [*The Next Intelligence Breakthrough Is Subtraction*](/2026/11/03/the-next-intelligence-breakthrough-is-subtraction.html): intelligent systems must not only accumulate information, but reduce it into representations that preserve what matters.

A future knowledge infrastructure must be capable of both expansion and compression.

## 8. What would make the hypothesis scientifically testable?

A serious research program needs more than a grand title. It needs benchmarks that distinguish genuine recovery from plausible fabrication.

One useful experiment would begin with a physical process whose history is known to researchers but hidden from the reconstruction system. Investigators would retain only controlled, partial measurements of its final state. The system would then attempt to infer properties of the earlier process.

Success should be measured against baselines, not against the persuasiveness of the generated narrative.

Relevant metrics include:

- **Recovery accuracy:** Which past variables can be inferred correctly, and at what resolution?
- **Calibration:** When the system assigns 80% confidence, is it right approximately 80% of the time across comparable tests?
- **Identifiability:** Does the evidence genuinely distinguish the proposed history from alternatives?
- **Information gain:** How much does each new measurement reduce uncertainty about the past?
- **Generalization:** Does a method work on unfamiliar systems, rather than only on examples resembling its training data?
- **Reproducibility:** Can independent teams recover compatible conclusions from the same physical evidence?

An especially interesting benchmark would test *active reconstruction*: allow an AI to choose additional measurements under a fixed budget, then evaluate whether its choices improve recovery compared with standard experimental designs.

Such tests would turn the abstract question of recovering the past into a cumulative science of what can be inferred, measured, and verified.

A negative result would also matter. If certain classes of histories remain indistinguishable even with substantially improved instruments, that would help identify real boundaries rather than merely temporary engineering failures.

## 9. Knowing more does not mean everyone should see everything

The technological possibility of accessing information is different from the legitimacy of accessing it.

Medical records, intimate conversations, private communications, and other personal data raise questions that cannot be solved by making retrieval more powerful. A world in which a few institutions can reconstruct everyone's activities would not fulfill the democratic promise suggested by the title.

The relevant distinction is between **the collective capacity to know** and **unrestricted individual access to every fact**.

A trustworthy infrastructure would need authorization, privacy protections, auditable access, and meaningful limits on what may be collected or disclosed. It would also need to preserve dissent and uncertainty. A single global system that presents its interpretations as unquestionable truth could make society less knowledgeable, not more.

These are not reasons to abandon the scientific project. They are constraints on what a successful version would look like.

## 10. The destination: a shrinking boundary of the unknowable

So will everyone know everything?

Not literally, and not on any timetable science can currently defend.

But the weaker-sounding claim is already extraordinary:

**An increasing fraction of what humanity once considered unknowable may become reconstructable, explainable, and accessible.**

Some of that knowledge already exists in documents waiting to be connected. Some exists in measurements waiting to be interpreted. Some survives as physical traces waiting for instruments we have not yet invented.

The crucial point is that the third category is real. It is not merely a philosophical possibility. Ancient DNA, hidden manuscripts, and gravitational-wave astronomy have already shown that new techniques can turn unrecorded or inaccessible events into evidence-based accounts.

The logical next step is to make this capability more systematic: better sensors, stronger models, AI-assisted experiment design, cross-disciplinary inference, and explicit uncertainty.

Will that process eventually reach the words of a forgotten conversation, the exact path of a molecule, or the detailed state of a brain centuries ago? We do not know. Some such questions may be permanently underdetermined by accessible evidence.

But there is no need to pretend that every detail is recoverable in order to recognize the direction of travel.

The scientific wager is that **the boundary between the lost and the knowable is not fixed**. It depends on the traces that survive, the laws that connect them to their causes, and our ability to extract information from those traces.

That boundary has moved before.

There are strong reasons to expect it to move again.

And if it keeps moving, the deepest achievement of future intelligence may not be that it remembers everything we have recorded.

It may be that it helps us discover how much of reality was never truly beyond investigation.

---

## Selected sources and further reading

1. Kjær, K. H., et al. (2022). [A 2-million-year-old ecosystem in Greenland uncovered by environmental DNA](https://doi.org/10.1038/s41586-022-05453-y). *Nature*.
2. Vesuvius Challenge. [Research program and open data for reading the Herculaneum scrolls](https://vesuviuschallenge.org/). See also [*Nature*'s report on the first recovered passages](https://www.nature.com/articles/d41586-024-00346-8).
3. Abbott, B. P., et al. (2016). [Observation of Gravitational Waves from a Binary Black Hole Merger](https://doi.org/10.1103/PhysRevLett.116.061102). *Physical Review Letters*.
4. W3C. [PROV-O: The PROV Ontology](https://www.w3.org/TR/prov-o/). A standard for representing data provenance.
5. Lewis, P., et al. (2020). [Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401).
6. Landsman, K. A., et al. (2019). [Verified quantum information scrambling](https://doi.org/10.1038/s41586-019-0952-6). *Nature*.
7. Willett, F. R., et al. (2023). [A high-performance speech neuroprosthesis](https://doi.org/10.1038/s41586-023-06377-x). *Nature*.

*The proposed trajectory is an evidence-based forecast, not a claim that literal omniscience is physically possible. Its strongest prediction is progressively broader, better-verified recovery of information from existing records and surviving physical traces.*
