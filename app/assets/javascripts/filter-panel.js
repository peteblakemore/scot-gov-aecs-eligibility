function initializeFilterPanel() {
    // First check if user selected "no" for audit
    const auditAnswer = sessionStorage.getItem('audit-answer');
    
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return; // Exit if container doesn't exist

    // If they selected "no", don't show the filter UI
    if (auditAnswer === 'no') {
        const pageContent = document.querySelector('.ds_page__content');
        const narrowContent = document.querySelector('.ds_layout__content--narrow');
        const wideContent = document.querySelector('.ds_layout__content--wide');

        if (pageContent) pageContent.classList.remove('ds_page__content');
        if (narrowContent) narrowContent.remove();
        if (wideContent) {
            wideContent.classList.remove('ds_layout__content--wide');
            wideContent.classList.add('ds_layout__content');
            wideContent.style.maxWidth = '66.666%';
        }
        return;
    }

    const auditData = sessionStorage.getItem('wfp-audit');
    if (auditData) {
        const selectedAudits = JSON.parse(auditData);
        if (selectedAudits.length > 0) {
            const auditBox = document.createElement('div');
            auditBox.className = 'ds_filter-group';
            auditBox.innerHTML = `
                <h3 class="ds_filter-group__title">Filter by audit type</h3>
                <div class="ds_checkboxes">
                    <div class="ds_checkbox">
                        <input class="ds_checkbox__input" id="filter-all" type="checkbox" name="filter" value="all" checked>
                        <label class="ds_checkbox__label" for="filter-all">All schemes</label>
                    </div>
                    ${selectedAudits.map(audit => `
                        <div class="ds_checkbox">
                            <input class="ds_checkbox__input" id="filter-${audit}" type="checkbox" name="filter" value="${audit}">
                            <label class="ds_checkbox__label" for="filter-${audit}">${audit}</label>
                        </div>
                    `).join('')}
                </div>
            `;
            document.getElementById('filter-container').appendChild(auditBox);

            // Add the no results message
            const noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'ds_no-results ds_!_margin-top--4';
            noResultsMessage.style.display = 'none';
            noResultsMessage.innerHTML = `
                <div class="ds_inset-text">
                    <div class="ds_inset-text__text">
                        <p>Select at least one filter option to view relevant scheme options.</p>
                    </div>
                </div>
            `;
            document.querySelector('.ds_layout__content--wide').insertBefore(noResultsMessage, document.querySelector('.ds_task-list-group'));

            // Add filter functionality
            const checkboxes = document.querySelectorAll('.ds_checkbox__input');
            const allCheckbox = document.getElementById('filter-all');

            function updateVisibility() {
                const selectedFilters = Array.from(checkboxes)
                    .filter(cb => cb.checked && cb.value !== 'all')
                    .map(cb => cb.value);

                const showAll = allCheckbox.checked;
                const noResultsMessage = document.querySelector('.ds_no-results');

                if (!showAll && selectedFilters.length === 0) {
                    noResultsMessage.style.display = 'block';
                    document.querySelector('.ds_task-list-group').style.display = 'none';
                    return;
                }

                noResultsMessage.style.display = 'none';
                document.querySelector('.ds_task-list-group').style.display = 'block';

                const allOptions = document.querySelectorAll('.ds_task-list__task');
                allOptions.forEach(option => {
                    const optionName = option.querySelector('.ds_task-list__task-heading a').textContent.trim();
                    
                    if (showAll) {
                        option.style.display = '';
                    } else {
                        const isVisible = selectedFilters.some(filter => 
                            window.auditMappings[filter] && window.auditMappings[filter].includes(optionName)
                        );
                        option.style.display = isVisible ? '' : 'none';
                    }
                });

                document.querySelectorAll('.ds_task-list-group__section').forEach(section => {
                    const hasVisibleOptions = Array.from(section.querySelectorAll('.ds_task-list__task'))
                        .some(option => option.style.display !== 'none');
                    section.style.display = hasVisibleOptions ? '' : 'none';
                });
            }

            // Handle "Show all" checkbox
            allCheckbox.addEventListener('change', function() {
                checkboxes.forEach(cb => {
                    if (cb !== allCheckbox) {
                        cb.checked = this.checked;
                    }
                });
                updateVisibility();
            });

            // Handle individual filter checkboxes
            checkboxes.forEach(checkbox => {
                if (checkbox !== allCheckbox) {
                    checkbox.addEventListener('change', function() {
                        const allAuditsSelected = Array.from(checkboxes)
                            .filter(cb => cb !== allCheckbox)
                            .every(cb => cb.checked);
                        
                        allCheckbox.checked = allAuditsSelected;
                        updateVisibility();
                    });
                }
            });

            // Set initial state
            updateVisibility();
        }
    }
}

// Make sure the function is available globally
if (typeof window !== 'undefined') {
    window.initializeFilterPanel = initializeFilterPanel;
}