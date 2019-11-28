import React from 'react';
import { css } from '@emotion/core';
import { red } from '../../themeVar';

const Legend = () => {
    return (
        <ul css={cssLegendList}>
            <li>
                <span>Rating</span>
                <span>1</span>
            </li>

            <li>
                <span>Duration</span>
                <span>2</span>
            </li>
            <li>
                <span>Revenue</span>
                <span>3</span>
            </li>
            <li>
                <span>Release Date</span>
                <span>4</span>
            </li>
            <li>
                <span>Language</span>
                <span>5</span>
            </li>
        </ul>
    );
};

export default Legend;

const cssLegendList = css({
    marginTop: '2rem',
    marginBottom: '2rem',
    border: `.2px solid ${red}`,

    '& li': {
        color: 'white'
    }
});
