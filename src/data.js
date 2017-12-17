/* eslint-disable */
let CVData = {  
  personal: {
    name: { title: 'Name', value: 'Steve Jobs' },
    phone: { title: 'Telefon', value: '+43 555 1234567' },
    email: { title: 'E-Mail', value: 'steve@apple.com' },
    birthday: { title: 'Geburtstag', value: '1955-02-24' },
    city_of_birth: { title: 'Geburtsort', value: 'San Francisco' },
    nationality: { title: 'Staatsbürgerschaft', value: 'USA' },
    strengths: { title: 'Stärken', value: 'Kreativ, Detailverliebt, Ergeiz, Führungsqualität' },
    foto: { url: 'steve.jpg'}
  },
  other: {
    military_service: { title: 'Bundsheer', from: null, to: null }
  },
  education: [
    {
      type: 'Schule',
      from: '1996-09-01',
      to: '1972-07-01',
      title: 'High-School (Homestead High School in Cupertino)'
    },{
      type: 'Studium',
      from: '1972-07-01',
      to: '1973-02-01',
      title: 'Reed College in Portland ',
      notes: [ 
        'nach einem Semester abgebrochen'
      ]
    }
  ],
  skills: [
    { type: 'Programmiersprachen', list: [ '...' ] },
    { type: 'Datenbanken', list: [ '...' ] },
    { type: 'Tools', list: [ '...' ] },
    { type: 'Office', list: [ 'Word', 'Excel', 'Powerpoint', 'Project', 'Outlook', ';)' ] }
  ],
  jobs: [
    {
      title: 'CEO',
      company: 'Apple',
      cId: 'apple',
      description: [
        '1976 gründeten Jobs und Wozniak zusammen mit Ronald Wayne die Apple Computer Company in Jobs Garage in Los Altos, Kalifornien. Ihr erstes, mit dem Apfel mit Biss (Bite) beworbenes Produkt war der Apple I, der für 666,66 Dollar verkauft wurde. Der Prototyp steckte in einem selbst gebauten Holzgehäuse.',
        '1977 wurde der Apple II eingeführt, der Apple zu einem wichtigen Akteur im Heimcomputermarkt machte. Im Dezember 1980 erfolgte die Umwandlung von Apple in eine Kapitalgesellschaft, und Apple präsentierte den Apple III, der jedoch kein vergleichbar großer Erfolg wurde. 1983 warb Jobs den Pepsi-Manager John Sculley für den Posten als Geschäftsführer bei Apple an. Im selben Jahr brachte Apple den Apple Lisa auf den Markt.',
        '1984 stellte Apple den Macintosh vor. Es war der erste kommerziell erfolgreiche Computer mit einer grafischen Benutzeroberfläche (also Bildschirmsymbolen statt Kommandozeilen-Code) und der Computermaus als Standardeingabemedium. Die Entwicklung des „Macs“ fing mit Jef Raskin und seinem Team an, die durch die Technik inspiriert wurden, die im Xerox-Forschungszentrum entwickelt, aber nicht kommerziell verwendet wurde. Der Erfolg des Macintosh brachte Apple dazu, den Apple II zugunsten der Macintosh-Produktlinie aufzugeben, die bis heute verfolgt wird. Nach einem internen Machtkampf mit Sculley verließ Jobs 1985 das Unternehmen. Fünf nahe Angestellte folgten ihm.'],
      from: '1976-01-01',
      to: '1985-01-01'
    },
    {
      title: 'CEO',
      company: 'NeXT',
      cId: 'next',
      description: [
        '1986 gründete er mit der Firma NeXT Computer ein weiteres Computerunternehmen. Aus Sorge, dass er bei den geplanten NeXT-Rechnern Apple-Technik verwenden würde, ging Sculley gegen Jobs vor Gericht. Der Vorwurf lautete: Bruch treuhänderischer Verantwortlichkeit („Breach of fiduciary responsibility“) und „ruchlose“ Anstiftung zum Abziehen von Apples Handelsgeheimnissen. Das Verfahren endete am 17. Januar', '1986 mit einem Vergleich, in dem sich Jobs verpflichtete, Apple eine Zeit lang Einblicke in NeXT-Entwicklungen zu gestatten, indem er der Firma Prototypen zeigte, und bis zum 1. Juli 1987 keine eigenen Computer auf den Markt zu bringen.'
      ],
      from: '1986-01-31',
      to: '1993-02-01'
    },
    {
      title: 'CEO',
      company: 'Pixar',
      cId: 'pixar',
      description: [ 
        'Parallel zur NeXT-Gründung investierte Jobs 1986 gemeinsam mit Edwin Catmull fünf Millionen Dollar (ein Drittel des ursprünglichen Preises) plus weitere fünf Millionen, um Pixar, ein in Emeryville, Kalifornien, ansässiges Computertrickfilm-Studio von dessen Gründer George Lucas aus der Lucasfilm-Grafikabteilung herauszukaufen.' 
      ],
      from: '1986-01-31',
      to: '2006-01-24'
    },
    {
      title: 'CEO',
      company: 'Apple',
      cId: 'apple',
      description: [ 
        '1996 kaufte Apple NeXT für 402 Mio. US-Dollar. Jobs übte seitdem eine Beratertätigkeit im Unternehmen aus. Im August 1997 wurde er Mitglied des Vorstandes und kurz darauf, nach der Entlassung von Gil Amelio im September des Jahres, vorübergehend Geschäftsführer des Unternehmens. Noch im gleichen Jahr beendete Jobs viele Produkte und Forschungsprojekte sowie alle langjährigen Wohltätigkeitsprogramme des Unternehmens. Er begründete dies mit der Notwendigkeit Kosten einzusparen, um die Rentabilität des Unternehmens wiederherzustellen.'
      ],
      to: '2011-01-01',
      from: '1997-09-01'
    }
  ],
  projects: [ {
    title: 'iPhone',
    description: 'Das iPhone ist eine im Jahr 2007 eingeführte Smartphone-Modellreihe des US-amerikanischen Unternehmens Apple. Bislang wurden 18 verschiedene Modelle vorgestellt; die aktuellen Versionen erschienen im September 2017 – iPhone 8 sowie das iPhone X. Zuvor war am 21. März 2016 auch ein Ableger für die 4-Zoll-Modelle in Form des iPhone SE hinzugekommen.',
    cId: 'apple',
    keywords: [ 'Web', 'Smartphone' ],
    web: { link: 'https://apple.com', title: 'apple.com' },
    company: 'Apple',
    technology: [ 
      'Hauptprozessor:  ARM1176-Prozessor mit 412 MHz Taktfrequenz',
      'Sensoren: Näherungssensor, Drei-Achsen-Beschleunigungssensor, Helligkeitssensor',
      'Mobilfunk: GSM, EDGE',
      'Medienwiedergabe: Videos im H.264-Standard',
      'Datenspeicher: 4 GB, 8 GB oder 16 GB großer NAND-Flash-Speicher'
    ],
    responsibilities: [
      'Design...',
      'Marketing...',
      'Management...'
    ],
    images: [ 'IPhone_First_Generation.jpg', '800px-Original_iPhone_rear.jpg']
  }, {
    title: 'Apple Lisa',
    description: 'Der Apple Lisa (auch nur „Lisa“ oder „The Lisa“ genannt) von 1983 war einer der ersten Personal Computer, der über eine Maus und ein Betriebssystem mit grafischer Benutzeroberfläche verfügte. Wegen des hohen Preises von rund 10.000 US-Dollar verkaufte sich der Rechner schlecht, und Apple stellte die Produktion bereits 1984 wieder ein. In der Computergeschichte gilt Lisa als Vorbereitung des deutlich preisgünstigeren, aber technisch ähnlichen Macintosh im Jahr 1984. Mittelfristig wurde der „Mac“ dann zum großen Erfolg für den kalifornischen Computerkonzern.',
    web: { link: 'https://apple.com', title: 'apple.com' },
    company: 'Apple',
    publisher: 'Apple',
    keywords: [ 'PC', 'Lisa' ],
    cId: 'apple',
    technology: [ 
      'Hauptprozessor: Motorola 68000 inklusive MMU mit 5,09376 MHz',
      'Arbeitsspeicher: 512 kB',
      'IO: 5¼-Zoll-Diskettenlaufwerke'
    ], 
    responsibilities: [
      'Clientseitige Implementierung diverser Features: Erweiterung des PvP, Einführung von Gilden sowie Erweiterung/Redesign des Funktionsumfanges des Online Shops',
      'Mitarbeit an Planung im Software Entwicklungsprozess (SCRUM)',
      'Bugfixing'
    ],
    images: [ 'Apple_Lisa.jpg', '800px-Apple_Lisa_2_with_Profile_HD_cropped.jpg' ]
  } ]
}
export default CVData;