const Universities = () => {
  const universities = [
    "University of Malaya",
    "Universiti Putra Malaysia",
    "University of Toronto",
    "McGill University",
    "Universiti Teknologi Malaysia",
    "University of British Columbia",
    "York University",
    "UCSI University",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Partner Universities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with top-ranked institutions in Malaysia and Canada to ensure you get quality education.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <p className="text-center font-medium text-sm text-foreground">
                {university}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">500+</span> successful admissions |{" "}
            <span className="font-semibold text-foreground">99%</span> visa success rate |{" "}
            <span className="font-semibold text-foreground">15+</span> partner universities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Universities;
