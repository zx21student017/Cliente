$(principal);

function principal() {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
}

