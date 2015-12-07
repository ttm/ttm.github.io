---
layout: post
title:  "SparQL endpoint of linked open social data is up again"
categories: doc semantic endpoint bigdata
comments: true
published: true
---
A considerable amount of the data from [this open and linked social data][gh]
is now available on [a SparQL endpoint][endpoint] through a Jena/Fuseki instance.

Three problems were detected in loading data into the Jena/fuseki instance:

- Datetime format used in Cidade Democrática is not undestood by Jena (and seems to be an unusual standard).
- Some non-standard URIs were detected in the linked data from email lists.
- Non-utf8 chars are found in some IRC logs, tweets and email messages.

Only the last problem,
in some cases, have lead to a fail in the data loading process of Jena/Fuseki.
They might be resolved in near future.

For making the configuration files, [these routines][conf] have been developed.
[Here is a snapshot of current configuration file][conff], where it is specified
each dataset loaded and the respective query point.

The endpoint can be dealt with through normal html browsing.
Here are [some examples for using the endpoint][eex] for rapid rendering
of friendship and interaction networks.
The advance consists in the access to the data through powerful semantic
queries (using the SparQL language),
and the fast access to the data (available through the Jena/Fuseki endpoint).
The total space in RAM used by JenaFuseki for the current data is between 5GB and 8GB.

Here are [some examples of using SparQL queries to explore data from other endpoints][exext],
e.g. for making networks of collaborators in scientific articles form [Aalto University][aadata]
and of friendships found in DBpedia.

[aadata]: http://data.aalto.fi/
[sched]: http://ttm.github.io/doctorate,/plan/2015/12/01/resume-doctorate.html
[endpoint]: http://200.144.255.210:8082
[conf]: https://github.com/ttm/percolation/blob/master/percolation/config.py
[conff]: https://github.com/ttm/percolation/blob/master/misc/configAuto.ttl
[eex]: https://github.com/ttm/percolation/blob/master/tests/makeBasicStructs.py
[exext]: https://github.com/ttm/percolation/blob/master/tests/conectFuseki.py
[gh]:      https://github.com/OpenLinkedSocialData
[fjena]:      https://jena.apache.org/documentation/serving_data/
[sparqlscript]:      https://github.com/ttm/percolation/blob/master/tests/makeBasicStructs.py
