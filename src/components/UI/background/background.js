const background = (backgroundImage, gradient = false) => {
    if(gradient) {
        return  {
            backgroundImage: `linear-gradient(
            0deg,
            rgba(41, 56, 95, 0.45),
            rgba(41, 56, 95, 0.45)), url(${backgroundImage})`
        }
    }else {
        return  {
            backgroundImage: `url(${backgroundImage})`
        }
    }
};

export default background;