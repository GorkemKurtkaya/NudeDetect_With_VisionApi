# Nudedetect Project

## Proje Amacı

Bu projenin amacı, mevcut bir fotoğrafı Vision API kullanarak analiz etmektir. Analiz edilen başlıklar şunlardır:
- Adult
- Spoof
- Medical
- Violence
- Racy

Bu başlıklar üzerinden fotoğrafın ne kadar müstehcenlik içerdiği anlaşılmaya çalışılmaktadır.

## Gereksinimler

- Node.js
- Google Cloud Vision API Credentials

## Kurulum

1. Projeyi klonlayın:

    ```sh
    git clone https://github.com/kullanıcı_adı/nudedetect.git
    cd nudedetect
    ```

2. Gerekli paketleri yükleyin:

    ```sh
    npm install
    ```

3. Google Cloud Vision API için credentials key alın ve proje dizinine ekleyin. Örneğin, `credentials.json` olarak kaydedin.

4. Credentials key dosyasının yolunu belirtin:

    ```sh
    export GOOGLE_APPLICATION_CREDENTIALS="path/to/credentials.json"
    ```

## Kullanım

### URL ile Fotoğraf Analizi

`NudedetectWith_Url.js` dosyası, bir URL üzerinden fotoğrafın analizini yapmak için kullanılır.

1. Dosyayı çalıştırın:

    ```sh
    node NudedetectWith_Url.js
    ```

2. İlgili fotoğraf URL'sini girin ve analiz sonuçlarını alın.

### Dataset ile Fotoğraf Analizi

`NudedetectWith_Dataset.js` dosyası, dosyalanmış olan birden çok fotoğrafın analizini yapmak için kullanılır.

1. Analiz edilecek fotoğrafları bir dizine yerleştirin.
2. Dosyayı çalıştırın:

    ```sh
    node NudedetectWith_Dataset.js
    ```

3. Dizin yolunu belirtin ve analiz sonuçlarını alın.

