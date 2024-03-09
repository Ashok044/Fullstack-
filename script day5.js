const resume = {
    name: "Your Name",
    contact: {
      email: "your.email@example.com",
      phone: "+91 6374320919",
      address: "123 Main Street, Cityville, State, 12345"
    },
    summary: "Experienced and highly motivated professional with a strong background in software development and project management.",
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        school: "Kongu Engineering College",
        graduation_year: 2024
      }
    ],
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        location: "City, State",
        start_date: "January 2012",
        end_date: "Present",
        responsibilities: [
          "Lead the development team in designing and implementing software solutions.",
          "Collaborate with cross-functional teams to deliver high-quality products on time.",
          "Conduct code reviews and mentor junior team members."
        ]
      },
      {
        position: "Software Developer",
        company: "InnovateTech Ltd.",
        location: "City, State",
        start_date: "June 2020",
        end_date: "December 2022",
        responsibilities: [
          "Developed and maintained software applications for clients in various industries.",
          "Participated in the full software development life cycle, from concept to deployment."
        ]
      }
    ],
    skills: [
      "Programming Languages: Java, Python, JavaScript",
      "Web Development: HTML, CSS, React",
      "Database Management: MySQL, MongoDB",
      "Agile and Scrum methodologies",
      "Project Management"
    ],
    languages: ["English (Fluent)", "Tamil (Fluent)"],
    references: [
      {
        name: "John",
        position: "Director of Engineering",
        company: "Tech Solutions Inc.",
        contact: "johnsmith@email.com"
      },
      {
        name: "Ashok Kumar",
        position: "Senior Software Developer",
        company: "InnovateTech Ltd.",
        contact: "ashokkarthick094@gmail.com"
      }
    ]
  };
  
  // Printing the JSON resume
  console.log(JSON.stringify(resume, null, 2));
  

  //For loop
  // Using for loop to iterate over skills
console.log("Using for loop:");
for (let i = 0; i < resume.skills.length; i++) {
  console.log(resume.skills[i]);
}
console.log("\n");

//For in Loop
// Using for...in loop to iterate over certifications
console.log("Using for...in loop:");
for (const key in resume.certifications[0]) {
  console.log(`${key}: ${resume.certifications[0][key]}`);
}
console.log("\n");

//For each
// Using forEach method to iterate over education
console.log("Using forEach method:");
resume.education.forEach((edu) => {
  console.log(`${edu.degree} - ${edu.school} (${edu.graduation_year})`);
});
console.log("\n");
