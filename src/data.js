let aptitude = [
    {
      title: "Time and Work",
      questions: 10,
      duration: "30 mins",
    },
    {
        title: "Problems on Train",
        questions: 10,
        duration: "35 mins",
    },
    {
        title: "Profit and Loss",
        questions: 10,
        duration: "30 mins",
    },
    {
        title: "Area and Volume",
        questions: 10,
        duration: "25 mins",
    },
  ];
  
  export function getAptitude() {
    return aptitude;
  }
  export function getAptitud(questions) {
    return aptitude.find(
      (aptitud) => aptitud.questions === questions );
  }