
import React, { useEffect } from 'react';

export type LegalType = 'privacy' | 'geschillen' | 'kwaliteit' | 'consent' | 'voorwaarden';

interface LegalProps {
  type: LegalType;
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="prose prose-premium dark:prose-invert max-w-none">
            <h1 className="text-4xl font-serif font-bold mb-8">Privacyverklaring (AVG / GDPR)</h1>
            <p className="text-sm text-primary font-bold uppercase tracking-widest mb-4">PRP Nederland – Privacybeleid</p>
            <p>PRP Nederland hecht grote waarde aan de bescherming van uw persoonsgegevens. Wij verwerken uw gegevens in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG / GDPR).</p>
            
            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">1. Welke gegevens verzamelen wij?</h2>
            <p>Wij verwerken uitsluitend gegevens die noodzakelijk zijn voor onze dienstverlening, zoals:</p>
            <ul>
              <li>Naam, adres, woonplaats</li>
              <li>Telefoonnummer en e-mailadres</li>
              <li>Geboortedatum</li>
              <li>Medische informatie (uitsluitend indien relevant voor behandeling)</li>
              <li>Betalingsgegevens</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">2. Doel van gegevensverwerking</h2>
            <p>Uw gegevens worden verwerkt voor:</p>
            <ul>
              <li>Het plannen en uitvoeren van behandelingen</li>
              <li>Medische dossiervorming</li>
              <li>Facturatie en administratie</li>
              <li>Communicatie omtrent afspraken</li>
              <li>Wettelijke verplichtingen</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">3. Bewaartermijn</h2>
            <p>Medische dossiers worden bewaard conform de wettelijke bewaartermijn (minimaal 20 jaar, tenzij anders wettelijk bepaald).</p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">4. Delen van gegevens</h2>
            <p>Uw gegevens worden niet gedeeld met derden, tenzij dit noodzakelijk is voor:</p>
            <ul>
              <li>Wettelijke verplichtingen</li>
              <li>Samenwerking met medisch betrokken zorgverleners (met uw toestemming)</li>
              <li>Boekhoudkundige verwerking</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">5. Beveiliging</h2>
            <p>PRP Nederland treft passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen verlies of onrechtmatige verwerking.</p>

            <h2 className="text-2xl font-serif font-bold mt-8 mb-4">6. Uw rechten</h2>
            <p>U heeft recht op inzage, correctie, verwijdering (voor zover wettelijk toegestaan) en intrekking van toestemming. Verzoeken kunt u indienen via ons officiële e-mailadres.</p>
          </div>
        );
      case 'geschillen':
        return (
          <div className="prose prose-premium dark:prose-invert max-w-none">
            <h1 className="text-4xl font-serif font-bold mb-8">Geschillenregeling</h1>
            <p>PRP Nederland streeft naar de hoogste kwaliteit van zorg en dienstverlening. Mocht u onverhoopt ontevreden zijn, dan vragen wij u dit eerst met ons te bespreken.</p>
            <h3 className="text-xl font-bold mt-6 mb-2">Klachtenprocedure:</h3>
            <ol>
              <li>U dient uw klacht schriftelijk in via e-mail.</li>
              <li>Binnen 14 dagen ontvangt u een inhoudelijke reactie.</li>
              <li>Indien nodig wordt een persoonlijk gesprek ingepland.</li>
            </ol>
            <p className="mt-6">Indien wij er samen niet uitkomen, kunt u zich wenden tot een erkende onafhankelijke geschillencommissie conform de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).</p>
          </div>
        );
      case 'kwaliteit':
        return (
          <div className="prose prose-premium dark:prose-invert max-w-none">
            <h1 className="text-4xl font-serif font-bold mb-8">Kwaliteitssysteem</h1>
            <p>PRP Nederland werkt volgens een intern kwaliteitssysteem dat gericht is op:</p>
            <ul>
              <li>Medisch verantwoorde uitvoering van behandelingen</li>
              <li>Documentatie en dossiervorming</li>
              <li>Hygiëne- en veiligheidsprotocollen</li>
              <li>Continue bijscholing</li>
              <li>Periodieke evaluatie van behandelresultaten</li>
            </ul>
            <p>Wij werken uitsluitend met medische apparatuur die voldoet aan Europese richtlijnen (CE-markering). Behandelingen worden uitgevoerd door gekwalificeerde professionals.</p>
          </div>
        );
      case 'consent':
        return (
          <div className="prose prose-premium dark:prose-invert max-w-none">
            <h1 className="text-4xl font-serif font-bold mb-8">Informed Consent</h1>
            <p className="italic mb-6">(Toestemmingsverklaring)</p>
            <p>Voorafgaand aan iedere behandeling ontvangt u een duidelijke toelichting over:</p>
            <ul>
              <li>De aard van de behandeling en het verwachte effect</li>
              <li>Mogelijke risico’s en bijwerkingen</li>
              <li>Alternatieve behandelmogelijkheden</li>
              <li>Nazorginstructies</li>
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-4 text-primary">Belangrijke informatie:</h3>
            <ul>
              <li>Resultaten verschillen per persoon. Er kan geen garantie worden gegeven op haargroei.</li>
              <li>De behandeling stimuleert bestaande haarzakjes; volledig inactieve haarfollikels reageren doorgaans niet.</li>
              <li>De behandeling vervangt geen medische therapie tegen alopecia of kaalheid.</li>
              <li>Mogelijke tijdelijke bijwerkingen kunnen zijn: roodheid, zwelling, gevoeligheid.</li>
            </ul>
            <p className="font-bold mt-6">Pas na ondertekening van het informed consent formulier wordt de behandeling uitgevoerd.</p>
          </div>
        );
      case 'voorwaarden':
        return (
          <div className="prose prose-premium dark:prose-invert max-w-none">
            <h1 className="text-4xl font-serif font-bold mb-8">Algemene Voorwaarden</h1>
            <h3 className="font-bold mt-6">1. Toepasselijkheid</h3>
            <p>Deze algemene voorwaarden zijn van toepassing op alle behandelingen, afspraken en overeenkomsten tussen PRP Nederland en cliënt.</p>
            
            <h3 className="font-bold mt-6">2. Afspraken en annuleringen</h3>
            <ul>
              <li>Afspraken kunnen tot 48 uur vooraf kosteloos worden geannuleerd.</li>
              <li>Bij annulering binnen 48 uur kan een vergoeding in rekening worden gebracht.</li>
              <li>Bij no-show wordt het volledige bedrag van de behandeling in rekening gebracht.</li>
            </ul>

            <h3 className="font-bold mt-6">3. Betaling</h3>
            <p>Betaling dient voorafgaand aan of direct na de behandeling te geschieden. Betalingsregelingen zijn uitsluitend mogelijk na schriftelijke bevestiging.</p>

            <h3 className="font-bold mt-6">4. Resultaten</h3>
            <p>Resultaten verschillen per persoon. Er wordt geen garantie gegeven op specifieke behandelresultaten. PRP Nederland is niet aansprakelijk voor het uitblijven van gewenst resultaat.</p>

            <h3 className="font-bold mt-6">5. Aansprakelijkheid</h3>
            <p>PRP Nederland is uitsluitend aansprakelijk voor directe schade die het gevolg is van aantoonbare nalatigheid. Aansprakelijkheid is beperkt tot het bedrag van de betreffende behandeling.</p>
            
            <h3 className="font-bold mt-6 text-primary">6. Medische informatie</h3>
            <p>De cliënt is verplicht volledige en juiste medische informatie te verstrekken. Onjuiste of onvolledige informatie kan leiden tot uitsluiting van aansprakelijkheid.</p>

            <h3 className="font-bold mt-6">7. Toepasselijk recht</h3>
            <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-bg-main dark:bg-[#121212] min-h-screen py-24 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-secondary p-12 md:p-20 rounded-premium shadow-2xl border border-gray-100 dark:border-gray-800">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Legal;
