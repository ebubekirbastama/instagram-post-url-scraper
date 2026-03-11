Instagram Caption URL Scraper

Instagram profil gönderilerini sırayla açarak açıklama alanındaki URL bağlantılarını otomatik olarak toplayan pratik JavaScript aracıdır.

Badges:
JavaScript | Browser | Console Script | MIT License

--------------------------------------------------

OVERVIEW

Bu proje, Instagram profil sayfasındaki gönderileri sırayla açar ve açıklama alanında yer alan https:// ile başlayan bağlantıları otomatik olarak tespit eder.

Kullanım amaçları:
- Haber linklerini toplamak
- Gönderi açıklamalarındaki dış bağlantıları çıkarmak
- İçerik analizi yapmak
- Manuel kopyalama işlemlerini hızlandırmak

--------------------------------------------------

FEATURES

- Kullanıcıdan işlenecek gönderi sayısını ister
- Profil gönderilerini sırayla açar
- Caption içindeki URL’leri tespit eder
- Sonuçları liste halinde toplar
- Otomatik olarak panoya kopyalar
- Konsolda çıktı gösterir

--------------------------------------------------

PROJECT STRUCTURE

instagram-caption-url-scraper/<br>
├── scraper.js<br>
├── README.md<br>
├── LICENSE<br>
└── assets/<br>
    ├── banner.png<br>
    └── demo.gif<br>

--------------------------------------------------

HOW IT WORKS

1. Instagram profil sayfası açılır
2. Tarayıcı geliştirici konsolu açılır
3. scraper.js kodu konsola yapıştırılır
4. Kaç gönderi işleneceği girilir
5. Script gönderileri sırayla açar
6. Caption içindeki URL’leri toplar
7. Sonuçları panoya kopyalar

--------------------------------------------------

USAGE

1. Instagram profil sayfasını aç
2. Tarayıcıda F12 → Console
3. scraper.js kodunu yapıştır
4. Enter tuşuna bas

Script senden şu bilgiyi ister:

Kaç adet gönderiden link toplanacak?

--------------------------------------------------

OUTPUT EXAMPLE

https://beykozunsesi.com.tr/ornek-haber-1<br>
https://beykozunsesi.com.tr/ornek-haber-2<br>
https://beykozunsesi.com.tr/ornek-haber-3<br>

--------------------------------------------------

LIMITATIONS

- Instagram arayüzü değişirse selector güncellenmelidir
- Bazı gönderilerde URL bulunmayabilir
- Ağ gecikmelerine bağlı olarak bekleme süreleri değişebilir

--------------------------------------------------

LICENSE

MIT License

--------------------------------------------------
