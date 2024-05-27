const fs = require('fs');
const path = require('path');
const { detectSafeSearch } = require('C:\\Users\\Görkem\\nodejsnnudedetect\\nudedeneme.js'); // detectSafeSearch fonksiyonunun bulunduğu dosyanın yolunu düzeltin

// Fotoğraf dosyalarının bulunduğu dizin
const photoDirectory = 'C:\\Users\\Görkem\\nodejsnnudedetect\\fotodataset';

// Dosya dizinini tarayarak fotoğrafları işle
fs.readdir(photoDirectory, async (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Her fotoğraf için analiz yap
  for (const file of files) {
    const photoPath = path.join(photoDirectory, file);
    console.log(`Analyzing photo: ${photoPath}`);

    try {
      const result = await detectSafeSearch(photoPath);
    
      // Burada istediğiniz başka bir işlemi gerçekleştirebilirsiniz, örneğin sonuçları bir dosyaya yazabilirsiniz.
    } catch (error) {
      console.error(`Error analyzing photo ${photoPath}:`, error);
    }
  }
});