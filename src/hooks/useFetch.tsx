import { useEffect, useState } from "react";

export const useFetch = <T,>(
  url: string
): { data: T | null; isLoading: boolean } => {
  const [state, setState] = useState<{ data: T | null; isLoading: boolean }>({
    data: null,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data: T = await response.json();
        setState({ data, isLoading: false });
      } catch (error) {
        console.error("Error fetching data:", error);
        setState({ data: null, isLoading: false });
      }
    };

    fetchData();
  }, [url]);

  return state;
};
