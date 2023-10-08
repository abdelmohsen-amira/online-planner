//This function uses the download attribute of the element a in order to download the input of the textarea element as a txt file. The target property of the event interface refers to the objeect onto which the event was dispatched. The last function is called at the event of the file loading. It gets the text content of the loaded file and inputs it as if the user wrote it in the text area. I used UTF-8 because it covers a wide variety of Unicode characters and allows the client to write freely.
function saveTextAsFile(){
    var savedNotes = document.getElementById("inputSavedNotes").value;
    var savedNotesAsBlob = new Blob([savedNotes], {type:"text/plain"});
    var savedNotesAsURL = window.URL.createObjectURL(savedNotesAsBlob);
    var savedName = document.getElementById("inputSavedName").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = savedName;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = savedNotesAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event){
    document.body.removeChild(event.target);
}
 
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("inputSavedNotes").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}