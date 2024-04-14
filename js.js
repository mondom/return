function fun3() {
	return (
		'The quick brown fox jumps over the lazy dog' +
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit' +
		Math.random()
	)
}

console.log(fun3())
// jeśli chcemy dodać kilka linijek kodu po return, trzeba to opakować w nawiasy okrągłe

// funkcja strzałkowa

const arrow1 = () => {
	a: 'foo'
}
console.log(arrow1()) // undefined

//   Przy tym zapisie mogłoby się wydawać, że funkcja zwraca obiekt z jedną właściwością, ponieważ po strzałce w arrow function następuje zwracanie wartości. Niestety w tym przypadku otrzymujemy wartość undefined.

//   Nawiasy klamrowe w tym przypadku zawsze zaczynają tworzyć ciało funkcji.

// Jeżeli chcemy w takiej funkcji zwracać obiekt, powinniśmy ten zapis zrobić tak:

const arrow2 = () => {
	return { a: 'foo' }
}

// Dopiero w ciele funkcji tworzymy zapis return i zwracamy obiekt w postaci literalnej.

// Zapis ten można jeszcze skrócić za pomocą okrągłych nawiasów:

const arrow3 = () => ({ a: 'foo' })

// Stosując nawiasy okrągłe, możemy od razu zwrócić blok kodu w postaci obiektu. Warto zwrócić na to uwagę, ten przypadek jest dość częstym błędem początkujących programistów JavaScript.

function add(a) {
	return function (b) {
		return a - b
	}
}

const fun = add(4)
const result = fun(5)

console.log(result) 

//   Mamy funkcję add, która przyjmuje parametr i zwraca inną funkcję. Wywołanie funkcji add przypisujemy do zmiennej fun. W tym momencie zmienna fun ma przypisaną funkcję zwróconą z funkcji add. Możemy zatem wywołać zmienną fun i przekazać kolejny parametr. Ostatecznie otrzymujemy wynik w
//   zmiennej result.

//   Ten zapis można zrobić jeszcze krócej:

add(1)(3) 

//   Najpierw wywołana jest funkcja add i od razu wywoływana jest funkcja zwracana. Pewnie niezbyt często spotkacie się z takim kodem. Czasami jednak możecie być poproszeni o stworzenie takiej funkcji przy rozmowie o pracę.
