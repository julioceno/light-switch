const checkbox = document.getElementById('check')

checkbox.addEventListener('click', () => {

    if (checkbox.checked) {
        document.body.style.background = "#313131"
    }
     
    else  {
        document.body.style.background = "rgba(255, 255, 255, 0.575)"

    }

})