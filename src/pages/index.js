import React, { useEffect } from "react";
import styles from '@/styles/Home.module.css';

function Home() {
    useEffect(() => {
        const url = window.location.href;
        
        // Split the URL parameters
        const splitLoja = url.split('loja')[1];
        console.log(splitLoja, 'splitLoja');
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array means this effect runs once on component mount
    
    // Rendering text using JSX syntax
    return (
        <div className={styles.texto}>
            <>texto americanas</>
        </div>
    );
}

export default Home;
