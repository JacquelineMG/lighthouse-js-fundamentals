const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
  ["Codeville Epic Academy", 15, "school"],
  ["Big Al Pizza", 50, "restaurant"]
]

function chooseStations(stations) {
  const goodStations = []
  for (let station of stations) {
    const capacity = station[1];
    const type = station[2];
    if (capacity >= 20 && (type === "community centre" || type === "school")) {
      goodStations.push(station[0])
    }
  }
  return goodStations;
}

  console.log(chooseStations(stations));
