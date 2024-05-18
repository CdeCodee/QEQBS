document.addEventListener("DOMContentLoaded", function() {
    var clickableElements = document.querySelectorAll(
        ".btncomun .btn img, .btnespecial .btn img, .btnsuperespecial .btn img, .btnepico .btn img, .btnmitico .btn img, .btnlegendario .btn img, .btnfemenino, .btnmasculino," +
        ".cardcommon img, .cardspecial img, .cardsuperspecial img, .cardepic img, .cardmythical img, .cardlegendary img, .femenino" +
        ".masculino"
    );
    
    clickableElements.forEach(function(element) {
        element.addEventListener("click", function() {
            var parentDiv = this.closest(
                '.btncomun, .btnespecial, .btnsuperespecial, .btnepico, .btnmitico, .btnlegendario, .btnfemenino, .btnmasculino,' +
                ' .cardcommon, .cardspecial, .cardsuperspecial, .cardepic, .cardmythical, .cardlegendary, .femenino, .masculino'
            );            
            if (parentDiv.classList.contains("clicked")) {
                parentDiv.classList.remove("clicked");
            } else {
                parentDiv.classList.add("clicked");
            }
            if (parentDiv.classList.contains("btncomun")) {
                toggleCards(".cardcommon");
            } else if (parentDiv.classList.contains("btnespecial")) {
                toggleCards(".cardspecial");
            } else if (parentDiv.classList.contains("btnsuperespecial")) {
                toggleCards(".cardsuperspecial");
            } else if (parentDiv.classList.contains("btnepico")) {
                toggleCards(".cardepic");
            } else if (parentDiv.classList.contains("btnmitico")) {
                toggleCards(".cardmythical");
            } else if (parentDiv.classList.contains("btnlegendario")) {
                toggleCards(".cardlegendary");
            } else if (parentDiv.classList.contains("btnfemenino")) {
                toggleCards(".femenino");
            } else if (parentDiv.classList.contains("btnmasculino")) {
                toggleCards(".masculino");
            }
        });
    });
    function toggleCards(cardClass) {
        var cards = document.querySelectorAll(cardClass);
        cards.forEach(function(card) {
            if (card.classList.contains("clicked")) {
                card.classList.remove("clicked");
            } else {
                card.classList.add("clicked");
            }
        });
    }
});
