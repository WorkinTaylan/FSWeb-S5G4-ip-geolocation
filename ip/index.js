import axios from 'axios'; //axios import buraya gelecek

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		console.log(response)
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/88.241.232.43
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

let dummy={
	"sorgu":"88.241.232.43",
	"durum":"OK",
	"kıta":"Asia",
	"ülke":"Turkey",
	"ülkeKodu":"TR",
	"ülkebayrağı":"https:\/\/apis.ergineer.com\/ulkebayraklari\/TR",
	"bölge":"06",
	"bölgeAdı":"Ankara",
	"şehir":"Ankara",
	"zip":"06460",
	"enlem":39.92049999999999698729880037717521190643310546875,
	"boylam":32.83720000000000283080225926823914051055908203125,
	"saatdilimi":"Europe\/Istanbul",
	"parabirimi":"TRY",
	"isp":"TurkTelecom",
	"organizasyon":"Turk Telekomunikasyon A.S",
	"as":"AS47331 TTNet A.S."
  }
let cards=document.querySelector(".cards");

function ipInfo(ipObj){

	const cardDiv= document.createElement("div")
	cardDiv.classList.add("card")

	const img=document.createElement("img")
	img.src=ipObj.ülkebayrağı
	cardDiv.appendChild(img)

	const cardInfo=document.createElement("div")
	cardInfo.classList.add("card-info")
	cardDiv.appendChild(cardInfo)

	const ip=document.createElement("h3")
	ip.classList.add("ip")
	ip.textContent=ipObj.sorgu
	cardInfo.appendChild(ip)

	const ulke=document.createElement("p")
	ulke.textContent=`${ipObj.ülke} (${ipObj.ülkeKodu})`
	ulke.classList.add("ulke")
	cardInfo.appendChild(ulke)

	const para1=document.createElement("p")
	para1.textContent=`Enlem: ${ipObj.enlem} Boylam: ${ipObj.boylam}`;
	cardInfo.appendChild(para1)

	const para2=document.createElement("p")
	para2.textContent=`Şehir: ${ipObj.şehir}`
	cardInfo.appendChild(para2)

	const para3=document.createElement("p")
	para3.textContent=`Saat dilimi: ${ipObj.saatdilimi}`
	cardInfo.appendChild(para3)

	const para4=document.createElement("p")
	para4.textContent=`Para birimi: ${ipObj.parabirimi}`
	cardInfo.appendChild(para4)

	const para5=document.createElement("p")
	para5.textContent=`ISP: ${ipObj.isp}`
	cardInfo.appendChild(para5)

	return cardDiv;
}



/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/
const connection = async function(){
	await ipAdresimiAl();
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipgeoapi/'+benimIP,
	})
	.then(function (response) {
		console.log(response)
		return response.data
	})
	.then(function (a) {
		cards.appendChild(ipInfo(a))
	});
}
connection();



/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek