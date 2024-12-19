export const bio = [
  "SustainEval 2025, co-located with the KONVENS 2025 conference, offers a shared task that challenges participants to analyze sustainability reports in German. This shared task focuses on two key aspects of sustainability reporting: content classification and claim verifiability. Participants will have the opportunity to explore various machine learning and natural language processing methods to address these challenges.",
  "",
];

export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
  ],
};

export const experience = [
  {
    title: "Training & Development Data Release",
    duration: "14th March 2025",
    subtitle: "",
    details: [],
    tags: [],
    icon: "truck ",
  },
  {
    title: "Registration Deadline / Start Evaluation Phase",
    duration: "10th June 2025",
    subtitle: "",
    details: [],
    tags: [],
    icon: "heartbeat",
  },
  {
    title: "System/Results Submission Deadline",
    duration: "27th June 2025",
    subtitle: "",
    details: [],
    tags: [],
    icon: "heartbeat",
  },
  {
    title: "System Paper Submission Deadline",
    duration: "11th July 2025",
    subtitle: "",
    details: [],
    tags: [],
    icon: "heartbeat",
  },
  {
    title: "Workshop & Final Presentation",
    duration: "10th September 2025",
    subtitle: "",
    details: [],
    tags: [],
    icon: "heartbeat",
  },
];

export const tasks = [
  {
    title: "Task A: Content Classification",
    link: "https://example.com/task1",
    content:
      "Participants are tasked with assigning a content class to text snippets from sustainability reports. The text snippets are sampled from different sections of German-language company reports indexed in the German Sustainability Code (DNK). Each snippet corresponds to one of the predefined reporting criteria in DNK, and the goal is to classify the snippet according to its corresponding criterion section.",
    evaluation: "Accuracy",
  },
  {
    title: "Task B: Verifiability Rating",
    link: "https://example.com/task2",
    content:
      "This task focuses on rating the verifiability of the last sentence in each text snippet, with the prior sentences serving as context. The verifiability score is assigned on a scale from 0.0 (not verifiable) to 1.0 (clearly verifiable). The task is evaluated by the Kendall τ rank correlation with human ratings.",
    evaluation: "Kendall τ rank correlation (version B)",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/vinaysomawat.github.io",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];
