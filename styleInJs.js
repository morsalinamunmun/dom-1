const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '8px';
    section.style.backgroundColor = 'lightgray';
}

const placer = document.getElementById('important-places');
placer.style.backgroundColor = 'tomato';

const domSection = document.getElementById('dom');
domSection.classList.add('text-center');
domSection.classList.remove('large-text')
domSection.style.textAlign = 'right';
