import GenericService from "./GenericService";
import axiosInstance from "./axiosInstance";
// import jwtService from "app/services/jwtService";
class NotesService extends GenericService {
  constructor() {
    super();
  }

  sendNote = (data) => this.post("/api/notes/send", data);
  getAllNotes = () => this.get("/api/notes/all");
  getChat = (name) => this.get("/api/notes/chat/" + name);
  //   addFeedback = (data) => this.post("/order/feedback", data);
}
const notesService = new NotesService();
export default notesService;
