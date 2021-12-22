import * as React from "react";
import { useRecordContext } from 'react-admin';

export const MyUrlField = ({ source }) => {
    const record = useRecordContext()

    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>
    ) : null
};
