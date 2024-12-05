const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('../submissionmlgc-jaisy-7134e8bdafb2.json'); // Pastikan path ini benar

async function getAllData() {
  try {
    const db = new Firestore({
      projectId: 'submissionmlgc-jaisy',
      keyFilename: pathKey,
    });

    const snapshot = await db.collection('predictions').get(); // Pastikan nama koleksi benar
    if (snapshot.empty) {
      console.log('No documents found!');
      return [];
    }

    return snapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error getting data:', error);
    return [];
  }
}

module.exports = getAllData;
