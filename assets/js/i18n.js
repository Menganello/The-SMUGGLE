/**
 * THE SMUGGLE - IT/EN Language Switcher
 *
 * How it works:
 * - Any element with `data-i18n="key"` gets its innerHTML replaced with
 *   I18N_DATA[key][lang] on every language change (works for "it" too, so
 *   the dictionary is always the single source of truth for both languages).
 * - Any element with `data-i18n-attrs='{"attr":"key"}'` gets attribute
 *   `attr` set to I18N_DATA[key][lang]. Multiple attrs can be listed in the
 *   JSON object.
 * - Elements with `data-lang-btn="it"` / `data-lang-btn="en"` are the
 *   toggle buttons; clicking one switches language and persists the choice.
 *
 * This file must be loaded (a) after all the page's HTML content (so
 * document.querySelectorAll finds everything) and (b) before main.js, so
 * that GSAP reveal/scroll animations initialize against the already
 * translated DOM instead of animating text that then gets swapped out.
 */
(function () {
  "use strict";

  window.I18N_DATA = window.I18N_DATA || {};

  Object.assign(window.I18N_DATA, {
    "nav.home": { it: "Home", en: "Home" },
    "nav.dona_ora": { it: "Dona Ora", en: "Donate Now" },
    "nav.impresa": { it: "Impresa", en: "Challenge" },
    "nav.sponsor": { it: "Sponsor", en: "Sponsor" },
    "nav.safer": { it: "Safer", en: "Safer" },
    "nav.chi_siamo": { it: "Chi Siamo", en: "About Us" },
    "nav.dona_short": { it: "Dona", en: "Donate" },
    "footer.copyright": {
      it: "© 2026 THE SMUGGLE. All Rights Reserved.",
      en: "© 2026 THE SMUGGLE. All Rights Reserved.",
    },
    "footer.instagram": { it: "Instagram", en: "Instagram" },
    "footer.privacy": { it: "Privacy Policy", en: "Privacy Policy" },
    "footer.brand": { it: "THE SMUGGLE", en: "THE SMUGGLE" },
  });

  /* ==== PAGE-SPECIFIC TRANSLATIONS APPEND BELOW THIS LINE ==== */
})();

(function () {
  "use strict";
  Object.assign(window.I18N_DATA, {
  "home.meta.title": { it: "The Smuggle | Una traversata solidale per sostenere SAFER", en: "The Smuggle | A Solidarity Crossing to Support SAFER" },
  "home.meta.description": { it: "The Smuggle è una traversata solidale di 270km in mare aperto in canoa surfski per raccogliere fondi e sostenere SAFER, un respiratore neonatale autonomo per contesti a risorse limitate.", en: "The Smuggle is a 270km open-water solidarity crossing by surfski canoe to raise funds and support SAFER, a self-sufficient neonatal respirator for resource-limited settings." },
  "home.meta.ogtitle": { it: "The Smuggle | Una traversata solidale per sostenere SAFER", en: "The Smuggle | A Solidarity Crossing to Support SAFER" },
  "home.meta.ogdescription": { it: "Una traversata di 270km in mare aperto a bordo di una canoa surfski per trasformare visibilità in risorse concrete. Sostieni il progetto clinico SAFER.", en: "A 270km open-water crossing aboard a surfski canoe to turn visibility into concrete resources. Support the SAFER clinical project." },
  "home.1": { it: "<span>SOSTENERE VITE</span><br /><span class=\"text-primary italic\">ATTRAVERSO</span><br /><span>ACQUE PERICOLOSE</span>", en: "<span>SUPPORTING LIVES</span><br /><span class=\"text-primary italic\">ACROSS</span><br /><span>DANGEROUS WATERS</span>" },
  "home.2": { it: "Una traversata di 270km in mare aperto a bordo di una canoa surfski per trasformare visibilità in risorse concrete.", en: "A 270km open-water crossing aboard a surfski canoe to turn visibility into concrete resources." },
  "home.3": { it: "Contrabbandare per noi significa <span class=\"text-primary\"> andare contro la disuguaglianza. </span>", en: "Smuggling, to us, means <span class=\"text-primary\"> going against inequality. </span>" },
  "home.4": { it: "Mappa della rotta Sciacca-Tunisi (270 KM)", en: "Map of the Sciacca-Tunisia route (270 KM)" },
  "home.5": { it: "Tra Sciacca e la Tunisia, sfidando il mare per una missione reale.", en: "Between Sciacca and Tunisia, challenging the sea for a real mission." },
  "home.6": { it: "Progetto Clinico", en: "Clinical Study" },
  "home.7": { it: "Un respiratore neonatale progettato per funzionare <span class=\"font-bold underline decoration-primary underline-offset-8\">senza ossigeno medicale</span>. Lo genera direttamente dall'aria che respiriamo.", en: "A neonatal respirator designed to work <span class=\"font-bold underline decoration-primary underline-offset-8\">without medical oxygen</span>. It generates it directly from the air we breathe." },
  "home.8": { it: "Modulo SAFER", en: "SAFER Module" },
  "home.9": { it: "Prototipo SAFER", en: "SAFER Prototype" },
  "home.10": { it: "Autonomia Totale", en: "Total Autonomy" },
  "home.11": { it: "Ha bisogno solo di una ricarica elettrica saltuaria, ideale per le aree più remote dell'Africa.", en: "It only needs occasional electrical recharging, ideal for the most remote areas of Africa." },
  "home.12": { it: "Impatto Reale", en: "Real Impact" },
  "home.13": { it: "Il 98% delle morti neonatali avviene in contesti a risorse limitate. SAFER nasce per colmare questo divario.", en: "98% of neonatal deaths occur in resource-limited settings. SAFER was created to bridge this gap." },
  "home.14": { it: "Ogni respiro <br /><span class=\"text-primary italic\">è un diritto.</span>", en: "Every breath <br /><span class=\"text-primary italic\">is a right.</span>" },
  "home.15": { it: "SOSTIENI L'IMPRESA", en: "SUPPORT THE CHALLENGE" },
  "home.16": { it: "STUDIO CLINICO", en: "CLINICAL STUDY" },
  "sponsor.meta.title": { it: "Sponsor - The Smuggle | Partner e patrocinio del progetto", en: "Sponsor - The Smuggle | Project Partners and Patronage" },
  "sponsor.meta.description": { it: "Scopri gli sponsor e il patrocinio che sostengono The Smuggle e il progetto SAFER.", en: "Discover the sponsors and patronage supporting The Smuggle and the SAFER project." },
  "sponsor.meta.ogtitle": { it: "Sponsor - The Smuggle", en: "Sponsor - The Smuggle" },
  "sponsor.meta.ogdescription": { it: "Una rete di sponsor e partner che sostiene The Smuggle e l'impatto clinico di SAFER.", en: "A network of sponsors and partners supporting The Smuggle and the clinical impact of SAFER." },
  "sponsor.1": { it: "Sponsor e Patrocinio", en: "Sponsor and Patronage" },
  "sponsor.2": { it: "<span>UNA RETE DI</span><br /><span class=\"text-primary italic\">SUPPORTO CONCRETO</span>", en: "<span>A NETWORK OF</span><br /><span class=\"text-primary italic\">CONCRETE SUPPORT</span>" },
  "sponsor.3": { it: "The Smuggle cresce grazie a persone, enti e realt&agrave; che scelgono di sostenere un progetto in cui impresa sportiva, ricerca clinica e impatto reale procedono insieme.", en: "The Smuggle grows thanks to people, organizations, and communities who choose to support a project where the sporting challenge, clinical research, and real impact move forward together." },
  "sponsor.4": { it: "Patrocinio istituzionale", en: "Institutional Patronage" },
  "sponsor.5": { it: "The Smuggle &egrave; un'iniziativa realizzata con il patrocinio della Fondazione Politecnico di Milano.", en: "The Smuggle is an initiative carried out under the patronage of Fondazione Politecnico di Milano." },
  "sponsor.6": { it: "Patrocinio", en: "Patronage" },
  "sponsor.7": { it: "Ricerca, impatto, responsabilit&agrave;", en: "Research, impact, responsibility" },
  "sponsor.8": { it: "I logo dei sostenitori", en: "Our supporters' logos" },
  "sponsor.9": { it: "Sponsor in linea <br />con il progetto", en: "Sponsors aligned <br />with the project" },
  "sponsor.10": { it: "Una presenza condivisa che rende possibile la traversata, la raccolta fondi e la spinta verso l'avvio dello studio clinico SAFER.", en: "A shared presence that makes the crossing possible, together with fundraising and the push toward launching the SAFER clinical study." },
  "sponsor.11": { it: "<strong>Nota di trasparenza:</strong> Eventuali sponsorizzazioni tecniche o operative contribuiscono a ridurre i costi della traversata. Le risorse economiche che non risultano pi&ugrave; necessarie per l'impresa vengono riallocate a favore dello studio clinico SAFER.", en: "<strong>Transparency note:</strong> Any technical or operational sponsorships help reduce the costs of the crossing. Financial resources no longer needed for the challenge are reallocated to support the SAFER clinical study." },
  "sponsor.12": { it: "Sostieni il progetto", en: "Support the project" },
  "sponsor.13": { it: "Porta anche tu <br /><span class=\"text-primary italic\">questo impatto pi&ugrave; lontano.</span>", en: "You can carry <br /><span class=\"text-primary italic\">this impact even further.</span>" },
  "sponsor.14": { it: "Ogni contributo sostiene la traversata e rafforza il percorso che porta SAFER verso la validazione clinica nei contesti che ne hanno pi&ugrave; bisogno.", en: "Every contribution supports the crossing and strengthens SAFER's path toward clinical validation in the settings that need it most." },
  "sponsor.15": { it: "DONA ORA", en: "DONATE NOW" },
  "sponsor.16": { it: "PROGETTO SAFER", en: "SAFER PROJECT" }
  });
})();

(function () {
  "use strict";
  Object.assign(window.I18N_DATA, {
  "impresa.meta.title": { it: "Impresa - The Smuggle | Il mare come mezzo, la ricerca come fine", en: "The Challenge - The Smuggle | The Sea as the Means, Research as the End" },
  "impresa.meta.description": { it: "La traversata di 270km in mare aperto da Sciacca alla Tunisia in canoa surfski. Scopri i dettagli operativi e logistici dell'impresa sportiva solidale di The Smuggle.", en: "The 270km open-water crossing from Sciacca to Tunisia by surfski canoe. Discover the operational and logistical details of The Smuggle's charity sporting challenge." },
  "impresa.meta.ogTitle": { it: "Impresa - The Smuggle", en: "The Challenge - The Smuggle" },
  "impresa.meta.ogDescription": { it: "Una sfida sportiva di 270km in mare aperto in canoa surfski per canalizzare attenzione mediatica e fondi verso la bioingegneria e lo studio clinico SAFER.", en: "A 270km open-water sporting challenge by surfski canoe to channel media attention and funds toward bioengineering and the SAFER clinical study." },
  "impresa.1": { it: "<span>IMPRESA.</span>", en: "<span>THE CHALLENGE.</span>" },
  "impresa.2": { it: "Il mare come mezzo, la ricerca come fine", en: "The sea as the means, research as the end" },
  "impresa.3": { it: "The Smuggle unisce avventura, ricerca scientifica e impegno sociale: una traversata mediterranea in canoa diventa il mezzo per sostenere uno studio clinico e contribuire concretamente al progresso scientifico.", en: "The Smuggle brings together adventure, scientific research and social commitment: a Mediterranean canoe crossing becomes the means to support a clinical study and contribute concretely to scientific progress." },
  "impresa.4": { it: "Un’impresa <br /><span class=\"text-primary italic\">umana e scientifica.</span>", en: "A challenge <br /><span class=\"text-primary italic\">both human and scientific.</span>" },
  "impresa.5": { it: "In un contesto in cui spesso l’unico metro di misura è il ritorno economico, un progetto come SAFER fatica a trovare risorse.", en: "In a context where the only yardstick is often financial return, a project like SAFER struggles to find resources." },
  "impresa.6": { it: "Chi sceglierebbe di finanziare uno studio su un respiratore pensato esclusivamente per contesti a risorse limitate, senza brevetti, proprio per mantenere la tecnologia il più possibile aperta e fruibile?", en: "Who would choose to fund a study on a respiratory device designed exclusively for resource-limited settings, with no patents, precisely to keep the technology as open and accessible as possible?" },
  "impresa.7": { it: "The Smuggle trasforma un’impresa estrema in qualcosa di più: un messaggio forte, visibile e misurabile. Perché crediamo che esistano persone abbastanza coraggiose (e un po' folli) da finanziare qualcosa di così controcorrente. Un progetto capace di parlare alle persone, ma soprattutto di generare un impatto reale.", en: "The Smuggle turns an extreme challenge into something more: a message that is strong, visible and measurable. Because we believe there are people brave enough (and a little crazy enough) to fund something so against the current. A project able to speak to people, but above all to generate a real impact." },
  "impresa.8": { it: "La Rotta", en: "The Route" },
  "impresa.9": { it: "Da Sciacca a Tunisi", en: "From Sciacca to Tunis" },
  "impresa.10": { it: "SIMBOLO.", en: "SYMBOL." },
  "impresa.11": { it: "&amp; AZIONE REALE", en: "&amp; REAL ACTION" },
  "impresa.12": { it: "La traversata del Mediterraneo da Sciacca a Tunisi non è un gesto provocatorio né un’imitazione del viaggio migratorio.", en: "The Mediterranean crossing from Sciacca to Tunis is neither a provocative gesture nor an imitation of the migrant journey." },
  "impresa.13": { it: "È un’azione consapevole, inserita in un contesto geopolitico delicato che riconosciamo e rispettiamo profondamente. Quel tratto di mare è segnato da tensioni diplomatiche, fragilità umane e vite spezzate, e per questo lo attraversiamo con responsabilità e rispetto.", en: "It is a conscious action, set within a delicate geopolitical context that we recognize and deeply respect. That stretch of sea is marked by diplomatic tensions, human fragility and broken lives, and for this reason we cross it with responsibility and respect." },
  "impresa.14": { it: "La traversata rappresenta per noi un mezzo concreto per trasformare visibilità in risorse: un’azione simbolica che mette il nostro privilegio al servizio di un obiettivo preciso e verificabile, ovvero finanziare lo studio clinico di SAFER. Non assistenzialismo, ma responsabilità. Non spettacolarizzazione, ma impegno.", en: "For us, the crossing represents a concrete means of turning visibility into resources: a symbolic action that puts our privilege at the service of a precise and verifiable goal, namely funding the SAFER clinical study. Not charity for its own sake, but responsibility. Not spectacle, but commitment." },
  "impresa.15": { it: "Gestione Trasparente", en: "Transparent Management" },
  "impresa.16": { it: "Come utilizziamo <br />le donazioni", en: "How we use <br />donations" },
  "impresa.17": { it: "Il progetto prevede due aree di intervento, con una gestione distinta dei fondi per garantire la massima trasparenza.", en: "The project involves two areas of intervention, with separate fund management to ensure maximum transparency." },
  "impresa.18": { it: "Supporto alla traversata e alla sua realizzazione", en: "Support for the crossing and its realization" },
  "impresa.19": { it: "Le donazioni destinate direttamente a questa voce finanziano le spese operative dell'impresa sportiva (sicurezza, imbarcazione di scorta, mezzi, permessi e logistica di viaggio).", en: "Donations allocated directly to this item fund the operational costs of the sporting challenge (safety, escort boat, vehicles, permits and travel logistics)." },
  "impresa.20": { it: "Gestione a cura di", en: "Managed by" },
  "impresa.21": { it: "The Smuggle Comitato", en: "The Smuggle Committee" },
  "impresa.22": { it: "Preparazione, svolgimento e monitoraggio dello studio clinico", en: "Preparation, execution and monitoring of the clinical study" },
  "impresa.23": { it: "I fondi sono gestiti ed erogati per sostenere e convalidare clinicamente la tecnologia medica SAFER, coprendo l'avvio e la validazione sul campo negli ospedali dei paesi a risorse limitate.", en: "The funds are managed and disbursed to support and clinically validate the SAFER medical technology, covering its launch and field validation in hospitals in resource-limited countries." },
  "impresa.24": { it: "Gestione dei fondi a cura di", en: "Fund management by" },
  "impresa.25": { it: "Fondazione Politecnico di Milano", en: "Fondazione Politecnico di Milano" },
  "impresa.26": { it: "<strong>Nota di trasparenza:</strong> Eventuali sponsorizzazioni tecniche (ad esempio fornitura di materiali o servizi utili alla traversata) ridurranno i costi organizzativi. Le risorse economiche inizialmente destinate alla traversata e non più necessarie verranno <strong>interamente riallocate a favore dello studio clinico</strong>.", en: "<strong>Transparency note:</strong> Any technical sponsorships (for example, the provision of materials or services useful to the crossing) will reduce organizational costs. Financial resources initially allocated to the crossing that are no longer needed will be <strong>entirely reallocated to the clinical study</strong>." },
  "impresa.27": { it: "La Motivazione", en: "The Motivation" },
  "impresa.28": { it: "Perché questo <br />progetto?", en: "Why this <br />project?" },
  "impresa.29": { it: "The Smuggle nasce da una domanda semplice ma urgente: come possiamo sostenere la ricerca scientifica in modo concreto, indipendente e accessibile? In un contesto in cui la ricerca fatica a trovare risorse, abbiamo scelto di trasformare un’impresa estrema in un messaggio forte, visibile e misurabile.", en: "The Smuggle was born from a simple but urgent question: how can we support scientific research in a concrete, independent and accessible way? In a context where research struggles to find resources, we chose to turn an extreme challenge into a message that is strong, visible and measurable." },
  "impresa.30": { it: "Sostenere The Smuggle significa andare oltre l’impresa sportiva. Significa credere in una ricerca che non segue la logica del profitto, ma quella del bisogno. Una ricerca pensata per chi ha meno, per chi nasce senza le nostre possibilità, per chi, oggi, non ha alternative.", en: "Supporting The Smuggle means going beyond the sporting challenge. It means believing in research that follows not the logic of profit, but that of need. Research designed for those who have less, for those born without our advantages, for those who, today, have no alternatives." },
  "impresa.31": { it: "Il Traguardo", en: "The Goal" },
  "impresa.32": { it: "Obiettivo scientifico <br />concreto", en: "A concrete <br />scientific objective" },
  "impresa.33": { it: "The Smuggle non è solo una sfida sportiva. Il progetto nasce per sostenere concretamente attività di ricerca e studi clinici legati alla salute e alla prevenzione.", en: "The Smuggle is not just a sporting challenge. The project was created to concretely support research activities and clinical studies related to health and prevention." },
  "impresa.34": { it: "Ricerca e Azione", en: "Research and Action" },
  "impresa.35": { it: "Lavoriamo insieme per un impatto reale", en: "Working together for real impact" },
  "impresa.36": { it: "Partecipa all'Impatto", en: "Be Part of the Impact" },
  "impresa.37": { it: "Ogni scelta <br /><span class=\"text-primary italic\">è una rotta.</span>", en: "Every choice <br /><span class=\"text-primary italic\">is a route.</span>" },
  "impresa.38": { it: "The Smuggle è un progetto aperto. Crediamo nella trasparenza, nella comunicazione chiara e nella responsabilità verso chi sceglie di sostenerci.", en: "The Smuggle is an open project. We believe in transparency, clear communication and responsibility toward those who choose to support us." },
  "impresa.39": { it: "DONA ORA", en: "DONATE NOW" },
  "impresa.40": { it: "SCOPRI SAFER", en: "DISCOVER SAFER" },
  "chisiamo.meta.title": { it: "Chi Siamo - The Smuggle | Due persone. Un’unica direzione", en: "About Us - The Smuggle | Two people. One direction" },
  "chisiamo.meta.description": { it: "Scopri chi c'è dietro The Smuggle: Andrea Menga e Giovanni De Carlo, due studenti di Medicina e Ingegneria Biomedica uniti dall'impegno sociale e dalla ricerca scientifica.", en: "Discover who's behind The Smuggle: Andrea Menga and Giovanni De Carlo, two students of Medicine and Biomedical Engineering united by social commitment and scientific research." },
  "chisiamo.meta.ogTitle": { it: "Chi Siamo - The Smuggle", en: "About Us - The Smuggle" },
  "chisiamo.meta.ogDescription": { it: "Andrea e Giovanni, tra medicina e ingegneria, sfidano il mare per supportare lo sviluppo clinico del respiratore neonatale SAFER in Africa.", en: "Andrea and Giovanni, between medicine and engineering, challenge the sea to support the clinical development of the SAFER newborn respiratory device in Africa." },
  "chisiamo.1": { it: "<span>CHI SIAMO.</span>", en: "<span>ABOUT US.</span>" },
  "chisiamo.2": { it: "Due persone. Un’unica direzione", en: "Two people. One direction" },
  "chisiamo.3": { it: "The Smuggle nasce dall’incontro di competenze diverse ma complementari: ricerca e metodo scientifico, sport e azione concreta, comunicazione e organizzazione per superare le barriere della disuguaglianza.", en: "The Smuggle was born from the meeting of different but complementary skills: research and scientific method, sport and concrete action, communication and organization to overcome the barriers of inequality." },
  "chisiamo.4": { it: "L'Origine", en: "The Origin" },
  "chisiamo.5": { it: "Un'unione di <br /><span class=\"text-primary italic\">visione e metodo.</span>", en: "A union of <br /><span class=\"text-primary italic\">vision and method.</span>" },
  "chisiamo.6": { it: "The Smuggle non è solo un'iniziativa di due singoli individui, ma il punto di convergenza tra la medicina, la bioingegneria e l'impegno umanitario. Crediamo che l'innovazione scientifica debba essere aperta, accessibile e orientata esclusivamente a ridurre le distanze sanitarie globali.", en: "The Smuggle is not just an initiative of two individuals, but the point of convergence between medicine, bioengineering and humanitarian commitment. We believe that scientific innovation must be open, accessible and oriented exclusively toward reducing global health disparities." },
  "chisiamo.7": { it: "Co-Founder", en: "Co-Founder" },
  "chisiamo.8": { it: "Andrea Menga", en: "Andrea Menga" },
  "chisiamo.9": { it: "Studente di Medicina e Ingegneria Biomedica presso Humanitas University. Dopo un anno di studi all’Università Bocconi, ha scelto di orientarsi verso un percorso diverso.", en: "A student of Medicine and Biomedical Engineering at Humanitas University. After a year of studies at Bocconi University, he chose to pursue a different path." },
  "chisiamo.10": { it: "Fin dall’ottenimento della borsa di studio che gli ha permesso di proseguire in Humanitas, ha definito come obiettivo l’applicazione di soluzioni essenziali e sostenibili nei contesti a risorse limitate. È interessato alla salute globale e all’innovazione “a impatto”, con l’idea che anche interventi semplici e scalabili possano contribuire concretamente a ridurre disuguaglianze nell’accesso alle cure.", en: "From the moment he obtained the scholarship that allowed him to continue at Humanitas, he has set himself the goal of applying essential and sustainable solutions in resource-limited settings. He is interested in global health and “impact” innovation, with the idea that even simple, scalable interventions can concretely help reduce inequalities in access to care." },
  "chisiamo.11": { it: "Ruolo:", en: "Role:" },
  "chisiamo.12": { it: "Strategia &amp; Comunicazione", en: "Strategy &amp; Communication" },
  "chisiamo.13": { it: "Contatto:", en: "Contact:" },
  "chisiamo.14": { it: "Co-Founder", en: "Co-Founder" },
  "chisiamo.15": { it: "Giovanni De Carlo", en: "Giovanni De Carlo" },
  "chisiamo.16": { it: "Studente di Medicina e Ingegneria Biomedica, porta avanti SAFER come progetto di tesi, lavorando sulla fase traslazionale della ricerca insieme al personale sanitario.", en: "A student of Medicine and Biomedical Engineering, he is carrying SAFER forward as his thesis project, working on the translational phase of the research together with healthcare staff." },
  "chisiamo.17": { it: "Ha esperienza clinica in Africa e Sud America, nel soccorso extraospedaliero e in progetti sul campo con l’Organizzazione Mondiale della Sanità. Orienta la sua ricerca all'applicazione di innovazioni mediche e linee guida pediatriche in contesti a risorse limitate.", en: "He has clinical experience in Africa and South America, in out-of-hospital emergency care and in field projects with the World Health Organization. He directs his research toward the application of medical innovations and pediatric guidelines in resource-limited settings." },
  "chisiamo.18": { it: "Ruolo:", en: "Role:" },
  "chisiamo.19": { it: "Ideazione, sviluppo tecnico e creativo", en: "Concept, technical and creative development" },
  "chisiamo.20": { it: "Contatto:", en: "Contact:" },
  "chisiamo.21": { it: "La Filosofia", en: "The Philosophy" },
  "chisiamo.22": { it: "“Quello che noi facciamo è solo una goccia nell’oceano, ma se non lo facessimo l’oceano avrebbe una goccia in meno.”", en: "“What we do is just a drop in the ocean, but if we didn't do it, the ocean would be one drop less.”" },
  "chisiamo.23": { it: "— Madre Teresa di Calcutta", en: "— Mother Teresa of Calcutta" },
  "chisiamo.24": { it: "Unisciti a Noi", en: "Join Us" },
  "chisiamo.25": { it: "Contatti &amp; Informazioni", en: "Contacts &amp; Information" },
  "chisiamo.26": { it: "Sei un'impresa, un'organizzazione o un privato cittadino e vuoi saperne di più sul progetto o contribuire in altro modo? Non esitare a contattarci.", en: "Are you a business, an organization or a private individual and want to know more about the project or contribute in another way? Don't hesitate to contact us." },
  "chisiamo.27": { it: "E-mail Principale", en: "Main Email" },
  "chisiamo.28": { it: "Andrea Menga", en: "Andrea Menga" },
  "chisiamo.29": { it: "Giovanni De Carlo", en: "Giovanni De Carlo" },
  "chisiamo.30": { it: "Un'impresa Reale", en: "A Real Challenge" },
  "chisiamo.31": { it: "Aiutaci a <br /><span class=\"text-primary italic\">cambiare le cose.</span>", en: "Help us <br /><span class=\"text-primary italic\">change things.</span>" },
  "chisiamo.32": { it: "Ogni contributo, grande o piccolo, sostiene la nostra traversata e supporta direttamente lo sviluppo e la validazione clinica di SAFER in Africa.", en: "Every contribution, big or small, supports our crossing and directly funds the development and clinical validation of SAFER in Africa." },
  "chisiamo.33": { it: "DONA ORA", en: "DONATE NOW" },
  "chisiamo.34": { it: "PROGETTO SAFER", en: "SAFER PROJECT" },
  "privacy.meta.title": { it: "Privacy Policy - The Smuggle | Trasparenza e Tutela dei Dati", en: "Privacy Policy - The Smuggle | Transparency and Data Protection" },
  "privacy.meta.description": { it: "Privacy policy e trasparenza nel trattamento dei dati personali degli utenti del sito The Smuggle, in conformità con il regolamento europeo GDPR.", en: "Privacy policy and transparency in the processing of personal data of The Smuggle website users, in compliance with the European GDPR regulation." },
  "privacy.meta.ogTitle": { it: "Privacy Policy - The Smuggle", en: "Privacy Policy - The Smuggle" },
  "privacy.meta.ogDescription": { it: "La trasparenza è alla base del nostro progetto. Leggi l'informativa completa sul trattamento dei dati personali.", en: "Transparency is at the core of our project. Read the full notice on the processing of personal data." },
  "privacy.1": { it: "Normative &amp; Trasparenza", en: "Regulations &amp; Transparency" },
  "privacy.2": { it: "<span>PRIVACY POLICY</span>", en: "<span>PRIVACY POLICY</span>" },
  "privacy.3": { it: "La trasparenza è alla base di ogni nostra azione. Di seguito sono illustrate le modalità di gestione dei dati personali degli utenti che consultano il sito di The Smuggle, nel pieno rispetto del Regolamento Europeo (GDPR 2016/679).", en: "Transparency is at the heart of everything we do. Below is a description of how we manage the personal data of users who visit The Smuggle website, in full compliance with the European Regulation (GDPR 2016/679)." },
  "privacy.4": { it: "1. Titolare del Trattamento dei Dati", en: "1. Data Controller" },
  "privacy.5": { it: "Il Titolare del trattamento è <strong>The Smuggle</strong>, nella persona dei suoi co-fondatori <strong>Andrea Menga</strong> e <strong>Giovanni De Carlo</strong>, reperibili all'indirizzo email <a href=\"mailto:info@thesmuggle.com\" class=\"text-primary hover:underline font-semibold\">info@thesmuggle.com</a>. Tutte le richieste relative al trattamento dei dati personali possono essere inoltrate a questo indirizzo.", en: "The Data Controller is <strong>The Smuggle</strong>, in the person of its co-founders <strong>Andrea Menga</strong> and <strong>Giovanni De Carlo</strong>, who can be reached at the email address <a href=\"mailto:info@thesmuggle.com\" class=\"text-primary hover:underline font-semibold\">info@thesmuggle.com</a>. All requests relating to the processing of personal data may be sent to this address." },
  "privacy.6": { it: "2. Tipologie di Dati Raccolti", en: "2. Types of Data Collected" },
  "privacy.7": { it: "I dati personali raccolti da questo sito web, in modo autonomo o tramite terze parti, includono:", en: "The personal data collected by this website, either directly or through third parties, include:" },
  "privacy.8": { it: "<strong>Dati di navigazione:</strong> indirizzi IP, codici identificativi dei dispositivi, informazioni sul browser e parametri di navigazione, raccolti automaticamente per fini tecnici e di sicurezza.", en: "<strong>Browsing data:</strong> IP addresses, device identification codes, browser information and navigation parameters, collected automatically for technical and security purposes." },
  "privacy.9": { it: "<strong>Dati forniti volontariamente dall'utente:</strong> nome, cognome, indirizzo email o recapiti telefonici inseriti nei moduli di contatto o durante le procedure di donazione.", en: "<strong>Data voluntarily provided by the user:</strong> first name, last name, email address or telephone contacts entered in contact forms or during donation procedures." },
  "privacy.10": { it: "<strong>Cookie e Strumenti di Tracciamento:</strong> per ottimizzare l'esperienza d'uso e analizzare il traffico del sito (es. Google Analytics in forma anonimizzata).", en: "<strong>Cookies and Tracking Tools:</strong> to optimize the user experience and analyze site traffic (e.g. Google Analytics in anonymized form)." },
  "privacy.11": { it: "3. Finalità del Trattamento", en: "3. Purpose of Processing" },
  "privacy.12": { it: "I dati degli utenti sono raccolti per consentire al Titolare di fornire i propri servizi, adempiere agli obblighi di legge, rispondere a richieste di contatto, monitorare le metriche di raccolta fondi della traversata e condurre studi statistici anonimi sull'affluenza al sito web.", en: "User data is collected to enable the Data Controller to provide its services, comply with legal obligations, respond to contact requests, monitor fundraising metrics for the crossing, and conduct anonymous statistical studies on website traffic." },
  "privacy.13": { it: "4. Base Giuridica del Trattamento", en: "4. Legal Basis for Processing" },
  "privacy.14": { it: "Il Titolare tratta dati personali relativi all'utente qualora sussista una delle seguenti condizioni:", en: "The Data Controller processes personal data relating to the user where one of the following conditions applies:" },
  "privacy.15": { it: "L'utente ha prestato il consenso per una o più finalità specifiche;", en: "The user has given consent for one or more specific purposes;" },
  "privacy.16": { it: "Il trattamento è necessario all'esecuzione di un contratto con l'utente e/o all'esecuzione di misure precontrattuali;", en: "Processing is necessary for the performance of a contract with the user and/or for the implementation of pre-contractual measures;" },
  "privacy.17": { it: "Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.", en: "Processing is necessary to comply with a legal obligation to which the Data Controller is subject." },
  "privacy.18": { it: "5. Modalità e Luogo del Trattamento", en: "5. Methods and Place of Processing" },
  "privacy.19": { it: "Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai dati soggetti esterni preposti alla manutenzione del sito web o alla gestione della piattaforma di pagamento per le donazioni. I dati sono trattati presso le sedi operative del Titolare e in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.", en: "Processing is carried out using IT and/or telematic tools, with organizational and logical procedures strictly related to the purposes indicated. In addition to the Data Controller, in some cases external parties responsible for website maintenance or for managing the donation payment platform may have access to the data. Data is processed at the Data Controller's operational premises and at any other location where the parties involved in the processing are based." },
  "privacy.20": { it: "6. Periodo di Conservazione", en: "6. Data Retention Period" },
  "privacy.21": { it: "I dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. I dati personali raccolti per scopi legati all'esecuzione di un contratto tra il Titolare e l'utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto, ovvero per il tempo stabilito dalle normative fiscali e amministrative vigenti.", en: "Data is processed and stored for the time required by the purposes for which it was collected. Personal data collected for purposes related to the performance of a contract between the Data Controller and the user will be retained until the performance of that contract is complete, or for the period established by applicable tax and administrative regulations." },
  "privacy.22": { it: "7. Diritti dell'Utente", en: "7. User Rights" },
  "privacy.23": { it: "Gli utenti possono esercitare determinati diritti con riferimento ai dati trattati dal Titolare. In particolare, ai sensi del GDPR, l'utente ha il diritto di:", en: "Users may exercise certain rights with regard to the data processed by the Data Controller. In particular, pursuant to the GDPR, the user has the right to:" },
  "privacy.24": { it: "Revocare il consenso in ogni momento;", en: "Withdraw consent at any time;" },
  "privacy.25": { it: "Opporsi al trattamento dei propri dati;", en: "Object to the processing of their data;" },
  "privacy.26": { it: "Accedere ai propri dati e riceverne copia;", en: "Access their data and receive a copy of it;" },
  "privacy.27": { it: "Verificare la correttezza dei dati e chiederne la rettifica o la cancellazione;", en: "Verify the accuracy of their data and request its rectification or erasure;" },
  "privacy.28": { it: "Ottenere la limitazione del trattamento;", en: "Obtain the restriction of processing;" },
  "privacy.29": { it: "Proporre reclamo all'autorità di controllo della protezione dei dati personali competente.", en: "Lodge a complaint with the competent personal data protection supervisory authority." },
  "privacy.30": { it: "Ultimo aggiornamento: Gennaio 2026.", en: "Last updated: January 2026." }
  });
})();

(function () {
  "use strict";
  Object.assign(window.I18N_DATA, {
  "safer.1": { it: "SAFER - The Smuggle | Supporto respiratorio neonatale rivoluzionario", en: "SAFER - The Smuggle | Revolutionary Neonatal Respiratory Support" },
  "safer.2": { it: "SAFER è un respiratore neonatale progettato per funzionare senza ossigeno medicale ed energia elettrica continua, ideato dal Politecnico di Milano per salvare vite in Africa.", en: "SAFER is a neonatal ventilator designed to work without medical oxygen and continuous electrical power, developed by Politecnico di Milano to save lives in Africa." },
  "safer.3": { it: "SAFER - The Smuggle", en: "SAFER - The Smuggle" },
  "safer.4": { it: "Un dispositivo autonomo, robusto ed economico, progettato da ingegneri e clinici per l'assistenza neonatale in Africa, supportato da CUAMM.", en: "An autonomous, robust and affordable device, designed by engineers and clinicians for neonatal care in Africa, supported by CUAMM." },
  "safer.5": { it: "<span>SAFER.</span>", en: "<span>SAFER.</span>" },
  "safer.6": { it: "Ogni respiro è un diritto, per ogni neonato.", en: "Every breath is a right, for every newborn." },
  "safer.7": { it: "Un dispositivo di supporto respiratorio non invasivo, autonomo e compatto, progettato per proteggere le vite più fragili laddove l’ossigeno medicale e l’energia elettrica sono un lusso.", en: "A non-invasive, autonomous and compact respiratory support device, designed to protect the most fragile lives where medical oxygen and electricity are a luxury." },
  "safer.8": { it: "Un problema globale, ancora attuale", en: "A global problem, still current" },
  "safer.9": { it: "Il luogo in cui si nasce <br /><span class=\"text-primary italic\">non dovrebbe decidere il diritto di vivere.</span>", en: "Where you are born <br /><span class=\"text-primary italic\">shouldn't decide your right to live.</span>" },
  "safer.10": { it: "Secondo il Report Annuale <strong>UNICEF</strong> ogni anno muoiono circa <strong>5 milioni di bambini sotto i cinque anni</strong>. Questo numero non è equamente distribuito nel mondo, ma dipende fortemente dal luogo in cui questi bambini nascono: l’Africa subsahariana ha infatti un tasso di mortalità neonatale <strong>14 volte più alta</strong> rispetto all’Europa.", en: "According to the annual <strong>UNICEF</strong> Report, around <strong>5 million children under the age of five</strong> die every year. This number is not evenly distributed across the world, but depends heavily on where these children are born: sub-Saharan Africa has a neonatal mortality rate <strong>14 times higher</strong> than Europe." },
  "safer.11": { it: "Questo perché, nei Paesi a basse risorse, l’accesso limitato all’ossigeno, la mancanza di infrastrutture sanitarie adeguate e i costi elevati legati all’acquisto e alla manutenzione delle apparecchiature mediche e dei consumabili impediscono di ricevere cure appropriate. E’ per rispondere a queste esigenze, focalizzandosi sull’aiuto per i più piccoli e bisognosi che nasce <strong>SAFER</strong>.", en: "This is because, in low-resource countries, limited access to oxygen, the lack of adequate healthcare infrastructure and the high costs of purchasing and maintaining medical equipment and consumables prevent patients from receiving appropriate care. It is to respond to these needs, focusing on helping the smallest and most vulnerable, that <strong>SAFER</strong> was created." },
  "safer.12": { it: "Mamma con bambino", en: "Mother with child" },
  "safer.13": { it: "Mortalità Neonatale", en: "Neonatal Mortality" },
  "safer.14": { it: "Il tasso di mortalità dei neonati nell'Africa subsahariana rispetto all'Europa, un divario inaccettabile dovuto alla carenza di cure.", en: "The mortality rate of newborns in sub-Saharan Africa compared to Europe, an unacceptable gap caused by a lack of care." },
  "safer.15": { it: "Vite Spezzate", en: "Lives Cut Short" },
  "safer.16": { it: "I bambini sotto i cinque anni che muoiono ogni anno nel mondo. Il 46% di questi decessi è legato a cause respiratorie e alla mancanza di apparecchiature salvavita adatte.", en: "Children under five who die every year worldwide. 46% of these deaths are linked to respiratory causes and the lack of suitable life-saving equipment." },
  "safer.17": { it: "La Tecnologia", en: "The Technology" },
  "safer.18": { it: "Cos’è <br /><span class=\"text-primary\">SAFER</span>", en: "What is <br /><span class=\"text-primary\">SAFER</span>" },
  "safer.19": { it: "<strong>SAFER</strong> è un dispositivo di supporto respiratorio non invasivo progettato per l’assistenza neonatale in contesti a risorse limitate.", en: "<strong>SAFER</strong> is a non-invasive respiratory support device designed for neonatal care in resource-limited settings." },
  "safer.20": { it: "Combina ventilazione <strong>CPAP</strong> e <strong>ossigenoterapia</strong> in un sistema compatto, autonomo e facile da utilizzare, pensato per funzionare anche in condizioni critiche, dove l’accesso a infrastrutture, manutenzione e formazione specialistica può essere limitato.", en: "It combines <strong>CPAP</strong> ventilation and <strong>oxygen therapy</strong> in a compact, autonomous and easy-to-use system, designed to work even in critical conditions, where access to infrastructure, maintenance and specialist training may be limited." },
  "safer.21": { it: "Il progetto nasce dall’incontro tra ricerca clinica, ingegneria e lavoro sul campo, con l’obiettivo di sviluppare una tecnologia realmente applicabile, affidabile e orientata all’impatto reale sulla salute dei pazienti più vulnerabili.", en: "The project was born from the meeting of clinical research, engineering and fieldwork, with the goal of developing a technology that is truly applicable, reliable and oriented toward real impact on the health of the most vulnerable patients." },
  "safer.22": { it: "Schema Funzionamento SAFER", en: "SAFER Operating Diagram" },
  "safer.23": { it: "Schema Funzionamento SAFER", en: "SAFER Operating Diagram" },
  "safer.24": { it: "Schema tecnico validato del funzionamento e flussi del dispositivo", en: "Validated technical diagram of the device's operation and flows" },
  "safer.25": { it: "Come funziona <span class=\"text-primary\">SAFER</span>", en: "How <span class=\"text-primary\">SAFER</span> works" },
  "safer.26": { it: "Il dispositivo integra un modulo di ventilazione basato su un compressore radiale, che pressurizza l’aria ambiente, e un concentratore di ossigeno che la arricchisce estraendo ossigeno sempre direttamente dall’aria esterna. Grazie alla combinazione di un’interfaccia grafica estremamente intuitiva e di un algoritmo di controllo progettato ad hoc, una volta impostati i parametri di trattamento il personale clinico può affidare a SAFER la regolazione autonoma delle miscele di aria e ossigeno, garantendo un utilizzo prolungato anche in assenza di corrente elettrica stabile, grazie al sistema di batterie integrate.", en: "The device integrates a ventilation module based on a radial compressor, which pressurizes ambient air, and an oxygen concentrator that enriches it by extracting oxygen directly from the outside air. Thanks to the combination of an extremely intuitive graphic interface and a purpose-built control algorithm, once the treatment parameters are set, clinical staff can entrust SAFER with the autonomous regulation of the air and oxygen mixtures, ensuring prolonged use even in the absence of a stable power supply, thanks to the integrated battery system." },
  "safer.27": { it: "Compressore Radiale", en: "Radial Compressor" },
  "safer.28": { it: "Integra un modulo di ventilazione basato su un compressore radiale avanzato in grado di pressurizzare direttamente l'aria ambiente.", en: "Integrates a ventilation module based on an advanced radial compressor capable of directly pressurizing ambient air." },
  "safer.29": { it: "Concentratore di Ossigeno", en: "Oxygen Concentrator" },
  "safer.30": { it: "Estrae e arricchisce l'ossigeno direttamente dall'aria esterna, liberando l'ospedale dalla dipendenza da bombole o generatori esterni.", en: "Extracts and enriches oxygen directly from outside air, freeing the hospital from dependence on external cylinders or generators." },
  "safer.31": { it: "Algoritmo Ad-Hoc", en: "Purpose-Built Algorithm" },
  "safer.32": { it: "L'algoritmo di controllo regola autonomamente la miscela aria-ossigeno impostata dai clinici tramite un'interfaccia estremamente semplice.", en: "The control algorithm autonomously regulates the air-oxygen mixture set by clinicians through an extremely simple interface." },
  "safer.33": { it: "Batterie Integrate", en: "Integrated Batteries" },
  "safer.34": { it: "Garantisce un funzionamento continuo e sicuro per ore anche in assenza temporanea o instabilità della rete elettrica ospedaliera.", en: "Ensures continuous, safe operation for hours even during temporary power outages or instability of the hospital's electrical grid." },
  "safer.35": { it: "Resilienza e prontezza", en: "Resilience and Readiness" },
  "safer.36": { it: "SAFER: un supporto respiratorio <br /><span class=\"text-primary italic\">pensato per le emergenze</span>", en: "SAFER: respiratory support <br /><span class=\"text-primary italic\">designed for emergencies</span>" },
  "safer.37": { it: "Nasce per rispondere a un bisogno concreto e attuale: garantire un supporto respiratorio efficace ai neonati anche in contesti di emergenza e in aree con risorse limitate. In molte parti del mondo, l’accesso a dispositivi affidabili, semplici da usare e adatti a condizioni critiche è ancora oggi una sfida. SAFER è stato progettato partendo da questa realtà, con l’obiettivo di offrire una soluzione essenziale, robusta e realmente utilizzabile sul campo. Non si tratta solo di tecnologia, ma di un approccio che mette al centro la salute, la prevenzione e la possibilità di intervenire dove serve di più.", en: "It was created to respond to a concrete, current need: ensuring effective respiratory support for newborns even in emergency settings and resource-limited areas. In many parts of the world, access to reliable, easy-to-use devices suited to critical conditions is still a challenge today. SAFER was designed starting from this reality, with the goal of offering an essential, robust solution that is truly usable in the field. It's not just about technology, but about an approach that puts health, prevention and the ability to intervene where it's needed most at the center." },
  "safer.38": { it: "Modulo SAFER in laboratorio", en: "SAFER module in the laboratory" },
  "safer.39": { it: "Adattabilità estrema", en: "Extreme Adaptability" },
  "safer.40": { it: "Progettato per essere <br /><span class=\"text-primary italic\">usato sul campo</span>", en: "Designed to be <br /><span class=\"text-primary italic\">used in the field</span>" },
  "safer.41": { it: "Sviluppato tenendo conto delle condizioni reali in cui molti operatori sanitari sono chiamati a lavorare ogni giorno. Contesti complessi, infrastrutture limitate e risorse non sempre stabili richiedono dispositivi affidabili, robusti e facili da gestire. Per questo SAFER è pensato per ridurre al minimo la complessità operativa, richiedere poca manutenzione e garantire continuità di funzionamento anche in ambienti difficili. La progettazione privilegia soluzioni essenziali, orientate all’efficacia e alla sicurezza, con l’obiettivo di rendere le terapie accessibili e realmente utilizzabili dove serve di più.", en: "Developed with the real conditions in which many healthcare workers are called to work every day in mind. Complex settings, limited infrastructure and not-always-stable resources require reliable, robust devices that are easy to manage. That's why SAFER is designed to minimize operational complexity, require little maintenance and ensure continuity of operation even in difficult environments. The design favors essential solutions, oriented toward effectiveness and safety, with the goal of making therapies accessible and truly usable where they are needed most." },
  "safer.42": { it: "Bambino assistito", en: "Child receiving care" },
  "safer.43": { it: "Il Percorso Validato", en: "The Validated Path" },
  "safer.44": { it: "Testato, validato, utilizzato", en: "Tested, Validated, Used" },
  "safer.45": { it: "La timeline di SAFER racconta un percorso di sviluppo già ampiamente validato, con uno step cruciale ancora da completare.", en: "SAFER's timeline tells the story of a development path that has already been extensively validated, with one crucial step still to be completed." },
  "safer.46": { it: "Fase 1", en: "Phase 1" },
  "safer.47": { it: "Completata", en: "Completed" },
  "safer.48": { it: "Sviluppo del prototipo e validazione in vitro", en: "Prototype development and in vitro validation" },
  "safer.49": { it: "Il primo step ha riguardato lo sviluppo del prototipo e la validazione in vitro. In questa fase è stato progettato e realizzato il primo prototipo funzionante di SAFER e ne sono state valutate le prestazioni in ambiente controllato di laboratorio. Questa fase dimostra la fattibilità tecnica del dispositivo e la solidità dell’approccio ingegneristico.", en: "The first step involved prototype development and in vitro validation. In this phase, the first working prototype of SAFER was designed and built, and its performance was evaluated in a controlled laboratory environment. This phase demonstrates the technical feasibility of the device and the soundness of the engineering approach." },
  "safer.50": { it: "Fase 2", en: "Phase 2" },
  "safer.51": { it: "Completata", en: "Completed" },
  "safer.52": { it: "Test di usabilità sul campo", en: "Field usability test" },
  "safer.53": { it: "Il secondo step è stato il test di usabilità sul campo. SAFER è stato testato direttamente dal personale sanitario di un ospedale in Uganda, senza intervento diretto dei ricercatori durante l’uso. Il test ha mostrato un’elevata accettazione del dispositivo, facilità d’uso e una forte aderenza del personale clinico, confermando che SAFER è adatto a contesti reali e a utilizzatori non altamente specializzati.", en: "The second step was the field usability test. SAFER was tested directly by healthcare staff at a hospital in Uganda, without direct involvement from researchers during use. The test showed a high level of acceptance of the device, ease of use and strong adherence from clinical staff, confirming that SAFER is suited to real-world settings and to users who are not highly specialized." },
  "safer.54": { it: "Fase 3", en: "Phase 3" },
  "safer.55": { it: "Completata", en: "Completed" },
  "safer.56": { it: "Validazione in vivo", en: "In vivo validation" },
  "safer.57": { it: "Il terzo step è stato la validazione in vivo. In questa fase SAFER è stato testato su modello animale, dimostrando la non inferiorità rispetto a un supporto respiratorio convenzionale utilizzato in terapia intensiva. Questa validazione rappresenta un passaggio fondamentale prima dell’applicazione clinica sull’uomo.", en: "The third step was in vivo validation. In this phase, SAFER was tested on an animal model, demonstrating non-inferiority compared to a conventional respiratory support device used in intensive care. This validation represents a fundamental step before clinical application in humans." },
  "safer.58": { it: "Questo studio ha ricevuto un commento positivo su <strong>Paediatric Research</strong>, che ha sottolineato l’importanza del lavoro svolto e il valore sociale del progetto, evidenziando come dispositivi a basso costo e facili da usare per neonati e lattanti siano spesso trascurati dall’industria medica per motivi di ritorno economico, e come la ricerca condotta su SAFER sia particolarmente rilevante e meritevole.", en: "This study received a positive commentary in <strong>Paediatric Research</strong>, which highlighted the importance of the work carried out and the social value of the project, noting how low-cost, easy-to-use devices for newborns and infants are often overlooked by the medical industry for reasons of financial return, and how the research conducted on SAFER is particularly relevant and worthy." },
  "safer.59": { it: "Fase 4", en: "Phase 4" },
  "safer.60": { it: "In Corso (Obiettivo Corrente)", en: "In Progress (Current Goal)" },
  "safer.61": { it: "Studio clinico (prossimo step del progetto)", en: "Clinical study (the project's next step)" },
  "safer.62": { it: "Il quarto step sarà lo studio clinico, il prossimo passo del progetto ed è l’obiettivo principale della raccolta fondi. Lo studio clinico servirà a dimostrare in modo definitivo l’efficacia e la sicurezza di SAFER nei pazienti, secondo endpoint clinici definiti e standard regolatori. Nel caso in cui il trattamento si dimostri efficace, grazie alla collaborazione con <strong>MTTS</strong>, partner industriale del progetto, si procederà a scalarlo sul mercato, rendendo SAFER disponibile su larga scala nei contesti clinici per cui è stato progettato.", en: "The fourth step will be the clinical study, the project's next step and the main goal of the fundraising campaign. The clinical study will definitively demonstrate the efficacy and safety of SAFER in patients, according to defined clinical endpoints and regulatory standards. Should the treatment prove effective, thanks to the collaboration with <strong>MTTS</strong>, the project's industrial partner, it will be scaled to market, making SAFER available on a large scale in the clinical settings for which it was designed." },
  "safer.63": { it: "Schema Architetturale", en: "Architecture Diagram" },
  "safer.64": { it: "Schema Architettura SAFER", en: "SAFER Architecture Diagram" },
  "safer.65": { it: "Timeline SAFER", en: "SAFER Timeline" },
  "safer.66": { it: "Dalla ricerca all'impatto reale", en: "From research to real impact" },
  "safer.67": { it: "L'Impatto Clinico", en: "The Clinical Impact" },
  "safer.68": { it: "Dalla ricerca <br />all’impatto reale", en: "From research <br />to real impact" },
  "safer.69": { it: "Trasformare idee scientifiche in strumenti in grado di far respirare i neonati pretermine più vulnerabili. SAFER unisce l'eccellenza dell'ingegneria del Politecnico di Milano con la profonda conoscenza clinica degli operatori di CUAMM Medici con l'Africa.", en: "Turning scientific ideas into tools capable of helping the most vulnerable preterm newborns breathe. SAFER combines the engineering excellence of Politecnico di Milano with the deep clinical knowledge of CUAMM Medici con l'Africa's operators." },
  "safer.70": { it: "Unione di Competenze", en: "A Union of Expertise" },
  "safer.71": { it: "Le persone dietro SAFER", en: "The people behind SAFER" },
  "safer.72": { it: "Il progetto nasce dall’incontro tra competenze diverse ma complementari. Da un lato la ricerca scientifica e clinica, dall’altro l’azione concreta e la capacità di trasformare un’idea in un progetto reale.", en: "The project was born from the meeting of different but complementary skills. On one side, scientific and clinical research; on the other, concrete action and the ability to turn an idea into a real project." },
  "safer.73": { it: "Questo dialogo continuo tra metodo scientifico, sperimentazione e lavoro sul campo è alla base dello sviluppo del dispositivo. Un approccio condiviso che mette al centro responsabilità, trasparenza e impatto reale, con l’obiettivo di rendere la ricerca applicabile e utile nella pratica.", en: "This ongoing dialogue between scientific method, experimentation and fieldwork is at the heart of the device's development. A shared approach that puts responsibility, transparency and real impact at the center, with the goal of making research applicable and useful in practice." },
  "safer.74": { it: "Scopri Chi Siamo", en: "Discover Who We Are" },
  "safer.75": { it: "Impatto Tracciabile", en: "Traceable Impact" },
  "safer.76": { it: "Come puoi supportare SAFER", en: "How you can support SAFER" },
  "safer.77": { it: "Le donazioni raccolte attraverso The Smuggle vengono utilizzate in modo chiaro e tracciabile per sostenere lo sviluppo e la validazione di progetti di ricerca applicata, come SAFER.", en: "Donations collected through The Smuggle are used in a clear and traceable way to support the development and validation of applied research projects, such as SAFER." },
  "safer.78": { it: "Il supporto economico contribuisce in particolare a:", en: "Financial support contributes in particular to:" },
  "safer.79": { it: "preparazione degli studi clinici", en: "preparation of clinical studies" },
  "safer.80": { it: "sviluppo e validazione scientifica del dispositivo", en: "development and scientific validation of the device" },
  "safer.81": { it: "attività di ricerca applicata e test sul campo", en: "applied research activities and field testing" },
  "safer.82": { it: "Ogni contributo è parte di un percorso condiviso che mira a trasformare la ricerca in un impatto reale sulla salute e sulla prevenzione.", en: "Every contribution is part of a shared journey aimed at turning research into real impact on health and prevention." },
  "safer.83": { it: "Sostieni SAFER", en: "Support SAFER" },
  "safer.84": { it: "L'Iniziativa", en: "The Challenge" },
  "safer.85": { it: "Un’Impresa Reale.<br /><span class=\"text-primary italic\">Un’Azione Condivisa.</span>", en: "A Real Challenge.<br /><span class=\"text-primary italic\">A Shared Action.</span>" },
  "safer.86": { it: "Traversata Pianificata", en: "A Planned Crossing" },
  "safer.87": { it: "Una traversata via mare progettata con criteri di sicurezza, supporto logistico e responsabilità.", en: "A sea crossing designed with criteria of safety, logistical support and responsibility." },
  "safer.88": { it: "Organizzazione ed Efficacia", en: "Organization and Effectiveness" },
  "safer.89": { it: "Supporto Concreto", en: "Concrete Support" },
  "safer.90": { it: "Il progetto è sostenuto da donazioni destinate a sicurezza, mezzi e logistica.", en: "The project is supported by donations dedicated to safety, equipment and logistics." },
  "safer.91": { it: "Risorse sul Campo", en: "Resources in the Field" },
  "safer.92": { it: "Sostenere il Progetto", en: "Supporting the Project" },
  "safer.93": { it: "Significa partecipare a un’azione reale. Scegliere di esserci, anche senza attraversare il mare.", en: "It means taking part in a real action. Choosing to be there, even without crossing the sea." },
  "safer.94": { it: "Responsabilità Sociale", en: "Social Responsibility" },
  "safer.95": { it: "Raccolta Fondi Attiva", en: "Active Fundraising" },
  "safer.96": { it: "Sostieni il progetto", en: "Support the project" },
  "safer.97": { it: "Ogni contributo sostiene ricerca, prevenzione e applicazione concreta.", en: "Every contribution supports research, prevention and concrete application." },
  "safer.98": { it: "The Smuggle: realizzare la traversata", en: "The Smuggle: making the crossing happen" },
  "safer.99": { it: "Traversata", en: "Crossing" },
  "safer.100": { it: "The Smuggle: realizzare la traversata", en: "The Smuggle: making the crossing happen" },
  "safer.101": { it: "I fondi verranno utilizzati per coprire i costi operativi, di sicurezza e amplificare l’effetto mediatico dell’iniziativa.", en: "The funds will be used to cover operational and safety costs and to amplify the media impact of the initiative." },
  "safer.102": { it: "Raccolto", en: "Raised" },
  "safer.103": { it: "&euro;6200 <span class=\"text-xs text-white/40 font-normal\">di &euro;9.520</span>", en: "&euro;6200 <span class=\"text-xs text-white/40 font-normal\">of &euro;9.520</span>" },
  "safer.104": { it: "Progressivo: 65%", en: "Progress: 65%" },
  "safer.105": { it: "2 Donazioni", en: "2 Donations" },
  "safer.106": { it: "Dona per la Traversata", en: "Donate for the Crossing" },
  "safer.107": { it: "Ricerca Clinica", en: "Clinical Research" },
  "safer.108": { it: "Clinical Study", en: "Clinical Study" },
  "safer.109": { it: "I fondi vengono gestiti attraverso la piattaforma di fundraising della Fondazione del Politecnico di Milano", en: "The funds are managed through the fundraising platform of the Fondazione Politecnico di Milano" },
  "safer.110": { it: "Raccolto", en: "Raised" },
  "safer.111": { it: "&euro;0 <span class=\"text-xs text-white/40 font-normal\">di &euro;185.000</span>", en: "&euro;0 <span class=\"text-xs text-white/40 font-normal\">of &euro;185.000</span>" },
  "safer.112": { it: "Progressivo: 0%", en: "Progress: 0%" },
  "safer.113": { it: "0 Donazioni", en: "0 Donations" },
  "safer.114": { it: "Dona per lo Studio Clinico", en: "Donate for the Clinical Study" },
  "safer.115": { it: "Unione di Competenze", en: "A Union of Expertise" },
  "safer.116": { it: "I Partner del Progetto", en: "The Project Partners" },
  "safer.117": { it: "La ricerca scientifica più avanzata incontra l'esperienza clinica sul campo.", en: "The most advanced scientific research meets clinical experience in the field." },
  "safer.118": { it: "POLITECNICO DI MILANO", en: "POLITECNICO DI MILANO" },
  "safer.119": { it: "Dip. di Elettronica, Informazione e Bioingegneria. Responsabile dello sviluppo hardware, software e degli algoritmi di regolazione fisiologica del respiratore neonatale.", en: "Dept. of Electronics, Information and Bioengineering. Responsible for the hardware and software development and the physiological regulation algorithms of the neonatal ventilator." },
  "safer.120": { it: "Ingegneria e Sviluppo", en: "Engineering and Development" },
  "safer.121": { it: "CUAMM MEDICI CON L'AFRICA", en: "CUAMM MEDICI CON L'AFRICA" },
  "safer.122": { it: "La prima organizzazione italiana per la tutela della salute delle popolazioni africane. Gestisce e supervisiona la sperimentazione clinica e l'adozione negli ospedali sul campo.", en: "The first Italian organization dedicated to protecting the health of African populations. Manages and supervises the clinical trial and its adoption in hospitals in the field." },
  "safer.123": { it: "Clinica e Lavoro sul Campo", en: "Clinical and Field Work" },
  "safer.124": { it: "FONDAZIONE POLITECNICO", en: "FONDAZIONE POLITECNICO" },
  "safer.125": { it: "L'ente preposto alla valorizzazione della ricerca e alla gestione delle relazioni con il territorio e le imprese. Gestisce la raccolta fondi e la governance amministrativa dello studio.", en: "The body responsible for enhancing the value of research and managing relationships with the local area and businesses. Manages fundraising and the administrative governance of the study." },
  "safer.126": { it: "Fundraising e Governance", en: "Fundraising and Governance" },
  "safer.127": { it: "La tua parte", en: "Your part" },
  "safer.128": { it: "Rendilo <br /><span class=\"text-primary italic\">possibile.</span>", en: "Make it <br /><span class=\"text-primary italic\">possible.</span>" },
  "safer.129": { it: "The Smuggle destina i fondi raccolti alla Fondazione Politecnico di Milano per sostenere e finanziare l'avvio e la conduzione dello studio clinico di SAFER in Africa.", en: "The Smuggle allocates the funds raised to the Fondazione Politecnico di Milano to support and fund the launch and conduct of SAFER's clinical study in Africa." },
  "safer.130": { it: "DONA ORA", en: "DONATE NOW" },
  "safer.131": { it: "L'IMPRESA", en: "THE CHALLENGE" }
  });
})();

(function () {
  "use strict";
  Object.assign(window.I18N_DATA, {
  "dona.meta.title": { it: "Dona - The Smuggle | Sostieni il progetto e lo studio clinico SAFER", en: "Donate - The Smuggle | Support the project and the SAFER clinical study" },
  "dona.meta.description": { it: "Contribuisci a The Smuggle e al progetto SAFER. Sostieni l'impresa sportiva o finanzia lo studio clinico per portare respiratori neonatali salvavita in Africa.", en: "Contribute to The Smuggle and the SAFER project. Support the sporting challenge or fund the clinical study to bring life-saving newborn respiratory devices to Africa." },
  "dona.meta.og_title": { it: "Dona - The Smuggle", en: "Donate - The Smuggle" },
  "dona.meta.og_description": { it: "Sostieni l'impresa di logistica o il progetto clinico SAFER. Trasforma la visibilità in un impatto sanitario concreto per neonati in contesti vulnerabili.", en: "Support the logistics challenge or the SAFER clinical project. Turn visibility into real healthcare impact for newborns in vulnerable settings." },
  "dona.1": { it: "Il tuo contributo", en: "Your contribution" },
  "dona.2": { it: "<span>TRASFORMARE VISIBILITÀ</span><br />\n          <span class=\"text-primary italic\">IN IMPATTO REALE</span>", en: "<span>TURN VISIBILITY</span><br />\n          <span class=\"text-primary italic\">INTO REAL IMPACT</span>" },
  "dona.3": { it: "Ogni miglio percorso in mare e ogni donazione raccolta sono tasselli di un unico grande obiettivo: portare cure neonatali salvavita dove prima era impossibile. Puoi scegliere di sostenere l'impresa sportiva o finanziare direttamente lo studio clinico del dispositivo SAFER.", en: "Every mile covered at sea and every donation raised are pieces of one great goal: bringing life-saving newborn care where it was once impossible. You can choose to support the sporting challenge or fund the clinical study of the SAFER device directly." },
  "dona.4": { it: "RACCOLTA FONDI LOGISTICA", en: "LOGISTICS FUNDRAISER" },
  "dona.5": { it: "L'Impresa Sportiva", en: "The Sporting Challenge" },
  "dona.6": { it: "Questa raccolta fondi sostiene direttamente Andrea e Giovanni nella realizzazione della traversata. Il netto delle donazioni verrà versato direttamente alla Fondazione Politecnico di Milano.", en: "This fundraiser directly supports Andrea and Giovanni in carrying out the crossing. The net proceeds from the donations will be paid directly to the Fondazione Politecnico di Milano." },
  "dona.7": { it: "Raccolti", en: "Raised" },
  "dona.8": { it: "Obiettivo", en: "Goal" },
  "dona.9": { it: "Donatori", en: "Donors" },
  "dona.10": { it: "Percentuale raggiunta", en: "Percentage reached" },
  "dona.11": { it: "Sostieni l'Impresa", en: "Support the Challenge" },
  "dona.12": { it: "CAMPAGNA CLINICA PRINCIPALE", en: "MAIN CLINICAL CAMPAIGN" },
  "dona.13": { it: "Lo Studio Clinico", en: "The Clinical Study" },
  "dona.14": { it: "I fondi sono gestiti ed erogati interamente tramite la Fondazione del Politecnico di Milano per avviare, condurre e validare sul campo lo studio clinico di SAFER in Africa. Un passo cruciale per la certificazione medica del dispositivo.", en: "Funds are managed and disbursed entirely through the Fondazione Politecnico di Milano to launch, conduct, and validate the SAFER clinical study in the field in Africa. A crucial step toward the device's medical certification." },
  "dona.15": { it: "Raccolti", en: "Raised" },
  "dona.16": { it: "Obiettivo", en: "Goal" },
  "dona.17": { it: "Donatori", en: "Donors" },
  "dona.18": { it: "Percentuale raggiunta", en: "Percentage reached" },
  "dona.19": { it: "Sostieni lo Studio Clinico", en: "Support the Clinical Study" },
  "dona.20": { it: "Unione di intenti", en: "United in purpose" },
  "dona.21": { it: "Perché il tuo <br /><span class=\"text-primary italic\">contributo conta.</span>", en: "Why your <br /><span class=\"text-primary italic\">contribution matters.</span>" },
  "dona.22": { it: "Supporta direttamente la logistica e la sicurezza della traversata in canoa", en: "Directly supports the logistics and safety of the canoe crossing" },
  "dona.23": { it: "Sostiene lo sviluppo clinico del respiratore neonatale autonomo SAFER", en: "Supports the clinical development of the SAFER autonomous newborn respiratory device" },
  "dona.24": { it: "Sensibilizza l'opinione pubblica sul tema cruciale della mortalità neonatale in Africa", en: "Raises public awareness of the critical issue of neonatal mortality in Africa" },
  "dona.25": { it: "\"Quello che noi facciamo è solo una goccia nell’oceano, ma se non lo facessimo l’oceano avrebbe una goccia in meno.\"", en: "\"What we do is just a drop in the ocean, but if we didn't do it, the ocean would have one less drop.\"" },
  "dona.26": { it: "Madre Teresa di Calcutta", en: "Mother Teresa of Calcutta" },
  "dona.27": { it: "La nostra trasparenza", en: "Our transparency" },
  "dona.28": { it: "Un impegno chiaro e tracciabile", en: "A clear, traceable commitment" },
  "dona.29": { it: "Crediamo che la fiducia nasca dalla limpidezza. Ecco come vengono allocate le donazioni all'interno dei due binari del progetto.", en: "We believe trust is built through clarity. Here's how donations are allocated across the project's two tracks." },
  "dona.30": { it: "Logistica &amp; Comunicazione", en: "Logistics &amp; Communication" },
  "dona.31": { it: "I fondi destinati a <strong>The Smuggle</strong> supportano interamente la copertura dei costi organizzativi della traversata:", en: "Funds directed to <strong>The Smuggle</strong> fully cover the organizational costs of the crossing:" },
  "dona.32": { it: "Mezzi di soccorso, carburante e barca d'appoggio per la sicurezza di Andrea e Giovanni.", en: "Rescue vehicles, fuel, and a support boat for Andrea and Giovanni's safety." },
  "dona.33": { it: "Sistemi di tracciamento satellitare e telecomunicazioni in mare aperto.", en: "Satellite tracking and telecommunications systems on the open sea." },
  "dona.34": { it: "Spese di documentazione video, grafica e website per massimizzare la visibilità della campagna.", en: "Video documentation, graphic design, and website costs to maximize the campaign's visibility." },
  "dona.35": { it: "Studio Clinico SAFER", en: "SAFER Clinical Study" },
  "dona.36": { it: "Il target di <strong>€185.000</strong> gestito direttamente tramite la Fondazione del Politecnico di Milano finanzia:", en: "The <strong>€185.000</strong> target, managed directly through the Fondazione Politecnico di Milano, funds:" },
  "dona.37": { it: "Fornitura dei dispositivi SAFER agli ospedali partner di CUAMM Medici con l'Africa.", en: "Supply of SAFER devices to partner hospitals of CUAMM Medici con l'Africa." },
  "dona.38": { it: "Formazione specialistica del personale medico locale sul campo.", en: "Specialized training for local medical staff in the field." },
  "dona.39": { it: "Monitoraggio clinico, raccolta dati e gestione delle procedure di approvazione scientifica.", en: "Clinical monitoring, data collection, and management of scientific approval procedures." },
  "dona.40": { it: "<strong>Importante:</strong> Tutte le eventuali eccedenze delle donazioni raccolte per l'impresa sportiva The Smuggle, rispetto alla copertura dei costi effettivi dell’iniziativa, verranno interamente devolute alla campagna SAFER della <a href=\"https://www.fondazionepolitecnico.it/\" target=\"_blank\" class=\"text-primary hover:underline font-semibold\">Fondazione Politecnico di Milano</a>.", en: "<strong>Important:</strong> Any surplus from donations raised for The Smuggle sporting challenge, beyond covering the initiative's actual costs, will be donated in full to the SAFER campaign of the <a href=\"https://www.fondazionepolitecnico.it/\" target=\"_blank\" class=\"text-primary hover:underline font-semibold\">Fondazione Politecnico di Milano</a>." },
  "dona.41": { it: "Approfondisci", en: "Learn more" },
  "dona.42": { it: "La forza di <br /><span class=\"text-primary italic\">un'idea.</span>", en: "The power of <br /><span class=\"text-primary italic\">an idea.</span>" },
  "dona.43": { it: "Scopri l'impresa sportiva che accende i riflettori su questo progetto clinico, oppure leggi le specifiche tecnologiche di SAFER.", en: "Discover the sporting challenge that shines a spotlight on this clinical project, or read the technical specifications of SAFER." },
  "dona.44": { it: "L'IMPRESA", en: "THE CHALLENGE" },
  "dona.45": { it: "IL PROGETTO SAFER", en: "THE SAFER PROJECT" },
  "faq.meta.title": { it: "FAQ - The Smuggle | Domande Frequenti", en: "FAQ - The Smuggle | Frequently Asked Questions" },
  "faq.meta.description": { it: "Domande frequenti sul progetto The Smuggle: scopri a cosa servono le donazioni, la sicurezza della traversata in mare e la trasparenza finanziaria.", en: "Frequently asked questions about The Smuggle project: find out what donations are used for, the safety of the sea crossing, and financial transparency." },
  "faq.meta.og_title": { it: "FAQ - The Smuggle", en: "FAQ - The Smuggle" },
  "faq.meta.og_description": { it: "Domande frequenti sul progetto The Smuggle: scopri a cosa servono le donazioni, la sicurezza della traversata in mare e la trasparenza finanziaria.", en: "Frequently asked questions about The Smuggle project: find out what donations are used for, the safety of the sea crossing, and financial transparency." },
  "faq.1": { it: "Domande &amp; Risposte", en: "Questions &amp; Answers" },
  "faq.2": { it: "<span>FAQ</span>", en: "<span>FAQ</span>" },
  "faq.3": { it: "Tutto quello che c'è da sapere sul progetto, la raccolta fondi, l'impresa di Andrea e Giovanni, lo sviluppo di SAFER e la trasparenza nella gestione dei contributi.", en: "Everything you need to know about the project, the fundraiser, Andrea and Giovanni's expedition, SAFER's development, and the transparency in managing contributions." },
  "faq.4": { it: "A cosa servono concretamente le donazioni?", en: "What are donations actually used for?" },
  "faq.5": { it: "Le donazioni raccolte attraverso The Smuggle vengono utilizzate per sostenere in modo diretto e tracciabile il progetto. In particolare, i fondi sono destinati alla realizzazione della traversata, alla sicurezza dell’impresa, alla logistica e al supporto delle fasi di preparazione e svolgimento degli studi clinici legati alla ricerca scientifica sui neonati.", en: "Donations collected through The Smuggle are used to directly and traceably support the project. Specifically, the funds go toward carrying out the crossing, the safety of the expedition, logistics, and support for the preparation and execution of the clinical studies related to newborn scientific research." },
  "faq.6": { it: "Perché una traversata in mare è utile alla ricerca scientifica?", en: "Why is a sea crossing useful to scientific research?" },
  "faq.7": { it: "La traversata non è solo un gesto simbolico, ma uno strumento di comunicazione potente e misurabile. Serve ad accendere l’attenzione su una tecnologia medica innovativa, a coinvolgere il pubblico e a raccogliere risorse concrete per la ricerca. L’impresa diventa così un mezzo per trasformare visibilità ed emozione in supporto reale.", en: "The crossing is not just a symbolic gesture, but a powerful and measurable communication tool. It serves to draw attention to an innovative medical technology, engage the public, and raise concrete resources for research. The challenge thus becomes a way to turn visibility and emotion into real support." },
  "faq.8": { it: "Chi sono le persone dietro al progetto e come viene garantita la sicurezza?", en: "Who are the people behind the project, and how is safety guaranteed?" },
  "faq.9": { it: "The Smuggle è portato avanti da professionisti con competenze complementari, uniti da un obiettivo comune: sostenere la ricerca in modo responsabile. La traversata è pianificata con criteri rigorosi di sicurezza, supporto tecnico e valutazione dei rischi, per garantire che l’impresa sia affrontata in modo consapevole e controllato.", en: "The Smuggle is carried forward by professionals with complementary skills, united by a common goal: supporting research responsibly. The crossing is planned with rigorous safety criteria, technical support, and risk assessment, to ensure the challenge is undertaken in a mindful and controlled way." },
  "faq.10": { it: "Come viene garantita la trasparenza nella gestione delle donazioni?", en: "How is transparency guaranteed in the management of donations?" },
  "faq.11": { it: "La trasparenza è un valore centrale del progetto. Le donazioni vengono gestite in modo chiaro e tracciabile, con una suddivisione precisa degli ambiti di utilizzo. L’obiettivo è permettere a chi sostiene The Smuggle di sapere sempre come il proprio contributo viene trasformato in azioni concrete.", en: "Transparency is a core value of the project. Donations are managed clearly and traceably, with a precise breakdown of how they are used. The goal is to let everyone who supports The Smuggle always know how their contribution is turned into concrete action." },
  "faq.12": { it: "Un'impresa Reale", en: "A Real Challenge" },
  "faq.13": { it: "Aiutaci a <br /><span class=\"text-primary italic\">cambiare le cose.</span>", en: "Help us <br /><span class=\"text-primary italic\">change things.</span>" },
  "faq.14": { it: "Ogni contributo, grande o piccolo, sostiene la nostra traversata e supporta direttamente lo sviluppo e la validazione clinica di SAFER in Africa.", en: "Every contribution, big or small, supports our crossing and directly funds the development and clinical validation of SAFER in Africa." },
  "faq.15": { it: "DONA ORA", en: "DONATE NOW" },
  "faq.16": { it: "PROGETTO SAFER", en: "SAFER PROJECT" }
  });
})();

(function () {
  "use strict";
  Object.assign(window.I18N_DATA, {
  "donclinical.meta.title": { it: "Sostieni lo Studio Clinico SAFER - The Smuggle | Fondazione Politecnico", en: "Support the SAFER Clinical Study - The Smuggle | Fondazione Politecnico" },
  "donclinical.meta.description": { it: "Sostieni lo studio clinico di validazione di SAFER, il respiratore neonatale autonomo del Politecnico di Milano in Africa. Raccolta fondi ufficiale tramite Fondazione Politecnico.", en: "Support the clinical validation study of SAFER, the autonomous neonatal respirator developed by Politecnico di Milano, in Africa. Official fundraising through Fondazione Politecnico." },
  "donclinical.meta.ogtitle": { it: "Sostieni lo Studio Clinico SAFER - The Smuggle", en: "Support the SAFER Clinical Study - The Smuggle" },
  "donclinical.meta.ogdescription": { it: "I fondi sono gestiti ed erogati interamente tramite la Fondazione del Politecnico di Milano per condurre e validare lo studio clinico di SAFER in Africa.", en: "Funds are managed and disbursed entirely through Fondazione Politecnico di Milano to conduct and validate the SAFER clinical study in Africa." },
  "donclinical.1": { it: "Lo Studio Clinico SAFER", en: "The SAFER Clinical Study" },
  "donclinical.2": { it: "<span>SOSTENERE LO</span><br /><span class=\"text-primary italic\">STUDIO CLINICO</span>", en: "<span>SUPPORT THE</span><br /><span class=\"text-primary italic\">CLINICAL STUDY</span>" },
  "donclinical.3": { it: "I fondi vengono gestiti attraverso la piattaforma di fundraising della Fondazione del Politecnico di Milano per avviare, condurre e validare lo studio clinico del dispositivo SAFER in Africa.", en: "Funds are managed through the fundraising platform of Fondazione Politecnico di Milano to launch, conduct and validate the clinical study of the SAFER device in Africa." },
  "donclinical.4": { it: "Stato della Raccolta", en: "Fundraising Status" },
  "donclinical.5": { it: "Campagna Clinica", en: "Clinical Campaign" },
  "donclinical.6": { it: "Raccolti", en: "Raised" },
  "donclinical.7": { it: "Obiettivo", en: "Goal" },
  "donclinical.8": { it: "Donatori", en: "Donors" },
  "donclinical.9": { it: "Progresso", en: "Progress" },
  "donclinical.10": { it: "I Partner Scientifici &amp; Operativi", en: "The Scientific &amp; Operational Partners" },
  "donclinical.11": { it: "Politecnico di Milano", en: "Politecnico di Milano" },
  "donclinical.12": { it: "Sviluppo tecnologico, progettazione dell'ingegneria biomedica avanzata del dispositivo di ventilazione neonatale SAFER.", en: "Technological development and advanced biomedical engineering design of the SAFER neonatal ventilation device." },
  "donclinical.13": { it: "Fondazione Politecnico di Milano", en: "Fondazione Politecnico di Milano" },
  "donclinical.14": { it: "Gestione trasparente e tracciabile dei fondi raccolti, canalizzazione delle risorse direttamente sul progetto scientifico e validazione medica.", en: "Transparent, traceable management of funds raised, channeling resources directly into the scientific project and medical validation." },
  "donclinical.15": { it: "Medici con l'Africa CUAMM", en: "Medici con l'Africa CUAMM" },
  "donclinical.16": { it: "Coordinamento logistico e clinico sul campo in Africa, addestramento del personale medico locale, e monitoraggio dell'impatto clinico effettivo.", en: "On-the-ground logistical and clinical coordination in Africa, training of local medical staff, and monitoring of real-world clinical impact." },
  "donclinical.17": { it: "<strong>Nota sulla trasparenza:</strong> Il 100% delle donazioni a questa campagna confluirà direttamente nel fondo vincolato gestito da Fondazione Politecnico di Milano per lo studio clinico SAFER.", en: "<strong>Transparency note:</strong> 100% of donations to this campaign will flow directly into the restricted fund managed by Fondazione Politecnico di Milano for the SAFER clinical study." },
  "donclinical.18": { it: "Donazioni Ufficiali", en: "Official Donations" },
  "donclinical.19": { it: "Sostieni lo Studio", en: "Support the Study" },
  "donclinical.20": { it: "Puoi donare direttamente tramite Fondazione Politecnico di Milano consultando i dati per effettuare un bonifico dedicato.", en: "You can donate directly through Fondazione Politecnico di Milano using the details below to make a dedicated bank transfer." },
  "donclinical.21": { it: "Tutte le donazioni sono gestite attraverso la Fondazione Politecnico di Milano e destinate esclusivamente allo studio clinico del progetto SAFER.", en: "All donations are managed through Fondazione Politecnico di Milano and go exclusively to the clinical study of the SAFER project." },
  "donclinical.22": { it: "Coordinate Bancarie", en: "Bank Details" },
  "donclinical.23": { it: "Intestatario", en: "Account Holder" },
  "donclinical.24": { it: "IBAN", en: "IBAN" },
  "donclinical.25": { it: "BIC", en: "BIC" },
  "donclinical.26": { it: "Causale", en: "Payment Reference" },
  "donclinical.27": { it: "Tale erogazione liberale è interamente deducibile dal reddito complessivo (IRPEF) ai sensi dell'art. 10, comma 1, lett. l-quater del TUIR.", en: "This donation is fully deductible from total income (IRPEF) pursuant to Article 10, paragraph 1, letter l-quater of the TUIR." },
  "donclinical.28": { it: "Vai al Portale Fondazione", en: "Go to Foundation Portal" },
  "donclinical.29": { it: "In alternativa al bonifico, puoi effettuare la donazione direttamente tramite il portale ufficiale della Fondazione.", en: "As an alternative to a bank transfer, you can donate directly through the Foundation's official portal." },
  "donclinical.30": { it: "Tecnologia Umanitaria", en: "Humanitarian Technology" },
  "donclinical.31": { it: "Un respiratore<br /><span class=\"text-primary italic\">autonomo per la vita.</span>", en: "An autonomous<br /><span class=\"text-primary italic\">respirator for life.</span>" },
  "donclinical.32": { it: "Il dispositivo SAFER (Simplified Automated Resuscitator) risponde alla tragica realtà della mortalità neonatale causata da asfissia alla nascita in contesti ospedalieri a basse risorse tecnologiche in Africa.", en: "The SAFER device (Simplified Automated Resuscitator) addresses the tragic reality of neonatal mortality caused by birth asphyxia in low-resource hospital settings in Africa." },
  "donclinical.33": { it: "Alimentazione autonoma adatta a frequenti interruzioni di corrente", en: "Autonomous power supply built for frequent power outages" },
  "donclinical.34": { it: "Progettazione semplificata per facilità d'uso senza competenze specialistiche", en: "Simplified design for ease of use without specialist skills" },
  "donclinical.35": { it: "Materiali robusti e a basso costo adatti al clima subsahariano", en: "Rugged, low-cost materials suited to the sub-Saharan climate" },
  "donclinical.36": { it: "\"L'obiettivo scientifico è la certificazione medica del dispositivo, rendendolo ufficialmente pronto all'adozione umanitaria su larga scala.\"", en: "\"The scientific goal is medical certification of the device, making it officially ready for large-scale humanitarian adoption.\"" },
  "donclinical.37": { it: "Comitato Scientifico SAFER", en: "SAFER Scientific Committee" },
  "donclinical.38": { it: "L'altro binario della solidarietà", en: "The other track of solidarity" },
  "donclinical.39": { it: "Sostieni la logistica <br />dell'<span class=\"text-primary italic\">Impresa Sportiva</span>", en: "Support the logistics <br />of the <span class=\"text-primary italic\">Sporting Challenge</span>" },
  "donclinical.40": { it: "Puoi finanziare direttamente la copertura dei costi organizzativi e di sicurezza per la traversata di 270km in canoa surfski.", en: "You can directly fund the organizational and safety costs of the 270km surfski canoe crossing." },
  "donclinical.41": { it: "Campagna l'Impresa", en: "The Challenge Campaign" },
  "donclinical.42": { it: "Torna alla Dashboard", en: "Back to Dashboard" },
  "dontraversata.meta.title": { it: "Sostieni l'Impresa Sportiva - The Smuggle | Realizzare la Traversata", en: "Support the Sporting Challenge - The Smuggle | Making the Crossing Happen" },
  "dontraversata.meta.description": { it: "Sostieni Andrea e Giovanni nella traversata di 270km in canoa surfski da Sciacca a Tunisi. Il tuo contributo finanzia la logistica e la sicurezza del viaggio.", en: "Support Andrea and Giovanni in their 270km surfski canoe crossing from Sciacca to Tunis. Your contribution funds the logistics and safety of the journey." },
  "dontraversata.meta.ogtitle": { it: "Sostieni l'Impresa Sportiva - The Smuggle", en: "Support the Sporting Challenge - The Smuggle" },
  "dontraversata.meta.ogdescription": { it: "I fondi verranno utilizzati per coprire i costi operativi, di sicurezza e amplificare l’effetto mediatico dell’iniziativa.", en: "The funds will be used to cover operational and safety costs and to amplify the media reach of the initiative." },
  "dontraversata.1": { it: "Raccolta Fondi Logistica", en: "Logistics Fundraising" },
  "dontraversata.2": { it: "<span>REALIZZARE LA</span><br /><span class=\"text-primary italic\">TRAVERSATA</span>", en: "<span>MAKING THE</span><br /><span class=\"text-primary italic\">CROSSING HAPPEN</span>" },
  "dontraversata.3": { it: "I fondi verranno utilizzati per coprire i costi operativi, di sicurezza e amplificare l’effetto mediatico dell’iniziativa. Sostieni Andrea e Giovanni nella traversata di 270km in canoa surfski.", en: "The funds will be used to cover operational and safety costs and to amplify the media reach of the initiative. Support Andrea and Giovanni in their 270km surfski canoe crossing." },
  "dontraversata.4": { it: "Stato della Raccolta", en: "Fundraising Status" },
  "dontraversata.5": { it: "Campagna Attiva", en: "Active Campaign" },
  "dontraversata.6": { it: "Raccolti", en: "Raised" },
  "dontraversata.7": { it: "Obiettivo", en: "Goal" },
  "dontraversata.8": { it: "Donatori", en: "Donors" },
  "dontraversata.9": { it: "Progresso", en: "Progress" },
  "dontraversata.10": { it: "Come verranno utilizzati i fondi", en: "How the funds will be used" },
  "dontraversata.11": { it: "Mezzi di Sicurezza e Logistica", en: "Safety &amp; Logistics Resources" },
  "dontraversata.12": { it: "Carburante, imbarcazione d'appoggio per la scorta continua di sicurezza e dotazioni per le emergenze in mare aperto lungo l'intero tragitto.", en: "Fuel, a support boat for continuous safety escort, and open-water emergency equipment for the entire route." },
  "dontraversata.13": { it: "Sistemi di Tracciamento", en: "Tracking Systems" },
  "dontraversata.14": { it: "Tracciamento satellitare e telecomunicazioni in tempo reale per garantire la rintracciabilità e il costante contatto con le capitanerie di porto.", en: "Satellite tracking and real-time communications to ensure traceability and constant contact with the coast guard authorities." },
  "dontraversata.15": { it: "Risonanza Mediatica", en: "Media Outreach" },
  "dontraversata.16": { it: "Spese per la realizzazione del video documentario, del materiale promozionale e della gestione web, mirati ad attrarre donazioni per lo studio clinico SAFER.", en: "Costs for producing the documentary video, promotional materials and web management, aimed at attracting donations for the SAFER clinical study." },
  "dontraversata.17": { it: "<strong>Nota sulla trasparenza:</strong> Eventuali eccedenze di questa raccolta logistica rispetto ai costi vivi sostenuti per la traversata in canoa verranno interamente devolute allo Studio Clinico SAFER tramite la Fondazione del Politecnico di Milano.", en: "<strong>Transparency note:</strong> Any surplus from this logistics fundraiser beyond the actual costs incurred for the canoe crossing will be donated in full to the SAFER Clinical Study through Fondazione Politecnico di Milano." },
  "dontraversata.18": { it: "Modulo Sicuro", en: "Secure Form" },
  "dontraversata.19": { it: "Dona in questo canale", en: "Donate through this channel" },
  "dontraversata.20": { it: "Aiutaci a trasformare un'impresa sportiva in un progetto ad impatto reale.", en: "Help us turn a sporting challenge into a project with real impact." },
  "dontraversata.21": { it: "Questa raccolta fondi sostiene direttamente Andrea e Giovanni nella realizzazione della traversata. Il netto delle donazioni verrà versato direttamente alla Fondazione Politecnico di Milano.", en: "This fundraiser directly supports Andrea and Giovanni in making the crossing happen. The net proceeds of donations will be paid directly to Fondazione Politecnico di Milano." },
  "dontraversata.22": { it: "Le donazioni vengono raccolte tramite la piattaforma GoFundMe. Cliccando sul pulsante qui sotto verrai reindirizzato alla pagina ufficiale della campagna.", en: "Donations are collected through the GoFundMe platform. Clicking the button below will redirect you to the campaign's official page." },
  "dontraversata.23": { it: "Vai alla Campagna GoFundMe", en: "Go to the GoFundMe Campaign" },
  "dontraversata.24": { it: "Verrai reindirizzato alla piattaforma ufficiale GoFundMe per completare la donazione.", en: "You will be redirected to the official GoFundMe platform to complete your donation." },
  "dontraversata.25": { it: "L'altro binario della solidarietà", en: "The other track of solidarity" },
  "dontraversata.26": { it: "Sostieni lo <br /><span class=\"text-primary italic\">Studio Clinico SAFER</span>", en: "Support the <br /><span class=\"text-primary italic\">SAFER Clinical Study</span>" },
  "dontraversata.27": { it: "Puoi finanziare direttamente la validazione del respiratore neonatale in Africa tramite la Fondazione del Politecnico di Milano.", en: "You can directly fund the validation of the neonatal respirator in Africa through Fondazione Politecnico di Milano." },
  "dontraversata.28": { it: "Campagna Studio Clinico", en: "Clinical Study Campaign" },
  "dontraversata.29": { it: "Torna alla Dashboard", en: "Back to Dashboard" }
  });
  /* ==== PAGE-SPECIFIC TRANSLATIONS APPEND ABOVE THIS LINE ==== */

  /* ==== ENGINE (do not edit above when appending translations) ==== */

  var STORAGE_KEY = "smuggle-lang";
  var DEFAULT_LANG = "it";

  function getSavedLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "it" || saved === "en") return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = window.I18N_DATA;

    document.documentElement.setAttribute("lang", lang);

    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var key = el.getAttribute("data-i18n");
      var entry = dict[key];
      if (entry && typeof entry[lang] === "string") {
        el.innerHTML = entry[lang];
      } else if (window.console && entry === undefined) {
        console.warn("[i18n] Missing translation key:", key);
      }
    }

    var attrNodes = document.querySelectorAll("[data-i18n-attrs]");
    for (var j = 0; j < attrNodes.length; j++) {
      var attrEl = attrNodes[j];
      var map;
      try {
        map = JSON.parse(attrEl.getAttribute("data-i18n-attrs"));
      } catch (e) {
        continue;
      }
      for (var attr in map) {
        if (!Object.prototype.hasOwnProperty.call(map, attr)) continue;
        var attrKey = map[attr];
        var attrEntry = dict[attrKey];
        if (attrEntry && typeof attrEntry[lang] === "string") {
          attrEl.setAttribute(attr, attrEntry[lang]);
        }
      }
    }

    var langBtns = document.querySelectorAll("[data-lang-btn]");
    for (var k = 0; k < langBtns.length; k++) {
      var btn = langBtns[k];
      var isActive = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("text-primary", isActive);
      btn.classList.toggle("opacity-100", isActive);
      btn.classList.toggle("opacity-40", !isActive);
      btn.setAttribute("aria-current", isActive ? "true" : "false");
    }
  }

  function setLang(lang) {
    if (lang !== "it" && lang !== "en") return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLang(lang);
  }

  function initSwitcherButtons() {
    var langBtns = document.querySelectorAll("[data-lang-btn]");
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener("click", function (e) {
        setLang(e.currentTarget.getAttribute("data-lang-btn"));
      });
    }
  }

  window.smuggleSetLang = setLang;

  applyLang(getSavedLang());
  initSwitcherButtons();
})();
