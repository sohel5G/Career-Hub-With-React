import { toast } from "react-toastify";

const getStoredJobIds = () => {
    const storedIds = localStorage.getItem('id');
    if (storedIds) {
        return JSON.parse(storedIds);
    }
    return [];
}

const setStoredIds = id => {
    const storedIds = getStoredJobIds();

    const isExcist = storedIds.find(jobId => jobId === id);

    isExcist ? toast('Already applied!') : '';

    if (!isExcist) {
        storedIds.push(id);
        localStorage.setItem('id', JSON.stringify(storedIds));
        toast('Applied Successfully!')
    }
}


const clearLocalStore = () => {
    localStorage.removeItem('id');
}

export { getStoredJobIds, setStoredIds, clearLocalStore }

