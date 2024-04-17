function deleteRow(btn) {
    btn.parentNode.parentNode.remove();
}

function over(){
    document.getElementById("myImage").src = "pics/mob.jpg";
}

function out(){
    document.getElementById("myImage").src = "pics/mob1.jpg";
}

var counterValue = 0;

    function increaseCounter() {
        counterValue++;
        updateCounter();
    }

    function decreaseCounter() {
        counterValue--;
        updateCounter();
    }

    function updateCounter() {
        document.getElementById("counter").textContent = counterValue;
    }

    function submitForm(event) {
        event.preventDefault();

        var formData = new FormData(document.getElementById("signupForm"));

        console.log("Submitted Form Data:");

        for (var pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }

    function toggleDetails(button) {
        var fullDetails = button.parentNode.querySelector('.full-details');
        if (fullDetails.style.display === 'none') {
            fullDetails.style.display = 'block';
            button.textContent = 'Read less';
        } else {
            fullDetails.style.display = 'none';
            button.textContent = 'Read more';
        }
    }