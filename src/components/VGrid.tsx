import { VCard } from "./VCard";

const Videos = [
    {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
        {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
     {
        title: 'Video 1',
        channel: 'Channel 1',
        views: '1.2M Views',
        timestamp: '1 day ago',
        image: '/thumbnail.jpg'
    },
]

export const VGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {Videos.map((video) => (
                <VCard 
                    title={video.title}
                    image={video.image}
                    channel={video.channel}
                    views={video.views}
                    timestamp={video.timestamp}
                ></VCard>
            ))}
        </div>
    )
};
