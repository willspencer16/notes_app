
// preview DOM interactivity

// function addPreviewText(noteText) { document.createTextNode(noteText) }

function mountPreviews(listInstance) {

  var previewsContainer = document.getElementById('previews');

  listInstance.getPreviews().forEach(function (preview) {
    var newHeading = document.createElement('a')
    var previewText = document.createTextNode(preview);
    var gap = document.createElement('br');

    newHeading.appendChild(previewText);

    previewsContainer.appendChild(newHeading);
    previewsContainer.appendChild(gap);
  });
}
