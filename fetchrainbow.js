/* ===================
1.Call fetch(_____) aici vine path-ul
2.Response(promise): poate fi text, blob(img), json
3.Complete data stream(grab the data that is in the response body)
4.Make an <img> element 
5.Trebe sa gasim o metoda ca sa handling errors, si sa implementam async/await in loc de .then
*/
console.log('About to fetch a rainbow')

catchRainbow()
    .then(response => {
        console.log('Yay')
    })
    .catch(error => {
        console.log('My error sorry')
        console.log(error)
    })
    
async function catchRainbow() {
    const response = await fetch('rainbow.jpg')// response practic e ce ne da fetch-ul
    const blob = await response.blob()
    document.getElementById('rainbow').src =URL.createObjectURL(blob)
}



    










