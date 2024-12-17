//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

// Add event listeners for research toggle buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.ds_research-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            const findings = this.nextElementSibling;
            
            this.setAttribute('aria-expanded', !expanded);
            findings.hidden = expanded;
            
            const buttonText = this.querySelector('.ds_research-toggle__text');
            buttonText.textContent = expanded ? 'Show problem addressed' : 'Hide problem addressed';
        });
    });
});