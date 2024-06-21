   document.getElementById('signupForm').addEventListener('submit', function(event) {
         event.preventDefault();
  
         const username = document.getElementById('username').value;
         const email = document.getElementById('email').value;
         const password = document.getElementById('password').value;
         const country = document.getElementById('country').value;
         const gender = document.querySelector('input[name="gender"]:checked');
         const terms = document.querySelector('input[name="terms"]').checked;
  
         if (!username || !email || !password || !country || !gender || !terms) {
             alert('Please fill out all fields correctly.');
             return;
         }
  
         alert('Form submitted successfully!');
         // Add further processing here (e.g., send data to server)
     });
     
  