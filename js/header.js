function header(){
    return "<div class=\"container\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"pull-left col-md-4 header-left\">\n" +
        "                    <p class=\"fas fa-map-marker-alt pull-left\"></p>\n" +
        "                    <p class=\"pull-right\">\n" +
        "                        158A Le Loi St., Ward Hai Chau 1, Dist.Hai Chau, DNC\n" +
        "                    </p>\n" +
        "                </div>\n" +
        "                <div class=\"pull-right col-md-8 header-right\">\n" +
        "                    <p class=\"col-md-6 pull-left\">\n" +
        "                        Call Us: 1800 0091 | 028 3833 9999\n" +
        "                    </p>\n" + 
        "                    <div class=\" col-md-2 pull-right\">\n"+
        "                        <a href=\"login.html\"><button type=\"button\" class=\"btn btn-outline-secondary\">Login</button></a>\n"+
        "                    </div>"+ 
        "                    <div class=\"col-md-4 pull-right\">\n" +
        "                        <input class=\"form-control\" type=\"search\" name=\"search\" placeholder=\"Search\"/>\n" +
        "                    </div>\n" +
        "\n" +
        "                </div>\n" +
        "            </div>\n" +
        "\n" +
        "        </div>"
}
var hd = document.getElementById("header");
hd.innerHTML = header();
