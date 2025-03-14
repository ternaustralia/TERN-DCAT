// // All config options at https://respec.org/docs/
// var respecConfig = {
//     // Working Groups ids at https://respec.org/w3c/groups/
//     group: "webapps",
//     specStatus: "unofficial",
//     editors: [{
//         name: "Your Name",
//         url: "http://your-site.com",
//     }],
//     github: {
//         branch: "main",
//         repoURL: "user/my-awesome-api",
//     },
//     // See https://respec.org/docs/#xref for usage.
//     xref: "web-platform",
// };
var respecConfig = {
    doJsonLd: true,
    //	preProcess: [dfn_index],
    subtitle: "Version 1.0",
    specStatus: "unofficial",
    noRecTrack: true,
    latestVersion: "https://github.com/ternaustralia/TERN-DCAT",
    logos: [{
        src: "https://w3id.org/tern/static/tern-web/img/logo@2x.png",
        url: "https://www.tern.org.au/",
        alt: "TERN",
        // width: 300,
        // height: 72,
        id: "tern-logo",
    },],
    // errata: "https://w3c.github.io/dxwg/errata/",
    //    specStatus: "ED",
    //    specStatus: "CR",
    //    crEnd: "2023-11-28",
    //    implementationReportURI: "https://w3c.github.io/dxwg/dcat3-implementation-report/",
    // shortName: "tern-dcat",
    // prevRecShortname: "vocab-dcat-2",
    // canonicalURI: "TR",
    // prevRecURI: "https://www.w3.org/TR/2020/REC-vocab-dcat-2-20200204/",
    // previousPublishDate: "2020-02-04",
    // previousMaturity: "REC",
    //    previousURI:          "https://www.w3.org/TR/2019/WD-vocab-dcat-2-20190528/",
    // edDraftURI: "https://w3c.github.io/dxwg/dcat/",
    //    issueBase:            "https://github.com/w3c/dxwg/issues/", -- Not needed when github used
    // alternateFormats: [{
    //     label: "Turtle",
    //     uri: "https://www.w3.org/ns/dcat.ttl",
    // }, {
    //     label: "RDF/XML",
    //     uri: "https://www.w3.org/ns/dcat.rdf",
    // }, {
    //     label: "JSON-LD",
    //     uri: "https://www.w3.org/ns/dcat.jsonld",
    // }],
    //publishDate: "2025-02-27",
    editors: [
        {
            name: "Javier Sanchez Gonzalez",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        },
        {
            name: "Siddeswara Guru",
            orcid: "0000-0002-3903-254X",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        },
        {
            name: "Junrong Yu",
            company: "Terrestrial Ecosystem Research Network",
            companyURL: "https://www.tern.org.au/",
        }
    ],
    // formerEditors: [{
    //     name: "TBD",
    //     company: "DERI",
    //     companyURL: ""
    // }, {
    //     name: "TBD",
    //     company: "",
    //     companyURL: ""
    // }],
    // otherLinks: [{
    //     key: "Contributors",
    //     data: [{
    //         value: "Makx Dekkers",
    //         href: "http://www.makxdekkers.com"
    //     }]
    // },
    //     /*                 
    //           {
    //             key: "Editors of previous version",
    //             data: [{
    //                 value: "TBD",
    //                 href: ""
    //               },
    //               {
    //                 value: "",
    //                 href: ""
    //               }
    //             ]
    //           }
    //     */
    // ],
    // group: "dx",
    /* The following fields are now deprecated, and replaced by field `group`	
        wg: "Dataset Exchange Working Group",
        wgURI: "https://www.w3.org/2017/dxwg/",
        wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    */
    // wgPublicList: "public-dxwg-comments",
    inlineCSS: "true",
    lint: "false",
    github: "https://github.com/ternaustralia/TERN-DCAT",
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
    }
    //     "ADMS-SKOS": {
    //         "href": "https://web.archive.org/web/20210521035614/https://joinup.ec.europa.eu/svn/adms/ADMS_v1.00/ADMS_SKOS_v1.00.html",
    //         "title": "Joinup. ADMS Controlled Vocabularies",
    //         "publisher": "European Commission"
    //     },
    //     "DATS": {
    //         "href": "https://datatagsuite.github.io/docs/html/",
    //         "title": "Data Tag Suite",
    //         "authors": ["Alejandra Gonzalez-Beltran", "Philippe Rocca-Serra"],
    //         "publisher": "NIH Big Data 2 Knowledge bioCADDIE and NIH Data Commons projects",
    //         "date": "2016"
    //     },
    //     "DBPEDIA-ONT": {
    //         href: "http://dbpedia.org/ontology/",
    //         title: "DBPedia ontology"
    //     },
    //     "DCAT-AP-SE": {
    //         title: "DCAT-AP-SE: Clarifications, translations and explanations of DCAT-AP for Sweden",
    //         href: "https://docs.dataportal.se/dcat/en/",
    //         authors: ["Matthias Palmér"],
    //         etAl: false
    //     },
    //     "DCAT-BE": {
    //         title: "Linking data portals across Belgium.",
    //         href: "http://dcat.be/"
    //     },
    //     "DCAT-AP-IT": {
    //         title: "Profilo metadatazione DCAT-AP_IT",
    //         href: "https://docs.italia.it/italia/daf/linee-guida-cataloghi-dati-dcat-ap-it/it/stabile/dcat-ap_it.html",
    //         publisher: "AgID & Team Digitale"
    //     },
    //     "DCAT-AP-NO": {
    //         title: "Standard for beskrivelse av datasett, datatjenester og datakataloger (DCAT-AP-NO)",
    //         href: "https://data.norge.no/specification/dcat-ap-no/"
    //     },
    //     "DCAT-AP.de": {
    //         title: "Vokabulare und Dokumente für DCAT-AP.de",
    //         href: "https://dcat-ap.de/def/"
    //     },
    //     "DDI": {
    //         href: "https://www.ddialliance.org/explore-documentation",
    //         title: "Data Documentation Initiative",
    //         publisher: "DDI Alliance"
    //     },
    //     "DOAP": {
    //         href: "https://github.com/ewilderj/doap/wiki",
    //         title: "Description of a Project",
    //         authors: ["Edd Wilder-James"]
    //     },
    //     "FAIR": {
    //         title: "The FAIR Guiding Principles for scientific data management and stewardship",
    //         authors: ["Mark D. Wilkinson"],
    //         etAl: true,
    //         status: "Scientific Data, vol. 3, Article nr. 160018",
    //         publisher: "Nature",
    //         href: "https://doi.org/10.1038/sdata.2016.18"
    //     },
    //     "FRAPO": {
    //         href: "http://www.sparontologies.net/ontologies/frapo",
    //         title: "FRAPO, the Funding, Research Administration and Projects Ontology",
    //         authors: ["David Shotton"],
    //         date: "04 September 2017"
    //     },
    //     "GeoDCAT-AP-IT": {
    //         title: "GeoDCAT-AP in Italy, the national guidelines published",
    //         href: "https://web.archive.org/web/20200506120557/https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/news/geodcat-apit"
    //     },
    //     "HYDRA": {
    //         authors: [
    //             "Markus Lanthaler"
    //         ],
    //         href: "https://www.hydra-cg.com/spec/latest/core/",
    //         title: "Hydra Core Vocabulary",
    //         date: "15 March 2018",
    //         publisher: "Hydra W3C Community Group",
    //         status: "Unofficial Draft"
    //     },
    //     "INSPIRE-DoC": {
    //         "href": "http://inspire.ec.europa.eu/metadata-codelist/DegreeOfConformity/",
    //         "title": "INSPIRE Registry: Degrees of conformity",
    //         "publisher": "European Commission"
    //     },
    //     "INSPIRE-SDST": {
    //         "href": "http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceType/",
    //         "title": "INSPIRE Registry: Spatial data service types",
    //         "publisher": "European Commission"
    //     },
    //     "ISO-IEC-25012": {
    //         title: "ISO/IEC 25012 - Data Quality model",
    //         href: "http://iso25000.com/index.php/en/iso-25000-standards/iso-25012"
    //     },
    //     "ISO-26324": {
    //         "authors": ["ISO/TC 46/SC 9"],
    //         "href": "https://www.iso.org/standard/43506.html",
    //         "title": "Information and documentation -- Digital object identifier system",
    //         "publisher": "ISO",
    //         "status": "International Standard",
    //         "date": "2012"
    //     },
    //     "LinkedDataPatterns": {
    //         title: "Linked Data Patterns: A pattern catalogue for modelling, publishing, and consuming Linked Data",
    //         authors: ["Leigh Dodds", "Ian Davis"],
    //         date: "31 May 2012",
    //         href: "http://patterns.dataincubator.org/book/"
    //     },
    //     "EUV-AR": {
    //         "href": "https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/access-right",
    //         "title": "Named Authority List: Access rights",
    //         "publisher": "Publications Office of the European Union"
    //     },
    //     "EUV-CS": {
    //         "href": "https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/concept-status",
    //         "title": "Named Authority List: Concept statuses",
    //         "publisher": "Publications Office of the European Union"
    //     },
    //     "EUV-DS": {
    //         "href": "https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/dataset-status",
    //         "title": "Named Authority List: Dataset statuses",
    //         "publisher": "Publications Office of the European Union"
    //     },
    //     "netCDF": {
    //         href: "https://www.unidata.ucar.edu/software/netcdf/",
    //         title: "Network Common Data Form (NetCDF)",
    //         publisher: "UNIDATA"
    //     },
    //     "OBO": {
    //         href: "http://www.obofoundry.org/",
    //         title: "The OBO Foundry"
    //     },
    //     "ODRS": {
    //         authors: [
    //             "Leigh Dodds"
    //         ],
    //         href: "http://schema.theodi.org/odrs",
    //         title: "Open Data Rights Statement Vocabulary",
    //         date: "29 July 2013",
    //         publisher: "ODI"
    //     },
    //     /*	    
    //             "OpenAPI": {
    //                 href: "https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md",
    //                 title: "OpenAPI Specification. Version 3.0.2",
    //                 date: "08 October 2018",
    //                 publisher: "OAI"
    //             },
    //     */
    //     "OpenSearch": {
    //         authors: [
    //             "DeWitt Clinton"
    //         ],
    //         href: "https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md",
    //         title: "OpenSearch 1.1 Draft 6",
    //         date: "17 April 2018",
    //         publisher: "OpenSearch"
    //     },
    //     "PDO": {
    //         href: "https://web.archive.org/web/20100727172837/http://vocab.deri.ie/pdo",
    //         title: "Project Documents Ontology",
    //         authors: ["Pradeep Varma"],
    //         date: "09 July 2010"
    //     },
    //     /*        
    //             "PROF-CONNEG": {
    //                 href: "https://w3c.github.io/dxwg/conneg-by-ap/",
    //                 title: "Content Negotiation by Profile",
    //                 date: "03 October 2018",
    //                 status: "W3C Editor's Draft"
    //             },
    //     */
    //     "PROF-GUIDE": {
    //         href: "https://w3c.github.io/dxwg/profiles/",
    //         title: "Profile Guidance",
    //         date: "03 October 2018",
    //         status: "W3C Editor's Draft"
    //     },
    //     "PROF-IETF": {
    //         authors: [
    //             "L. Svensson",
    //             "R. Verborgh"
    //         ],
    //         href: "https://profilenegotiation.github.io/I-D-Accept--Schema/I-D-accept-schema",
    //         title: "Negotiating Profiles in HTTP",
    //         date: "24 October 2017",
    //         status: "IETF Internet Draft"
    //     },
    //     "SCHEMA-ORG": {
    //         href: "https://schema.org/",
    //         title: "Schema.org"
    //     },
    //     "ShEx": {
    //         href: "http://shex.io/shex-semantics/",
    //         title: "Shape Expressions Language 2.1",
    //         date: "17 November 2018",
    //         status: "Draft Community Group Report",
    //         publisher: "Shape Expressions W3C Community Group"
    //     },
    //     "UKGOVLD-REG": {
    //         "href": "https://github.com/UKGovLD/registry-core/wiki/Principles-and-concepts",
    //         "title": "Linked Data Registry - Principles and Concepts",
    //         "publisher": "UK Government Linked Data Working Group"
    //     },
    //     "VIVO-ISF": {
    //         href: "https://github.com/vivo-isf/vivo-isf",
    //         title: "VIVO-ISF Data Standard"
    //     },
    //     "ZaveriEtAl": {
    //         title: "Quality assessment for Linked Data: A Survey",
    //         authors: ["Amrapali Zaveri"],
    //         etAl: true,
    //         status: "Semantic Web, vol. 7, no. 1, pp. 63-93",
    //         publisher: "IOS Press",
    //         href: "https://doi.org/10.3233/SW-150175",
    //         date: "2015"
    //     },
    //     "PAV": {
    //         href: "https://pav-ontology.github.io/pav/",
    //         //            href:"http://purl.org/pav/",
    //         title: "PAV - Provenance, Authoring and Versioning. Version 2.3.1",
    //         authors: ["Paolo Ciccarese", "Stian Soiland-Reyes"],
    //         publisher: "Mind Informatics",
    //         date: "16 March 2015"
    //     },
    //     "SPDX": {
    //         "href": "https://spdx.org/rdf/spdx-terms-v2.2/",
    //         "title": "SPDX 2.2",
    //         "publisher": "SPDX"
    //     },
    // }
};