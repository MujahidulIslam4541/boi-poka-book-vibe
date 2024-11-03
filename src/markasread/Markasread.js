import { toast } from "react-toastify";


const getTheMarkAsRead = () => {

    const storedListStr = localStorage.getItem('read-list')
    if (storedListStr) {
        const storedListPares = JSON.parse(storedListStr);
        return storedListPares;
    }
    else {
        return [];
    }

}

const addToStoredReadList = (id) => {
    const getStoredList = getTheMarkAsRead()

    // already existed this item,do not it
    if (getStoredList.includes(id)) {
        console.log(id, 'This book already existed the read list')
    }
    else {
        getStoredList.push(id)
        const storedListStr = JSON.stringify(getStoredList);
        localStorage.setItem('read-list', storedListStr);
        toast('this book is added your read list')
    }
}

export { addToStoredReadList, getTheMarkAsRead }