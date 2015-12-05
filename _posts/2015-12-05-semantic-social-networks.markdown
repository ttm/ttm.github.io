---
layout: post
title:  "Semantic notes for social networks"
categories: doc semantic repport
comments: true
published: true
---
In making the networks from [this open and linked social data][gh],
a quasi-trivial pattern emerged: only two similar SparQL queries
were used to retrieving the edges:

{% highlight sparql %}
SELECT ?i1 ?l1 ?i2 ?l2 WHERE { ?item prefix:relatesToFoo ?i1 .
                               ?item prefix:relatesToBar ?i2 .
                               ?i1   prefix:someLabel ?l1 .
                               ?i2   prefix:someLabel ?l2 . }
{% endhighlight %}

or:

{% highlight sparql %}
SELECT ?i1 ?l1 ?i2 ?l2 WHERE { ?item1 prefix:relatesToFoo ?item2 .
                               ?item1 prefix:relatesToBar ?i1 .
                               ?item2 prefix:relatesToBaz ?i2 .
                               ?i1    prefix:someLabel    ?l1 .
                               ?i2    prefix:someLabel    ?l2 . }
{% endhighlight %}

where ?i1 ?i2 ?l1 ?l2 stand for both individuals and their names
or nicks and ?l1 ?l2 are dispensable.
These patterns are used alike for relationship and interaction networks
as can be seen in [this implementation][sparqlscript].

The semantic queries were executed pretty fast (~20ms),
a good surprise probably because there was no reasoner involved.
The major drawback was the time needed for loading the rdf files:
up to 4 minutes for a file of size ~100MB.
This directed the efforts (again) to [using the Jena/Fuseki endpoint][fjena]
to serve the data.
This can take a whole day of work since individual files
are to be input into Jena, incorporated to the configuration
file if correctly loaded or corrected.
In rdflib, problems were found in loading some ttl files and also
some strange characters in the IRC logs (e.g. ^\ and ^A) prevented
rdf/xml files to load. A workaround was to edit the files with vim.

Steps:

- Upload RDF to Jena
- query to get network
- make Erdös partitioning
- write graphml file (or similar),
- write RDF file with ids of Erdos Partitioning and other info
- if necessary, write also the text produced by each agent

upload files into repo when possible


[sched]: http://ttm.github.io/doctorate,/plan/2015/12/01/resume-doctorate.html
[gh]:      https://github.com/OpenLinkedSocialData
[fjena]:      https://jena.apache.org/documentation/serving_data/
[sparqlscript]:      https://github.com/ttm/percolation/blob/master/tests/makeBasicStructs.py
