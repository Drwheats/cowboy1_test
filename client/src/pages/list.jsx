import buttonClickedAsync2 from "./request";
import buttonClickedAsync from "./request";

const List = () => {
    const submitForm=(event)=> {
        if (event.keyCode === 13) {
            buttonClickedAsync2()
        }
    }

    return (

        <div className="container_list">
        <div className="bensList">
        <input type="text" className="inputList" onKeyDown={(event => submitForm(event))} id="input_list"/>
    <button onClick={buttonClickedAsync} id="submitbuttonList" className="submitbuttonList">Post</button>
    <label className="label1" id="label1id">WARNING: Only good posts allowed</label>
            </div>
        </div>

    )
}
export default List;
//
//  This is the container object that I was generating to hold posts. May reuse.
// </div>
// <div className="readout_list_holder" id="readout_list_holder">
//     <div className="readout_list" id="readoutList">
//         <div className="readout_list_title" id="readout_list_title">Title</div>
//         <div className="readout_list_posts_by_id" id="readout_list_posts_by_id">Title</div>
//         <div className="readout_list_post_number" id="readout_list_post_number">Title</div>
//         <div className="readout_list_contents" id="readout_list_contents">Title</div>
//     </div>
