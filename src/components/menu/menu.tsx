import { ReactNode, useEffect, useState } from "react";
import styles from './menu.module.css';
import { useParams, useRouter } from "next/navigation";

export default function Menu({ children, to }: { children: ReactNode, to: string }) {
    const [isSelected, setSelected] = useState(false);
    const params = useParams();
    const router = useRouter();

    useEffect(() => setSelected(window.location.hash == to), [to, params])

    return (
        <p 
            className={isSelected ? `${styles.menu} ${styles.selected}` : styles.menu} 
            onClick={() => router.push(to)}
        >
            { children }
        </p>
    );
}
