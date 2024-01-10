type vcard = {
    title: string;
    channel: string;
    views: string;
    timestamp: string;
    image: string;
};

export function VCard(props: vcard) {
    return (
        <div className="p-2 cursor-pointer">
            <img className="rounded-xl h-64 w-96" src={props.image} />
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    <img className="rounded-full h-16 mr-2 mt-2" src="/channel.png" />
                </div>
                <div className="col-span-11">
                    <div>{props.title}</div>
                    <div className="col-span-11 text-gray-400">
                        {props.channel}
                    </div>
                    <div className="col-span-11 text-gray-400">
                        {props.views} | {props.timestamp}
                    </div>   
                </div>
            </div>
        </div>
    );
}
