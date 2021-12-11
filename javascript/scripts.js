const getYear = () => {
  let date = new Date();
  let year = date.getFullYear();
  let element = document.getElementById("copyright");
  return element.innerHTML = `Copyright C.Justice ${year}`;
};
