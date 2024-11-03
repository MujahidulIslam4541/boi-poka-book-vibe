const getAddToWishList = () => {

    const addToWishListStr = localStorage.getItem('wish-list')
    if (addToWishListStr) {
        const addToList = JSON.parse(addToWishListStr);
        return addToList;
    }
    else {
        return [];
    }
}
const addToWishList = (id) => {
    const addToWishList = getAddToWishList()

    if (addToWishList.includes(id)) {
        console.log(id, 'this item already existed')
    }
    else {
        addToWishList.push(id);
        const addToListStr = JSON.stringify(addToWishList);
        localStorage.setItem('wish-list', addToListStr)
    }
}

export { addToWishList ,getAddToWishList}

