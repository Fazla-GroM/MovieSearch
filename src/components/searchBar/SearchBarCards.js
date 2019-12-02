import React from 'react';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { red, greyLight, greyDark } from '../../themeVar';

const SearchBarCards = ({ data }) => {
    switch (data.media_type) {
        case 'movie':
            return (
                <li css={cssSearchBarCards}>
                    <div className="image">
                        <FontAwesomeIcon icon={faFilm} />
                    </div>
                    <div className="content">
                        <h5>{data.title || data.original_title}</h5>
                        <p>In movies</p>
                    </div>
                </li>
            );
        case 'tv':
            return (
                <li css={cssSearchBarCards}>
                    <div className="image">
                        <FontAwesomeIcon icon={faTv} />
                    </div>

                    <div className="content">
                        <h5>{data.name || data.original_name}</h5>
                        <p>In tv shows</p>
                    </div>
                </li>
            );
        case 'person':
            return (
                <li css={cssSearchBarCards}>
                    <div className="image">
                        <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div className="content">
                        <h5>{data.name}</h5>
                        <p>In persons</p>
                    </div>
                </li>
            );
    }
};

export default SearchBarCards;

const cssSearchBarCards = css({
    // backgroundColor: 'hotpink',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '.5rem ',
    transition: 'backgroundColor .3s ease-in-out',

    '&:hover': {
        backgroundColor: greyLight
    },

    '.image': {
        height: '100%',
        width: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '1rem',

        '& svg': {
            color: red
        }
    },

    '.content': {
        //backgroundColor: 'yellow',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        '& h5': {
            color: red,
            fontSize: '1.4rem',
            fontWeight: '700',
            marginRight: '1rem'
        },
        '& p': {
            fontSize: '1rem',
            color: 'white'
        }
    }
});
