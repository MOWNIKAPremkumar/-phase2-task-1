 const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {  

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#dc3545'; // Bright red on hover
        button.classList.add('hover');
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#6a0dad'; // Original dark green color
        button.classList.remove('hover');
    });
    
});
    // Select the element with the class 'resume'
    const resumeBtn = document.querySelector('.resume');
    resumeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Resume button clicked!');
        
    });
    
    const projectsBtn = document.querySelector('.see-projects');
    projectsBtn.addEventListener('click', function(event) {
        event.preventDefault();
        alert('See Projects button clicked!');
        
    });

