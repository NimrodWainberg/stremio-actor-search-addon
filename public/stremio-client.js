// Stremio client-side script for API key management
(function() {
    'use strict';

    // Store the original fetch function
    const originalFetch = window.fetch;

    // Override fetch to include TMDB API key in requests
    window.fetch = function(url, options = {}) {
        const apiKey = localStorage.getItem('tmdb_api_key');
        
        if (apiKey && url.includes('/catalog/')) {
            options = options || {};
            options.headers = options.headers || {};
            options.headers['X-TMDB-API-Key'] = apiKey;
        }

        return originalFetch.call(this, url, options);
    };

    // Function to check if addon is configured
    window.isAddonConfigured = function() {
        const apiKey = localStorage.getItem('tmdb_api_key');
        return apiKey && apiKey.length > 0;
    };

    // Function to get API key
    window.getTMDBApiKey = function() {
        return localStorage.getItem('tmdb_api_key') || '';
    };

    // Function to set API key
    window.setTMDBApiKey = function(apiKey) {
        localStorage.setItem('tmdb_api_key', apiKey);
    };

    // Log initialization
    console.log('Actor Search Addon client initialized');
    console.log('Configuration status:', window.isAddonConfigured() ? 'Configured' : 'Not configured');
})();
