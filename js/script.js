const mailtoHTML = document.querySelector("#mail");
const email = "sales@calleia.com.br";
const subject = `I want to buy ${window.location.hostname || "one of your domains"}`;

mailtoHTML.setAttribute("href", `mailto:${email}?subject=${subject}`);
mailtoHTML.innerHTML = email;