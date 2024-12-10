const url = "https://restcountries.com/v3.1/all";

const element = document.getElementById("container")
async function fetchData() {
    try{
        
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for (let i = 0;i <data.length; i++){
            const value = data[i];
            const html =`<div class = 'card'>
            <img src=${value?.flags?.png} />
                <h3>
                    ${value?.name?.common}
                </h3>
                  <h3>region:
                    ${value?.region}
                </h3>
                <h3>population:
                ${value?.population}
                </h3>
                <h3>capital:
                ${value?.capital}
                </h3>
            </div>
            `;
            element.innerHTML += html;

        }
        


        
    }catch(error){
        console.log("-----------error------------:", error.message);

    }
}