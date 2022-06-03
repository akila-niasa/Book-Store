import React from 'react';
import { ClockLoader } from 'react-spinners';
import './Loading.css'

const Loading = ({color, loading, size}) => {
    return (
        <div className="sweet-loading">
        <ClockLoader color={color||"#717fe0"} loading={loading}  size={size||30} />
    </div>
    );
};

export default Loading;