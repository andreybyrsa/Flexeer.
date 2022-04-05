const artists = [
    {text: 'Travis Scott - американский хип-хоп исполнитель. Трек «Sicko mode» является одним из самых прослушиваемых на Spotify', icon: 'https://www.revolt.tv/wp-content/uploads/2021/08/46c48b6f0a02a5609a28c29bdef932b304_travis_scott.rsquare.w1200.jpg'},
    {text: 'Playboi Carti сотрудничал почти со всеми известными иполнителями: Lil Uzi Vert, Chief Keef и др. Его треки используют многие тик-токеры', icon: 'https://biographymask.com/wp-content/uploads/2021/01/Playboi-Carti-singer-1200x1200.jpg'},
    {text: '«Gucci Gang» - самый популярный трек Lil Pump. Клип на эту песню набрал более 1 млрд просмотров на YouTube', icon: 'https://vinyl-is.ru/upload/iblock/2af/2af0cf15705939385c1ad78dc768f3a1.jpg'},
    {text: 'Big Baby Tape - единственный рэпер из российских исполнителй, который сотрудничал с Kizaru за неданее время', icon: 'https://img01.rl0.ru/afisha/c1200x1200i/daily.afisha.ru/uploads/images/b/03/b03c995d3fe733fea546489e952de432.jpg'}
]

//     {text: 'Kizaru Совместно с BBT выпустил альбом «BANDANA I», также они ведут работу над «BANDANA II». Является «Тrue» рэпером', icon: 'img/5.PNG'},
//     {text: 'OG Buda - один из хип-хоп исполнителей, который смог правильно преподнести детройт стиль', icon: 'img/6.PNG'},
//     {text: 'Blago white (Blago Белый, Yung Tsar) - американский исполнитель, прожил большую часть жизни в России. Снялся в интервью у «ВПИСКА»', icon: 'img/7.PNG'},
//     {text: 'Morgenshtern - самый обсуждаемый артист и шоу-мен, является отличным маркетологом, благодаря чему и полчуил популярность', icon: 'img/8.PNG'},
//     {text: 'Pop Smoke - представитель бруклинского дрилла. Альбом рэпера «Meet Yhe Woo 2» презентовали на Billboard 200', icon: 'img/9.PNG'},
//     {text: 'Drake имеет большой опыт в музыкальной индустрии. Большинство работ включает элементы как рэпа, так и пения, что сделало его уникальным как артиста', icon: 'img/10.PNG'},
//     {text: 'За последний месяц стриминги Lil Baby набрали 26,5 млн на Spotify. В первую очередь известен своими песнями «Freestyle», «Yes indeed» и «Drip Too Hard»', icon: 'img/11.PNG'},
//     {text: 'NLE Choppa наиболее известен своим прорывным синглом 2019 года «Shotta Flow», который был сертифицирован RIAA как платиновый', icon: 'img/12.PNG'},
//     {text: 'Топ песней Kodak Black составляют «Super Gremlin» и «ZEZE», в участии которой принял Travis Scott и Offset ', icon: 'img/13.PNG'},
//     {text: 'Blueface среди других артистов выделяется своим необычным стилем исполнения рэпа и татуировки с Бенджамином Франклином на лице', icon: 'img/14.PNG'},
//     {text: 'A$AP Rocky американский рэпер и фотомодель из Harlem, New York City. Является участником хип-хоп коллектива A$AP Mob - микстейп Live. Love. ASAP получил высокие оценки', icon: 'img/15.PNG'}
// ]

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
let image = document.querySelector('.image')
let artistInfo = document.querySelector('.artistInfo')
let cursor = document.querySelector('.cursor')
let start = document.querySelector('.start')
let card = document.querySelector('.artistCard')

let artistsExceptions = new Array()
let counter = 0

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
        document.querySelector('.image').style.display = 'block'
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

    function showElements() {
        image.src = randomElememt.icon
        artistInfo.textContent = randomElememt.text
        cursor.textContent = '|'
        printText(artistInfo)
    }

    function addShow() {
        card.classList.add('show1')
    }

    function removeShow() {
        card.classList.remove('show2')
    }

    if (counter == 0) {
        card.classList.add('show1')
        showElements()
    } else {
        card.classList.add('show2')
        card.classList.remove('show1')
        setTimeout(removeShow, 500)
        setTimeout(showElements, 500)
        setTimeout(addShow, 500)
    }
    counter++
})

buttonMore.addEventListener('click', function() {

    buttonMore.classList.add('show2')
    
})