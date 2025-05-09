# İnteraktif Araçlar - Kullanıcı Akışları ve Gereksinimler

## 1. Killer Sudoku Helper

### Açıklama
Killer Sudoku, standart Sudoku kurallarının yanı sıra, her kafeste belirtilen sayıların toplamını içeren bir bulmaca türüdür. Bu araç, kullanıcıların Killer Sudoku bulmacalarını çözmelerine yardımcı olmak için tasarlanmıştır.

### Kullanıcı Akışı

#### İlk Giriş
1. Kullanıcı `/tools/killer-sudoku-helper` sayfasına girer
2. Boş bir 9x9 Sudoku tahtası görür
3. Zorluk seviyesi seçenekleri (Kolay, Orta, Zor, Uzman) sunulur
4. "Yeni Oyun" ve "Özel Oyun" butonları görünür

#### Yeni Oyun Başlatma
1. Kullanıcı zorluk seviyesini seçer
2. "Yeni Oyun" butonuna tıklar
3. Sistem seçilen zorluk seviyesine göre rastgele bir Killer Sudoku bulmacası oluşturur
4. Tahta, kafes grupları (cages) ve gerekli toplamlar ile doldurulur

#### Özel Oyun Girişi
1. Kullanıcı "Özel Oyun" butonuna tıklar
2. Özel oyun oluşturma ekranı açılır
3. Kullanıcı kafes gruplarını (renkli bölgeler) ve her grup için gereken toplamı belirler
4. "Oyunu Başlat" butonuna tıklar
5. Oluşturulan özel bulmaca yüklenir

#### Oyun Sırasında
1. Kullanıcı hücrelere tıklayarak değer girer
2. Sistem, girişin Sudoku kurallarına ve kafes toplamlarına uygunluğunu kontrol eder
3. Hatalı giriş yapıldığında görsel geri bildirim verilir
4. "İpucu" butonu ile kullanıcıya yardım sağlanır
5. "Çözüm Kontrol" butonu ile çözümün doğruluğu kontrol edilir

#### İpucu Kullanımı
1. Kullanıcı "İpucu" butonuna tıklar
2. Sistem bir hücre için doğru değeri gösterir
3. Kullanıcının ipucu hakkı azalır (zorluk seviyesine göre maksimum ipucu sayısı değişir)

#### Oyunu Tamamlama
1. Tüm hücreler doğru değerlerle doldurulduğunda
2. Tebrik mesajı gösterilir
3. Tamamlama süresi, kullanılan ipucu sayısı gösterilir
4. "Yeni Oyun" ve "Ana Menü" seçenekleri sunulur

### Teknik Gereksinimler
- Algoritma: Killer Sudoku çözümü ve oluşturulması için
- Veri Yapısı: 9x9 matris, kafes grupları için veri yapısı
- UI Bileşenleri: Tahta, sayı girişi tuş takımı, ipucu butonu, doğrulama
- State Yönetimi: Oyun durumu, skorlar, zamanlayıcı
- Mobil Uyumluluk: Dokunmatik girişler ve responsive tasarım

## 2. Crypto Analyzer Tool

### Açıklama
Kripto para birimlerini analiz etmek, fiyat hareketlerini izlemek ve temel analiz verileri sunmak için tasarlanmış bir araçtır.

### Kullanıcı Akışı

#### İlk Giriş
1. Kullanıcı `/tools/crypto-analyzer` sayfasına girer
2. Dashboard görünümünde popüler kripto paraların genel bakışını görür
3. Ana menüde "Coin Listesi", "Grafik Analizi", "Portföy Simülasyonu" seçenekleri sunulur

#### Coin Listesi Görüntüleme
1. Kullanıcı "Coin Listesi" sekmesine tıklar
2. Popüler kripto paraların listesi görüntülenir (isim, fiyat, 24s değişim, market cap)
3. Liste filtreleme ve sıralama seçenekleri sunulur
4. Kullanıcı bir coini seçebilir ve detaylı analize gidebilir

#### Grafik Analizi
1. Kullanıcı bir coin seçer veya "Grafik Analizi" sekmesinden coin seçimi yapar
2. Seçilen coin için interaktif fiyat grafiği görüntülenir
3. Zaman aralığı seçenekleri: 1G, 1H, 1A, YTD, Tüm Zamanlar
4. Teknik analiz göstergeleri ekleme seçeneği (MA, RSI, MACD, vb.)
5. Grafik üzerinde çizim araçları (trend çizgileri, destek/direnç vb.)

#### Portföy Simülasyonu
1. Kullanıcı "Portföy Simülasyonu" sekmesine tıklar
2. Sanal bir portföy oluşturma arayüzü görür
3. Coinleri ve miktarlarını ekleyebilir
4. Geçmiş performansı simüle edebilir ("Eğer X tarihinde Y miktarında Z coini alsaydım")
5. Portföy dağılımını ve performansını grafiksel olarak görüntüler

#### Fiyat Alarmı Oluşturma
1. Kullanıcı bir coin detay sayfasında "Alarm Ekle" butonuna tıklar
2. Bir hedef fiyat ve yön (üzeri/altı) belirler
3. "Alarm Oluştur" butonuna tıklar
4. Tarayıcı bildirimlerine izin verilirse, fiyat hedefe ulaştığında bildirim alır

### Teknik Gereksinimler
- API Entegrasyonu: CoinGecko veya benzer kripto API servisleri
- Veri Görselleştirme: D3.js veya Chart.js ile interaktif grafikler
- Veri Depolama: Kullanıcı tercihleri ve alarmlar için yerel depolama
- Gerçek Zamanlı Güncelleme: WebSocket veya polling ile güncel verilerin alınması
- Hesaplama Araçları: ROI hesaplayıcı, ortalama maliyet hesaplayıcı
- Mobil Uyumluluk: Dokunmatik cihazlarda grafik etkileşimleri

## 3. Ortak Gereksinimler

### UI/UX
- Tutarlı tasarım dili ve bileşenler
- Koyu/açık tema desteği
- Duyarlı tasarım (mobil, tablet, masaüstü)
- Engelli kullanıcılar için erişilebilirlik
- Kullanıcı dostu hata mesajları

### Performans
- Lazy loading ve code splitting
- Görsel ve veri önbelleğe alma
- API isteklerinin optimizasyonu
- İlk yükleme zamanı optimizasyonu

### Güvenlik
- Kullanıcı verilerinin yerel depolamada güvenliği
- API anahtarlarının korunması
- Input validasyonu

### SEO ve Analitik
- Her aracın amacını açıkça belirten meta açıklamaları
- İlgili anahtar kelimeler için optimizasyon
- Kullanıcı davranışlarını izlemek için olay takibi
- Dönüşüm hunisi analizi (aracı açma -> kullanma -> tamamlama) 