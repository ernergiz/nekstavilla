# Nekstavilla

Nekstavilla, modern ve kullanıcı dostu bir e-ticaret arayüzü demo projesidir. Proje; ürün listeleme, ürün detay sayfaları, favorilere ekleme, sepete ekleme, ödeme akışı, sipariş görüntüleme ve kullanıcı bilgileri gibi temel e-ticaret deneyimlerini frontend tarafında simüle eder.

Bu proje portfolyo amacıyla geliştirilmiştir. Gerçek ödeme, gerçek kullanıcı doğrulama veya backend bağlantısı içermez.

## Özellikler

* Modern ve responsive e-ticaret arayüzü
* Ürün listeleme sayfası
* Ürün detay sayfaları
* Favorilere ürün ekleme ve çıkarma
* Sepete ürün ekleme, adet artırma/azaltma ve ürün silme
* Kullanıcıya özel sepet ve favori sistemi
* LocalStorage ile veri saklama
* Sepet ödeme sayfası
* Sipariş başarılı ekranı
* Siparişlerim sayfası
* Kullanıcı bilgileri sayfası
* Mobil uyumlu tasarım
* Animasyonlu ve modern UI efektleri

## Kullanılan Teknolojiler

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Bootstrap Icons
* LocalStorage

## Demo Kullanıcı Bilgileri

Projeyi test etmek için aşağıdaki demo kullanıcı bilgileri kullanılabilir:

```text
E-posta: admin@nekstavilla.com
Şifre: 123qwe
```

## Proje Yapısı

```text
nekstavilla/
│
├── index.html
├── yeni-gelenler.html
├── favoriler.html
├── sepet.html
├── sepet-odeme.html
├── siparis-basarili.html
├── siparislerim.html
├── hesabim.html
│
├── gozluk-detay.html
├── yelek-detay.html
├── ayakkabi-detay.html
├── eldiven-detay.html
│
├── style.css
├── modern-ui.css
│
├── images/
│   └── proje görselleri
│
└── README.md
```

## Kurulum ve Kullanım

Projeyi bilgisayarınıza indirdikten sonra herhangi bir ek kurulum yapmadan çalıştırabilirsiniz.

1. Bu repoyu klonlayın:

```bash
git clone https://github.com/ernergiz/nekstavilla.git
```

2. Proje klasörüne gidin:

```bash
cd nekstavilla
```

3. `index.html` dosyasını tarayıcıda açın.

Alternatif olarak VS Code üzerinde Live Server eklentisi ile çalıştırabilirsiniz.

## LocalStorage Kullanımı

Bu projede kullanıcı, sepet, favoriler ve sipariş bilgileri tarayıcının LocalStorage alanında saklanmaktadır.

Bu nedenle:

* Veriler sadece kullanılan tarayıcıda tutulur.
* Gerçek bir veritabanı bağlantısı yoktur.
* Tarayıcı verileri temizlendiğinde kayıtlı sepet, favori ve kullanıcı bilgileri de silinir.
* Şifre değiştirme gibi işlemler sadece ilgili tarayıcıdaki demo veriyi etkiler.

## Notlar

Bu proje frontend geliştirme becerilerini göstermek amacıyla hazırlanmış bir demo çalışmadır. Gerçek ödeme altyapısı, gerçek kullanıcı doğrulama sistemi veya güvenli backend işlemleri içermez.

Canlı ticari kullanım için backend, veritabanı, güvenli kullanıcı doğrulama, ödeme altyapısı ve sunucu taraflı doğrulama eklenmesi gerekir.

## Geliştirici

**Nergiz Er**

* GitHub: https://github.com/ernergiz
* LinkedIn: https://www.linkedin.com/in/nergizer/
