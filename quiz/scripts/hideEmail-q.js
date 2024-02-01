/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';

    for (const email of emails) {
        if (isValid(email)) {
            const listItem = document.createElement('li');
            const [localPart, domain] = email.split('@');
            const anonymizedLocalPart = localPart.replace(/./g, '*');
            listItem.textContent = anonymizedLocalPart + '@' + domain;
            list.appendChild(listItem);
        }
    }
}

function isValid(email) {
    return /^[a-zA-Z0-9_]+@(.+\.)*northeastern.edu$/.test(email);
}