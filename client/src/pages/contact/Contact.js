import React, { useEffect } from "react";
import adminService from "../../services/AdminService";
import notesService from "../../services/NotesService";

function Contact() {
  const [note, setNote] = React.useState("");
  const [notes, setNotes] = React.useState([]);

  const sendNote = () => {
    const userLoggedIn = adminService.getLoggedInUser();
    console.log("userLoggedIn: ", userLoggedIn);

    const sendData = { note, postedBy: userLoggedIn };
    console.log("sendData: ", sendData);

    notesService
      .sendNote(sendData)
      .then((res) => {
        console.log("RES: ", res);
        window.location.reload();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  useEffect(() => {
    console.log("Inside");
    const name = adminService.getLoggedInUser();
    console.log("Inside", name.name);
    notesService
      .getChat(name.name)
      .then((res) => {
        console.log("RES: ", res);
        setNotes(res);
      })
      .catch((err) => console.log("ERROR: ", err));
  }, [setNotes]);

  const refreshMessage = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="content col-md-10">
          <div className="card">
            <div className="card-body">
              <div className="col-md-12">
                <div>
                  {notes.map((comment, index) => (
                    <div key={index} className="p-l-10 ">
                      <h5 className="text-primary">
                        {comment.postedBy.role == "user" ? "You" : "Admin"}
                      </h5>
                      <p className="text-info" style={{ color: "black" }}>
                        {comment.note}
                        <br />
                        {/* <small className="text-muted">
                          {UKDateTime.toDate(comment.at)}{" "}
                          {UKDateTime.toTime(comment.at)}
                        </small> */}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <textarea
                    name="note"
                    id=""
                    cols="15"
                    rows="5"
                    className="form-control form-border m-5"
                    value={note}
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                  ></textarea>
                  <button className="btn btn-info m-5" onClick={sendNote}>
                    Send Message
                  </button>
                  <button className="btn m-5" onClick={refreshMessage}>
                    Refresh Messages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
