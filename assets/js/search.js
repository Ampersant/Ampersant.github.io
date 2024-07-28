function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search-input");
    const markInstance = new Mark(document.body);

    const performSearch = debounce(() => {
        const searchTerm = searchInput.value;
        markInstance.unmark({
            done: function() {
                if (searchTerm) {
                    markInstance.mark(searchTerm, {
                        done: function() {
                            // Scroll to the first highlighted result
                            const firstHighlight = document.querySelector('mark[data-markjs="true"]');
                            if (firstHighlight) {
                                firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }
                    });
                }
            }
        });
    }, 300); // Adjust debounce wait time as needed

    searchInput.addEventListener("input", performSearch);
});
