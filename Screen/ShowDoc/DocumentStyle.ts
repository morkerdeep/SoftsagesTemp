const DocStyle = {
    cardOuter : {
        position : "relative",
        height : "180px",
    },

    image : {
        height : "180px",
    },

    cardOverlay : {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0,
        transition: 'all 0.4s ease-in-out 0s',
    }, 

    cardOverlayHover : {
        background : 'rgba(0, 0, 0, 0.7)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        transition: 'all 0.4s ease-in-out 0s',
        opacity: 1,
    },

    stack : {
        position: 'absolute',
        height : '100%',
        width: '100%',
        top: '45%',
        left: '30%',
        opacity: 0,
        color : "white",
        cursor : 'pointer',
        transition: 'all 0.4s ease-in-out 0s',
    },

    stackHover : {
        position: 'absolute',
        height : '100%',
        width: '100%',
        top: '45%',
        left: '30%',
        opacity: 1,
        color : "white",
        cursor : 'pointer',
        transition: 'all 0.4s ease-in-out 0s',
    },
}

export default DocStyle;

