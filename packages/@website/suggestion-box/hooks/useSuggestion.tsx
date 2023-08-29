import { useState } from 'react';

export const useSuggestion = () => {
    const [loading, setLoading] = useState(false);

    const postSuggestion = (data: any) => {
        return new Promise((resolve, reject) => {
            setLoading(true);
            fetch('/api/suggestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => resolve(response))
                .catch(() => {
                    reject(false);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    };

    return {
        postSuggestion,
        loading,
    };
};
