import "./App.css";

function App() {
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400",
    },
    {
      name: "Regus",
      rent: 75000,
      address: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400",
    },
    {
      name: "WeWork",
      rent: 55000,
      address: "Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400",
    },
  ];

  return (
    <div style={{ margin: "20px" }}>
      <h1>Office Space, at Affordable Range</h1>

      {offices.map((office, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <img
            src={office.image}
            alt="Office Space"
            width="250"
            height="200"
          />

          <h2>Name: {office.name}</h2>

          <h3
            style={{
              color: office.rent < 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {office.rent}
          </h3>

          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
