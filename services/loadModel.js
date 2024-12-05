const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/submissionmlgc-jaisy.appspot.com/models/model.json');
}
module.exports = loadModel;