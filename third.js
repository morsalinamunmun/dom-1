const container = document.getElementById('container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My dynamic section</h1>
<p>Extra Paragraph</p>
<ul>
<li>First item</li>
<li>second item</li>
<li>third Item</li>
</ul>
`
container.appendChild(section);
