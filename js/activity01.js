function insertLi(text, list, position) {

  // Create a new 'li' element, put text on it, and make it bold.
  const new_li = document.createElement('li')
  new_li.innerHTML = text
  new_li.style.fontWeight = 'bold'

  if (position < list.children.length && position >= 0) {
    // Insert the new element before the specified position
    const li = list.children[position]
    li.parentNode.insertBefore(new_li, li)
  } else if (position === list.children.length) {
    // If said position is just after the last 'li', insert the new one after it.
    list.appendChild(new_li)
  }

}
