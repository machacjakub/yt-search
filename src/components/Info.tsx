import { IoInformationCircleOutline } from "react-icons/io5";
import styles from "./Info.module.css";
import useBoolean from "../utils/useBoolean.ts";
import Announcement from "./annoucements/Announcement.tsx";
import {initialAnnouncement} from "./annoucements/announcementsList.ts";

export const Info = () => {
    const isOpen = useBoolean(false);
    return <>
        {isOpen.value && <Announcement withContact={true} content={initialAnnouncement.content} open={isOpen.value} onClose={isOpen.setFalse} />}
        <button onClick={isOpen.setTrue} className={styles.infoButton}><IoInformationCircleOutline /></button>
    </>
}