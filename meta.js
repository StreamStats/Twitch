        // Fetch StreamStats user's avatar from GitHub API
        fetch('https://api.github.com/users/StreamStats')
            .then(response => response.json())
            .then(data => {
                // Extract the avatar URL from the API response
                const avatarUrl = data.avatar_url;
                const ogImage = document.getElementById('og-image');
                ogImage.content = avatarUrl;
                const twitterImage = document.getElementById('twitter-image');
                twitterImage.content = avatarUrl;
                // Update the href attribute of the favicon link
                const favicon = document.getElementById('favicon');
                favicon.href = avatarUrl;

                // Update the current year in the specified timezone
                const currentYearElement = document.getElementById('current-year');
                const timezone = 'America/Toronto'; // Specify your desired timezone here
                const currentYear = getCurrentYearInTimeZone(timezone);
                currentYearElement.textContent = currentYear;

                // Fetch and render social links initially
                fetchAndRenderSocialLinks();

                // Automatically refresh social links every 3 minutes (180,000 milliseconds)
                setInterval(fetchAndRenderSocialLinks, 3 * 60 * 1000); // 3 minutes in milliseconds
            })
            .catch(error => {
                console.error('Error fetching avatar:', error);
            });
