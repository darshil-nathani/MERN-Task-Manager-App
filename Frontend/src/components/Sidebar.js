import React from 'react'

export default function Sidebar() {
  return (
    <>
        <nav class="navbar">
         <h2>MySite</h2>
         <div class="nav-links">
             <a href="https://localhost:44352/My/Index"><i class="fas fa-home"></i> Home</a>
             <a href="https://localhost:44352/My/About"><i class="fas fa-info-circle"></i> About</a>
             <a href="https://localhost:44352/My/ContactUs"><i class="fas fa-envelope"></i> Contact Us</a>
             <a href="https://localhost:44352/My/Pricing"><i class="fas fa-envelope"></i> Pricing</a>
             <a href="https://localhost:44352/Student/Index"><i class="fas fa-envelope"></i> Student</a>
         </div>
         <footer class="footer">
             <p>&copy; 2024 MySite. All rights reserved.</p>
         </footer>
     </nav>
    </>
  )
}
