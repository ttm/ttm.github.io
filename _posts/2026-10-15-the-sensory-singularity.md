---
layout: article
title: "The Sensory Singularity: How Human Perception May Become a Programmable Interface"
date: 2026-10-15 13:48:00 +0200
author: Renato Fabbri
description: "The singularity is usually discussed in terms of artificial intelligence. But if humans remain inside increasingly intelligent human-machine systems, our sensory channels may become one of the decisive interfaces of the transition."
excerpt: "From sensory augmentation and digital smell to bidirectional brain interfaces and synthetic senses: a research-based examination of how human perception could evolve as humans and machines become increasingly coupled."
tags:
  - artificial-intelligence
  - singularity
  - sensory-stimulation
  - neurotechnology
  - brain-computer-interface
  - sensory-augmentation
  - BioSynCare
  - SSTIM
  - human-machine-interaction
comments: true
published: true
---

*The technological singularity is usually imagined as an explosion of machine intelligence. But if humans remain inside the loop, another question becomes unavoidable: through what channels will that intelligence reach us?*

## Abstract

Discussions of artificial general intelligence, recursive self-improvement, and the technological singularity usually focus on computation: how capable machines become, how quickly they improve, and whether their intelligence surpasses ours. Much less attention is given to the other side of the interface. Humans do not ingest arbitrary digital state directly. We encounter the world through sensory and bodily systems, integrate those signals with memory and cognition, and act back upon the environment.

The familiar description of humans as possessing five senses is already an oversimplification. Vision, audition, olfaction, and gustation coexist with multiple somatosensory channels, proprioception, vestibular sensation, nociception, thermosensation, chemesthesis, and internal bodily signals. Human studies of PIEZO2 deficiency, for example, show that discriminative touch and proprioception can be profoundly impaired while pain, itch, temperature, and other somatosensory responses remain relatively preserved, demonstrating that what colloquial language calls "touch" already consists of partly separable information channels. Vestibular prostheses provide another demonstration: electrical stimulation of vestibular-nerve branches can encode head motion and improve aspects of posture and gait in people with severe bilateral vestibular loss. At the same time, sensory-augmentation experiments show that humans can learn environmental variables that biology did not originally provide as a continuous perceptual channel. Participants trained for weeks with the *feelSpace* belt, which maps magnetic north onto vibration around the waist, developed measurable changes in spatial cognition and, in several studies, reported qualitative changes in spatial perception. A 2023 controlled study found improved cardinal and survey knowledge after six weeks of training. Visual-to-auditory sensory-substitution experiments similarly show that information entering through one modality can recruit neural systems normally associated with another kind of perceptual computation. Neurotechnology goes further. Cochlear and vestibular implants already bypass parts of natural sensory transduction. Intracortical stimulation of human somatosensory cortex can create localized artificial tactile percepts, and bidirectional brain-computer interfaces have improved robotic-arm use by returning touch information directly to cortex. Direct stimulation of visual cortex can evoke phosphenes; experiments have even used such artificially induced visual events to transmit otherwise unavailable information for navigation. More recent work is increasing the richness and stability of artificial touch delivered through intracortical microstimulation. Chemical senses are beginning to enter the digital interface as well. Wearable olfactory systems can release programmable odorants with controlled timing and concentration; newer devices have greatly reduced response latency. Separate work has demonstrated algorithmic formulation of odor mixtures from desired descriptive properties. Taste research has shown that electrical and thermal stimulation of the tongue can evoke or modify gustatory experiences, while electrophysiological interfaces can decode taste-related information. Yet the extrapolation from artificial sensations to "uploading ideas" or "writing memories" must be made cautiously. Human hippocampal stimulation can modulate memory performance, and targeted non-invasive temporal-interference stimulation has been shown to modulate hippocampal activity and episodic-memory accuracy. Experimental hippocampal prosthesis work has attempted to model neural transformations associated with memory encoding. None of this is equivalent to injecting a specific autobiographical memory, concept, or body of knowledge into a person. The scientific difference between **sensory writing**, **state modulation**, **memory facilitation**, and hypothetical **semantic writing** is fundamental. The central argument of this article is therefore not that humans are about to download arbitrary thoughts. It is more defensible, and perhaps more consequential:

> **If the singularity is a transition in which human and machine intelligence become increasingly interdependent, then the evolution of human sensory input may be one of its central but underappreciated dimensions.**

The relevant trajectory may run from better audiovisual interfaces, through haptic and chemical interfaces, into sensory substitution and augmentation, then bidirectional neuroprostheses, and eventually perhaps into forms of neural input for which our present distinction between "sense", "information", and "thought" becomes inadequate.

BioSynCare, SSTIM, and SSTIM Workbench occupy an unusually relevant position in this landscape today, not because they constitute advanced neural interfaces, and not because present evidence supports extravagant claims, but because they work on an earlier layer that the field will increasingly need: **structured, reproducible, parameterized, evidence-aware sensory stimulation**. BioSynCare currently operates at the application layer, primarily coordinating auditory stimulation, guided breathing, and non-flickering visual guidance; SSTIM formalizes descriptions of stimulation and evidence; SSTIM Workbench makes part of that framework executable, inspectable, queryable, and extensible. Their importance may ultimately lie as much in creating a language and experimental discipline for programmable sensation as in any single stimulation technique. (see references 17-19)

## The singularity has a sensory bottleneck


A useful starting intuition is simple: **machines can process information in forms that humans cannot directly perceive**.

An artificial system can ingest matrices, token streams, radio spectra, infrared images, genomic sequences, network telemetry, magnetic fields, satellite feeds, financial order books, and millions of sensor measurements. Humans can understand some of this information only after it has been transformed into something our perceptual and cognitive systems can work with: pixels, graphs, words, sounds, vibrations, symbols.

Today, most general-purpose human-computer interaction therefore passes through a surprisingly narrow set of biological interfaces. Screens mainly address vision. Speakers and headphones address audition. Keyboards, mice, touchscreens, controllers, watches, and emerging haptic systems use motor output and cutaneous sensation. Virtual and augmented reality make these channels more immersive but still rely overwhelmingly on sight, sound, and touch. Research into olfactory and gustatory interfaces exists, but it is much less mature and standardized. This matters if human-machine coupling becomes substantially deeper.

Suppose an AI system observes a complex environment using thousands of sensors and updates a high-dimensional internal representation hundreds of times per second. It might identify patterns no human can discover independently. But if the AI must communicate those patterns to a person through several paragraphs on a screen, the bottleneck has moved. The limiting factor is no longer computation alone. It is the transformation between machine representation and human experience.

We can express the interface schematically as

\[
X(t)
\;\xrightarrow{\;E\;}\;
S(t)
\;\xrightarrow{\;N\;}\;
P(t)
\;\xrightarrow{\;C\;}\;
A(t),
\]

where \(X(t)\) is information available to the machine, \(E\) is an encoding process, \(S(t)\) is a physical or neural stimulus, \(N\) represents nervous-system processing, \(P(t)\) is the resulting perceptual or cognitive state, \(C\) includes interpretation and decision processes, and \(A(t)\) is action.

Most current interface research changes \(E\): we find better ways to represent machine information as images, language, sound, or vibration.

A deeper sensory transition changes \(S\) and perhaps parts of \(N\).

Instead of representing a variable on a dashboard, we might map it continuously onto the body. Instead of showing direction visually, a belt might make direction continuously tactile. Instead of representing robotic touch as an icon, sensors might drive somatosensory cortex. Instead of displaying a virtual flower, an interface might deliver a timed molecular mixture to the nose. Eventually, an artificial signal might be encoded through a peripheral nerve or cortical stimulation pattern that has no natural external analogue.

The *feelSpace* experiments are particularly important because they demonstrate that this is not merely science fiction. Magnetic north is not normally available to humans as a continuous conscious percept. Yet a stable mapping from compass data to waist vibration can be learned over weeks, affect navigation, alter reported spatial experience, and support the acquisition of new sensorimotor contingencies. This does not prove the creation of a biologically independent sensory organ. It does demonstrate something nearly as important for human-machine integration: **the adult brain can learn to treat technologically generated information as part of an ongoing perceptual loop.** Sensory substitution provides complementary evidence. In visual-to-auditory substitution, visual structure can be transformed into sound patterns and learned by users. Neuroimaging work has shown that object shape conveyed through such auditory transformations can recruit lateral occipital regions associated with shape processing. Other experiments have used auditory transformations to provide spatial information that participants could not normally obtain visually. The significance is not that hearing literally becomes vision, but that cortical computation is considerably less tied to a single physical transducer than a simplistic "five input ports" model would suggest. There is an important conceptual correction here. **Senses are not passive computer inputs.** Perception depends on action, attention, previous experience, cross-modal integration, bodily state, and recurrent neural processing. A person does not simply receive an RGB stream through the eyes and PCM audio through the ears. The nervous system actively samples, predicts, integrates, suppresses, amplifies, learns, and acts. The most successful artificial senses may therefore be those embedded in stable action-perception loops rather than those attempting to maximize raw data throughput.

This is why human-machine fusion need not begin with a cable implanted in the cortex. It may begin with something much less dramatic: an artificial variable becomes continuously available, is mapped consistently onto an existing sensory channel, becomes behaviorally useful, and eventually stops feeling like a notification that must be consciously interpreted.

At that point, a machine-generated data stream has begun to function perceptually.


## What would count as a new sense?

Before asking whether future humans will acquire new senses, we should clarify what a sense is.

The traditional list (vision, hearing, touch, taste, and smell) is culturally useful but biologically incomplete. Even within somatosensation, separable mechanisms contribute to discriminative touch, proprioception, pain, itch, vibration, pressure, and thermal perception. The selective deficits observed in people with inactivating PIEZO2 variants provide especially clear evidence that proprioception and discriminative mechanosensation cannot simply be collapsed into an undifferentiated "sense of touch." Vestibular sensation provides information about head motion and orientation, while internal physiological signals contribute further dimensions of bodily awareness. The situation becomes even more interesting for chemical perception. Flavor is not a synonym for taste. What we experience while eating emerges from gustation, retronasal olfaction, oral somatosensation, temperature, texture, and trigeminal chemesthesis. Capsaicin can produce burning; menthol can alter thermal sensation; astringency and pungency recruit oral somatosensory processes alongside canonical gustatory ones. Human experiments demonstrate interactions between gustatory and trigeminal perception, illustrating again that our subjective sensory categories do not map cleanly onto five isolated channels. This richer biology suggests that "new sense" should not be defined by counting organs. A technologically mediated sense could arise at several levels.

At the simplest level is **sensory remapping**. Information normally accessible through one modality is represented through another, for example, visual structure rendered as sound.

Next is **sensory augmentation**. Information not naturally and continuously available to us (magnetic north, infrared radiation, machine confidence, air chemistry, network state) is mapped onto an existing sensory surface such as the skin.

Then comes **neuroprosthetic restoration**, in which a device replaces a damaged natural transduction pathway. Cochlear and vestibular implants are canonical examples: external sensors and processors encode physical variables into patterns of electrical neural stimulation. A further stage is **synthetic neural sensation**: an artificial system writes information directly into peripheral or central neural pathways in a form that generates a usable percept, without requiring the original receptor. Intracortical microstimulation of somatosensory cortex already demonstrates this for touch. Artificial visual percepts induced through cortical stimulation demonstrate an analogous principle for vision. A still more radical category would be **novel neural modality**: stimulation that conveys a variable for which there is no normal human sensory channel and that, after learning, acquires a stable and phenomenologically distinguishable perceptual character.

We can make this concept testable. A strong candidate for a technologically created new sense should satisfy several conditions:

1. It carries information that is not simply redundant with an already available natural signal.
2. The mapping between the external variable and neural stimulation is stable enough to learn.
3. The user becomes capable of discriminating and acting on that information.
4. Performance remains meaningfully improved after extensive training rather than only during explicit symbolic reasoning.
5. The artificial signal becomes integrated with other sensory and motor processes.
6. In the strongest version of the claim, users report a distinctive perceptual quality rather than merely decoding a learned code.

The *feelSpace* results satisfy several of these criteria while still operating through natural skin receptors. Direct cortical stimulation could eventually satisfy them at a deeper level. Whether the resulting experience deserves to be called a *new sense* would then be an empirical question, not merely a linguistic one. This framework also clarifies a much more speculative question: **if information were written directly into the brain as an idea or a memory, would that constitute a new sense?**

Probably not automatically.

A sensation, an idea, and a memory are different kinds of cognitive event. Stimulating visual cortex and producing a luminous phosphene is plausibly sensory writing. Biasing hippocampal processing so that an experimentally learned association is remembered more accurately is memory modulation. Reproducing a neural transformation associated with successful memory encoding is a candidate component of a memory prosthesis. None of those operations amounts to inserting the proposition *Paris is the capital of France* into an unprepared brain, much less transferring the lived memory of another person. Current memory research is instructive precisely because its results are significant without being magical. Direct hippocampal stimulation has affected later recollection in specific experimental contexts. Human hippocampal prosthesis studies have modeled mappings between activity in different hippocampal regions and tested patterned stimulation intended to facilitate encoding. Temporal-interference stimulation has demonstrated non-invasive modulation of hippocampal activity and episodic-memory performance. These experiments manipulate processes involved in memory. They do not show that semantic content can be written at will. The obstacle is not merely electrode resolution. Human memories are reconstructive, distributed, context-sensitive, and linked to prior knowledge. A meaningful "idea" depends on relationships among concepts already represented throughout the brain. Even a future system capable of precisely activating large neural populations might discover that transferring an idea requires modifying a network rather than transmitting a packet.

A useful future vocabulary may therefore distinguish:

**sensory writing**: generating or modifying percepts;

**state writing**: altering attention, arousal, affect, or neural excitability;

**memory modulation**: changing the probability or quality of encoding, consolidation, or retrieval;

**memory construction**: deliberately generating structured memory content;

**semantic writing**: inducing a concept, relation, or proposition without normal learning.

The first is already experimentally demonstrated in multiple modalities. The second is broadly represented across neuromodulation. The third has partial experimental support. The fourth and fifth remain substantially more speculative.

This distinction is crucial for a serious discussion of the singularity. It gives us a ladder rather than forcing a binary choice between "ordinary senses" and "Matrix-style knowledge upload."


## From screens and skin to nerves and cortex

Several technology lines that are often discussed separately can be interpreted as points along one continuum.

The first is **increasingly rich external stimulation**. Modern displays can address millions of visual elements with precise timing. Headphones can reproduce complex spatial audio. Wearable and skin-integrated haptic systems can generate localized vibration, pressure, deformation, and other tactile cues. These are not direct neural interfaces, but they already allow computers to synthesize highly structured sensory environments. The second is **sensory substitution and augmentation**, where the computer does more than simulate a natural environment. It transforms information from one domain into a learnable sensory code. A camera can become sound. Compass direction can become vibration. Distance behind the user can become auditory structure. These approaches exploit natural transducers but alter what those transducers mean. The third is **peripheral neuroprosthesis**. A cochlear implant does not reproduce acoustic pressure at the eardrum; it transforms sound into electrical stimulation of the auditory nerve. A vestibular implant can use motion sensors to modulate electrical stimulation of vestibular-nerve branches, effectively creating a technologically mediated path from inertial measurement to neural activity. In the vestibular trial reported in *The New England Journal of Medicine*, eight people with severe bilateral vestibular hypofunction received unilateral implants; measures of posture and gait generally moved in the direction of improvement, although the procedure also produced hearing loss in the implanted ear in most participants. This combination of benefit and harm illustrates why technical feasibility and acceptable clinical trade-offs must never be conflated. The fourth is **direct central sensory writing**. In a bidirectional intracortical BCI reported in *Science* in 2021, sensors on a robotic hand were transformed into stimulation of arrays implanted in somatosensory cortex. The artificial tactile feedback improved robotic-arm performance. Subsequent studies have worked toward more stable, spatially precise, and information-rich cortical tactile percepts, including stimulation patterns conveying object properties and motion. This architecture is conceptually profound:

\[
\text{machine sensor}
\rightarrow
\text{encoder}
\rightarrow
\text{brain stimulation}
\rightarrow
\text{percept}
\rightarrow
\text{action}.
\]

The "sense organ" in such a loop need not be biological. A robotic hand, infrared camera, magnetometer, radiation detector, chemical sensor, remote telescope, or distributed network of sensors could provide the input. The human nervous system receives an encoded representation downstream.

The question then changes from

> Can humans grow a receptor for infrared light?

to

> Can a nervous system learn a stable neural code carrying information about infrared radiation?

The second question is much more tractable technologically.

A fifth line of research concerns **brain-to-brain and computer-to-brain information transmission**. Experiments have used non-invasive brain stimulation to deliver very low-bandwidth binary information, often through visual phosphenes. A 2016 experiment used TMS-induced phosphenes as the only sensory information needed by participants to navigate simple virtual mazes. Such work proves an important principle: task-relevant information can be inserted through direct brain stimulation. It simultaneously illustrates the enormous gap between today's demonstrations and rich direct communication. A phosphene functioning as one bit of a code is not a transferred thought. Near-term progress may consequently come less from trying to "upload consciousness" and more from improving **neural codecs**.

A neural codec would transform machine variables into stimulation patterns optimized for a particular neural substrate and task. Its design problem resembles communication engineering but is harder because the channel changes with attention, plasticity, adaptation, context, and the user's own actions.

One could imagine two strategies.

The first tries to mimic natural neural coding. Artificial touch systems already move in this direction by designing stimulation patterns that better resemble biological signaling.

The second deliberately creates a new code that the brain learns through plasticity. The *feelSpace* belt demonstrates this principle at the level of skin; future bidirectional BCIs could attempt it at peripheral nerves or cortex. This distinction may shape the sensory side of human-machine merging. Restoration tends to reproduce biological codes. Augmentation may benefit from inventing new ones.

And AI itself could become a major part of that encoder. Rather than transmitting every variable from an intelligent system, an AI could decide what information matters, compress it, choose a modality, personalize its encoding to the user, monitor behavior or physiology, and adapt the signal.

That creates a closed loop:

\[
\text{environment}
\rightarrow
\text{AI interpretation}
\rightarrow
\text{personalized stimulation}
\rightarrow
\text{human state}
\rightarrow
\text{measured response}
\rightarrow
\text{AI adaptation}.
\]

In such a system, artificial intelligence would not merely *tell* us things.

It would increasingly participate in shaping the stream of perception through which we encounter the world.

That possibility is more immediate than arbitrary memory transfer, and raises difficult questions about agency, manipulation, dependence, authentication, and cognitive autonomy.


## Chemical senses and programmable matter

Smell and taste expose a limitation of the digital metaphor.

A monitor can generate different visual experiences by controlling a relatively compact set of physical variables: light intensity and spectrum across space and time. A loudspeaker creates pressure waves. A haptic actuator creates force or movement.

Smell is different. To stimulate natural olfactory receptors, an interface generally has to place appropriate molecules into the air and deliver them to the nose.

That makes olfactory output partly a **materials problem**.

Recent work demonstrates how quickly this field is advancing. A 2023 *Nature Communications* study developed flexible, wearable olfactory interfaces using arrays of miniaturized odor generators. The devices used controlled heating and mechanical actuation to release odorants near the nose, with programmable timing and concentration. A later 2024 system reported response times down to approximately 0.07 seconds under its tested conditions and combined olfactory hardware with predictive algorithms for mixed-reality applications. These systems still rely on stored odor sources. That is an important distinction. A "digital smell display" today is more analogous to a synthesizer with a physical library of chemical components than to a display that can generate arbitrary olfactory experience from three primaries.

There is no known olfactory equivalent of RGB that spans smell space.

The chemical space is enormous; mixtures interact nonlinearly; receptor activation and perceived quality are complex; adaptation matters; people differ; and changing one component can transform the overall percept.

Nevertheless, algorithmic scent synthesis is becoming plausible in a more limited sense. In 2024, Aleixandre, Prasetyawan, and Nakamoto reported a system combining mass-spectrometric representations, a neural network predicting odor descriptors, and an optimization process that selected ratios of odor components to produce target odor descriptions. The resulting physical mixtures were evaluated by human participants. The authors explicitly framed this as progress toward automatic scent creation and olfactory displays rather than complete digitalization of smell. This suggests at least three possible architectures for future chemical interfaces.

**Stored libraries** are the nearest-term approach: cartridges, encapsulated compounds, essential-oil components, food-safe odorants, or other controlled reservoirs are selectively released and mixed.

**Locally formulated mixtures** add microfluidics or other mixing technology, allowing a device to construct a larger olfactory vocabulary from a smaller chemical basis set.

**On-demand molecular production** would go further, using chemical synthesis or biological manufacturing to create desired compounds rather than storing them in advance.

The third possibility is scientifically conceivable but should not be confused with near-term wearable technology. Chemical synthesis involves reaction conditions, purification, by-products, stability, toxicology, storage, waste, and quality control. Synthetic biology can already engineer microorganisms to produce aromatic molecules, but manufacturing a fragrance compound in a controlled bioprocess is very different from safely synthesizing arbitrary psychoactive or sensory molecules next to someone's nose.

The most plausible medium-term architecture is therefore likely to combine **centralized manufacture of validated compounds with local programmable mixing and release**, rather than putting a general chemical factory inside a headset. That is an inference from the current state of olfactory-display and odor-formulation technology, not an established technological trajectory. Taste adds another layer.

One option is again molecular: precisely controlled quantities of tastants can be delivered to the tongue. But researchers have also demonstrated *electrogustation* and *thermal taste*. In the E-Taste experiments, combinations of electrical and thermal stimulation were used to elicit or alter basic taste sensations and flavor-like experiences. Other studies show that electrical stimulation of the tongue interacts with gustatory and somatosensory cortical processing. This is significant because it hints at a broader principle:

> **Not every future chemical-sense interface will necessarily require the chemical stimulus itself.**

If the neural activity produced by a molecule can eventually be approximated by electrical, thermal, optical, ultrasonic, or other stimulation at a downstream stage, the interface may bypass the molecule.

But it would be a mistake to conclude that smell and taste are merely waiting for the right electrode pattern. We do not currently possess a sufficiently complete neural codebook to synthesize arbitrary olfactory or gustatory experiences through direct brain stimulation.

Moreover, molecules affect much more than smell and taste.

Chemical compounds can activate trigeminal pathways, creating sensations such as cooling, burning, irritation, and pungency. Compounds can alter bodily physiology and thereby interoception. Drugs can alter neurotransmission throughout the nervous system. At that point, however, we are no longer discussing a sensory display in the narrow sense. We are discussing pharmacology and biochemical neuromodulation. Human studies with capsaicin and menthol illustrate how chemical agents can modify thermal and trigeminal sensation beyond canonical taste. This boundary matters for the singularity discussion.

A future human-machine system could theoretically influence a person through photons, sound waves, force, temperature, electric current, magnetic fields, ultrasound, molecules, implanted electrodes, peripheral nerves, or direct cortical stimulation. These are not interchangeable channels. They differ radically in reversibility, temporal precision, spatial precision, safety, latency, persistence, and governance.

The eventual "sensory operating system" of human-machine integration may therefore need to reason across multiple classes of physical intervention, not merely audiovisual content.


## A horizon map for human–machine sensation

Predictions in this area should be stated as scenarios, not promises. The timelines below are therefore **capability horizons**, conditional on continued research progress, acceptable safety, economic feasibility, regulatory approval, and actual human demand.

**Near term: now through the early 2030s.** The dominant development is likely to be better orchestration of senses we already use with digital systems. Vision, audition, and haptics will become more coordinated, spatial, personalized, and adaptive. Wearable olfactory output will remain specialized but increasingly practical. Gustatory electrical and thermal stimulation will continue as an experimental interface. Sensory-augmentation wearables will map machine-detected variables (direction, proximity, physiological state, environmental hazards, navigation information) onto vibration, sound, or visual overlays. Clinical neuroprostheses will improve in restoration of hearing, balance, movement, and touch, while invasive BCIs remain concentrated in circumstances where their potential benefit justifies surgery. This period should also see growth in **closed-loop sensory systems**. Wearable biosensors can measure aspects of physiology; AI can estimate context or state; software can modify stimulation parameters in response. The most accessible systems will probably remain external and non-invasive because they are cheaper, safer, and easier to distribute.

Crucially, the near-term sensory frontier is not merely adding devices. It is learning to specify stimulation precisely enough to make experiments reproducible and claims auditable. A statement such as "40 Hz stimulation" is scientifically incomplete unless we know whether 40 Hz refers to auditory amplitude modulation, a binaural frequency difference, visual flicker, mechanical vibration, electrical pulses, or something else. SSTIM's current public documentation makes this exact distinction central to its design. **Medium term: roughly the 2030s into the early 2040s.** If present trajectories continue, bidirectional interfaces may become richer and more personalized. Somatosensory neuroprostheses could return multiple properties of touch rather than simple contact events. Peripheral and central stimulation could be paired more closely with AI-based encoding. Vestibular, proprioceptive, and spatial augmentation may move beyond rehabilitation toward elective enhancement in limited settings.

This is where genuinely *new* technologically mediated senses become plausible.

A person might continuously perceive magnetic orientation, infrared proximity, air composition, remote robotic touch, or the status of a complex computational system, not by consulting a dashboard, but through a learned perceptual code. The physical transducer could be on the body, in a peripheral nerve, or eventually in the brain.

Some new senses may never acquire a unique phenomenological quality. They may feel like structured touch forever. Others may become progressively automatic, much as reading converts visual marks into language without requiring conscious decoding of each line segment.

Medium-term olfactory systems may combine larger ingredient libraries with algorithmically optimized mixtures and miniaturized delivery. "Scent messages" could become part of telepresence or virtual environments. Chemical interfaces may also increasingly use sensing and generation together: an electronic nose characterizes an environment, software transforms or transmits the description, and another device reconstructs an approximation remotely. Current odor-generation and algorithmic-formulation research already contains pieces of this architecture. **Long term: beyond the early 2040s.** Uncertainty becomes very large.

If invasive and non-invasive neural-write technologies improve dramatically, human-machine interfaces could begin to bypass the peripheral senses for some classes of information. Stable, high-dimensional bidirectional interfaces could create percepts without corresponding natural stimuli and perhaps establish artificial modalities optimized for machine information.

A person controlling a robotic body might feel its sensors as an extension of embodiment.

A scientist might learn an artificial percept corresponding to the state of a complex experiment.

A pilot might acquire a continuous spatial sense derived from radar, infrared, lidar, and remote vehicles.

A physician might perceive physiological changes in a patient through an artificial sensory mapping rather than reading measurements sequentially.

A group of humans and artificial agents might share selected state variables continuously, producing a form of distributed sensorium.

These are extrapolations, not demonstrated capabilities. Their plausibility follows from three established facts: the nervous system can adapt to stable sensory remappings; artificial neural stimulation can generate useful percepts; and machines can sense environmental variables unavailable to natural human receptors. What remains unknown is how many artificial channels humans could integrate, at what complexity, with what subjective experience, and at what cognitive cost. "Direct ideas" and "downloaded memories" lie even further along the speculative axis.

The safest inference from current neuroscience is that the first useful forms of cognitive writing will probably remain low-dimensional and task-specific: artificial percepts, attention cues, state modulation, memory facilitation, perhaps carefully structured neural patterns associated with limited learned content.

Arbitrary knowledge transfer would require understanding not only stimulation but the recipient's existing neural representations.

A sentence works as communication because sender and receiver already share language. A future neural message may similarly require enormous shared structure.

The deepest form of a sensory singularity may therefore not be replacing the senses.

It may be **building progressively richer shared codes between brains and machines**.


## BioSynCare, SSTIM, and the infrastructure of programmable sensation

Within this much larger landscape, it is important to state precisely what BioSynCare and SSTIM are, and what they are not.

As of its September 2026 system description, **[BioSynCare](https://biosyncare.com/)** is a web, iOS, and Android platform for structured sensory-stimulation sessions built primarily around generated rhythmic audio, guided breathing, non-flickering visual guidance, colored noise, and optional natural soundscapes. Its generated audio is synthesized in real time, keeping parameters such as beat frequency, carrier pitch, modulation depth, breathing period, inhale/exhale ratio, panning geometry, and noise characteristics addressable during execution. (see reference 19)

That architectural choice is more important in the present context than any particular preset.

A prerecorded meditation file is essentially fixed media.

A parameterized sensory system is closer to an **instrument**.

Its variables can potentially be modified, measured, synchronized, generated algorithmically, related to evidence, or eventually connected to sensors and closed-loop controllers.

BioSynCare already includes several generated auditory families and breathing-coupled modulation, together with synchronized sessions and AI-assisted session generation. Its visual production layer intentionally avoids rapid flashing and is used for breathing and attention cues rather than photic-flicker entrainment. The project's internal system description also maintains an explicit non-medical scope. (see reference 19)

That last point deserves emphasis because sensory technology is especially vulnerable to overclaiming.

BioSynCare's September 2026 system description states that it has not run a clinical trial, reports no measured clinical outcomes, and claims no clinical efficacy. Its 51-preset catalogue at that point contained zero presets classified internally at its highest, "strong", evidence tier; thirteen were classified moderate, fifteen emerging, eight indirect, and fifteen speculative. The value of such a system is not that these internal tiers prove efficacy (they do not), but that uncertainty and claim strength are represented as data instead of being silently erased by promotional language. (see reference 19)

The public BioSynCare materials similarly identify it as a wellness rather than diagnostic or treatment platform and describe its current sensory scope as rhythmic audio, guided breathing, visual pacing, noise, soundscapes, and related session structures. Why might this matter for the sensory singularity?

Because before human-machine systems can safely coordinate dozens of stimulation channels, they need to solve less glamorous problems:

What exactly was generated?

Which physical parameter changed?

Which modality delivered it?

Which device rendered it?

What did the user actually receive?

Which effects are hypothesized?

What evidence supports those hypotheses?

Which claims are inappropriate?

What safety limits apply?

Can another laboratory reproduce the stimulus?

Can an AI distinguish an auditory 40 Hz binaural difference from physical 40 Hz amplitude modulation or visual 40 Hz flicker?

These are infrastructure questions.

And they become more, not less, important as stimulation becomes more powerful.

That is the domain in which **SSTIM** may have its most durable role.

The Sensory Stimulation Vocabulary Community Group, hosted by W3C, was established to develop shared terminology and semantic infrastructure for sensory-stimulation research, software, hardware, safety metadata, evidence annotation, and related datasets. W3C explicitly notes that Community Groups are community-run and do not imply W3C endorsement; SSTIM is not a W3C Recommendation. The current SSTIM project publishes a formal knowledge layer using RDF/OWL, SKOS vocabularies, SHACL validation, stable identifiers, provenance, evidence structures, and citable releases. Its current Workbench documentation describes SSTIM 0.19.0, dated October 10, 2026, as the released knowledge layer underlying the open tools. **SSTIM Workbench** is the executable, explicitly non-normative environment around that knowledge.

Its Graph Navigator allows users to inspect relationships among concepts, stimuli, evidence, provenance, and safety metadata. Its SPARQL interface makes the knowledge graph queryable. Patch Studio provides a real-time authoring environment for generated audiovisual patches and presently represents haptic tracks as authoring metadata, although the public browser implementation does not yet deliver haptic output. Its session model distinguishes the planned specification, actual session, event timeline, observations, and privacy-related information. (see references 17-18) The separation among these projects is important.

BioSynCare is a commercial application with its own production runtime, private catalogue, code, and user experience.

SSTIM is an open knowledge and semantic layer.

SSTIM Workbench is open reference software for inspecting, authoring, querying, and testing structures around that layer.

The SSTIM documentation explicitly describes BioSynCare as a separate application participating in and contributing to the ecosystem rather than as a reference implementation or W3C-endorsed product. This separation gives the ecosystem an interesting future architecture:

\[
\text{scientific knowledge}
\leftrightarrow
\text{formal semantics}
\leftrightarrow
\text{experimental tools}
\leftrightarrow
\text{applications}
\leftrightarrow
\text{human experience}.
\]

If sensory technology expands from audio and visual stimulation into richer haptics, olfaction, gustation, vestibular stimulation, peripheral neurostimulation, or cortical interfaces, a framework like SSTIM could eventually be extended to describe those modalities with comparable rigor.

That does **not** mean current SSTIM already provides complete models for future brain-writing systems. It does not.

Rather, it provides a methodological precedent: distinguish the physical stimulus from the intended effect; distinguish specification from delivery; preserve evidence and provenance; validate machine-readable descriptions; separate application behavior from scientific claims.

Those principles scale.

A future SSTIM-like representation of olfactory stimulation might need to describe chemical identity, mixtures, concentration, flow, temperature, release timing, delivery geometry, exposure, adaptation, and purity.

A gustatory representation might add molecular, electrical, thermal, and tongue-location parameters.

A vestibular or neuroprosthetic representation could require electrode geometry, stimulation waveform, anatomical target, calibration, participant-specific mappings, neural recording metadata, and far stronger safety constraints.

A direct cortical interface would make provenance even more critical because the difference between "what the software intended" and "what neural tissue actually received" could become scientifically and ethically decisive.

This is where today's seemingly modest work on semantic interoperability may prove strategically important.

If future AI systems design sensory experiences, we will want them to operate over explicit, inspectable definitions rather than vague natural-language labels.

If an AI proposes a stimulus, a human researcher should be able to ask:

**What exactly do you mean by this stimulus?**

**What evidence are you using?**

**Is that evidence from the same modality?**

**What was actually delivered?**

**What are the uncertainties and safety constraints?**

The ability to answer those questions could become a prerequisite for trustworthy machine-generated sensory intervention.

BioSynCare's future role is different but complementary.

One plausible path is for it to remain on the non-invasive, human-scale application side of this transition: increasingly expressive real-time sensory sessions, personalization, synchronization, interaction with wearables and biosensors, and carefully bounded closed-loop adaptation.

Its most compelling evolution would not be to add modalities merely because they are technologically fashionable.

It would be to add them **only when they can be specified accurately, delivered safely, evaluated honestly, and separated clearly from unsupported therapeutic claims**.

That could eventually mean richer haptics.

Perhaps olfactory integration.

Perhaps external physiological sensors that modulate sessions.

Perhaps formal research interoperability through SSTIM.

Perhaps controlled interfaces to new hardware developed by other groups.

Direct neural stimulation, by contrast, would belong to a different risk and regulatory category and should not be treated as simply another consumer sensory feature.

The opportunity here is larger than one application.

BioSynCare can explore what structured programmable sensory experiences are like for ordinary people today.

SSTIM can help establish how those experiences are described and scrutinized.

SSTIM Workbench can give researchers and developers an open environment in which future modalities are represented, authored, tested, and debated.

Together, they point toward something the sensory-technology field will increasingly require: **an open grammar for engineered experience**.


## Governance, research agenda, and the sensory side of the singularity

If sensory systems become programmable, the ethical issue is not simply privacy.

It is **access to perception itself**.

A system that reads neural activity raises questions about neurodata. A system that writes neural activity adds questions about mental integrity, manipulation, cognitive liberty, agency, and consent.

These concerns are no longer confined to speculative ethics. UNESCO adopted its Recommendation on the Ethics of Neurotechnology in November 2025, creating a global normative framework concerned with human rights, mental privacy, identity, autonomy, and the risks of non-medical neurotechnology. The OECD's earlier Recommendation on Responsible Innovation in Neurotechnology likewise emphasizes safety, stewardship, personal brain data, societal deliberation, and anticipation of misuse. The European Brain Council's Charter for the Responsible Development of Neurotechnologies similarly emphasizes human-centered development, freedom of thought, autonomy, privacy, equality of access, and the need for responsible governance as neurotechnology expands beyond medical settings. The deeper the write channel, the stronger the safeguards should become.

A recommendation algorithm influencing what appears on a screen can manipulate attention.

An adaptive immersive environment can influence multiple senses.

A closed-loop stimulation system could adapt to physiological responses.

A neural interface could eventually modify perceptual processing directly.

These systems should not be treated as merely different versions of media delivery.

Several research questions therefore deserve much more attention.

We need methods for measuring **sensory integration**, not merely stimulus detection. Does an augmented signal become automatic? Does it improve behavior outside the training task? Does it interact with natural senses? Does it alter body representation or spatial cognition? Does it create a stable new percept?

We need methods for measuring **sensory load and interference**. The human brain's capacity to learn one artificial channel does not imply that arbitrary numbers of channels can be added without attention costs, adaptation, confusion, or stress.

We need better **personal calibration**. Artificial sensory mappings may have to adapt to anatomy, perceptual thresholds, learning history, neurodiversity, impairment, age, and context.

We need **reproducible stimulus descriptions**. The richer the modality becomes, the less acceptable vague labels will be. "Vibration", "40 Hz", "odor stimulation", or "brain stimulation" are not sufficient experimental specifications.

We need **closed-loop safety**. An adaptive AI that changes stimulation in response to a person must have boundaries on what can change, by how much, under what evidence, and with what override mechanisms.

And we need **sensory sovereignty**: the technical and legal ability to know when an artificial system is influencing one's sensory stream, to inspect the source, to disable it, to distinguish self-selected from third-party signals, and to prevent unauthorized writing.

A future in which perception is programmable without such guarantees would not constitute an uncomplicated human enhancement.

It could constitute a new attack surface on human autonomy.

Yet the constructive possibility is equally profound.

The singularity is often presented as a competition: machine intelligence rises until it exceeds human intelligence.

That may be the wrong geometry.

A different future is one in which machine systems become extraordinarily capable while humans become progressively more connected to their perception, computation, and action loops.

In that future, "human versus machine" becomes less informative because many consequential systems contain both.

Our eyes may remain biological while part of what we see is machine-generated.

Our ears may remain biological while AI organizes the soundscape.

Our skin may carry variables that no evolved receptor ever measured.

Our prostheses may feel.

Robotic bodies may return sensation.

Chemical displays may give digital environments smell and flavor.

Peripheral nerves or cortex may eventually receive selected machine-generated information directly.

And, perhaps much later, neuroscience may discover forms of neural communication that no longer fit comfortably into our current categories of sensation, language, and memory.

The transition need not happen in one leap.

In fact, it is already possible to identify several of its early layers.

We already synthesize increasingly structured sensory environments.

We already translate invisible variables into learnable sensory signals.

We already electrically replace portions of natural sensory pathways.

We already generate artificial tactile and visual percepts through neural stimulation.

We already modulate memory-related brain systems.

We are beginning to digitize smell and experiment with electronic taste.

What we have **not** done is combine these developments into a mature, high-bandwidth, general-purpose human-machine sensorium. That distinction should keep the argument grounded.

There is no scientific basis today for claiming that arbitrary thoughts can be uploaded into a brain, that memories can be copied between people, or that humans are about to acquire unlimited synthetic senses.

There **is** a substantial scientific basis for a more modest but still transformative claim:

> **Human sensation is already technologically extensible.**

And if intelligence, computation, sensing, and communication continue to migrate into tightly coupled human-machine systems, that extensibility could become one of the principal interfaces through which humans participate in what we call the singularity.

Perhaps the defining human question of the singularity will therefore not only be:

**How intelligent will the machines become?**

It may also be:

**What will it become possible for a human to perceive?**

And eventually:

**Where will sensation end and information begin?**

## Selected references

1. Chesler, A. T., Szczot, M., Bharucha-Goebel, D., et al. *[The Role of PIEZO2 in Human Mechanosensation.](https://doi.org/10.1056/NEJMoa1602812)* New England Journal of Medicine 375, 1355–1364 (2016). DOI: 10.1056/NEJMoa1602812.

2. Chow, M. R., Ayiotis, A. I., Schoo, D. P., et al. *[Posture, Gait, Quality of Life, and Hearing with a Vestibular Implant.](https://doi.org/10.1056/NEJMoa2020457)* New England Journal of Medicine 384, 521–532 (2021). DOI: 10.1056/NEJMoa2020457.

3. König and colleagues. *[Learning New Sensorimotor Contingencies: Effects of Long-Term Use of Sensory Augmentation on the Brain and Conscious Perception.](https://doi.org/10.1371/journal.pone.0166647)* Longitudinal feelSpace-belt study (2016).

4. *[Improved Spatial Knowledge Acquisition through Sensory Augmentation.](https://doi.org/10.3390/brainsci13050720)* Brain Sciences 13, 720 (2023). DOI: 10.3390/brainsci13050720.

5. Amedi and colleagues. *[Shape conveyed by visual-to-auditory sensory substitution activates the lateral occipital complex.](https://doi.org/10.1038/nn1912)* Nature Neuroscience (2007).

6. Flesher, S. N., et al. *[A brain-computer interface that evokes tactile sensations improves robotic arm control.](https://doi.org/10.1126/science.abd0380)* Science 372, 831–836 (2021).

7. *[Conveying tactile object characteristics through customized intracortical microstimulation of the human somatosensory cortex.](https://doi.org/10.1038/s41467-025-58616-6)* Nature Communications (2025).

8. Lee and colleagues. *[Transcranial focused ultrasound stimulation of human primary visual cortex.](https://doi.org/10.1038/srep34026)* Scientific Reports (2016).

9. *[Navigating a 2D Virtual World Using Direct Brain Stimulation.](https://doi.org/10.3389/frobt.2016.00072)* Frontiers in Robotics and AI (2016).

10. Liu, Y., Yiu, C. K., Zhao, Z., et al. *[Soft, miniaturized, wireless olfactory interface for virtual reality.](https://doi.org/10.1038/s41467-023-37678-4)* Nature Communications 14, 2297 (2023). DOI: 10.1038/s41467-023-37678-4.

11. *[Intelligent wearable olfactory interface for latency-free mixed reality and fast olfactory enhancement.](https://doi.org/10.1038/s41467-024-48884-z)* Nature Communications (2024).

12. Aleixandre, M., Prasetyawan, D. & Nakamoto, T. *[Automatic scent creation by cheminformatics method.](https://doi.org/10.1038/s41598-024-82654-7)* Scientific Reports 14, 31284 (2024). DOI: 10.1038/s41598-024-82654-7.

13. Ullah, A., Liu, Y., Wang, Y., et al. *[E-Taste: Taste Sensations and Flavors Based on Tongue's Electrical and Thermal Stimulation.](https://doi.org/10.3390/s22134976)* Sensors 22, 4976 (2022). DOI: 10.3390/s22134976.

14. Wang, X., Bai, G., Liang, J., et al. *[Gustatory interface for operative assessment and taste decoding in patients with tongue cancer.](https://doi.org/10.1038/s41467-024-53379-y)* Nature Communications 15, 8967 (2024). DOI: 10.1038/s41467-024-53379-y.

15. Hampson, R. E., Song, D., Robinson, B. S., et al. *[Developing a hippocampal neural prosthetic to facilitate human memory encoding and recall.](https://doi.org/10.1088/1741-2552/aaaed7)* Journal of Neural Engineering 15, 036014 (2018). DOI: 10.1088/1741-2552/aaaed7.

16. Violante, I. R., Alania, K., Cassarà, A. M., et al. *[Non-invasive temporal interference electrical stimulation of the human hippocampus.](https://doi.org/10.1038/s41593-023-01456-8)* Nature Neuroscience 26, 1994–2004 (2023).

17. W3C Sensory Stimulation Vocabulary Community Group. *[Sensory Stimulation Vocabulary Community Group: scope and objectives](https://www.w3.org/community/sstim/)* (current 2026 public documentation).

18. SSTIM Workbench. *[Open reference environment for sensory stimulation; SSTIM 0.19.0 documentation](https://w3c-cg.github.io/sstim/)* (October 2026).

19. Fabbri, R. & Berti, R. *[BioSynCare: A Multiplatform System for Structured Sensory Stimulation: System description, session model, and evidence governance](https://biosyncare.com/)*, source version 1.4.1 (September 2026). (see reference 19) (Internal technical description, not publicly hosted; link points to the project website.)

20. UNESCO. *[Recommendation on the Ethics of Neurotechnology](https://www.unesco.org/en/node/86248)* (adopted by the 43rd General Conference, November 2025).

21. OECD. *[Recommendation of the Council on Responsible Innovation in Neurotechnology](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0457)* (2019).

22. European Brain Council. *[European Charter for the Responsible Development of Neurotechnologies.](https://www.braincouncil.eu/european-charter-for-the-responsible-development-of-neurotechnologies/)*
