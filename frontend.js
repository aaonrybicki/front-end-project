var returnData;
$($("#submit").on("click", getDataFromApi))
var body = document.body

function getDataFromApi() {
    $.get("http://www.songsterr.com/a/ra/songs.json?pattern=" + $("#search").val(), (data) => {
        returnData = data;
        for (var i = 0; i < returnData.length; i++) {
            console.log(returnData)
            var song = returnData[i];
            var artist = song.artist.name;
            var cPresent = song.chordsPresent;
            var tabsType = song.tabTypes;
            var titles = song.title;
            var typeOff = song.type;
            songDiv = document.createElement('div');
            artistHeader = document.createElement('h1');
            cPresentParagraph = document.createElement('p');
            tabsTypeParagraph = document.createElement('p');
            titlesParagraph = document.createElement('p');
            typeOffParagraph = document.createElement('p');
            artistHeader.innerText = artist;
            cPresentParagraph.innerText = cPresent;
            tabsTypeParagraph.innerText = tabsType;
            titlesParagraph.innerText = titles;
            typeOffParagraph.innerText = typeOff;
            songDiv.append(artistHeader);
            songDiv.append(cPresentParagraph);
            songDiv.append(tabsTypeParagraph);
            songDiv.append(titlesParagraph);
            songDiv.append(typeOffParagraph);
            body.append(songDiv);
        }
    })
}
