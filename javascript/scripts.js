const getYear = () => {
  return document.getElementById("copyright").innerHTML = `Copyright C.Justice ${new Date().getFullYear()}`
}
getYear();


const scroll = () => {
  document.querySelector(".scroll-to-top").addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  })
};

scroll();
