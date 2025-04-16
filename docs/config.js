// All config options at https://respec.org/docs/
var respecConfig = {
    github: "https://github.com/ternaustralia/TERN-DCAT",
    shortName: "TERN-DCAT 1.0.0",
    subtitle: "Version 1.0.0",
    // publishDate: "2025-04-15",
    specStatus: "unofficial",
    // noRecTrack: true,
    latestVersion: "https://github.com/ternaustralia/TERN-DCAT/releases/tag/v1.0.0",
    logos: [{
        src: "https://w3id.org/tern/static/tern-web/img/logo@2x.png",
        url: "https://www.tern.org.au/",
        alt: "TERN",
        // width: 300,
        // height: 72,
        id: "tern-logo",
    },],
    editors: [
        {
            name: "Javier Sánchez González",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        },
        {
            name: "Junrong Yu",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        },
        {
            name: "Siddeswara Guru",
            orcid: "0000-0002-3903-254X",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        },
    ],
    otherLinks: [
        {
            key: "Owners:",
            data: [
                {
                    value: "Terrestrial Ecosystem Research Network",
                    href: "https://www.tern.org.au/",
                },
            ]
        },
        //    {
        //       key: "Previous version:",
        //       data: [ { value : "https://github.com/ternaustralia/TERN-DCAT/releases/tag/v1.0.0", href : "https://github.com/ternaustralia/TERN-DCAT/releases/tag/v1.0.0" } ]
        //     },
    ],
    inlineCSS: "true",
    lint: "false",
    localBiblio: {
        "TERN": {
            "href": "https://linkeddata.tern.org.au/information-models/tern-ontology",
            "title": "TERN Ontology",
            "publisher": "Terrestrial Ecosystem Research Network"
        },
        "TERN-ORG": {
            "href": "https://linkeddata.tern.org.au/viewers/tern-org-ontology",
            "title": "TERN Organisations Ontology",
            "publisher": "Terrestrial Ecosystem Research Network"
        },
        "OWL2-SYNTAX": {
            "href": "https://www.w3.org/TR/owl2-overview/",
            "title": "OWL 2 Web Ontology Language Document Overview (Second Edition)",
            "publisher": "W3C OWL Working Group. W3C. 11 December 2012. W3C Recommendation"
        },
        "SOSA": {
            "href": "https://www.w3.org/TR/vocab-ssn/",
            "title": "Semantic Sensor Network Ontology",
            "publisher": ""
        },
        "CNT": {
            "href": "http://www.w3.org/TR/Content-in-RDF/",
            "title": "Representing Content in RDF",
            "publisher": ""
        },
        "QUDT": {
            "href": "http://www.qudt.org/",
            "title": "QUDT - Quantities, Units, Dimensions and Data Types Ontologies",
            "publisher": "Ralph Hodgson; Paul J. Keller; Jack Hodges; Jack Spivak.18 March 2014"
        },
        "QUDT-UNITS": {
            "href": "http://www.qudt.org/vocab/unit",
            "title": "QUDT Units Vocabulary",
            "publisher": "QUDT.org"
        },
        "INSPIRE-MD-REG": {
            "href": "http://data.europa.eu/eli/reg/2008/1205",
            "title": "Commission Regulation (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata",
            "publisher": "OJ L 326",
            "date": "4 December 2008"
        },
        "RDF-SYNTAX-GRAMMAR": {
            "href": "https://www.w3.org/TR/rdf-syntax-grammar/",
            "title": "RDF 1.1 XML Syntax",
            "publisher": "Fabien Gandon; Guus Schreiber. W3C. 25 February 2014"
        },
        "RDF-SCHEMA": {
            "href": "https://www.w3.org/TR/rdf-schema/",
            "title": "RDF Schema 1.1",
            "publisher": "Dan Brickley; Ramanathan Guha. W3C. 25 February 2014. W3C Recommendation"
        },
        "DXWG": {
            "href": "https://www.w3.org/2017/dxwg/wiki/Main_Page",
            "title": "Dataset Exchange Working Group",
            "publisher": "W3C"
        },
        "OGC-EPSG": {
            "href": "http://www.opengis.net/def/crs/EPSG/",
            "title": "EPSG CRS Register",
            "publisher": "OGC"
        },
        "TERN-ISO": {
            "href": "https://doi.org/10.5281/zenodo.5652221",
            "title": "Terrestrial Ecosystem Research Network (TERN) Metadata Profile of ISO 19115-3:2016 and ISO 19157-2:2016",
            "publisher": "Terrestrial Ecosystem Research Network"
        },
        "ISO-19157-2": {
            "href": "https://www.iso.org/standard/66197.html",
            "title": "Geographic information -- Data quality -- Part 2: XML schema implementation",
            "publisher": " ISO/TC 211. ISO. 2016. International Standard"
        },
    }
};