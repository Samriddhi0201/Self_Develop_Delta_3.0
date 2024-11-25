function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was Submitted");
}

export default function Form() {
    return (
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Write Something" />
            <button>Submit</button>
        </form>
    )
}