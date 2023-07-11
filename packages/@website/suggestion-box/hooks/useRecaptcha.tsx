import { useState } from 'react';

export const useRecaptcha = () => {
    const [isRobot, setIsRobot] = useState(true);

    const handleRecaptchaChange = (token: string | null) => {
        setIsRobot(!token);
    };

    return {
        isRobot,
        handleRecaptchaChange,
    };
};
