import React from 'react';
import { isError, useQuery } from 'react-query';
import { getAllProperties } from '../../utils/api';

const UseProperties = () => {
       const {data, isLoading, isError, refetch} = useQuery(
        "allProperties",
         getAllProperties,
         {refetchOnWindowFocus: false}
       )

    return {
       data, 
       isError,
        isLoading, 
        refetch
};
};

export default UseProperties;
