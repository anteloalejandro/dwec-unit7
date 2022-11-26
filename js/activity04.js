function searchWord(word, element = document.body, id = 'found-word') {
  let found = false
  /**
   * This recursive function (sw) has access to the local variable 'found',
   * because of course it does, it makes total sense, obviously.
   * It uses it to stop searching for the word once it finds it.
   * This is done like that to stop people from changing its value from
   * 'searchWord', as the code depends on it being on 'false', so there
   * shouldn't be an option to change it to true.
   * */
  function sw(e) {
    if (found) return

    if (e.children.length > 0) {
      // If this element has children, run this function on all of them.
      for (child of e.children) {
        sw(child)
      }
    } else {
      // Try to add a mark tag to the word. If the content changes it worked.
      old_text = e.innerHTML
      e.innerHTML = e.innerHTML.replace(word, `<mark id="${id}">${word}</mark>`)
      found = old_text != e.innerHTML
    }
  }
  sw(word, element)
  return document.getElementById(id)
}
