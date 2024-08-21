document.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("cookies_accepted")) {
        document.getElementById("cookie-banner").style.display = "block";
    }

    document.getElementById("accept-cookies").addEventListener("click", function () {
        setCookie("cookies_accepted", "true", 365);
        document.getElementById("cookie-banner").style.display = "none";
        // Aquí puedes activar las cookies no esenciales, como Google Analytics
        enableNonEssentialCookies();
    });

    document.getElementById("reject-cookies").addEventListener("click", function () {
        document.getElementById("cookie-banner").style.display = "none";
        // Aquí puedes desactivar cualquier cookie no esencial que ya se haya establecido
        disableNonEssentialCookies();
    });
});

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function enableNonEssentialCookies() {
    // Activa Google Analytics
    gtag('config', 'G-5ZVYQYJFTJ'); // ID de Google Analytics
}

function disableNonEssentialCookies() {
    // Opcional: Borra cookies no esenciales si es posible
    // Esto puede ser complicado con algunas cookies de terceros, pero se puede hacer con tus propias cookies.
}