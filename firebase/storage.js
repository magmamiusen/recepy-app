import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "./firebaseConfig";



function storageFb () {
    const storage = getStorage();
    getDownloadURL(ref(storage, 'images/fanatic.jpg'))
    .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
});
}

export default storageFb;