const model = {
  isAdding: false,

  // inputs for nytt theme
  foregroundColor: '',
  backgroundColor: '',
  highlightColor: '',
  rating: 0,
  creator: '',
  creatorFilter: null,
  sort: null,

  colorThemes: [
    { foregroundColor: "#1B998B", backgroundColor: "#E84855", highlightColor: "#F9DC5C", rating: 4.5, creator: "Aiden" },
    { foregroundColor: "#8D86C9", backgroundColor: "#E27D60", highlightColor: "#41B3A3", rating: 4.8, creator: "Bella" },
    { foregroundColor: "#C1C8E4", backgroundColor: "#335C67", highlightColor: "#FFF3B0", rating: 4.3, creator: "Chloe" },
    { foregroundColor: "#F7FFF7", backgroundColor: "#FF6B6B", highlightColor: "#4ECDC4", rating: 4.7, creator: "Daniel" },
    { foregroundColor: "#D9BF77", backgroundColor: "#5D001E", highlightColor: "#C47AC0", rating: 4.6, creator: "Eleanor" },
    { foregroundColor: "#FFB7C3", backgroundColor: "#2B193D", highlightColor: "#FF6F61", rating: 4.2, creator: "Finn" },
    { foregroundColor: "#FFBE0B", backgroundColor: "#FB5607", highlightColor: "#8338EC", rating: 4.4, creator: "Bella" },
    { foregroundColor: "#2EC4B6", backgroundColor: "#011627", highlightColor: "#FF3366", rating: 4.5, creator: "Henry" },
    { foregroundColor: "#F25F5C", backgroundColor: "#247BA0", highlightColor: "#70C1B3", rating: 4.3, creator: "Isla" },
    { foregroundColor: "#EDE574", backgroundColor: "#4E342E", highlightColor: "#FF7676", rating: 4.8, creator: "Jack" },
    { foregroundColor: "#4A4E69", backgroundColor: "#9A8C98", highlightColor: "#C9ADA7", rating: 4.6, creator: "Kaitlyn" },
    { foregroundColor: "#3B3B98", backgroundColor: "#2C2C54", highlightColor: "#EAB543", rating: 4.7, creator: "Leo" },
    { foregroundColor: "#9C89B8", backgroundColor: "#F0A6CA", highlightColor: "#B8F2E6", rating: 4.5, creator: "Maya" },
    { foregroundColor: "#0B132B", backgroundColor: "#1C2541", highlightColor: "#5BC0BE", rating: 4.4, creator: "Noah" },
    { foregroundColor: "#5F0A87", backgroundColor: "#A4508B", highlightColor: "#F58F29", rating: 4.8, creator: "Olivia" },
    { foregroundColor: "#D7263D", backgroundColor: "#3D2645", highlightColor: "#1B998B", rating: 4.1, creator: "Parker" },
    { foregroundColor: "#6A0572", backgroundColor: "#A40E4C", highlightColor: "#F7B801", rating: 4.7, creator: "Quinn" },
    { foregroundColor: "#DA627D", backgroundColor: "#FF9B71", highlightColor: "#B2F7EF", rating: 4.6, creator: "Riley" },
    { foregroundColor: "#3D155F", backgroundColor: "#DF678C", highlightColor: "#FBF5F3", rating: 4.2, creator: "Sam" },
    { foregroundColor: "#40514E", backgroundColor: "#30E3CA", highlightColor: "#F5F5F5", rating: 4.5, creator: "Taylor" },
    { foregroundColor: "#624CAB", backgroundColor: "#F06543", highlightColor: "#F7B267", rating: 4.3, creator: "Uma" },
    { foregroundColor: "#00A896", backgroundColor: "#028090", highlightColor: "#05668D", rating: 4.6, creator: "Violet" },
    { foregroundColor: "#CB997E", backgroundColor: "#DDBEA9", highlightColor: "#6B705C", rating: 4.7, creator: "Wesley" },
    { foregroundColor: "#343A40", backgroundColor: "#495057", highlightColor: "#F8F9FA", rating: 4.4, creator: "Xander" },
    { foregroundColor: "#E63946", backgroundColor: "#457B9D", highlightColor: "#F1FAEE", rating: 4.9, creator: "Yara" },
    { foregroundColor: "#2B2D42", backgroundColor: "#EF233C", highlightColor: "#D90429", rating: 4.5, creator: "Zoe" },
    { foregroundColor: "#80ED99", backgroundColor: "#56C596", highlightColor: "#28DF99", rating: 4.7, creator: "Aria" },
    { foregroundColor: "#F76C6C", backgroundColor: "#D5B8FF", highlightColor: "#FF6F91", rating: 4.2, creator: "Blake" },
    { foregroundColor: "#FE4A49", backgroundColor: "#2AB7CA", highlightColor: "#FED766", rating: 4.6, creator: "Carter" },
    { foregroundColor: "#3A015C", backgroundColor: "#4F0147", highlightColor: "#601A4A", rating: 4.3, creator: "Daisy" },
    { foregroundColor: "#343A40", backgroundColor: "#212529", highlightColor: "#E9ECEF", rating: 4.5, creator: "Emery" },
    { foregroundColor: "#2D6A4F", backgroundColor: "#1B4332", highlightColor: "#95D5B2", rating: 4.8, creator: "Flynn" },
    { foregroundColor: "#FFB6B9", backgroundColor: "#FAE3D9", highlightColor: "#BBDED6", rating: 4.4, creator: "Gia" },
    { foregroundColor: "#FFDDC1", backgroundColor: "#F7E2E2", highlightColor: "#FCFFA6", rating: 4.7, creator: "Harper" },
    { foregroundColor: "#4A4E69", backgroundColor: "#9A8C98", highlightColor: "#F2E9E4", rating: 4.3, creator: "Ivy" },
    { foregroundColor: "#1D3557", backgroundColor: "#457B9D", highlightColor: "#A8DADC", rating: 4.5, creator: "Jaxon" },
    { foregroundColor: "#E63946", backgroundColor: "#F1FAEE", highlightColor: "#A8DADC", rating: 4.8, creator: "Kinsley" },
  ]
};