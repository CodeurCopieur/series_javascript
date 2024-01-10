// Chiffrement des données à stocker dans le cookie
function encryptCookieData(data) {
  const encryptedData = btoa(JSON.stringify(data));
  return encryptedData;
}

// Déchiffrement des données stockées dans le cookie
function decryptCookieData(encryptedData) {
  const decryptedData = JSON.parse(atob(encryptedData));
  return decryptedData;
}

// Fonction pour créer un cookie avec des données chiffrées et une expiration en mois ou en années
function setEncryptedCookie(cookieName, data, expiration, unit) {
  const encryptedData = encryptCookieData(data);

  const expires = new Date();

  switch (unit) {
    case 'years':
      expires.setFullYear(expires.getFullYear() + expiration);
      break;
    case 'months':
      expires.setMonth(expires.getMonth() + expiration);
      break;
    default:
      expires.setDate(expires.getDate() + expiration);
  }

  const cookieString = `${cookieName}=${encodeURIComponent(encryptedData)};expires=${expires.toUTCString()};path=/`;

  document.cookie = cookieString;
}

// Fonction pour récupérer et décrypter les données du cookie
function getDecryptedCookie(cookieName) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === cookieName) {
      return decryptCookieData(decodeURIComponent(value));
    }
  }
  return null;
}

// Utilisation
const userData = { userId: 123, username: 'john_doe' };

// Définir un cookie qui expire dans 1 an
setEncryptedCookie('myEncryptedCookie', userData, 1, 'years');

// Récupérer les données du cookie
const decryptedData = getDecryptedCookie('myEncryptedCookie');
console.log('Decrypted Cookie Data:', decryptedData);
