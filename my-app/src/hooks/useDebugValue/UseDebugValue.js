import React from 'react';
import useCustomHookForUseDebugValue from './useCustomHookForUseDebugValue';

export default function UseDebugValue() {
    const [value, setValue] = useCustomHookForUseDebugValue(5);
    return (
        <div>
            <input type='number' value={value} onChange={e=>setValue(e.target.value)} />
            <p>{value}</p>
        </div>
    );
}
