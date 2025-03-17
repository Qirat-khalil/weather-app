
let userweather = +prompt("Enter your city weather in Number")

if (userweather <= 10 ) {
    document.write("<div  style='height:500px; width:500px; margin: auto;'>" +
        "<img src='/images/cold.webp';  style='height:500px; width:500px;' >"+
        "</div>");

}else if (userweather <= 20 ) {
    document.write("<div  style='height:500px; width:500px; margin: auto;'>" +
        "<img src='/images/cold 1.webp';  style='height:500px; width:500px;' >"+
        "</div>");

}else if (userweather <= 30 ) {
    document.write("<div  style='height:500px; width:500px; margin: auto;'>" +
        "<img src='/images/normal.webp';  style='height:500px; width:500px;' >"+
        "</div>");

}else if (userweather <= 40) {
    document.write("<div  style='height:500px; width:500px;margin: auto; '>" +
        "<img src='/images/hot1.webp';  style='height:500px; width:500px;' >"+
        "</div>");
}else if (userweather <= 47 ) {
    document.write("<div  style='height:500px; width:500px; margin: auto;'>" +
        "<img src='/images/hot 2.webp';  style='height:500px; width:500px;' >"+
        "</div>");

}else { document.write("<div  style='height:500px; width:500px; margin: auto;'>" +
    "<img src='/images/last1.webp';  style='height:500px; width:500px;' >"+
    "</div>");

}

