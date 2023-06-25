'use client';
import React from 'react';

function Snippet({ children }) {
    const [
        isFirstSnippetShown,
        setIsFirstSnippetShown,
    ] = React.useState(false);
    const [
        isSecondSnippetShown,
        setIsSecondSnippetShown,
    ] = React.useState(false);
    const [
        isThirdSnippetShown,
        setIsThirdSnippetShown,
    ] = React.useState(false);

    return (
        <button
            onClick={() =>
                setIsFirstSnippetShown(true)
            }
        >
            Reveal Content
        </button>
    )
}

export default Snippet;
