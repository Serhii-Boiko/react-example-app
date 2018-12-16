const stringGenerator = (len) => {
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < len; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text.charAt(0).toUpperCase() + text.slice(1);
};

export default stringGenerator;