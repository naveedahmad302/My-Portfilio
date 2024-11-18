var modal = document.getElementById('contactModal');
        var emailTrigger = document.getElementById('emailTrigger');
        var cancelBtn = document.getElementById('cancelBtn');

        emailTrigger.onclick = function (event) {
            event.preventDefault(); 
            modal.style.display = "flex"; 
        };

        cancelBtn.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };