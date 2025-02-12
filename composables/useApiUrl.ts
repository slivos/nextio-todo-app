export const useApiUrl = () => {
  // Fetch API Base URL & Token inside functions
  const getApiUrl = (endpoint: string, query?: string) => {
    const config = useRuntimeConfig().public;

    return `${config.apiBaseUrl}${endpoint}?access_token=${config.accessToken}${
      query ? `&${query}` : ""
    }`;
  };

  return { getApiUrl };
};
