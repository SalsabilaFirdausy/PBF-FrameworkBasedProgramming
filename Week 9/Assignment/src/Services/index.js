import GetAPI from './Get';
import PostAPI from './Post';
import DeleteAPI from './Delete';


// API - GET
const getNewsMahasiswa = () => GetAPI('mahasiswa?_sort=id&_order = desc');

// API - POST
const postNewsMahasiswa = (dataYgDikirim) => PostAPI('mahasiswa', dataYgDikirim);

// API - DELETE
const deleteNewsMahasiswa = (dataYgDihapus) => DeleteAPI('mahasiswa', dataYgDihapus);

const API = {       
    getNewsMahasiswa,
    postNewsMahasiswa,
    deleteNewsMahasiswa
}

export default API;