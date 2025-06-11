// يمكنك دمج هذا الكود في gemoo-script.js إذا أردت
const gemooQR = new QRCode(document.getElementById("gemoo-qrcode"), {
    text: "https://gemo02011.github.io/my-portfolio",
    width: 140,
    height: 140,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});
