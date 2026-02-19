function getvaluefrominput(id){
    const idtext = document.getElementById(id);
    const idvalue = idtext.value;
    return idvalue;

}
function gettextfromtag(id){
    const dtext = document.getElementById(id);
    const text = parseInt(dtext.innerText);
    return text;
}