//    if ((i == "-") || (i == "0") || (i == "UNDEF") || (i == null) || (i == "")) return "OFFLINE";
(function(i) {
    if ((i == "-") || (i == "UNDEF") || (i == null) || (i == "")) return "OFFLINE";
    return i+" ms";
    //return "ONLINE "+i+" ms";
})(input)