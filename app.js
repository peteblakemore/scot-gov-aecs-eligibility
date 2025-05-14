// Add this to your Nunjucks environment setup
env.addFilter('toLocaleString', function(number) {
    return number.toLocaleString('en-GB');
}); 