const getYear = () => {
  return document.getElementById("copyright").innerHTML = `Copyright C.Justice ${new Date().getFullYear()}`
}
getYear();


const scroll = () => {
  document.querySelector(".scrollToTop").addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  })
};

scroll();
