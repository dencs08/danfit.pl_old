<template>
    <main>
        <section class="my-20 lg:my-32">
            <div class="container">
                <h3 class="mb-4 sm:mb-0">Warunki korzystania <TextGradient>{{ name }}</TextGradient>
                </h3>

                <div class="space-y-8">
                    <ol class="space-y-6">
                        <li v-for="term in terms">
                            <span class="mb-1">
                                {{ term.title }}
                            </span>
                            <ol class="ml-5 space-y-2">
                                <li v-for="el in term.list">
                                    {{ el }}
                                </li>
                            </ol>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        <Footer />
    </main>
</template>
<script setup lang="ts">
definePageMeta({
    name: 'Terms'
})

const name = 'danfit';
const terms =
    [
        {
            title: 'Warunki korzystania ze strony internetowej',
            list: [
                'Niniejsze warunki korzystania ze strony internetowej (wraz z dokumentami, o których mowa w niniejszych warunkach) określają warunki, na jakich użytkownik może korzystać z naszej strony internetowej www.danfit.pl, jako gość lub jako zarejestrowany użytkownik. Korzystanie z naszej strony internetowej obejmuje uzyskiwanie do niej dostępu, przeglądanie jej lub rejestrowanie się na niej.',

                'Prosimy o uważne przeczytanie niniejszych warunków przed rozpoczęciem korzystania z naszej strony internetowej, ponieważ będą one miały zastosowanie do każdego przypadku korzystania z niej przez użytkownika. Zalecamy wydrukowanie kopii niniejszego dokumentu, aby móc z niego skorzystać w przyszłości.',

                'Korzystając z naszej strony internetowej użytkownik potwierdza, że akceptuje niniejsze warunki i zobowiązuje się do przestrzegania.',

                'W przypadku niewyrażenia zgody na niniejsze warunki użytkownik nie może korzystać z naszej strony internetowej.'
            ]
        },

        {
            title: 'Inne obowiązujące warunki',
            list:
                [
                    'Niniejsze warunki korzystania ze strony internetowej odnoszą się do następujących dodatkowych warunków, które również mają zastosowanie do użytkownika korzystającego z naszej strony:',
                    'naszej Polityki prywatności, która określa warunki, na jakich przetwarzamy wszelkie dane osobowe zbierane od użytkownika lub przekazywane nam przez niego. Korzystając z naszej strony,  użytkownik wyraża zgodę na przetwarzanie danych osobowych oraz zapewnia, że wszystkie dostarczone przez niego dane są dokładne.',

                    'naszych Zasad dozwolonego korzystania ze strony internetowej, które określają zasady dozwolonego i zabronionego korzystania z naszej strony. Korzystając z naszej strony, użytkownik musi przestrzegać Zasad dozwolonego korzystania ze strony internetowej.',
                ]
        },

        {
            title: 'Informacje o nas',
            list:
                [
                    'www.danfit.pl to strona internetowa obsługiwana przez Danfit (“My”).',
                ]
        },

        {
            title: 'Zmiany w niniejszych warunkach',
            list:
                [
                    'Niniejsze warunki korzystania ze strony internetowej mogą zostać zmienione w dowolnym momencie poprzez prowadzenie zmian na tej stronie.',
                    'Użytkownik zobowiązany jest od czasu do czasu sprawdzać tę stronę, aby zapoznać się ze wszelkimi wprowadzonymi zmianami, ponieważ są one dla niego prawnie wiążące.',
                ]
        },

        {
            title: 'Zmiany na stronie internetowej',
            list:
                [
                    'Nasza strona internetowa może być każdorazowo aktualizowana, a jej zawartość w dowolnym momencie zmieniana. Należy jednak pamiętać, że treści zamieszczane na naszej stronie mogą być w danym momencie nieaktualne i nie jesteśmy zobowiązani do ich zaktualizowania.',
                    'Nie gwarantujemy, że nasza strona lub jakiekolwiek treści na niej zamieszczane będą wolne od błędów lub pominięć.',
                ]
        },

        {
            title: 'Dostęp do strony internetowej',
            list:
                [
                    'Nasza strona internetowa jest udostępniana bezpłatnie.',
                    'Nie udzielamy żadnych gwarancji dotyczących ciągłej dostępności lub nieprzerwanego działania naszej strony internetowej lub jakichkolwiek treści na niej zamieszczanych. Dostęp do naszej strony internetowej jest udzielany tymczasowo. Możemy zawiesić lub wycofać naszą stronę internetową w całości lub w części, zaprzestać jej prowadzenia lub wprowadzić do niej zmiany bez powiadomienia. Nie ponosimy odpowiedzialności wobec użytkownika, jeżeli z jakiegokolwiek powodu nasza strona internetowa jest niedostępna w dowolnym momencie lub przez dowolny okres.',
                    'Użytkownik zobowiązany jest dokonać wszelkich uzgodnień niezbędnych do uzyskania dostępu do naszej strony internetowej.',
                    'Użytkownik jest również zobowiązany do zapewnienia, że wszystkie osoby uzyskujące dostęp do naszej strony za pośrednictwem jego połączenia internetowego są świadome niniejszych warunków korzystania ze strony internetowej i innych obowiązujących warunków oraz że ich przestrzegają.',
                ]
        },

        {
            title: 'Konto i hasło użytkownika',
            list:
                [
                    'Jeżeli użytkownik wybierze lub otrzyma kod identyfikacyjny, hasło lub inną informację będącą częścią naszych procedur bezpieczeństwa, musi traktować takie informacje jako poufne. Nie może ich ujawniać osobom trzecim.',
                    'Mamy prawo do dezaktywowania w dowolnym momencie kodu identyfikacyjnego lub hasła niezależnie od tego, czy zostało wybrane przez użytkownika, czy przydzielone przez nas, jeśli w naszej uzasadnionej opinii użytkownik nie przestrzega jakiegokolwiek postanowienia niniejszych warunków korzystania ze strony internetowej.',
                    'Jeżeli użytkownik wie lub podejrzewa, że ktokolwiek inny niż on sam zna jego kod identyfikacyjny lub hasło, musi niezwłocznie nas o tym powiadomić na adres biuro@danfit.pl',
                ]
        },

        {
            title: 'Prawa własności intelektualnej',
            list:
                [
                    'Jesteśmy właścicielem lub licencjobiorcą wszystkich praw własności intelektualnej do naszej strony internetowej i materiałów na niej publikowanych. Materiały te są chronione prawami autorskimi i traktatami obowiązującymi na całym świecie. Wszelkie prawa są zastrzeżone.',
                    'Użytkownik może wydrukować jedną kopię i pobrać fragmenty każdej podstrony naszej strony internetowej na własny użytek i może zwrócić uwagę innych osób w swojej organizacji na treści na niej zamieszczone.',
                    'Użytkownik nie może w żaden sposób zmieniać papierowych lub cyfrowych kopii wydrukowanych lub pobranych przez niego materiałów ani wykorzystywać ilustracji, zdjęć, materiałów wideo lub audio lub jakiejkolwiek grafiki oddzielnie od towarzyszącego im tekstu.',
                    'Nasz status (a także status wszystkich zidentyfikowanych osób mających swój wkład) jako autorów treści zamieszczonych na naszej stronie internetowej musi być zawsze potwierdzony.',
                    'Użytkownik nie może wykorzystywać żadnych treści zamieszczonych na naszej stronie do celów komercyjnych bez uzyskania od nas lub naszych licencjodawców stosownej licencji.',
                    'Jeżeli użytkownik wydrukuje, skopiuje lub pobierze jakąkolwiek część naszej strony internetowej z naruszeniem niniejszych warunków, jego prawo do korzystania ze strony zostanie niezwłocznie cofnięte, a użytkownik będzie zobowiązany – wedle naszego uznania – do zwrócenia lub zniszczenia wszystkich wykonanych przez niego kopii materiałów.',
                ]
        },

        {
            title: 'Niepodejmowanie działań w oparciu o informacje zamieszczone na stronie internetowej',
            list:
                [
                    'Żadne informacje publikowane na stronie internetowej nie stanowią zachęty, oferty ani zalecenia do zawierania jakichkolwiek transakcji biznesowych, angażowania się w jakąkolwiek działalność inwestycyjną lub podjęcia jakiejkolwiek czynności prawnej.',
                    'Treści zamieszczone na naszej stronie internetowej mają wyłącznie charakter informacyjny. Ich celem nie jest udzielanie porad, na których użytkownik powinien polegać. Użytkownik musi uzyskać profesjonalną lub specjalistyczną poradę przed podjęciem lub wstrzymaniem się od podjęcia jakichkolwiek działań na podstawie treści zawartych na naszej stronie internetowej.',
                    'Chociaż dokładamy wszelkich starań, aby aktualizować informacje na naszej stronie, nie składamy  żadnych wyraźnych lub dorozumianych oświadczeń, rękojmi ani gwarancji, że treść na naszej stronie jest dokładna, kompletna lub aktualna.',
                ]
        },

        {
            title: 'Ograniczenie odpowiedzialności',
            list:
                [
                    'W zakresie dozwolonym przez prawo niniejszym wyłączamy wszelkie wyraźne lub dorozumiane warunki, gwarancje, oświadczenia lub inne postanowienia, które mogą mieć zastosowanie do naszej strony internetowej lub jakichkolwiek treści na niej zamieszczonych.',
                    'Nie ponosimy żadnej odpowiedzialności, kontraktowej, deliktowej (w tym zaniedbania), wynikającej z naruszenia obowiązku ustawowego lub jakiejkolwiek innej odpowiedzialności, wobec użytkownika z tytułu jakichkolwiek strat lub szkód (nawet jeśli takie straty lub szkody były możliwe do przewidzenia) powstałych w związku z:',
                    'korzystaniem lub brakiem możliwości korzystania z naszej strony internetowej;',
                    'wykorzystaniem jakichkolwiek treści wyświetlanych na naszej stronie internetowej lub podejmowaniem działań w oparciu o takie treści.',
                    'Użytkownicy biznesowi powinni pamiętać, że w szczególności nie ponosimy odpowiedzialności z tytułu:',
                    'utraty zysków, spadku wielkości sprzedaży, transakcji lub przychodów;',
                    'przerwy w działalności;',
                    'utraty przewidywanych oszczędności;',
                    'utraty możliwości biznesowych, wartości firmy lub reputacji;',
                    'jakichkolwiek pośrednich lub wynikowych strat lub szkód.',
                    'Użytkownicy-konsumenci powinni pamiętać, że nasza strona internetowa jest dostępna wyłącznie do użytku domowego i prywatnego. Użytkownik zobowiązuje się nie korzystać z naszej strony internetowej w celach komercyjnych lub biznesowych, a my nie ponosimy żadnej odpowiedzialności wobec użytkownika z tytułu utraty zysków, transakcji lub możliwości biznesowych bądź też przerwy w działalności.',
                    'Nie ponosimy odpowiedzialności z tytułu jakichkolwiek strat lub szkód wyrządzonych przez wirusy, ataki typu DDoS (rozproszony atak odmowy usługi) lub inne, technologicznie szkodliwe materiały, które mogą zainfekować sprzęt komputerowy, programy komputerowe, dane lub inne materiały użytkownika w wyniku korzystania z naszej strony internetowej lub pobierania jakichkolwiek treści zamieszczonych na niej lub jakiejkolwiek stronie z nią powiązanej.',
                    'Nie ponosimy odpowiedzialności za treść stron internetowych, do których linki znajdują się na naszej stronie. Takie linki nie oznaczają, że zatwierdzamy strony, do których odsyłają. Nie ponosimy odpowiedzialności za żadne straty lub szkody wynikłe z korzystania z takich stron.',
                ]
        },

        {
            title: 'Przesyłanie treści na naszą stronę internetową',
            list:
                [
                    'Podczas korzystania z funkcji umożliwiającej przesyłanie treści na naszą stronę internetową lub kontaktowanie się z innymi użytkownikami, należy zawsze przestrzegać norm dotyczących treści określonych w naszych Zasadach dozwolonego korzystania ze strony internetowej.',
                    'Użytkownik gwarantuje, że każdy taki materiał spełnia powyższe normy. Użytkownik ponosi odpowiedzialność wobec nas i zabezpiecza nas przed roszczeniami z tytułu każdego przypadku naruszenia takiej gwarancji. Użytkownicy-konsumenci ponoszą odpowiedzialność z tytułu wszelkich strat lub szkód poniesionych przez nas w wyniku naruszenia przez nich gwarancji.',
                    ' Wszelkie treści przesyłane na naszą stronę internetową uznaje się za jawne i niezastrzeżone. Mamy prawo do wykorzystywania, kopiowania, rozpowszechniania i ujawniania osobom trzecim wszelkich takich treści w dowolnym celu.',
                    'Mamy również prawo do ujawnienia tożsamości użytkownika osobom trzecim, które twierdzą, że jakiekolwiek treści zamieszczone lub przesłane przez niego na naszą stronę internetową stanowią naruszenie ich praw własności intelektualnej lub prawa do prywatności.',
                    'Nie ponosimy odpowiedzialności wobec osób trzecich za jakiekolwiek treści zamieszczone przez dowolnego użytkownika naszej strony internetowej lub ich dokładność.',
                    'Mamy prawo do usunięcia wszelkich materiałów zamieszczonych przez użytkownika na naszej stronie internetowej, jeżeli naszym zdaniem nie są one zgodne z normami dotyczącymi treści określonymi w naszych Zasadach dozwolonego korzystania ze strony internetowej.',
                    'Poglądy wyrażone przez innych użytkowników na naszej stronie internetowej nie odzwierciedlają naszych poglądów ani wartości.',
                ]
        },

        {
            title: 'Wirusy',
            list:
                [
                    'Nie udzielamy żadnych gwarancji dotyczących bezpieczeństwa naszej strony internetowej i tego, że jest wolna od robaków lub wirusów.',
                    'Użytkownik zobowiązany jest do skonfigurowania swojego sprzętu, programów komputerowych i platformy w celu uzyskania dostępu do naszej strony internetowej. Użytkownik powinien używać własnego oprogramowania antywirusowego.',
                    'Użytkownik nie może wykorzystywać naszej strony internetowej do świadomego zamieszczania wirusów, koni trojańskich, robaków, bomb logicznych lub innych materiałów, które są złośliwe lub mają szkodliwy wpływ na urządzenia. Użytkownik nie może podejmować prób uzyskania nieautoryzowanego dostępu do naszej strony internetowej, serwera, na którym przechowywana jest nasza strona, ani żadnego innego serwera, komputera lub bazy danych połączonej z naszą stroną internetową. Użytkownik nie może atakować naszej strony internetowej za pomocą ataku typu DoS (odmowa usługi) lub DDoS (rozproszony atak odmowy usługi). Naruszając niniejsze postanowienie, użytkownik popełnia przestępstwo. Każdy przypadek takiego naruszenia zostanie zgłoszony odpowiednim organom ścigania, z którymi będziemy współpracować i którym ujawnimy tożsamość użytkownika. Każdy przypadek takiego naruszenia powoduje natychmiastowe cofnięcie prawa do korzystania z naszej strony internetowej.',
                ]
        },

        {
            title: 'Link do naszej strony internetowej',
            list:
                [
                    'Użytkownik może zamieścić link to naszej strony głównej pod warunkiem, że zrobi to w sposób uczciwy i zgodny z prawem, a także nienarażający naszej reputacji na szkodę i niewykorzystujący jej.',
                    'Użytkownikowi nie wolno zamieszczać linku w sposób sugerujący jakąkolwiek formę powiązania z nami lub zatwierdzenia lub poparcia z naszej strony, jeżeli takie powiązanie, zatwierdzenie lub poparcie nie istnieje.',
                    'Użytkownikowi nie wolno zamieszczać linku do naszej strony na żadnej stronie internetowej, która nie jest jego własnością.',
                    'Nie wolno umieszczać naszej strony internetowej jako części innej strony ani tworzyć łączy do części naszej strony innych niż strona główna.',
                    'Zastrzegamy sobie prawo do cofnięcia pozwolenia na zamieszczanie linku do naszej strony internetowej bez powiadomienia.',
                    'Strona internetowa, na której zamieszczany jest link, musi spełniać pod każdym względem normy dotyczące treści określone w naszych Zasadach dozwolonego korzystania ze strony internetowej.',
                    'W przypadku chęci skorzystania z treści zamieszczonych na naszej stronie, innych niż wymienione powyżej, należy skontaktować się z biuro@danfit.pl',
                ]
        },

        {
            title: 'Linki i materiały osób trzecich zamieszczone na naszej stronie internetowej',
            list:
                [
                    'W przypadku, gdy nasza strona internetowa zawiera linki do innych stron i materiałów dostarczonych przez osoby trzecie, linki te są podawane wyłącznie w celach informacyjnych.',
                    'Nie mamy żadnej kontroli nad treścią takich stron lub materiałów.',
                ]
        },

        {
            title: 'Prawo właściwe',
            list:
                [
                    'Niniejsze warunki są zgodne z przepisami prawa powszechnie obowiązującego w Polsce i będą zgodnie z nimi interpretowane. Użytkownik zgadza się aby wszelkie spory wynikające z korzystania przez niego z niniejszej strony internetowej podlegały pod wyłączną jurysdykcję sądu powszechnego według właściwości miejscowej ustalanej dla Danfit',
                ]
        },

        {
            title: 'Kontakt',
            list:
                [
                    'Aby skontaktować się z nami, proszę przesłać wiadomość e-mail na adres biuro@danfit.pl. ',
                ]
        },
    ]
</script>
<style lang="scss" scoped>
ol {
    counter-reset: item
}

li {
    display: block
}

li:before {
    content: counters(item, ".") " ";
    counter-increment: item
}
</style>