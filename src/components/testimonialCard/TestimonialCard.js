import React from 'react';
import { css } from '@emotion/core';

const TestimonialCard = ({ data }) => {
    const cssTestimonialCard = css({
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    });
    return (
        <div css={cssTestimonialCard}>
            <div className="card-image"></div>
            <div className="card-cloud"></div>
            <div className="card-content">
                <div className="card-comment"></div>
                <div className="card-name"></div>
            </div>
        </div>
    );
};

export default TestimonialCard;
