import React, { useEffect, useState } from 'react';
import { css } from '@emotion/core';

const Loader = props => {
    return (
        <div css={cssLoader}>
            <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ff000d"
            >
                <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                        <circle
                            strokeOpacity="1"
                            stroke="#cc0a14"
                            cx="18"
                            cy="18"
                            r="18"
                        />
                        <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 18 18"
                                to="360 18 18"
                                dur="1s"
                                repeatCount="indefinite"
                            />
                        </path>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Loader;

const cssLoader = css({
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});
