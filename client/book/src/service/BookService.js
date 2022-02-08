import axios from 'axios'

const BOOK_API_BASE_URL = 'http://localhost:8082/api/v1/get/'



class BookService {

    getAllBooks() {

        return axios.get(BOOK_API_BASE_URL);

    }

}

export default new BookService()
