document.addEventListener("DOMContentLoaded", function () {
  var btc = document.getElementById("bitcoin");
  var eth = document.getElementById("ethereum");
  var doge = document.getElementById("dogecoin");
  var translateBtn = document.getElementById("translate");

  var coinsSettings = {
    async: true,
    scrollDomain: true,
    url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    method: "GET",
    headers: {},
  };

  $.ajax(coinsSettings).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
  });

  // Traduction
  var translations = {
    en: {
      market: "Market",
      features: "Features",
      whitePapers: "White Papers",
      aboutUs: "About Us",
      buy: "BUY",
      sell: "SELL",
      crypto: "Crypto",
      description:
        "World's biggest Cryptocurrency exchange available on web as well as mobile phone.",
      explore: "EXPLORE MORE",
      bitcoin: "Bitcoin",
      ethereum: "Ethereum",
      dogecoin: "Dogecoin",
      buttonText: "EN | FR",
    },
    fr: {
      market: "Marchés",
      features: "Fonctionnalités",
      whitePapers: "Livres blancs",
      aboutUs: "À propos",
      buy: "ACHETEZ",
      sell: "VENDEZ",
      crypto: "Crypto",
      description:
        "La plus grande plateforme d'échange de cryptomonnaies disponible sur le web, ainsi que sur mobile.",
      explore: "EN SAVOIR PLUS",
      buttonText: "FR | EN",
    },
  };

  function translatePage(language) {
    document.querySelector("nav ul li:nth-child(1) a").textContent =
      translations[language].market;
    document.querySelector("nav ul li:nth-child(2) a").textContent =
      translations[language].features;
    document.querySelector("nav ul li:nth-child(3) a").textContent =
      translations[language].whitePapers;
    document.querySelector("nav ul li:nth-child(4) a").textContent =
      translations[language].aboutUs;
    document.querySelector(
      ".content h1"
    ).innerHTML = `${translations[language].buy}<br>& ${translations[language].sell} <span>${translations[language].crypto}</span>`;
    document.querySelector(".content p").textContent =
      translations[language].description;
    document.querySelector(".content .btn").textContent =
      translations[language].explore;
    translateBtn.textContent = translations[language].buttonText;
    localStorage.setItem("language", language);
  }

  // Définir la langue par défaut à FR si aucune langue enregistrée
  let savedLanguage = localStorage.getItem("language") || "fr";
  translatePage(savedLanguage);

  // Gestion du bouton de traduction
  translateBtn.addEventListener("click", function () {
    let currentLang = localStorage.getItem("language") || "fr";
    let newLang = currentLang === "en" ? "fr" : "en";
    translatePage(newLang);
  });
});
