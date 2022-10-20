var returnData;
$($("#submit").on("click", filterThroughResults))
var body = document.body
var mainDiv = document.createElement('div');
body.append(mainDiv);
function filterThroughResults() {
var searchInput = document.getElementById('search').value;
      for (var i = 0; i < returnData.length; i++) {
            var results = returnData[i];
            var name  = results.name;
            if (searchInput.toLowerCase() == name.toLowerCase()) {
            var house = results.house;
            var ancestery = results.ancestry;
            var dob = results.dateOfBirth;
            var eyeC = results.eyeColour;
            var imageC = results.image

            potterDiv = document.createElement('div');
            nameHeader = document.createElement('h1');
            housePara = document.createElement('h5');
            ancestryPara = document.createElement('h5');
            dobPara = document.createElement('h5');
            eyeColorPara = document.createElement('h5');
            var oImg = document.createElement("img");
            oImg.setAttribute('src', imageC);
            nameHeader.innerText = name;
            housePara.innerText = house;
            ancestryPara.innerText = ancestery;
            dobPara.innerText = dob;
            eyeColorPara.innerText = eyeC;
            potterDiv.classList.add('textColors')
            potterDiv.append(nameHeader);
            potterDiv.append(housePara);
            potterDiv.append(ancestryPara);
            potterDiv.append(dobPara);
            potterDiv.append(eyeColorPara);
            potterDiv.append(oImg);
            mainDiv.innerHTML = '';
            mainDiv.append(potterDiv);
        }
        }
    
        

}
function initialLoadApi() {
    $.get("https://hp-api.herokuapp.com/api/characters/",(data) => {
        returnData = data;
    })
}


initialLoadApi()