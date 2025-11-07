// Data for the icon buttons
const iconButtonData = [
    { icon: "📄", text: "Internship Certificate", url: "https://docs.google.com/document/d/13TMN_M-iIPfWu-T3FpjBEbeC5PheAB55/edit" },
    { icon: "📰", text: "Resume", url: "https://www.canva.com/design/DAF1o_o8NCI/9CBIraVKUUcArob9KeAvBg/edit" },
    { icon: "🔗", text: "LinkedIn", url: "https://www.linkedin.com/in/abhishek-tirpude-27ab792b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: "💻", text: "Github", url: "https://github.com/AbhishekTirpudee" },
    { icon: "🏆", text: "Achieved Certificates", url: "https://drive.google.com/drive/folders/1CCVFNseu_4IOm2eaiUxPVHiNJuwlCh0g" },
    { icon: "📧", text: "Email", url: "tirpudeabhishek212@gmail.com" } // Placeholder email, user should replace this
];

function injectContent() {
    // 1. Inject Photograph
    const photoContainer = document.createElement('div');
    photoContainer.id = 'injected-photo-container';
    const photo = document.createElement('img');
    photo.src = 'abhi_photo.jpg';
    photo.alt = 'Abhishek Tirpude Profile Photo';
    photo.id = 'injected-profile-photo';
    photoContainer.appendChild(photo);
    
    // 2. Inject Icon Buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.id = 'injected-buttons-container';

    iconButtonData.forEach(data => {
        const a = document.createElement('a');
        a.href = data.url;
        a.title = data.text;
        a.target = "_blank"; // Open in new tab
        a.rel = "noopener noreferrer";
        a.className = "injected-icon-button";
        a.innerHTML = `<span class="icon">${data.icon}</span><span class="text">${data.text}</span>`;
        buttonsContainer.appendChild(a);
    });

    // Find the main root element to inject content before it.
    // Assuming the main content is in a div with id="root" or similar.
    const root = document.getElementById('root') || document.body.firstChild;
    
    if (root && root.tagName !== 'BODY') {
        // Inject before the main app content
        document.body.insertBefore(photoContainer, root);
        document.body.insertBefore(buttonsContainer, root);
    } else {
        // Fallback to appending to body if no clear root is found
        document.body.prepend(buttonsContainer);
        document.body.prepend(photoContainer);
    }
}

// Run the injection after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    injectContent();
});

// The DOMContentLoaded listener is sufficient for injection.
