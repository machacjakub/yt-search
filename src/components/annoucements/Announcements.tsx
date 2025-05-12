import Announcement from "./Announcement.tsx";
import {type IAnnouncement, initialAnnouncement} from "./announcementsList.ts";
import {useEffect, useState} from "react";
import {getViewedAnnouncements, setAnnouncementAsViewed} from "../../utils/localStorageUtils.ts";

const Announcements = () => {
    const [announcement, setAnnouncement] = useState<IAnnouncement|null>();
    useEffect(() => {
        const viewedAnnouncements = getViewedAnnouncements()
        if(viewedAnnouncements.length === 0) {
            setAnnouncement(initialAnnouncement);
            setAnnouncementAsViewed(initialAnnouncement.name)
        }
    })
    return <div>
        {announcement && <Announcement withAction={true} open={!!announcement} onClose={() => setAnnouncement(null)} content={announcement.content} />}
    </div>;
}
export default Announcements;