# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Chi guida un'auto, una moto o uno scooter per uso personale o di famiglia, con qualsiasi alimentazione:
benzina, diesel, GPL, metano, ibrida, ibrida plug-in, elettrica. Vuole sapere quanto costa davvero il
proprio veicolo e non dimenticare le scadenze. Non sono utenti: flotte, aziende, gestori di mezzi
aziendali (le Condizioni d'uso escludono l'uso professionale).

Il sito (kilometroapp.com) è la pagina da cui queste persone scoprono l'app e la scaricano da App Store
o Google Play, e dove trovano Privacy, Condizioni d'uso e cancellazione dei dati.

## Product Purpose

Kilòmetro registra rifornimenti, ricariche, manutenzioni, bollo, assicurazione, pedaggi e scadenze di
ogni veicolo, e ne ricava il costo al chilometro, i consumi, la spesa per categoria e una previsione.
Ha promemoria per le scadenze, una mappa dei prezzi dei carburanti e delle colonnine vicine, e la
lettura dello scontrino da una foto (in abbonamento, con prova gratuita).

Il sito ha successo quando chi arriva capisce in pochi secondi che cosa fa l'app e la scarica.

## Positioning

- La Storia è una linea a chilometri: ogni spesa sta al suo contachilometri, e fra un pieno e l'altro
  c'è la tratta con i chilometri percorsi e il consumo di quella tratta.
- Un solo costo al chilometro in tutta l'app: lo stesso numero nella Storia, nel Report e nella card
  Efficienza.
- I dati restano sul telefono e nell'iCloud o nel Google Drive dell'utente: nessun server dello
  sviluppatore.
- Le tratte anomale (troppi chilometri o troppi litri) vengono segnalate e si correggono dalla Storia.

## Operating Context

- App iOS (Swift, SwiftUI) e Android (Kotlin, Compose), con layout dedicati per iPhone Duo (display
  esterno, interno in orizzontale a due colonne, interno in verticale).
- Quattro lingue: italiano, inglese, francese, spagnolo. Il sito è in italiano; le pagine legali anche
  in inglese, francese e spagnolo.
- Import ed export Excel e CSV, anche da Drivvo.
- Prezzi dei carburanti da dati pubblici (in Italia il MIMIT); colonnine da Open Charge Map.

## Capabilities and Constraints

- Sito statico su GitHub Pages, ramo `main`, dominio kilometroapp.com (file `CNAME`).
- Pagine legali esistenti, da tenere collegate: `privacy.html`, `termini.html`, `cancellazione.html`
  (più le versioni `-en`, `-fr`, `-es`).
- Link agli store: App Store
  `https://apps.apple.com/it/app/kil%C3%B2metro-spese-auto-e-moto/id6820212597`, Google Play
  `https://play.google.com/store/apps/details?id=it.kilometro.app`.
- L'app è gratuita e senza pubblicità (confermato da Daniele il 16/11/2026; la privacy lo dice già:
  nessuna pubblicità, nessun servizio di analisi). Il sito non aggiunge analisi né tracciamento.
- La lettura dello scontrino è in abbonamento con prova gratuita. Il prezzo dell'abbonamento non è
  sul sito: è negli store.
- Il display della pompa non viene letto; la ricevuta della colonnina sì.

## Brand Commitments

- Nome: Kilòmetro, sempre con la ò accentata. Nome completo negli store: "Kilòmetro – spese auto e moto".
- Icona: il marchio "K" sull'asse della storyboard, su fondo azzurro (`img/icona.webp`, `favicon.png`).
- Colori dell'app (palette "Apple Modern", regola 60-30-10): fondo #F5F5F7, inchiostro #1D1D1F,
  grigio #AAAAAA, accento #007AFF.
- Registro dei testi (regola di Daniele, 16/10/2026): lessico neutro e curato, da manuale ben scritto;
  frasi descrittive e impersonali per le spiegazioni, il "tu" solo per le azioni; niente esclamativi,
  idiomi o parole da sviluppatore.
- Sviluppata da Daniele Crucitti.

## Evidence on Hand

- Schermate reali del 13/11/2026 con i dati di esempio: `img/storia-iphone-duo.jpg` (Storia su iPhone
  Duo aperto), `img/report-android.jpg` (Report su Android), `img/prezzi-iphone.jpg` (Prezzi su iPhone).
- Dati di esempio dell'app: Golf 7 1.6 TDI, 148.320 km, rifornimenti Q8 Tangenziale Ovest ed Eni Via
  Emilia, 0,221 €/km, 18,1 km/l.
- Assenti, da non inventare: recensioni, valutazioni, numeri di download o di utenti, citazioni della
  stampa, clienti, prezzi dell'abbonamento.

## Product Principles

1. Il numero vero prima di tutto: il costo al chilometro è uno, e torna uguale ovunque.
2. I dati sono dell'utente: restano sul suo telefono e nel suo cloud.
3. Precisione senza enfasi: l'app dice quello che misura, nel registro neutro dei testi.
4. Ogni veicolo e ogni alimentazione hanno lo stesso trattamento, dall'utilitaria allo scooter elettrico.

## Accessibility & Inclusion

L'app esiste in quattro lingue e su iPhone, iPhone Duo e Android; il sito deve restare leggibile da
telefono, tastiera e lettore di schermo.
