let artists = [
    {icon: document.querySelector('.image1'), text: 'Travis Scott - американский хип-хоп исполнитель. Трек «Sicko mode» является одним из самых прослушиваемых на Spotify', song: 'https://www.youtube.com/watch?v=6ONRf7h3Mdk', songs: 'https://www.youtube.com/watch?v=2oCY5Ima3Wk', album: 'https://www.youtube.com/watch?v=n2W2c-ct1W4'},
    {icon: document.querySelector('.image2'), text: 'Playboi Carti сотрудничал почти со всеми известными иполнителями: Lil Uzi Vert, Chief Keef и др. Его треки используют многие тик-токеры', song: 'https://www.youtube.com/watch?v=KnumAWWWgUE', songs: 'https://www.youtube.com/watch?v=rFbLj742rf4', album: 'https://www.youtube.com/watch?v=cFRymKTnx6U'},
    {icon: document.querySelector('.image3'), text: '«Gucci Gang» - самый популярный трек Lil Pump. Клип на эту песню набрал более 1 млрд просмотров на YouTube', song: 'https://www.youtube.com/watch?v=4LfJnj66HVQ', songs: 'https://www.youtube.com/watch?v=jI18y5HddEQ', album: 'https://www.youtube.com/watch?v=owdawrjnqDQ&list=PL_ZnCc_3LyhmkmZdpn5t6LMieF40w4tgU'},
    {icon: document.querySelector('.image4'), text: 'Big Baby Tape - единственный рэпер из российских исполнителй, который сотрудничал с Kizaru за неданее время', song: 'https://www.youtube.com/watch?v=dlR9mqBVnXw', songs: 'https://www.youtube.com/watch?v=OH4vv8SmBVo', album: 'https://www.youtube.com/watch?v=jy9sRIYzkO0'},
    {icon: document.querySelector('.image5'), text: 'Kizaru Совместно с BBT выпустил альбом «BANDANA I», также они ведут работу над «BANDANA II». Является «Тrue» рэпером', song: 'https://www.youtube.com/watch?v=xDVqHpoPCnU', songs: 'https://www.youtube.com/watch?v=b8kpcGjSYdw' , album: 'https://www.youtube.com/watch?v=l3LQnlevl9s'},
    {icon: document.querySelector('.image6'), text: 'OG Buda - один из хип-хоп исполнителей, который смог правильно преподнести детройт стиль', song: 'https://www.youtube.com/watch?v=W3D3wSrk7ao', songs: 'https://www.youtube.com/watch?v=4BRt2jU6DME', album: 'https://www.youtube.com/watch?v=Ab1-cjhkxxE'},
    {icon: document.querySelector('.image7'), text: 'Blago white (Blago Белый, Yung Tsar) - американский исполнитель, прожил большую часть жизни в России. Снялся в интервью у «ВПИСКА»', song: 'https://www.youtube.com/watch?v=T-eBHmbUPsw', songs: 'https://www.youtube.com/watch?v=-O37rya_nFU', album: 'https://www.youtube.com/watch?v=ZOO565eyjT0'},
    // {icon: document.querySelector('.image8`'), text: 'Morgenshtern - самый обсуждаемый артист и шоу-мен, является отличным маркетологом, благодаря чему и полчуил популярность', song: 'https://www.youtube.com/watch?v=SsvM80bIA1k', songs: 'https://www.youtube.com/watch?v=c_I9CrcJHfM', album: 'https://www.youtube.com/watch?v=eV-DHvPP6d8&list=PLyJihFoIZ6EhbtRYEMq8CT0OXkella6Da'},
    {icon: document.querySelector('.image9'), text: 'Pop Smoke - представитель бруклинского дрилла. Альбом рэпера «Meet Yhe Woo 2» презентовали на Billboard 200', song: 'https://www.youtube.com/watch?v=oorVWW9ywG0', songs: 'https://www.youtube.com/watch?v=rhJlGLqQb1M', album: 'https://www.youtube.com/watch?v=o3huN9z7-EM&list=PLQFLn45emZu1EWGwi39oR1JFyoeJHsXHv'},
    {icon: document.querySelector('.image10'), text: 'Drake имеет большой опыт в музыкальной индустрии. Большинство работ включает элементы как рэпа, так и пения, что сделало его уникальным как артиста', song: 'https://www.youtube.com/watch?v=vX9msKu75qs', songs: 'https://www.youtube.com/watch?v=Tqy5qaRF0lE', album: 'https://www.youtube.com/watch?v=VtEBRE9ul90&list=PLxA687tYuMWhs6U8nlUQSNQtpUNUMr3Ey'},
    {icon: document.querySelector('.image11'), text: 'За последний месяц стриминги Lil Baby набрали 26,5 млн на Spotify. В первую очередь известен своими песнями «Freestyle», «Yes indeed» и «Drip Too Hard»', song: 'https://www.youtube.com/watch?v=ieTnO1Dvt-I', songs: 'https://www.youtube.com/watch?v=BB7T1o8QhI8', album: 'https://www.youtube.com/watch?v=KUoEKy2uvTQ&list=PLPRWtKgY2MOsSblKiUFdMS-o_LXTb-fgr'}, 
    {icon: document.querySelector('.image12'), text: 'NLE Choppa наиболее известен своим прорывным синглом 2019 года «Shotta Flow», который был сертифицирован RIAA как платиновый', song: 'https://www.youtube.com/watch?v=ih6vI5SAkjc', songs: 'https://www.youtube.com/watch?v=7ICnFflj7kM', album: 'https://www.youtube.com/watch?v=sGHCswa9oLI&list=PLtdokPm7vPsuaP8zH6lJt-cH3JcT7dWZ2'},
    {icon: document.querySelector('.image13'), text: 'Топ песней Kodak Black составляют «Super Gremlin» и «ZEZE», в участии которой принял Travis Scott и Offset', song: 'https://www.youtube.com/watch?v=mjaayCARwro', songs: 'https://www.youtube.com/watch?v=2QjFBZs-GBg', album: 'https://www.youtube.com/watch?v=s2WSQMKvn9U&list=PLskcc5Yx2YNQ-v_2wOsonIQYqWemMDdaT'},
    {icon: document.querySelector('.image14'), text: 'Blueface среди других артистов выделяется своим необычным стилем исполнения рэпа и татуировки с Бенджамином Франклином на лице', song: 'https://www.youtube.com/watch?v=5TWDdOZPvM4', songs: 'https://www.youtube.com/watch?v=ucLFjw3ZHZU', album: 'https://www.youtube.com/watch?v=SuXqkqBWiYE&list=PLPRWtKgY2MOvrj7gp4byF_7G7S7ytFd5X'},
    {icon: document.querySelector('.image15'), text: 'A$AP Rocky американский рэпер и фотомодель из Harlem, New York City. Является участником хип-хоп коллектива A$AP Mob - микстейп Live. Love. ASAP получил высокие оценки', song: 'https://www.youtube.com/watch?v=Kbj2Zss-5GY', songs: 'https://www.youtube.com/watch?v=MptWsaczwv8', album: 'https://www.youtube.com/watch?v=C9mquL8JLLM&list=PL8YH4mOwWryX0Q94XlzjkMyDzgBFdspip'}
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
let artistCard = document.querySelector('.artistCard')

let counter = 0
let artistsExceptions = new Array();

let buttonMore = document.querySelector('.buttonMore')
let musicBlock = document.querySelector('.musicBlock')

let buttonSong = document.querySelector('.song')
let buttonSongs = document.querySelector('.songs')
let buttonAlbum = document.querySelector('.album')

button.addEventListener('click', function() {
    buttonSong.classList.remove('show1')
    buttonSong.style.display = 'none'

    buttonSongs.classList.remove('show1')
    buttonSongs.style.display = 'none'

    buttonAlbum.classList.remove('show1')
    buttonAlbum.style.display = 'none'

    musicBlock.style.display = 'none'

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

    document.querySelector('.songLink').href = randomElememt.song
    document.querySelector('.songsLink').href = randomElememt.songs
    document.querySelector('.albumLink').href = randomElememt.album

    function addShow() {
        artistCard.classList.add('show1')
    }

    function removeShow() {
        artistCard.classList.remove('show2')
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
        artistCard.classList.add('show1')
        randomElememt.icon.style.display = 'block'
        activeInlines()
    } else {
        artistCard.classList.add('show2')
        artistCard.classList.remove('show1')
        setTimeout(removeShow, 500)
        setTimeout(activeElements, 500)
        setTimeout(addShow, 500)
    }
    counter++
})

buttonMore.addEventListener('click', function() {
    musicBlock.style.display = 'block'

    buttonMore.classList.add('show2')
    
    function showButtonSong() {
        buttonSong.classList.add('show1')
        buttonSong.style.display = 'block'
    }

    function showButtonSongs() {
        buttonSongs.classList.add('show1')
        buttonSongs.style.display = 'block'
    }

    function showButtonAlbum() {
        buttonAlbum.classList.add('show1')
        buttonAlbum.style.display = 'block'
    }

    function removingShow() {
        buttonSong.classList.remove('show1')
        buttonSongs.classList.remove('show1')
        buttonAlbum.classList.remove('show1')
    }

    setTimeout(showButtonSong, 550)
    setTimeout(showButtonAlbum, 750)
    setTimeout(showButtonSongs, 950)
    setTimeout(removingShow, 1450)
})

buttonSong.addEventListener('click', function() {

    function removeTouch() {
        buttonSong.classList.remove('touchButton')
    }

    buttonSong.classList.add('touchButton')
    setTimeout(removeTouch, 250)

})

buttonSongs.addEventListener('click', function() {

    function removeTouch() {
        buttonSongs.classList.remove('touchButton')
    }

    buttonSongs.classList.add('touchButton')
    setTimeout(removeTouch, 250)
    
})

buttonAlbum.addEventListener('click', function() {

    function removeTouch() {
        buttonAlbum.classList.remove('touchButton')
    }

    buttonAlbum.classList.add('touchButton')
    setTimeout(removeTouch, 250)
    
})