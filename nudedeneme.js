
// Buraya Google Cloud Vision API için Credential dosyanızın yolunu yazın
// process.env.GOOGLE_APPLICATION_CREDENTIALS = "C:\\......\\secret-reactor-415208-49c4b6a1b8d8.json";
const vision = require('@google-cloud/vision');
const readline = require('readline');
const chalk = require('chalk');;

const client = new vision.ImageAnnotatorClient();

const likelihoodMapping = {
  'UNKNOWN': chalk.gray('+'),
  'VERY_UNLIKELY': chalk.green('+'),
  'UNLIKELY': chalk.yellow('++'),
  'POSSIBLE': chalk.blue('+++'),
  'LIKELY': chalk.magenta('++++'),
  'VERY_LIKELY': chalk.red('+++++'),
};

async function detectSafeSearch(uri) {
  try {
    const [result] = await client.safeSearchDetection(uri);
    
    // Sonuç kontrolü
    if (!result || !result.safeSearchAnnotation) {
      throw new Error('Safe search annotation not found');
    }
    
    const detections = result.safeSearchAnnotation;
    console.log(`*****Görsel Analizi*****`);
    console.log(`Adult: ${likelihoodMapping[detections.adult]}`);
    console.log(`Spoof: ${likelihoodMapping[detections.spoof]}`);
    console.log(`Medical: ${likelihoodMapping[detections.medical]}`);
    console.log(`Violence: ${likelihoodMapping[detections.violence]}`);
    console.log(`Racy: ${likelihoodMapping[detections.racy]}`);
    
    // Belirli koşullara göre metinler yazdırmak için if-else yapısı
    if (detections.racy === 'VERY_LIKELY') {
      console.log("Uygunsuz içerik tespit edildi!");
    }
    else if(detections.racy === 'LIKELY'){
      console.log("Şüpheli İçerik Tespit Edildi")
    }
    else {
      console.log("Görsel uygun içerik içeriyor.");
    }
    return detections; // SafeSearchAnnotation nesnesini döndür
  } catch (err) {
    console.error('Error detecting safe search:', err);
    throw err;
  }
}


// Kullanıcıdan URL girdisini almak için bu kısmı kullanabilirsiniz
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(': ', (url) => {
  // Burada kullanıcının girdiği URL ile ilgili işlemleri yapabiliriz
  console.log(`Girilen URL: ${url}`);
  // Analiz işlemini yapmak için fonksiyonu çağırabiliriz
  detectSafeSearch(url);
  // Kullanıcıdan girdiyi almayı bitir
  rl.close();
});
*/

module.exports = { detectSafeSearch };
