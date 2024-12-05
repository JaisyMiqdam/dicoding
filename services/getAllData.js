const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

// Path ke file kredensial Anda
const pathKey = path.resolve('./submissionmlgc-jaisy-7134e8bdafb2.json');

async function getAllData() {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-jaisy',
      keyFilename: pathKey,
    });

    const snapshot = await db.collection('predictions').get();  // Mengambil semua dokumen dari koleksi 'predictions'
    const allData = snapshot.docs.map(doc => doc);  // Mengubah snapshot menjadi array dokumen
    return allData;
  } catch (error) {
    console.error('Error getting data:', error);
    return [];
  }
}

module.exports = getAllData;
