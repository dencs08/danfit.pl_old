export const useGet = async (path) => {
    const config = useRuntimeConfig();
    return await useFetch(() => `${config.apiBase}/api${path}`);
};

export const usePostNewsletter = async (path, data) => {
    const config = useRuntimeConfig();
    return await useFetch(() => `${config.apiBase}/api${path}` ,{
        method:'POST',
        body:{
            'email': data
        }
    });
};

export const useEmailContactForm = async (path, data) => {
    const config = useRuntimeConfig();
    return await useFetch(() => `${config.apiBase}/api${path}` ,{
        method:'POST',
        body:{
            'name': data.name,
            'surname': data.surname,
            'email': data.email,
            'phone': data.phone,
            'subject': data.subject,
            'message': data.message,
        }
    });
};
