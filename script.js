let artists = [
    {icon: document.querySelector('.image1'), text: 'Travis Scott - американский хип-хоп исполнитель. Трек «Sicko mode» является одним из самых прослушиваемых на Spotify'},
    {icon: document.querySelector('.image2'), text: 'Playboi Carti сотрудничал почти со всеми известными иполнителями: Lil Uzi Vert, Chief Keef и др. Его треки используют многие тик-токеры'},
    {icon: document.querySelector('.image3'), text: '«Gucci Gang» - самый популярный трек Lil Pump. Клип на эту песню набрал более 1 млрд просмотров на YouTube'},
    {icon: document.querySelector('.image4'), text: 'Big Baby Tape - единственный рэпер из российских исполнителй, который сотрудничал с Kizaru за неданее время'},
    {icon: document.querySelector('.image5'), text: 'Kizaru Совместно с BBT выпустил альбом «BANDANA I», также они ведут работу над «BANDANA II». Является «Тrue» рэпером'},
    {icon: document.querySelector('.image6'), text: 'OG Buda - один из хип-хоп исполнителей, который смог правильно преподнести детройт стиль'},
    {icon: document.querySelector('.image7'), text: 'Blago white (Blago Белый, Yung Tsar) - американский исполнитель, прожил большую часть жизни в России. Снялся в интервью у «ВПИСКА»'},
    {icon: document.querySelector('.image8'), text: 'Morgenshtern - самый обсуждаемый артист и шоу-мен, является отличным маркетологом, благодаря чему и полчуил популярность'},
    {icon: document.querySelector('.image9'), text: 'Pop Smoke - представитель бруклинского дрилла. Альбом рэпера «Meet Yhe Woo 2» презентовали на Billboard 200'},
    {icon: document.querySelector('.image10'), text: 'Drake имеет большой опыт в музыкальной индустрии. Большинство работ включает элементы как рэпа, так и пения, что сделало его уникальным как артиста'},
    {icon: document.querySelector('.image11'), text: 'За последний месяц стриминги Lil Baby набрали 26,5 млн на Spotify. В первую очередь известен своими песнями «Freestyle», «Yes indeed» и «Drip Too Hard»'}, 
    {icon: document.querySelector('.image12'), text: 'NLE Choppa наиболее известен своим прорывным синглом 2019 года «Shotta Flow», который был сертифицирован RIAA как платиновый'},
    {icon: document.querySelector('.image13'), text: 'Топ песней Kodak Black составляют «Super Gremlin» и «ZEZE», в участии которой принял Travis Scott и Offset'},
    {icon: document.querySelector('.image14'), text: 'Blueface среди других артистов выделяется своим необычным стилем исполнения рэпа и татуировки с Бенджамином Франклином на лице'},
    {icon: document.querySelector('.image15'), text: 'A$AP Rocky американский рэпер и фотомодель из Harlem, New York City. Является участником хип-хоп коллектива A$AP Mob - микстейп Live. Love. ASAP получил высокие оценки'}
]

function getRandomIndex(array) {
    let randomIndex = Math.floor((Math.random() * array.length))
    return randomIndex
}

function printText(strElement) {
	let letterTimeout = 20
	let text = strElement.innerHTML
	let i = 1
	let printLetter = function() {
        if (i <= text.length) {
            strElement.innerHTML = text.substr(0, i)
            setTimeout(arguments.callee, letterTimeout)
        }
        i++;
    }
	printLetter()
}

let button = document.querySelector('.button')
let artistInfo = document.querySelector('.artistInfo')
let cursor = document.querySelector('.cursor')
let start = document.querySelector('.start')
let card = document.querySelector('.artistCard')

let counter = 0
let artistsExceptions = new Array();

let buttonMore = document.querySelector('.buttonMore')

button.addEventListener('click', function() {

    buttonMore.classList.remove('show2')

    function removeTouch() {
        button.classList.remove('touchButton')
    }

    button.classList.add('touchButton')
    setTimeout(removeTouch, 250)

    if (counter == 0) {
        document.querySelector('.start').style.display = 'none'
        document.querySelector('.buttonMore').style.display = 'flex'
    }

    let randomIndex = getRandomIndex(artists)
    let randomElememt = artists[randomIndex]
    let exception = artistsExceptions[0]

    if (counter == 0) {
        artists.splice(randomIndex, 1)
        artistsExceptions.push(randomElememt)
    } else {
        artists.splice(randomIndex, 1)
        artists.push(exception)
        artistsExceptions.pop(exception)
        artistsExceptions.push(randomElememt)
    }

    function addShow() {
        card.classList.add('show1')
    }

    function removeShow() {
        card.classList.remove('show2')
    }

    function activeInlines() {
        artistInfo.textContent = randomElememt.text
        cursor.textContent = '|'
        printText(artistInfo)
    }

    function activeElements() {
        exception.icon.style.display = 'none'
        randomElememt.icon.style.display = 'block'
        activeInlines()
    }

    if (counter == 0) {
        card.classList.add('show1')
        randomElememt.icon.style.display = 'block'
        activeInlines()
    } else {
        card.classList.add('show2')
        card.classList.remove('show1')
        setTimeout(removeShow, 500)
        setTimeout(activeElements, 500)
        setTimeout(addShow, 500)
    }
    counter++
})

buttonMore.addEventListener('click', function() {

    buttonMore.classList.add('show2')
    
})