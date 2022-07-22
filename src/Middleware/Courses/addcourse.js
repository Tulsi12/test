import axios from "axios";
import { Component } from "react";
import { toast } from "react-toastify";

class CourseAdd extends Component {
  state = {
    courseTitle: "",
    courseDescription: "",
    coursePrice: "",
    tutorName: "",
    filename: null,
  };

  textChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileChangeHandler = (e) => {
    this.setState({
      filename: e.target.files[0],
    });
  };

  sendData = (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append("courseTitle", this.state.courseTitle);
    data.append("courseDescription", this.state.courseDescription);
    data.append("coursePrice", this.state.coursePrice);
    data.append("courseImage", this.state.filename);
    data.append("tutorName", this.state.tutorName);
    axios
      .post("http://localhost:5000/addcourse", data)
      .then((result) => {
        console.log(result);

        toast.success("Course has been added!", {
          position: toast.POSITION.TOP_CENTER,
        });
        window.location.href = "/admin/courses";
      })
      .catch();
    // window.location.href="/courseinsert"
  };

  render() {
    return (
      // <section className="class-area2 bg-fdf6ed pt-100 pb-70">
      //     <div className="cont" id="container">
      //         <div className="d-flex justify-content-center">
      //             <div className="form-container col-lg-8 ">
      //                 <form>
      //                     <h1>Add Course</h1>
      //                     <div class="row">
      //                         <input type="text" name="courseTitle" id='courseTitle' placeholder="Course Title"
      //                             value={this.state.courseTitle} onChange={this.textChangeHandler} />
      //                         <input type="text" name="courseDescription" id='courseDescription' placeholder="Course Description"
      //                             value={this.state.courseDescription} onChange={this.textChangeHandler} />
      //                         <input type="text" name="coursePrice" id='coursePrice' placeholder="Course Price"
      //                             value={this.state.coursePrice} onChange={this.textChangeHandler} />
      //                         <input type="text" name="tutorName" id='tutorName' placeholder="Course Lecturer"
      //                             value={this.state.tutorName} onChange={this.textChangeHandler} />
      //                         <label>Upload Course Image</label>
      //                         <input type="file" accept="image/*" name="filename" onChange={this.fileChangeHandler} />
      //                         <div className="center"><button type="submit" id='btnAdd' onClick={this.sendData}>Add</button></div>
      //                     </div>
      //                 </form>
      //             </div>
      //         </div>
      //     </div>
      // </section>

      <section class="get_store mt-5">
        <div class="container mt-5">
          <div class="row ">
            <div class="col-lg-12 mt-5">
              <div class="store  card py-2 px-2">
                <h1 class="text-left">Courses</h1>

                <form onSubmit={this.sendData}>
                  <div class="course-add">
                    <button class="course-btnn">
                      <i
                        class="fa fa-plus"
                        aria-hidden="true"
                        utton
                        type="submit"
                        id="btnAdd"
                      ></i>
                      Add New
                    </button>
                  </div>

                  <div class="table-responsive">
                    <table class="table table-striped table-bordered mt-3">
                      <tr class="store1">
                        <th>Course Title</th>
                        <th>course Description</th>
                        <th>Course Price</th>
                        <th>Course Lecturer</th>
                        <th> Image </th>
                      </tr>

                      <tr class="store2">
                        <td>
                          <input
                            type="text"
                            name="courseTitle"
                            id="courseTitle"
                            placeholder="Course Title"
                            value={this.state.courseTitle}
                            onChange={this.textChangeHandler}
                          />
                        </td>

                        <td class="text-uppercase">
                          <input
                            type="text"
                            name="courseDescription"
                            id="courseDescription"
                            placeholder="Course Description"
                            value={this.state.courseDescription}
                            onChange={this.textChangeHandler}
                          />
                        </td>

                        <td>
                          <input
                            type="text"
                            name="coursePrice"
                            id="coursePrice"
                            placeholder="Course Price"
                            value={this.state.coursePrice}
                            onChange={this.textChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="tutorName"
                            id="tutorName"
                            placeholder="Course Lecturer"
                            value={this.state.tutorName}
                            onChange={this.textChangeHandler}
                          />
                        </td>
                        <td>
                          <input
                            type="file"
                            accept="image/*"
                            name="filename"
                            onChange={this.fileChangeHandler}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      //   <section className="class-area2 bg-fdf6ed pt-100 pb-70">
      //     <div className="cont" id="container">
      //       <div className="d-flex justify-content-center">
      //         <div className="form-container col-lg-8 ">
      //           <form>
      //             <h1>Add Course</h1>
      //             <div class="row">
      //               <input
      //                 type="text"
      //                 name="courseTitle"
      //                 id="courseTitle"
      //                 placeholder="Course Title"
      //                 value={this.state.courseTitle}
      //                 onChange={this.textChangeHandler}
      //               />
      //               <input
      //                 type="text"
      //                 name="courseDescription"
      //                 id="courseDescription"
      //                 placeholder="Course Description"
      //                 value={this.state.courseDescription}
      //                 onChange={this.textChangeHandler}
      //               />
      //               <input
      //                 type="text"
      //                 name="coursePrice"
      //                 id="coursePrice"
      //                 placeholder="Course Price"
      //                 value={this.state.coursePrice}
      //                 onChange={this.textChangeHandler}
      //               />
      //               <input
      //                 type="text"
      //                 name="tutorName"
      //                 id="tutorName"
      //                 placeholder="Course Lecturer"
      //                 value={this.state.tutorName}
      //                 onChange={this.textChangeHandler}
      //               />
      //               <label>Upload Course Image</label>
      //               <input
      //                 type="file"
      //                 accept="image/*"
      //                 name="filename"
      //                 onChange={this.fileChangeHandler}
      //               />
      //               {/* //button */}
      //               <div className="center">
      //                 <button type="submit" id="btnAdd" onClick={this.sendData}>
      //                   Add
      //                 </button>
      //               </div>
      //               {/* test */}
      //               <div class="course-add">
      //                 <button class="course-btnn">
      //                   <i
      //                     class="fa fa-plus"
      //                     aria-hidden="true"
      //                     utton
      //                     type="submit"
      //                     id="btnAdd"
      //                     onClick={this.sendData}
      //                   ></i>
      //                   Add New
      //                 </button>
      //               </div>

      //             </div>
      //           </form>
      //         </div>

      //       </div>
      //     </div>
      //   </section>
    );
  }
}
export default CourseAdd;
