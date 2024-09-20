function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createAddColorThemeHtml()}
        <div class="colors">
            ${createColorThemesHtml()}
        </div>
    `;
}

function createAddColorThemeHtml(){
    return '';
    if(!isAdding) return '<button onclick="startAdd()">+</button>';
    return /*HTML*/`
        <input 
            type="text" 
            oninput="addColorName=this.value"
            value="${addColorName ?? ''}"
            />
        <button onclick="addColor()">Legg til ny farge</button>
        <button onclick="cancelAddColor()">Avbryt</button>              
    `;
}

function createColorThemesHtml() {
    let colorsHtml = '';

    // in - gå gjennom alle feltene til et objekt
    // of - gå gjennom elementer i en liste

    for (let i = 0; i < model.colorThemes.length; i++) {
        let colorTheme = model.colorThemes[i];
        colorsHtml += /*HTML*/`
            <div class="color">
                <div class="topBox">
                    <div>
                        Theme ${i+1}
                    </div>
                    <button onclick="deleteColor(${i})">x</button>
                </div>
                <div 
                    style="
                        background-color: ${colorTheme.backgroundColor};
                        color: ${colorTheme.foregroundColor};
                        " 
                    class="box">
                    
                    Tekst
                    <span style="color: ${colorTheme.highlightColor}">
                        Utheving
                    </span>
                    ${colorTheme.rating}
                    ${colorTheme.creator}
                </div>
            </div>                                
        `;
    }
    return colorsHtml;
}