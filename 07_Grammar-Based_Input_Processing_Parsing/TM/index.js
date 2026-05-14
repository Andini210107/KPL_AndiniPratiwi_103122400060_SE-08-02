/**
 * @param {string} text
 * @returns {import('./structure').RobotsTxt}
 */
function parseRobots(text) {

    const result = {
        agents: {},
        Sitemap: []
    };

    /** @type {string|null} */
    let currentAgent = null;

    const lines = text.split('\n');

    for (let line of lines) {

        line = line.trim();

        // Abaikan komentar dan baris kosong
        if (line === '' || line.startsWith('#')) {
            continue;
        }

        // User-agent
        if (/^User-agent:/i.test(line)) {

            const agent = line.split(':')[1].trim().toLowerCase();

            currentAgent = agent;

            if (!result.agents[currentAgent]) {
                result.agents[currentAgent] = {
                    Allow: [],
                    Disallow: []
                };
            }
        }

        // Allow
        else if (/^Allow:/i.test(line)) {

            const value = line.split(':')[1].trim();

            if (currentAgent && value !== '') {
                result.agents[currentAgent].Allow.push(value);
            }
        }

        // Disallow
        else if (/^Disallow:/i.test(line)) {

            const value = line.split(':')[1].trim();

            if (currentAgent && value !== '') {
                result.agents[currentAgent].Disallow.push(value);
            }
        }

        // Sitemap
        else if (/^Sitemap:/i.test(line)) {

            const sitemap = line.split(':').slice(1).join(':').trim();

            result.Sitemap.push(sitemap);
        }

        // Host
        else if (/^Host:/i.test(line)) {

            const host = line.split(':').slice(1).join(':').trim();

            result.Host = host;
        }
    }

    return result;
}

module.exports = parseRobots;