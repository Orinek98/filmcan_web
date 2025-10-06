
export default function canLogo() {
    // === 1. Creazione dell'elemento SVG (il logo stesso) ===

    const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Imposta gli attributi SVG
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('xmlSpace', 'preserve');
    svgElement.setAttribute('id', 'svg5');
    svgElement.setAttribute('class', 'logo');
    svgElement.setAttribute('width', '157.056'); // Nota: in un contesto reale, si preferisce usare CSS per la larghezza/altezza
    svgElement.setAttribute('version', '1.1');
    svgElement.setAttribute('viewBox', '0 0 41.554 29.661');

    // === 2. Creazione del gruppo <g> ===

    const gElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
    
    // Imposta gli attributi di <g>
    gElement.setAttribute('id', 'layer1');
    gElement.setAttribute('fill', '#fff');
    gElement.setAttribute('fill-rule', 'evenodd');
    gElement.setAttribute('transform', 'translate(-6947.804 -4794.392)');
    
    // === 3. Creazione del percorso <path> (il primo) ===

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    // Imposta gli attributi di path1 (dati SVG estesi)
    path1.setAttribute('id', 'path5658');
    path1.setAttribute('fill-opacity', '1');
    path1.setAttribute('stroke', 'none');
    path1.setAttribute('stroke-dasharray', 'none');
    path1.setAttribute('stroke-linecap', 'round');
    path1.setAttribute('stroke-linejoin', 'round');
    path1.setAttribute('stroke-miterlimit', '4');
    path1.setAttribute('stroke-opacity', '1');
    path1.setAttribute('stroke-width', '0.278');
    path1.setAttribute('d', 'M6971.444 4794.392c-.57 0-1.076.045-1.458.137l-4.152.874c-.06.011-.117.014-.172.022h-.282a6.3 6.3 0 0 0-1.772.28 5.2 5.2 0 0 0-2.108 1.25c-1.04 1.033-1.51 2.435-1.646 3.777-.11 1.08-.019 2.228.42 3.284-1.767.313-4.763.958-5.95 1.286-1.851.51-3.38 1.118-4.518 1.86-1.14.745-2.002 1.724-2.002 2.954 0 .037.011.072.011.108-.01.044-.01.087-.01.132v7.36c0 .064.01.126.018.186.127 1.091.937 1.974 1.983 2.656 1.137.743 2.667 1.35 4.518 1.86 3.704 1.023 8.716 1.635 14.253 1.635s10.549-.612 14.253-1.634c1.852-.511 3.38-1.118 4.519-1.86 1.087-.711 1.92-1.638 1.994-2.79a1 1 0 0 0 .016-.167v-7.247c0-.056-.011-.11-.015-.163 0-.025.01-.05.01-.076 0-1.23-.862-2.21-2.001-2.953s-2.667-1.35-4.519-1.861c-2.657-.734-5.988-1.255-9.703-1.492l-.772-.027c-.011-.069-.011-.135-.014-.204-.07-.977-.158-1.995-.415-3.014-.258-1.023-.69-2.05-1.414-2.913a6 6 0 0 0-.749-.742l5.429.105c.61-.011 1.129-.077 1.493-.197.365-.118.574-.287.6-.484.025-.198-.132-.424-.452-.649a3.5 3.5 0 0 0-.425-.25 7 7 0 0 0-.96-.393 13.7 13.7 0 0 0-2.921-.596 12 12 0 0 0-1.084-.054zm.79.471c1.121-.01 2.123.22 3.015.687 1.057.552 1.005.882-.376.988s-2.177-.159-3.235-.711-1.42-.832-.039-.938q.324-.024.635-.026zm-6.722 2.155c.152 0 .304 0 .457.01 1.316.09 2.087.73 2.9 1.7.521.621.874 1.421 1.09 2.277.216.859.303 1.78.37 2.736s.115 1.954.286 2.97c.226 1.82.945 3.214 1.955 4.316 1.58 1.56 3.157 2.514 5.17 2.999-1.998.506-7.236.676-9.163.56-5.39 0-10.273-.61-13.728-1.564-1.728-.476-3.102-1.048-3.963-1.61-.864-.564-1.106-1.042-1.106-1.298s.242-.736 1.106-1.3c.861-.561 2.235-1.133 3.963-1.61 1.137-.314 5.43-1.117 7.026-1.376.698-.13 1.202-.216.808-.841a42 42 0 0 1-.698-1.289c-.421-.812-.542-1.813-.441-2.806.11-1.083.493-2.124 1.183-2.808a3.6 3.6 0 0 1 1.463-.862 4.7 4.7 0 0 1 1.322-.206zm7.004 8.709c3.755.129 5.882.406 9.79 1.48 1.727.476 3.101 1.048 3.963 1.61s1.105 1.042 1.105 1.299-.242.734-1.105 1.298c-.862.562-2.438 1.277-3.963 1.61-3.79.473-7.26-1.574-8.863-4.171-.427-.717-.682-1.566-.833-2.458q-.056-.33-.095-.668zm14.978 7.24v4.453c-.032.305-.162.544-.358.773-.23.27-.556.503-.87.713-.862.561-2.234 1.133-3.96 1.61-2.99.825-7.05 1.392-11.58 1.53a69 69 0 0 1-2.149.031c-5.39 0-10.272-.608-13.728-1.562-1.727-.477-3.101-1.05-3.963-1.611-.512-.335-.818-.622-.995-.926a1.7 1.7 0 0 1-.221-.768v-4.237l.136.096c1.138.742 2.667 1.35 4.518 1.861 3.705 1.023 8.716 1.635 14.253 1.635s10.55-.612 14.254-1.635c1.851-.51 3.38-1.119 4.518-1.861q.073-.05.145-.102z');
    path1.setAttribute('color', '#000');
    path1.setAttribute('paintOrder', 'normal');

    // === 4. Creazione del secondo percorso <path> ===

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    // Imposta gli attributi di path2
    path2.setAttribute('id', 'path5660');
    path2.setAttribute('fill-opacity', '1');
    path2.setAttribute('stroke', 'none');
    path2.setAttribute('stroke-dasharray', 'none');
    path2.setAttribute('stroke-linecap', 'round');
    path2.setAttribute('stroke-linejoin', 'round');
    path2.setAttribute('stroke-miterlimit', '4');
    path2.setAttribute('stroke-opacity', '1');
    path2.setAttribute('stroke-width', '0.429');
    path2.setAttribute('d', 'M6963.064 4807.18a49 49 0 0 0-5.358.648c-1.11.2-2.06.43-2.822.68-.525.22-.515.672.058.732l5.16.215c.526 0 .978-.039 1.761-.249q.5-.156 1.204-.283c.422-.076 1.082-.141 1.722-.195.617-.046.721-.338.451-.533l-.992-.746c-.377-.304-.753-.298-1.185-.268zm-9.196 3.794c.638.505 1.942.974 3.819 1.36q.405.082.84.157c.479.086.96.074 1.542-.109l2.67-.836c.3-.07.348-.276.113-.367-.473-.124-.833-.263-1.083-.409-.513-.343-.633-.31-1.122-.327l-6.442-.228c-.555 0-.732.461-.337.76m10.983.986-2.466.703c-.312.1-.23.34-.026.372 3.367.25 7.194.275 10.644.071.24-.011.294-.187.052-.316-.538-.235-.878-.452-1.456-.737-.384-.194-.694-.205-1.06-.195-1.35.034-3.226.023-4.545-.034-.457-.031-.738.02-1.143.136z');

    // === 5. Creazione del terzo percorso <path> ===

    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    
    // Imposta gli attributi di path3
    path3.setAttribute('id', 'path5662');
    path3.setAttribute('stroke-width', '0.279');
    path3.setAttribute('d', 'M6969.396 4797.567c2.008.104 6.025 0 6.025 0 1.062-.01 1.933-.5 1.877-1.292l-1.631.304-2.213.123-3.75-.062');

    // === 6. Assemblaggio degli elementi SVG (g > pathX, svg > g) ===
    
    gElement.appendChild(path1);
    gElement.appendChild(path2);
    gElement.appendChild(path3);
    svgElement.appendChild(gElement);

    // === 7. Creazione dell'elemento <a> (il link) ===
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '/');
    linkElement.appendChild(svgElement); // Inserisci l'SVG dentro il link

    // === 8. Creazione dell'elemento <div> (il container) ===
    
    const containerDiv = document.createElement('div');
    containerDiv.className = 'logo__container';
    containerDiv.appendChild(linkElement); // Inserisci il link dentro il div

    // 9. Restituisci l'elemento container finale
    return containerDiv;
};

// Esempio di utilizzo:
// document.body.appendChild(createLogoElement());