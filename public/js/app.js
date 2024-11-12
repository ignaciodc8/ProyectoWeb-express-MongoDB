document.addEventListener("click", (e) => {
    if (e.target.dataset.short) {
      const url = `https://proyectoweb-express-mongodb.onrender.com/`;
  
      navigator.clipboard
        .writeText(url)
        .then(() => {
          console.log("Texto copiado al portapapeles...");
        })
        .catch((err) => {
          console.log("Algo salió mal", err);
        });
    }
  });
  