console.log("app.js");

async function displayData() {
    try {
        const response = await fetch("/data/json/blogdata/myblogs.json");
        const data = await response.json();
        const dataContainer = document.getElementById('showmy-bata');

        // Loop through the data and display it
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
          <div class="cscard">

      <img class="imgio" src="${item.imgurl}" />

      <h1>${item.title}</h1>
      <hr>
      <p>
      ${item.paragraph}
      </p>
      <a class="btn" href="${item.btnurl}" target="_blnk">Know more</a><br><br>
    </div>  
            `;
            dataContainer.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Error fetching or displaying data:', error);
    }
}

// Call the displayData function to load and display JSON data
displayData();
//
//
