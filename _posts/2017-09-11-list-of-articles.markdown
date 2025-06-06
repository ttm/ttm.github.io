---
layout: post
title:  "Articles written and to be written"
categories: research
comments: true
published: true
---

* impact of alpha in power law's limits [k_l, k_r], and its limits in alpha.
    See Appendix of https://zenodo.org/records/3973549

* Ambiguous Acronims:
    AA is the AA
    OA, OI ecc, are strong AAs, because they have only vowels
    PA, GI, etc, are weak AAs, because they have consonants
    PG JR, etc, are very weak AAs, because they have only consonants
    measure these numbers in different languages
        considering all words (or all non-stop words, almost the same)
        considering only radicals or lemmas
        considering a Luhn cut

There are many documents I have written or idealized in the
past years.
Most of these documents are scientific articles and
have some code (usually Python or JavaScript)
with which I express and validate them.

The issue that made this post come to be is:
they are scattered in many repositories, emails,
online drafts and personal notes.
I frequently come across stuff I had forgotten
and that are useful to understand more recent work
I have done and to help others deepen into the subjects.

Thus, this post should be a list of these ideas.
The very few of them I sent to publication were accepted so far,
and I should distinguish them at least between: idealized, written and published.

Here it goes.
For now I have made only a list of the unpublished ideas and
did not differentiate the ones I have written about from the ones which
have not received a 'natural language' documentation:
* Decomposition of a (original) sound using any other sound as the basis.
The basis sound should be used in many scales to represent the original
sound reasonably well.
The idea is simply to multiply one sound by the other sample-by-sample
and then sum. This is the scalar multiplication of one sound by the
other, i.e. the magnitude of the projection of one sound into the other.
* A scientific account of the [AirHackTable](http://wiki.nosdigitais.teia.org.br/AirHackTable)
* Meta-sieves: mathematical structures to be mapped to sound.
This idea is very incipient and I don't know how much it makes sense
within the framework proposed by Xenakis.
Meta-sieves are at the moment conceptualized (by me) as any mathematical
structure that filters a given domain: a probabilistic distribution,
a group, a ring, etc.
* A very brief account of the [MASS](https://github.com/ttm/dissertacao/raw/master/article/acm/sample-acmsmall.pdf)
framework for describing musical elements in PCM audio.
This document should contain only the equations, algorithms and very brief
explanations.
* A description of the Social Participation Ontologies we developed.
This [technical report](https://github.com/ttm/pnud5/raw/master/latex/produto.pdf)
has directions to find them all.
* A description of the recommendation and classification systems we conceived for social
  participation.
  This [technical report](https://github.com/ttm/pnud3/blob/master/latex/produto.pdf)
  has some notes and algorithms on them.
* A description of the experiments on collection and diffusion of
  information we performed and explained in the last appendix of this
  [doctoral thesis](https://github.com/ttm/thesis/raw/master/thesis-rfabbri.pdf).
* Psychophysical experiments with the MASS framework mentioned above
(maybe with emphasis on the sonic pictures).
* Complex networks gradus ad Parnassum: a tutorial on complex networks.
Maybe include a vocabulary and ontology for complex networks (and anthropological physics).
  theory and harnessing.
* The Scientific Style: a very short account on the overall structure of
  scientific articles (consider at least the most often templates).
* Analysis of the Toki Pona language and an exposition of the Vim
  text highlighting implemented.
* The network layout implementations made for [ccNetViz](https://github.com/ttm/ccNetViz/).
* Enhancement on the description and simulation of the Doppler effect by
  considering also the variation of the intensity of the wave.
  (Find out if this is really not yet described in the literature).
* Integral serialism with permutations and algebraic groups (for musical
  composition).
* Vocabulary and Ontology for the MASS framework mentioned above.
* Deepen the concept of the [Anthropological Physics](http://www.academia.edu/10356773/What_are_you_and_I_anthropological_physics_fundamentals_).
* Finish the [analysis of the work by Machado de Assis by text mining](https://sourceforge.net/p/labmacambira/rcpln/ci/master/tree/pln/trabLetras/resumoLetras.pdf?format=raw).
* Describe the process of constructing OWL ontologies from raw data.
This process is very briefly described in this [doctoral thesis](https://github.com/ttm/thesis/raw/master/thesis-rfabbri.pdf).
* Sonic doin: using continuous and intermittent sounds for therapy.
We should use the MASS framework (mentioned above) for this.
* About AA, what it is, what it is not and how it can be harnessed.
* About the music Python Package to synthesize music.
* Differences perceived in timbre when the amplitude of the components are preserved and only the phases change.
* Spectra of sound generated by using different distribution probabilities for the PCM samples.
* Articles for the courses in [music in PCM audio](https://docs.google.com/document/d/1O8y-W27P_ydeOXd97HBtLEeI0C0-IMhfq6AKWmqDW10/edit?usp=sharing) and in [research and development with open technologies](https://docs.google.com/document/d/1tPY1OedvmLzdIga0uK7DSH6j2UDcXEmZxOL_Kz2K3VI/edit?usp=sharing).
For them, I need to find suitable journals and/or conferences to submit the works.
Maybe talk to João Bueno, Jane Borges or seek other partners in the pedagogy field.
* Make and describe a musical piece made with MASS that uses: the Doppler effect, spatial localization, reverberation, permutations, hiper vibratos and tremolos (with depth and frequency not achievable in traditional instruments), AM and FM between the sounds, etc.
* Hypersimplicity: an aesthetic based on few notes (3 trios, PPEPPS, FIGGS).
* Implementation of peals (change ringing) in Python (implement 3 trios at least, make expansions).
* An article about audiovisual analytics conceptualization (including time-variant interfaces that uses the perception rhythms).
Include AAVO and a design and implementation possibilities (with emphasis on web, sandbox, user shareable states, etc).
* A description of the musical compositions endeavors I've made
(and include the musics, videos, texts and scripts which I can recover).
* Vocoder via Fourier, wavelets, other established bases and arbitrary bases (any sound actually).
* Routines for generation music from arbitrary structures (e.g. sound files, permutations, groups, peals, scales, rhythms...)
* Describe the Erdõs sectioning in further detail:
  - Can use (in-out)degree or (in-out) strengths or a combination of them.
  - Implement a python toolbox to perform the sectioning (classification)
  - Make it available through algorithmia
  - Explain the naming (why sectioning and not partitioning (sectorialization?), why Erdõs?); it is a shorthand for "sectioning of the network vertices into the hubs, intermediary and peripheral vertices by a comparison of the connectivity distribution against that of an Erdös-Rényi model.
  - Discuss the strengths and weaknesses of current implementation:
    * Strengths: well behaved; true to the qualitative description
    * Weaknesses: using the degree mean to derive the sectioning while the mean is nos to meaningful in scale-free networks;
    problems with sampling and oscillation of the histogram;
    might not be the best method for any network and might classify vertices when it is not meaninful;
    there might be better to consider another number of classes of vertices
  - History and context of the concept of hubs, intermediary and peripheral vertices
  - Possibilities of other ways to perform the sectioning:
    * spectral graph theory
    * dry cut with percentages of hubs (~1-5%) intermediary (~10-25%) and peripheral (~60-85%)
    * percentages derived from characteristics of the graph
  - (Human) Typology derived from the sectioning, why it is ~ok (less prompt to yield stigmatization because it varies in time, scale and network)
  - Further work:
    * Consider heterogeneous (e.g. bipartite) networks and multigraphs
    * Address the Weaknesses described.
* A consideration of the German lexicographical tradition for the semantic web:
  - Results in terms of the contributions to current semantic web
  - Possibilities of usage of the established lexicons for SKOS vocabularies and OWL ontologies 
  - Possibilities of the usage of the methodologies
* A description of the Common Ontology (CO):
  - Includes bonding SKOS and OWL and URIs for expressing potential relations [[1]]
* A description of the Common Resource (CR) protocol:
  - Text written RDF triples bonding at least Markup language (and other resources in personal notes)
  - Describe the Common Ontology in CR
  - Envision possibilities to write algorithms in Coffescript and a condensed notation for Python
* Describe meta-vibratos (vibratos with a secondary oscillatory pattern, VV in MASS)
and meta-tremolos. Describe their implementation with and without glissandi (PV in MASS).
Achieve a general implementation for any number of oscillatory patterns and transitions.
* Think about the implications of using Weber and Fechner and Steven's Laws for loudness (and pitch!).
What are the implications and the implementations.
  - See: https://doi.org/10.1017/S0140525X0004855X
* All my Vim tricks (or A Decade of Vim).
Make an article and screencast where I explain all the tricks I use in this
more than 10 years using vim. The goals are:
  - To register my current usage of Vim.
  - To help users in understanding how to use Vim.
  - To have feedback of other advanced users in order to know better ways to use Vim.
  - Better letter sequences for commands.
* Artigo "On the transitions of amplitude and frequency:
fades, tremolos, AM, glissandi, vibratos, FM, spatial localization and Doppler Effect"
  - transições lineares e exponenciais
  - descrever alphas para distorções
  - fade exponencial com linear p chegar no zero
  - uso de LUTs para vibratos, glissandi, FM, Doppler
  - Doppler a partir de um som pre-existente
  - combinação de vibratos e glissandi
  - transição de localização espacial
  - tudo implementado na massa e music
  - acompanha suíte transitions q ilustra os potenciais musicais do arcabouco
* A complete model for reverberation:
  - Account for any directionality pattern for the source
  - Account for any positioning of the listener (and let it be more that one to generalize)
  - Account for any shape of a room
  - Account for any absorbtion pattern for the room's surfaces
  - Apply a distance-dependent HRTF for when a sonic front reaches the ear.
* Generalized octaves:
  - f.2 an octave
  - f.3/2=f.(1.5) a half octave, a fifth
  - f.(1.25) a quarter octave, ~ a major third
  - f.(1.125) an octeth of an octave, ~ a major second
	- f.(1.0625) an 16h of an octave, ~ a minor second
* Symmetry, metric to frequency: fractalization of space into self-similar bases
	- If you have a basis, for example measure spaces,  or just the axis with a proposed quantification of something, you can place one between the other two. You can place two apples between two apples, you can place two speed values between two speeds.
And three, and four....
The octavesa are when you divide it by 2,
Or multiply your fequency by two.
The other intervals: 3 in one, 7 in two,
are other frequencies, other Fourier components.
Be m_i a set of measurements.
m'_i = m_i or m'= d(m+i) (distancia entre os dados, normaliza com media e desvio padrao)
F_k(m_i) = c_k, frequencia e fase do seu conjunto de dados.
Eles podem ser ordenados pelo valor deles mesmo, em ordem crescente,
Each octave is a sinudoid if you make the fourier transform.
* Métodos de vis científica para visinfo : revisão da literatura q já faz isso, possibilidades teóricas e aplicação p redes, texto, audo e música. 
* Plugin to generate images for equations and import images
to VIM's interface. Useful for presentations.
* Vim article with the consideration of:
  - Make a screencast (or series of them) with the content.
  - Name:
    * On the Vim editor
    * 10 years of Vim editor
    * Vim features and tweaks
  - Useful features grasped in the more than ~10 years of usage.
    * Standard configuration files and directories and My .vim/vimrc
    * Spell and spelllang (en and pt_br)
    * Tabs, splits, buffers and namespaces (& % $ and the following)
    * Mappings and abbreviations
    * Macros and registers for copy and paste
    * History of commands
    * List of markers
    * Undo
    * Scripting, Functions, Vimscript and Python
    * Plugins
      - Standard features
      - Writting plugins
      - Plugin systems: usage for using and writing plugins
    * Colour:
      - Standard, 8 and 16 bits, and true color, Screen/Byobu
      - Gruvebox, Solarize and other colourschemes
    * Fonts:
      - Cools nd popular fonts
      - How to set fonts in xterm, gnome-terminal and GVim.
    * Verbosing, logs and possibilities of using it to study your own
    usage (often used commands and typed sequences).
    * Highlighting
    * Bash and Vim commands
    * Help commands, files, tutor, and usr\_toc
    * Compiling, standard features and plugins
    * Quickfix
  - A description of the ctags usage Molinar described.
  - A description of these issues in special and a plugin for each:
    * The letter sequences which are available (zX, gX) and usable
    for mappings (jj, _, gr, <ctrl-[hjkl]>...).
    * The popular choices for leader and localleader keys.
    And their fit for use with different keyboad layouts
    (at least for English and Portuguese).
    * Dealing with swp and swo files.
    Use the content in
    [this post](http://ttm.github.io/research/2017/11/02/vim-swp-swo.html)
    by myself.
    * Slides presentation in Vim:
      - Macros or mappings for changing slides
      and for opening figures.
      - Possibilities of integreating figures
      and equations.
    * Highlighting text
      - Exemplify plugin with the Toki Pona plugin.
      - Show how to change colour of token sets
      and the token sets on the fly.
      Maybe make a plugin to help on this,
      maybe saving the resulting colourscheme
      of on-the-fly changes.
    * Bash commands and:
      - Running Python files
      - Compiling Latex files
    * Web navigation (open links, search on Google)
* A Latex article in resemblance with the Vim article:
  - Describe Tex and Latex, their relation and basic notions.
  - Descibe Latex usage with the commands: pdflatex, bibtex, latex, make, etc.
  - Describe tweaks
    * To reference sections and bibliographical items from another document
    * To write inline and listings of codes
    (see at least the [dissertation](https://github.com/ttm/dissertacao/),
    [ops](https://github.com/ttm/ops) and other documents).
    * To place figures and tables
    * To load external files
      - Tables.
      Make a Python function that receives a csv file and writes a latex table
      (Use routines in gmaneLegacy and percolation).
  - Describe basic canonical choices:
    * Single and double columns
    * Basic document, articles and books (dissertations, thesis)
    * Basic elements: graphics, tables, code, links (decent setting of href), footnotes.
    * Title page
    * Bibliographical styles of reference and item description
    * utf8, latin
    * Equations
      - split, multiline, equation, environments
      - mix of systems and single lines
    * Colors and fonts (sizes)
    * Spaces and breaks (line, page)
    * Page layout (magins, fixed headings and footers)
  - Other features:
    - Diagrams
    - ??
* Same proposal as for Vim and Latex, but for:
  - The semantic web
  - Python
  - Linux
  - Data visualization, complex networks, computer-aided language processing (text mining, analytics and NLP)
* "On the hub, intermediary and peripheral vertices of networks:
* Erdös sectorialization and alternatives":
  - Dry cut on percentages (e.g. 5, 20, 75%)
  - Using the Fourier espectrum
  - Make these options available through PyPI and Algorithmia
  - Further work:
    * Wavelets
    * AI 
 * Articles presenting:
   - A package with canonical Swarm Intelligence algorithms (ACO, PSO, etc)
   - A package with canonical Bayesian learning methods
   - A package with canonical Fuzzy learning methods
   - A package with canonical Evolutive learning methods
* Chernoff bodies:
  - Glifos em corpos humanos mapeados para os dados
  - Explorar o corpo masculino e feminino e traços sexuais
* Colóquio:
  * AAVO completo:
    - Core e expansão
    - Consideração da Interface de visualização
    - Da LOSD
    - Estado talvez com os conceitos faltates na Core.
    Talvez com a expansão melhorada.
    - Inferências e um script para realizar recomendação
    de métodos e outras coisas.
    Talvez já conectar com a LOSD e fazer gambis.
  * Linked Open Social Data as social participationn ontologies and data
    - LOSD
    - Ontologias de participação Social
    - Pnud1-5
* Nuvem:
  - Consideração da sociedade pela sociedade:
    * O que fizemos até aqui
    * Qual a questão e contexto atual: com as tecnologias,
    é importante a interface com o ferramental para análise dos dados,
    até para fazer frente aos outros poderes.
    * Como podemos trabalhar o tema: conexão com Nuvem, com Nexos e com IFSC/ICMC.
  - Audiovisualização social: conceitualização inicial
    * Cada dado possui uma pessoa ou população associada.
    * AAVO
    * Integração com o software de mineração de dados
    * Possibilidades de construção conjunta
* Linked data and the semantic web: an overview on current technology and of the harnessing possibilities:
  - RDF(S), OWL, SKOS, RIF, SparQL
    - Make a repository of such files (updated)
    - Put also graphs that hold the relations that imply a class restriction or property axiom, range and domain.
    - Put the set that comply and break with OWL DL, Full etc.
    - Make distinct all between RDF, RDFS and OWL and SKOS.
      * Advocate RDFS with [Ontology Enhancements](https://arxiv.org/abs/1710.09952)
      especially for rapid development and as a template for ontologies.
      Classes are OWL, but only hold ordinary properties, and (po:potential) range and domain.
      * OWL capabilities should be considered completely seperate.
  - DBPedia, LOV, other sources of data, dataHub, data.world
  - Tools for visualizing and making ontologies and linked data
  - Results and discussion: overview of possibilities,
  possible enhancements, tools to make, research on linked data methods
  and in mining data.
* Biblical vent: phrases and morals seem sublime and abominable
  - Phrases to meditate and guide the soul
  - Phrases miss used (never saw an honest soul beg)
  - Phrases I only can understand as abominable
  - Moral and ethic issues
  - Narratives in which I find wisdom and missguidance
  - A textual analysis of the Bible
  - A toolbox for obtaining insights about the Bible
  (word and phrase search, sections, authors, etc)
* Conlangs:
  - Idealizada para escrita cientifica (artigos) e apresentação científica
  - outra idealizada para explorar o pensamento
  - outra idealizada para comunicar os pensamentos rapidamente e informalmente a alguém ou várias pessoas

* Adicionar o Milgram aos egalitrian aspects of scale-free
* Vim from the perspective of HCI
or Vim: HCI description.
Vim: a HCI description
* VOV: Vim Ontology and Vocabulary
* Text-based data visualization:
  * Syntax highlighting
  * Images and graphs to asciiart.
    - As a aesthetic approach
    - For complying with limitations of the platform (e.g. Vim editor).
  * Slides and pages,
  * Opening image and pdf files through external commands (:!eog evince, :term).
  * A Vim plugin for changing background and foreground colors incrementally,
  and correctly associating keywords and highlighting groups.
  * Another for importing images as ascii art and making charts using ascii,
  with colors, positions, etc.
* Specific conlangs for different contexts, they are modes with a very simple vocabulary.
  - Each with about 120 tokens such as toki pona or something else.
  - Have a version of words in English and Portuguese and Spanish and French etc.
  - For scientific writing, is parsed into an RDF + python artificial languages.
  Should yield the results stated in the text as tests and results and exposition
  of the material to the reader.
  - Language for exploring the thought.
  - Language for representing data and software directly (not as scientific writing).
  - Specific vocabularies are added as needed. See how this works in Lojban.
  - "The first formal language is thought to be the one used by Gottlob Frege in his Begriffsschrift (1879), literally meaning "concept writing", and which Frege described as a "formal language of pure thought."[2]
    * from https://en.wikipedia.org/wiki/Formal_language
* Article about allowing irregular day and night activities.
* a capela:
  - puro: soh vale voz
  - misturado: vale voz e ruido gutural labial, percussivo, soprado etc.
  - fora: vale percussao corporal
* Estudar sobre cor:
  - Teoria do Goethe
  - Do Kandinsky?
  - Do Schopenhauer: https://en.wikipedia.org/wiki/On_Vision_and_Colors
  - Do Paul Klee
  - Newton
  - Ludwig Wittgenstein and Erwin Schrödinger 
  - Thomas Johann Seebeck, Arthur Schopenhauer (see: On Vision and Colors), Hermann von Helmholtz, Rudolf Steiner, Ludwig Wittgenstein, Werner Heisenberg, Kurt Gödel, and Mitchell Feigenbaum. (todos sobre o Goethe)
  - De quem mais tem?
  - Teoria canonica de cores: https://en.wikipedia.org/wiki/Color_theory
  - https://en.wikipedia.org/wiki/Evolutionary_aesthetics
  - https://en.wikipedia.org/wiki/Effects_of_blue_light_technology
  - https://en.wikipedia.org/wiki/Color_psychology
  - https://en.wikipedia.org/wiki/Color_constancy
  - https://en.wikipedia.org/wiki/Chromostereopsis
  - https://en.wikipedia.org/wiki/Category:Optical_illusions
* General guidelines (best practices?) for syntax highlighting derived from:
  - Data visualization theory
  - Visual cognition theory
  - Design theory
  - Visual arts theory
  - Programs dedicated to syntax highlighting
* Syntax highlighting and color schemes:
  - Derived from the guidelines on the previous article
  - With color palettes related to mythological figures
    - African entities: exu (red, black and yellow), obatalá, umulu... 
    - Egyptian, Greek entities and from elsewhere
  - Taking advantage of color properties, e.g.
  red for detail-oriented tasks, blue for creativity and staying awake.
  Maybe green for exploration.
  - Apply them at least in for Vim 
  - Alternate colors (especially background colors) from time to time.
  - Color schemes for syntax highlighting: general guidelines, best practices and example implementations
    - Introduction and related work
      * SH - what it is and why it is so important
    - Materials and methods
      * Dataviz theory
      * Existing software:
        - That uses SH
        - That is dedicated to SH
        - To obtain color schemes
      * Theory of design and visual arts
    - Results and discussion
      * Background color and foreground colors
      * Periodic changes of the color scheme
      * General guidelines
      * Best practices (same as general guidelines?)
      * Color schemes
        - Keys colors
        - Mythology-inspired color schemes
        - Various colors for various groups of tokens:
          * Optimal palettes without constrains
          * Optimal palettes given the background and maybe some of the foreground colors
      * Facilities for fine-tuning
      * Implementations in Vim
        - Coloring mode:
          * For picking specific colors for the groups in the buffer or all the groups
          * For fine-tuning the colors
          * For saving and loading the color-schemes
        - Color schemes
          * as specified above
    - Conclusions and further work
      * Enhance the color schemes upon usage and feedback
      * Consider other aspects of syntax highlighting:
        - Bold, italic
        - Specific languages and context:
          * Coloring following syntax rules and/or set of tokens
    - The only specific reference: https://en.wikipedia.org/wiki/Syntax_highlighting
* A description of the possibilities, experiments and tools I
  developed to harness the influence of colors in the convenient
  context of writting (code, articles, books, webpages, etc), i.e. in
  the context of syntax highlighting.
  Make the realcolors tools available with prv to sync notes from all
  users and guide development.
  (measure time with each color in bg and fg. Scores of the users for
  how stimulant, confortable, readability, beautiful, exotic, etc, it is.
* "Change and method ringing for musical composition: with emphasis on
  the symmetries and unit synthesis for music and sound"
* Synthesis of evolving networks:
  - minimal algorithms and formats
  - algorithms and formats that might be considered paradigmatic:
    * because they mimic real world data
      - use real data to obtain statistics and make the networks with such statistics
    * because they are extensions of static network models
      - use models such as preferential attachment, geographic and small world,
      to make evolving networks
* Explore each Babylon element's potential for visual analytics
* Describe the binaural model developed in estudosParaAAlma
  - explore the idea of glissandi with beats at 40Hz and other frequencies (and vibrato)
  - explore the idea of binaural music (notes are comprized of a freq+freq which entails the binaural freq)
  - explore the idea of using non-pure tones (eg. 2 saw tooths: 200, 240, 400, 440, etc)
  - possibilities of placebo exploitation: 432Hz, frequencies of XXX, etc...
  - explore multiple beat frequencies, multiple waveforms
  - make the equations for finding the frequencies where the intended binaural freq difference X (say 40Hz) match a specific interval (say 4J or 3m).
  - applications: study, research, enhancement for using a visual analytics tool
  - hypotheses: changing the frequencies used to result the beat is a good practice to avoid wastage of cochlea regions for static tones are not found in nature






[1]: https://github.com/ttm/ontologyEnhancements/raw/master/article.pdf


## Some of the already sketched, finished or almost:
* Versinus
  - Implement a toolbox to render versinus images and animations (audiovisualizations)
* Ubiquity of inequality (by power laws)
* Social Participation Ontology
* Differences between the linguistic production of the Erdõs Sectors
* LOSD (Linked Open Social Database)
* Pimp the EMC articles and send them to journals
* [Ideal Ideas](https://github.com/ttm/idealIdeas/raw/master/pensamento.pdf):
a physical model of the mind.


## People to write with:
* Luciana Furlanetto
* Maju Martins
* Silvério
* Daniel Borges
* Cravelho
