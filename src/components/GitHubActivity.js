import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

const GitHubActivity = ({ darkMode }) => {
    // Theme for the contribution calendar that matches portfolio colors
    const calendarTheme = {
        light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
    };

    // Format date for tooltip display
    // Parse date parts directly to avoid timezone offset issues
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day); // month is 0-indexed
        return date.toLocaleDateString('en-US', { 
            weekday: 'short',
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
    };

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-up" data-aos-duration="1500">
                <h2>GitHub Activity</h2>
                <div className="mt-4 inline-flex gap-3 w-full justify-between" data-aos="fade-up" data-aos-duration="1000">
                <p data-aos="fade-up" data-aos-duration="1000">
                    A snapshot of my GitHub contributions and coding activity.
                </p>
                {/* Link to GitHub Profile */}
                    <a 
                        href="https://github.com/samantha-jimenez" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-profile-link group inline-flex items-center bg-[var(--button-color)] text-white px-2 py-1 rounded-lg hover:bg-[var(--button-selected)] transition-all duration-300 hover:scale-105 h-max self-center md:overflow-hidden"
                        aria-label="View full GitHub profile (opens in new tab)"
                    >
                        <span className="icon-[mdi--github] text-xl flex-shrink-0" aria-hidden="true"></span>
                        <span className="github-text-slide text-sm whitespace-nowrap md:max-w-0 md:opacity-0 md:group-hover:max-w-[100px] md:group-hover:opacity-100 md:group-hover:ml-2 transition-all duration-1000 ease-out hidden md:block">GitHub</span>
                    </a>
                </div>
                
            </div>
            
            <div className="github-activity-content" data-aos="fade-up" data-aos-duration="1000">
                {/* GitHub Contribution Calendar */}
                <div className="github-calendar-container flex justify-center overflow-x-auto pb-4">
                    <div className="calendar-wrapper">
                        <GitHubCalendar 
                            username="samantha-jimenez"
                            colorScheme={darkMode ? 'dark' : 'light'}
                            blockSize={12}
                            blockMargin={4}
                            fontSize={14}
                            theme={calendarTheme}
                            year="last"
                            tooltips={{
                                activity: {
                                    text: (activity) => {
                                        const count = activity.count;
                                        const label = count === 1 ? 'contribution' : 'contributions';
                                        return `${count} ${label} on ${formatDate(activity.date)}`;
                                    },
                                    placement: 'top',
                                    offset: 6,
                                    withArrow: true,
                                },
                            }}
                            labels={{
                                totalCount: '{{count}} contributions in the last year'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubActivity;
