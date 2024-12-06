document.querySelector(".busca").addEventListener("submit", async (event) => {
    event.preventDefault()

    let value = document.querySelector("#searchInput").value
    if (value != "") {

        let apiKey = encodeURI(`dfe3dd29e67afba442b682196ef9f20f`)
        let url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric&lang=pt_br`)

        let data = await url.json()
        console.log(data)
        if (data.cod === 200) {

            document.querySelector(".aviso").style.display = "none"
            document.querySelector("div.resultado").style.display = "block"
            document.querySelector(".titulo").innerHTML = data.name;
            document.querySelector(".tempInfo").innerHTML = data.main.temp;
            document.querySelector(".ventoInfo").innerHTML = data.wind.speed;

            document.querySelector("input").value = ""

            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.querySelector("img").setAttribute("src", weatherIcon)

            document.querySelector(".ventoPonto").style.transform = `rotate(${data.wind.deg - 90}deg)`

        }else{
            document.querySelector("div.resultado").style.display = "none"
            document.querySelector(".aviso").innerHTML = `cidade não localizada: erro ${data.cod}`
            document.querySelector(".aviso").style.display = "block"
        }
        
        }
    }

) 
