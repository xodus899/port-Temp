const getYear = () => {
  return document.getElementById("footer").innerHTML = ` Copyright C.Justice ${new Date().getFullYear()}`
}

getYear()
