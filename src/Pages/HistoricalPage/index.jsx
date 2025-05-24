import styles from './Historical.module.css';
import { useNavigate } from 'react-router';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HistoricalPage = () => {
    const navigate = useNavigate();

    const handleNovosibirskClick = () => {
        navigate('/novosibirsk');
    };

    const handleKrasinClick = () => {
        navigate('/krasin');
    };

    const handleFrankClick = () => {
        navigate('/frank');
    };

    const handleNorthernClick = () => {
        navigate('/northern');
    };
    const handleOttoClick = () => {
        navigate('/otto');
    };

    const handleСheluskinClick = () => {
        navigate('/cheluskin');
    };
    const handleVodopyanovClick = () => {
        navigate('/vodopyanov');
    };

    const handlePapaninClick = () => {
        navigate('/papanin');
    };

    return (
        <>
            <div className={styles.container}>
                <Header />
                <div className={styles.novosibirsk} onClick={handleNovosibirskClick}></div>
                <div className={styles.krasin} onClick={handleKrasinClick}></div>
                <div className={styles.frank} onClick={handleFrankClick}></div>
                <div className={styles.northern} onClick={handleNorthernClick}></div>
                <div className={styles.otto} onClick={handleOttoClick}></div>
                <div className={styles.cheluskin} onClick={handleСheluskinClick}></div>
                <div className={styles.vodopyanov} onClick={handleVodopyanovClick}></div>
                <div className={styles.papanin} onClick={handlePapaninClick}></div>
                <Footer />
            </div>
        </>
    );
};

export default HistoricalPage;
