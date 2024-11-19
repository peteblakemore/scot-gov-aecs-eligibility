function StepByStep() {
  // Get all the step buttons
  const stepButtons = document.querySelectorAll('.step-nav__button');
  const showAllButton = document.querySelector('.step-nav-button');

  // Add click handlers to step buttons
  stepButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          const isExpanded = this.getAttribute('aria-expanded') === 'true';
          
          // Toggle the button state
          this.setAttribute('aria-expanded', !isExpanded);
          
          // Toggle the content visibility
          const content = this.nextElementSibling;
          content.setAttribute('aria-hidden', isExpanded);
          
          // Update button text
          this.textContent = isExpanded ? 'Show' : 'Hide';
      });
  });

  // Add click handler to show all button
  if (showAllButton) {
      showAllButton.addEventListener('click', function(e) {
          e.preventDefault();
          const isShowingAll = this.getAttribute('aria-expanded') === 'true';
          
          // Toggle the show all button
          this.setAttribute('aria-expanded', !isShowingAll);
          this.textContent = isShowingAll ? 'Show all steps' : 'Hide all steps';
          
          // Toggle all steps
          stepButtons.forEach(button => {
              button.setAttribute('aria-expanded', !isShowingAll);
              button.textContent = isShowingAll ? 'Show' : 'Hide';
              const content = button.nextElementSibling;
              content.setAttribute('aria-hidden', isShowingAll);
          });
      });
  }
}

// Initialize when the DOM is ready
document.addEventListener('DOMContentLoaded', StepByStep);