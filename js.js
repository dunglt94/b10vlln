let sout, i, j;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// for (let i = 1; i <= 10; i++) {
//     sout += "<tr>";
//     for (let j = 1; j <= 10; j++) {
//         sout += "<td width='30' style='text-align: center'>" + i * j + "</td>";
//     }
//     sout += "</tr>";
// }
// sout += "</table>";
// document.write(sout);
i = j = 1;
while ( i<= 10) {
    sout += "<tr>";
    while (j <= 10) {
        sout += "<td width='30' style='text-align: center'>" + i * j + "</td>";
        j++;
    }
    sout += "</tr>";
    j = 1;
    i++;
}
sout += "</table>";
document.write(sout);