let date = new Date();
let year = date.getFullYear();
let element = document.getElementById("copyright")

const getYear = () => {
  return element.innerHTML = `Copyright C.Justice ${year}`;
}

console.log(getYear())