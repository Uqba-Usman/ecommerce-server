import React from "react";

function Contact() {
  const [note, setNote] = React.useState("");

  const sendNote = () => {};

  //   const notes = booking.notes.filter(
  //     (n) => n.to == "customer" || n.to == "driver"
  //   );

  //   console.log(notes);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="content col-md-10">
          <div className="card">
            <div className="card-body">
              <div className="col-md-12">
                {/* <div>
                  {notes.map((comment, index) => (
                    <div key={index} className="p-l-10 ">
                      <h5 className="text-primary">
                        {comment.to == "customer" ? "Driver" : "You"}
                      </h5>
                      <p className="text-info" style={{ color: "black" }}>
                        {comment.note}
                        <br />
                        <small className="text-muted">
                          {UKDateTime.toDate(comment.at)}{" "}
                          {UKDateTime.toTime(comment.at)}
                        </small>
                      </p>
                    </div>
                  ))}
                </div> */}

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
                  <button className="btn m-5">Refresh Messages</button>
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
