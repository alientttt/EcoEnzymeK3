
import { SOCIAL_DATA } from "../../../data/dataSocialMedia";


export const SocialMedia = ({ styles }: { styles: any }) => (
  <nav aria-label="Social Media">
    <ul className={styles.socialMediaWrapperUl}>
      {SOCIAL_DATA.map((item) => {
        const Icon = item.icon;

        return (
          <li
            key={item.id}
            className={`${styles.socialMediaCircle} ${styles[item.style]}`}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.id}
            >
              <Icon size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);
