---
layout: post
title:  "Semantic web issues"
categories: doc semantic endpoint bigdata
comments: true
published: true
---
- Turtle applies the prefixes : only classes (properties included),
but not to individuals:
- Do Jena load remote data after startup? At startup it does, as in
[this conf file][jenaconf], but afterwards I was unable to upload,
e.g. [this online rdf file][lalenialog2], to it although the same file
can be sent to the remote jena system from my filesystem.
- I would like to serve the same datasets through SparQL with and without
reasoning over an OWL ontology
 (btw. I mostly care about taxonomic, subclass -> superclass relations).
Is it possible?
- If a conceptualization is formalized in OWL without class restrictions,
property axioms and domain/range specifications, the resulting RDF file
hold no information about the envisioned relations among the
classes and properties.
This is usually surpassed with an image blueprint, but is there
any namespaced used to hold this relations?
Defining funy range and domain superclasses to the foreseen classes
is clumsy compared to using a foo:usualRange and foo:usualDomain properties,
but I (strangely) did not find the foo namespace still.
- Are the files being rendered in a good standard? Should we write the file
with the named graph?

[jenaconf]: https://github.com/ttm/percolation/blob/master/misc/configAuto.ttl
[lalenialog2]: https://github.com/OpenLinkedSocialData/labMacambiraLaleniaLog2/blob/master/rdf/labMacambiraLaleniaLog2Translate.owl
