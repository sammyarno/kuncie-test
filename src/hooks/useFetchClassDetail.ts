import { useCallback, useEffect, useState } from 'react';
import { getClassDetail } from '../api';
import type { ClassDetailResponse } from '../models/Network';

const useFetchClasses = (id = 0) => {
  const [result, setResult] = useState<ClassDetailResponse>({
    loading: true,
    data: {
      description: '',
      id: 0,
      mentors: [],
      name: '',
    },
    error: null,
  });

  const fetchData = useCallback(async () => {
    const response = await getClassDetail(id);

    if (response.status === 200) {
      setResult((prev) => ({
        ...prev,
        loading: false,
        data: response.data,
      }));
    }
  }, [id]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchData();
  }, [fetchData]);

  return result;
};

export default useFetchClasses;
