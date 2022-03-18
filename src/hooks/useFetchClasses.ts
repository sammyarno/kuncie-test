import { useCallback, useEffect, useState } from 'react';
import { getAllClasses } from '../api';
import type { ClassListResponse } from '../models/Network';

const useFetchClasses = () => {
  const [result, setResult] = useState<ClassListResponse>({
    loading: true,
    data: [],
    error: null,
  });

  const fetchData = useCallback(async () => {
    const response = await getAllClasses();

    if (response.status === 200) {
      setResult((prev) => ({
        ...prev,
        loading: false,
        data: response.data.items.map((item) => ({
          ...item,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        })),
      }));
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [fetchData]);

  return result;
};

export default useFetchClasses;
