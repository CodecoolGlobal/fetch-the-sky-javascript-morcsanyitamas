const APOD_URL = "https://api.nasa.gov/planetary/apod?api_key=q5CY83py5gbzhu1pMa82D3zvNQOy6cwlEwXBzHMH"

// I, II
// async function fetchApod(url){
//     const response = await fetch(url);
//     if(response.ok){
//        return await response.json();
//     } else {
//         throw new Error("error message");
//     }
// }

// III.
function fetchApod(url){
    return fetch(url).then((response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error("error message");
        }
    })
}

async function main(){
    // I.
    // try {
    //     const data = await fetchApod(APOD_URL);
    //     console.log(data);
    // } catch (error) {
    //     console.log(error);   
    // }

    // II.
    // fetchApod(APOD_URL)
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })

    // III.
    fetchApod(APOD_URL).then(data => console.log(data)).catch(error => console.log(error));

}

main();