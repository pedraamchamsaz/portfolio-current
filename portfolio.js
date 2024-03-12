document.querySelector('#menu-btn').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    const sidebar = document.querySelector('ul');
    const isOpen = sidebar.style.transform === 'scaleX(1)';
    sidebar.style.transform = isOpen ? 'scaleX(0)' : 'scaleX(1)';
});

document.querySelector('section').addEventListener('click', () => {
    document.querySelector('ul').style.transform = 'scaleX(0)';
});

document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('ul');
    const menuBtn = document.querySelector('#menu-btn');
    if (event.target !== sidebar && event.target !== menuBtn) {
        sidebar.style.transform = 'scaleX(0)';
    }
});

// document.querySelector('#form-btn').addEventListener('click', () => {
//     document.querySelector('input').innerText = ''
// })