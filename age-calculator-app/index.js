function handleSubmit(event) {
    event.preventDefault();
    
    const currentDate = new Date();

    let day = Number(document.getElementById('day').value);
    let month = Number(document.getElementById('month').value);
    let year = Number(document.getElementById('year').value);

    let result = document.getElementById('result');

    let dateInput = 10 - day - month - year;


}

