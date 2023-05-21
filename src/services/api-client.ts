import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params :{
        key: "e87553d0ee3a451e8a0fedc31ee432d0",
    }
})