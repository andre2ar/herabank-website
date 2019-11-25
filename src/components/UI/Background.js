const Background = backgroundImage => {
    return  {
        backgroundImage: `linear-gradient(
            0deg,
            rgba(41, 56, 95, 0.45),
            rgba(41, 56, 95, 0.45)), url(${backgroundImage})`
    }
};

export default Background;