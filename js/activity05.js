function markWords(word, element = document.body) {
  if (element.children.length > 0) {
    // If this element has children, run this function on all of them.
    for (child of element.children) {
      markWords(word, child)
    }
  } else {
    // Add a mark tag to all matching words.
    element.innerHTML = element.innerHTML.replace(new RegExp(word, 'g'), `<mark>${word}</mark>`)
  }
}
