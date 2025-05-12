import styles from './Announcements.module.css';
import { IoClose } from "react-icons/io5";
import {ModalWindow} from "../modal/ModalWindow.tsx";
import { FaDiscord, FaGithub, FaReddit } from "react-icons/fa";
import { IoMail} from "react-icons/io5";

const Announcement = ({content, open, onClose, withContact, withAction}: { content: string; open: boolean; onClose: () => void; withContact?: boolean; withAction?: boolean}) => {
    return <ModalWindow isOpen={open} onClose={onClose}>
        <div className={styles.announcementWindow}>
            <div className={styles.topBar}><button className={styles.closeButton} onClick={onClose}><IoClose/></button></div>
                <div className={styles.announcementContent}>
                    <div dangerouslySetInnerHTML={{ __html: content }}/>
                    {withContact && <div className={styles.contactLinks}>Leave feedback here:
                        <button onClick={() => window.open('https://discord.gg/X7WMT6rR', '_blank')}  className={styles.linkButton}><FaDiscord/></button>
                        <button onClick={() => window.open('https://www.reddit.com/r/ytsearch/', '_blank')}  className={styles.linkButton}><FaReddit/></button>
                        <button onClick={() => window.open('https://github.com/machacjakub/yt-search', '_blank')} className={styles.linkButton}><FaGithub/></button>
                        <button onClick={() => window.open('mailto:info@ytsearch.com')} className={styles.linkButton}><IoMail/></button>
                    </div>}
                    {withContact && <div className={styles.email}>info@ytsearch.com</div>}
                    {withAction && <div className={styles.contactLinks}><button onClick={onClose} className={styles.actionButton}>Let's try it!</button></div>}
                </div>
            </div>
        </ModalWindow>
}
export default Announcement;
