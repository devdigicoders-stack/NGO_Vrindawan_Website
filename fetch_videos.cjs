const ytChannelInfo = require('yt-channel-info');

async function getAllVideos() {
    try {
        const channelId = 'UCnQiZeY-1KXxDW2U2tMjuqA';
        const payload = {
            channelId,
            channelIdType: 0
        };

        // Get shorts first, as the channel seems to have mostly shorts
        let shorts = [];
        try {
            const response = await ytChannelInfo.getChannelShorts(payload);
            shorts = response.items.map(v => ({ id: v.videoId, title: v.title }));
        } catch(e) {}

        // Get regular videos
        let videos = [];
        try {
            const response = await ytChannelInfo.getChannelVideos(payload);
            videos = response.items.map(v => ({ id: v.videoId, title: v.title }));
        } catch(e) {}

        const all = [...videos, ...shorts];
        
        console.log("Found " + all.length + " videos.");
        const fs = require('fs');
        fs.writeFileSync('all_videos.json', JSON.stringify(all, null, 2));
    } catch(err) {
        console.error(err);
    }
}
getAllVideos();
