const getYear = () => {
  return document.getElementById("copyright").innerHTML = `Copyright C.Justice ${new Date().getFullYear()}`
}
getYear();
